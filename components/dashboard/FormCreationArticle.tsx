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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formArticleSchema } from "@/app/schemas/form.article.schema";
import { Textarea } from "../ui/textarea";
import { z } from "zod";
import { Button } from "../ui/button";
import { CheckCircle, CircleDollarSignIcon, Upload } from "lucide-react";
import ImageInput from "./ImageInput";
import { Input } from "../ui/input";

interface Props {
  fileLink: string;
}

function FormCreationArticle() {
  const [imageUrl, setImageUrl] = useState<string>("");

  const form = useForm<z.infer<typeof formArticleSchema>>({
    resolver: zodResolver(formArticleSchema),
    defaultValues: {
      nombre: "",
      descripcion: "",
      imagen: imageUrl,
    },
  });

  async function onSubmit(values: z.infer<typeof formArticleSchema>) {
      console.log(imageUrl);
      
      values.imagen = imageUrl;
      
      console.log("entro al on submit", values);

    
}
  return (

<div className="pt-28">
<h2 className="m-auto w-1/2 text-center mb-6 text-3xl text-blue-400 font-bold">Publica una foto y una descripción</h2>
    <Form {...form}>
      <form 
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col items-center w-full">

      <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem className="px-2 mb-3 w-full md:w-1/3">
                <FormLabel className="text-slate-500">
                  Nombre <span className="text-red-600 ">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Ejem: Tita"
                    type="text"
                    className="border rounded-md p-2 border-slate-300 text-slate-500 dark:text-slate-50 focus-within:border-yellow-600"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <FormField
          name="descripcion"
          render={({ field }) => (
            <FormItem className="px-2 w-full md:w-1/3">
              <FormLabel className="text-slate-600">Descripción</FormLabel>
              <FormControl>
                <Textarea
                  className=" min-h-20 border-slate-300  dark:text-slate-50 focus-within:border-pink-600"
                  placeholder="Descripción de la foto"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <ImageInput
          className="border-none text-2xl text-green-800"
          label=""
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="categoryImageUploader"
        />
{
    imageUrl != '' && (

        <div className="flex justify-center">
          <Button
            className=" bg-blue-400 hover:bg-blue-500 p-2 mt-4 text-white rounded"
            type="submit"
          >
            <Upload className="mr-2" size={20} />
            PUBLICAR
          </Button>
        </div>
    )
}
      </form>
    </Form>

</div>
  );
}

export default FormCreationArticle;
