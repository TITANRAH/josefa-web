import { Article } from "@/interfaces/article.interface";
import { NextResponse } from "next/server";

export async function getArticlesByCategory(categoria: string) {
  console.log("entro aca al action createReport", categoria);

  try {
    const res = await fetch(
      `http://localhost:3000/api/getArticle?categoria=${categoria}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: 'no-store'
      }
    );

    const articles = await res.json();
    console.log(articles);

    return articles
  } catch (error) {
    console.log(error);

    return {
      error,
      message: "Fallo la obtencion de los articulos",
    };
  }
}
