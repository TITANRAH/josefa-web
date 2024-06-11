import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().min(3, {
    message: "Este campo es obligatorio",
  }),
  password: z.string().min(3, {
    message: "Este campo es obligatorio",
  }),

});
