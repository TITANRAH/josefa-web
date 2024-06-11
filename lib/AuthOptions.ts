import { NextAuthOptions } from "next-auth";
import prismadb from "@/lib/prismadb";
import { getUserById } from "@/app/utils/getUser";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing Credentials");
        }

        const user = await prismadb.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (!user?.email) {
          throw new Error("Credenciales inválidas");
        }

        if (user.password !== credentials.password) {
          throw new Error("Credenciales inválidas");
        }

        return user;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV != "production",

  callbacks: {
    // esto es algo automatico, puedo llamar a la sesion y al token entre otros callback
    // me sirve para colocar ciertos campos dentro de la session , si yo le hago un console log a la session
    // despues de hacer login, veremos que trae campos por defecto
    // si quiero mas campos que los que trae por defecto extender la capacidad de recibir mas campos
    // eso lo hago en en archivo next-auth.d.ts donde declaro la extencion de las interfaces de
    // JWT y SESSION entjnces si quiero guardar ciertas cosas que no trae la sesion las quiero guardar en la session
    // debo recuperarlas desde el token

    // por eso en al fucion quiero integrar un role previamente declarado en los schemas de prisma
    // en el cual digo token.role (aunque no exista) es igual al role que encuentro en bd con la funcion
    // getuserbyid pasandole el token.sub que es el id que autogenera en mongo

    // entomnces al definirlo en la funcion  jtw , me voy a la funcion session donde digo que el role
    // (generado luego de extender los campos de la interface session en next auth d ts ) digo que ese campo
    // es igual al token.role previamente asignado en la funcion token

    // ver ejemplo abajo

    async session({ session, token }) {
      console.log("entro a la ses", token);

      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.name && session.user) {
        session.user.name = token.name;
      }
      if (token.email && session.user) {
        session.user.email = token.email;
      }

      if (token.role && session.user) {
        session.user.role = token.role as any;
      }

      console.log("desde session callback", {
        sessionToken: session.user,
      });
      return session;
    },

    async jwt({ token }) {
      if (!token.sub) return token;

      console.log("dsde jwt", token);
      console.log("sub", token.sub);
      const existingUser = await getUserById(token.sub!);

      if (!existingUser) return token;

      token.role = existingUser.role;
      console.log("entro aca", token);
      return token;
    },
  },
};
