"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { CircleDollarSignIcon, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formSchema } from "@/app/schemas/form.schema";
import { Label } from "../ui/label";

function FormPay() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      valor: "2000",
      mensaje: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log("entro al on submit", values);
    setIsLoading(true);

    if (values.valor !== "") {
      const res = await fetch("/api/mercadopago/checkout", {
        method: "POST",
        body: JSON.stringify(values),
      });

      const data = await res.json();
      // console.log(res);
      window.location.href = data.init_point;
    }
  }
  return (
    <Form {...form}>
      <form className="w-full space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <FormField
            control={form.control}
            name="valor"
            render={({ field }) => (
              <FormItem>
                <div className="space-y-1.5">
                  <FormLabel>Monto</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Ingresa el monto mayor a 1"
                      className="bg-white/10 borde border-gray-600 text-slate-700 placeholder:text-slate-700/50 focus:bg-white/20"
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mensaje"
            render={({ field }) => (
              <FormItem>
                <div className="space-y-1.5">
                  <FormLabel>Mensaje</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Envíame un mensaje"
                      className="bg-white/10 border border-gray-600 text-slate-700 placeholder:text-slate-700/50 focus:bg-white/20"
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full">
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Donar
          ahora
        </Button>
      </form>
    </Form>
  );
}

export default FormPay;
