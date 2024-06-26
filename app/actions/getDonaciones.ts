import { DonacionInterface } from "@/interfaces/donacion.interface";
import prismadb from "@/lib/prismadb";

export async function getDonaciones(): Promise<DonacionInterface[] | []> {
  try {
    const donaciones = await prismadb.donacion.findMany();

    console.log(donaciones);

    return donaciones;
  } catch (error) {
    console.log(error);

    return [];
  }
}
