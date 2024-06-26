import React from "react";
import Image from "next/image";
import jose from "../../public/jose.jpeg";

interface Props {
  image: string;
  description: string;
}
function Articulo(props: Props) {
  const { image, description } = props;
  return (
    <div className="flex items-start gap-6">
      <Image
        src={image}
        alt="Image"
        width={200}
        height={200}
        className="rounded-lg w-52 h-52 overflow-hidden aspect-square object-cover"
      />
      <div className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default Articulo;
