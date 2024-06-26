
'use server'
import { Article } from "@/interfaces/article.interface";
import prismadb from "@/lib/prismadb";

export async function getArticlesByCategory(categoria: string): Promise<Article[] | []>{
  console.log("entro aca al action createReport", categoria);

  try {
    console.log("entro", categoria);
    const articles = await prismadb.articulo.findMany({
      where: {
        categoria: categoria,
      },
    });
    
    console.log(articles);
  
    return articles

  } catch (error) {
    console.log(error);

    return []
  }
}
