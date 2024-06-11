import { z } from "zod";

export const formArticleSchema = z.object({
  nombre: z.string().min(3, {
    message: "Este campo es obligatorio",
  }),
  descripcion: z.string().min(0, {
    message: "Este campo es obligatorio",
  }),
  imagen: z.string().min(0, {
    message: "Este campo es obligatorio",
  }),
});
