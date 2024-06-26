import Image from "next/image";
import Articulo from "./Articulo";
import { Article } from "@/interfaces/article.interface";
import { getArticlesByCategory } from "@/app/actions/GetArticlesByCategory";

interface Props {
  title: string;
  slug: string;
}

export default async function Articulos(props: Props) {
  const { title, slug } = props;

  console.log(title.toLowerCase());
  const articulos = await getArticlesByCategory(slug);

  console.log(articulos);

  return (
    <section className="flex flex-col">
      <h1 className="text-3xl text-orange-400 underline font-bold">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-6 py-12 md:py-24">
        {articulos.data.length > 0 ? (
          articulos.data.map((a: Article, index: any) => (
            <Articulo
              key={index}
              image={a.imagen!}
              description={a.descripcion!}
            />
          ))
        ) : (
          <div>Sin articulos aún en esta sección</div>
        )}
      </div>
    </section>
  );
}
