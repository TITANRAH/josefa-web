import { z } from "zod";

export const formSchema = z.object({
  valor: z.string().refine((val) => {
    const parsedValue = parseInt(val, 10);
    return !Number.isNaN(parsedValue) && parsedValue > 1;
  }, {
    message: "Número esperado mayor que 1, recibió un valor no válido"
  }),
  mensaje: z.string().optional()
});