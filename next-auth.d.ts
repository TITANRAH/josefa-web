import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  id: string;
  name: string;
  email: string;
  role: string;
  
};
// importantisimooooooo para el error que habia pas que el user de next auth es string 
declare module 'next-auth' {
  interface User {
    id: number; // <- here it is
  }
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: ExtendedUser;
  }

  //     /**
  //      * The shape of the user object returned in the OAuth providers' `profile` callback,
  //      * or the second parameter of the `session` callback, when using a database.
  //      */
  //     interface User {
  //         jwt: string;
  //         jwtTeledoc: string;
  //         userId: number;
  //         username: string;
  //         nombre: string;
  //         identificador: string;
  //         accessTokenExpiresIn: number;
  //         accessTokenTeledocExpiresIn: number;
  //     }
  // }

//   declare module "next-auth/jwt" {
//     /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
//     interface JWT {
//       role?: "ADMIN" | "USER";
//     }
//   }
}
