"use client";

import React from "react";
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
import { CircleDollarSignIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formSchema } from "@/app/schemas/form.schema";

function FormPay() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      valor: "2000",
      mensaje: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log("entro al on submit", values);

    if (values.valor !== "") {
      const res = await fetch("/api/mercadopago/checkout", {
        method: "POST",
        // body: JSON.stringify(cart),
      });

      const data = await res.json();
      // console.log(res);
      window.location.href = data.init_point;
    }
  }
  return (
    <div className="m-auto grid gap-6 p-4 max-w-96 bg-yellow-50 border-2 border-green-200 shadow-2xl rounded-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="valor"
            render={({ field }) => (
              <FormItem className="px-2 mb-3 ">
                <FormLabel className="text-slate-500">
                  Monto <span className="text-red-600 ">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Monto a donar"
                    type="text"
                    className="border rounded-md p-2 border-slate-300 text-slate-500 dark:text-slate-50 focus-within:border-pink-600"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="mensaje"
            render={({ field }) => (
              <FormItem className="px-2">
                <FormLabel className="text-slate-600">Mensaje</FormLabel>
                <FormControl>
                  <Textarea
                    className=" min-h-24 border-slate-300  dark:text-slate-50 focus-within:border-pink-600"
                    placeholder="Deja tu mensaje"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-center">
            <Button
              className=" bg-blue-400 hover:bg-blue-500 p-2 mt-4 text-white rounded"
              type="submit"
            >
              <CircleDollarSignIcon className="mr-2" size={20} />
              REALIZAR DONACIÓN
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default FormPay;
