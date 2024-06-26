

import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {

  console.log('entro')
  try {
    const body = await req.json();
    const { categoria, imagen, descripcion, } = body;


    if (!descripcion || !imagen) {
      return new NextResponse("imagen y descripcion faltan", {
        status: 500,
      });
    }

    const articletAlReadyExist = await prismadb.articulo.findFirst({
      where: { descripcion: descripcion },
    });

    if (articletAlReadyExist?.id) {
      return new NextResponse("Reporte ya existe", { status: 500 });
    }

    const newArticle = await prismadb.articulo.create({
      data: {
        categoria: categoria,
        descripcion: descripcion,
        imagen: imagen,
      },
    });

    return NextResponse.json(newArticle);
  } catch (err: any) {
    console.log("ERR REGISTER ARTICLE ->", err);

    return new NextResponse(err, { status: 500 });
  }
}
