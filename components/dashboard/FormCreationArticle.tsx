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
import { createArticle } from "@/app/actions/CreateArticle";
import toast from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Props {
  fileLink: string;
}

function FormCreationArticle() {
  const [imageUrl, setImageUrl] = useState<string>("");

  const categories = [
    {
      id: 1,
      category: "dibujos",
      nameCategory: "Dibujos",
    },
    {
      id: 2,
      category: "manualidades",
      nameCategory: "Manualidades",
    },
    {
      id: 3,
      category: "tita",
      nameCategory: "Tita",
    },
    {
      id: 4,
      category: "kawai",
      nameCategory: "Kawai",
    },
    {
      id: 5,
      category: "miscelaneos",
      nameCategory: "Miscelaneos",
    },
    {
      id: 6,
      category: "libros",
      nameCategory: "Libros",
    },
   
    {
      id: 7,
      category: "musica",
      nameCategory: "Música",
    },
  ];

  const form = useForm<z.infer<typeof formArticleSchema>>({
    resolver: zodResolver(formArticleSchema),
    defaultValues: {
      
      categoria: "",
      descripcion: "",
      imagen: imageUrl,
    },
  });

  async function onSubmit(values: z.infer<typeof formArticleSchema>) {
    //   console.log(imageUrl);

    console.log(values);

    values.imagen = imageUrl;

    const result = await createArticle(values);

    if (result.error) {
      toast.error(result.message);
      form.reset();
      values.imagen = "";
      setImageUrl("");
    } else {
      toast.success(result.message);
      form.reset();
      values.imagen = "";
      setImageUrl("");
    }

    // console.log("entro al on submit", result);
  }

  return (
    <div className="pt-28">
      <h2 className="m-auto w-1/2 text-center mb-6 text-3xl text-blue-400 font-bold">
        Publica una foto y una descripción
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center w-full"
        >
          <FormField
            control={form.control}
            name="categoria"
            render={({ field }) => (
              <FormItem className="px-2 mb-3 w-full md:w-1/3">
                <FormLabel className="text-slate-500">
                  Categoría <span className="text-red-600 ">*</span>
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange!}
                    defaultValue={field.value!}
                    value={field.value!}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Categorías</SelectLabel>
                        {categories.map((c) => (
                          <SelectItem value={c.category} className="cursor-pointer">
                            {c.nameCategory}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
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
          {imageUrl != "" && (
            <div className="flex justify-center">
              <Button
                className=" bg-blue-400 hover:bg-blue-500 p-2 mt-4 text-white rounded"
                type="submit"
              >
                <Upload className="mr-2" size={20} />
                PUBLICAR
              </Button>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}

export default FormCreationArticle;
