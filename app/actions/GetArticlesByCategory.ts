'use server'

import { Article } from "@/interfaces/article.interface";

export async function getArticlesByCategory(categoria: string): Promise<Article[] | []>{
  console.log("entro aca al action createReport", categoria);

  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/getArticle?categoria=${categoria}`,
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

    return []
  }
}
