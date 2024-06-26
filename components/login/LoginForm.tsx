"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Eye, Loader2, LucideEyeOff } from "lucide-react";

import { useState } from "react";
import { signIn } from "next-auth/react";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoginSchema } from "@/app/schemas/login.schema";

interface ILoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: ILoginFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [stateInputPassword, setStateInputPassword] =
    useState<string>("password");

  // const callbackUrl = searchParams?.get("callbackUrl");
  //   const session = useSession();

  //   useEffect(() => {
  //     if (session.status === "authenticated") {
  //       router.push("/");
  //     }
  //   }, []);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {

    setIsLoading(true);

    const res = await signIn("credentials", { ...values, redirect: false });
    if (!res?.ok) {

      toast.error("Usuario o clave incorrecta. Por favor intente nuevamente.", {position: 'bottom-right'});

      form.reset();
    }
    if (res?.status === 200) {
      toast.success("Inicio de sesión exitoso", {position: 'bottom-right'});
      router.push("/dashboard");
    }
    // function seRepiteMasDeUnaVez(arr: Cliente[], correo: string): boolean {
    //   const clientesFiltrados = arr.filter(cliente => cliente.correo === correo);
    //   return clientesFiltrados.length > 1;
    // }
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("w-full", className)}
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="email@example.com"
                    type="text"
                    // onChange={(e) => {
                    //   let value = e.target.value;
                    //   //   REMOVI GUIONES EXISTENTES
                    //   value = value.replace(/-/g, "");
                    //   //   PASE A MINUSCULA POR SI VIENE UNA K MAYUSCULA
                    //   value = value.toLowerCase();
                    //   //   ENCUENTRO EL ULTIMO DISGITO
                    //   const lastDigitOrKIndex = value.search(/[0-9k]$/i);
                    //   //   SI EXISTE UN ULRTIMO DIGITO INSERTAR GUION MEDIO
                    //   if (lastDigitOrKIndex !== -1) {
                    //     value =
                    //       value.slice(0, lastDigitOrKIndex) +
                    //       "-" +
                    //       value.slice(lastDigitOrKIndex);
                    //   }
                    //   //   ACTUALUZAR EL CAMPO CON GUION MEDIO ANTES DEL ULTUIMO DIGITO SEA K O UN NUMERO
                    //   field.onChange(value);
                    // }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="******"
                    type={stateInputPassword}
                    className="pr-10"
                  />
                </FormControl>
                <span className="absolute top-1/2 right-0 flex items-center pr-3">
                  {stateInputPassword === "text" ? (
                    <Eye
                      onClick={() => setStateInputPassword("password")}
                    />
                  ) : (
                    <LucideEyeOff
                      onClick={() => setStateInputPassword("text")}
                    />
                  )}
                </span>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex mt-6 flex-col gap-4 sm:flex-row justify-between md:items-center ">
          <div className="w-full shrink-0">
           
            <Button type="submit" className="w-full">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Ingresar
        </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
