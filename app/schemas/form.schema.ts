import {  z } from "zod";

export const formSchema = z.object({
  valor: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: "Expected number, received a string"
  }),
  mensaje: z.string().nullable()

});
