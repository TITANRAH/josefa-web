import Image from "next/image";
import Articulo from "./Articulo";

interface Props {
  title: string;
}
export default function Articulos(props: Props) {
  const { title } = props;
  return (
    <section className="flex flex-col">
      <h1 className="text-3xl text-orange-400 underline font-bold">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-6 py-12 md:py-24">
        <Articulo />
        <Articulo />
        <Articulo />
        <Articulo />
        <Articulo />
        <Articulo />
      </div>
    </section>
  );
}
