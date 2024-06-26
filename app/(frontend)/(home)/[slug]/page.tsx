import { getArticlesByCategory } from "@/app/actions/GetArticlesByCategory";
import Articulo from "@/components/articulos/Articulo";
import { Article } from "@/interfaces/article.interface";

async function OptionPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  console.log(slug);

  const articulos = await getArticlesByCategory(slug);

  console.log(articulos);

  return (
    <section className="flex flex-col">
      <h1 className="text-3xl text-orange-400 underline font-bold">
        {slug.toUpperCase()}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-6 py-12 md:py-24">
        {articulos.length > 0 ? (
          articulos.map((a) => (
            <Articulo
              key={a.id}
              image={a.imagen!}
              description={a.descripcion!}
            />
          ))
        ) : (
          <div>Sin articulos</div>
        )}
      </div>
    </section>
  );
}

export default OptionPage;
