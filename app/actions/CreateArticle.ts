// import connectionToDatabase from "@/utils/connectToDatabase";

import { Article } from "@/interfaces/article.interface";



export async function createArticle(article: Article) {
    console.log("entro aca al action createReport", article);
  
    try {
      const res = await fetch("/api/createArticle", {
        method: "POST",
        body: JSON.stringify(article),
      });

      console.log(res)
  
      const articleRes = await res.json();
      console.log("article desde action", articleRes);
  
      return {
        article,
        message: "Articulo creado con éxito",
      };
    } catch (error) {
      return {
        error,
        message: "Fallo la creación de articulo, probablemente esa repetido",
      };
    }
  }
  