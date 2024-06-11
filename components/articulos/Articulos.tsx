import React from "react";
import Articulo from "./Articulo";

interface Props {
  titulo: string;
}

function Ariculos(props: Props) {
  const { titulo } = props;
  return (
    <div className="">
      <h2 className="text-2xl pb-4 text-pink-500">{titulo}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 items-center gap-3">
        <Articulo />
        <Articulo />
        <Articulo />
        <Articulo />
        <Articulo />
        <Articulo />
      </div>
    </div>
  );
}

export default Ariculos;
