'use server'

import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

// prismadb

console.log("entro");

export async function GET(request: NextRequest) {

  try {
    console.log("entro");
    const categoria = request.nextUrl.searchParams.get("categoria");
  
    console.log("entro", categoria);
    const articles = await prismadb.articulo.findMany({
      where: {
        categoria: categoria!,
      },
    });
  
    console.log(articles);
  
    return NextResponse.json({data:articles});
  } catch (error) {
    console.log(error)
    NextResponse.json(error)
  }
 
}
