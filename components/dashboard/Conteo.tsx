import { CircleDollarSignIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  moneyCount: string;
  restCount: string;
}
const Conteo = (props: Props) => {
  const { moneyCount, restCount } = props;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-[#FFB701]">
        <Image
          alt="brasil"
          width={900}
          height={900}
          className="h-full md:mr-auto"
          src="/brasil.gif"
        />
        <div className="flex md:mr-auto text-white mt-10">
          <div className="flex flex-col justify-center items-center">
            <CircleDollarSignIcon className="text-[#028C01] h-10 w-10 md:h-56 md:w-56 animate-bounce" />
            <div className="text-[#0037A4] text-3xl font-bold flex items-center justify-center m-auto">
              <h2>
                Llevo ${moneyCount} , faltan ${restCount}
              </h2>
            </div>

            <Link
              href="/crear-articulo"
              className="bg-blue-600 hover:bg-blue-500 py-3 px-2 rounded-xl mt-10"
            >
              SUBIR IMAGEN
            </Link>
            <Link
              href="/ver-mensajes"
              className="bg-blue-600 hover:bg-blue-500 py-3 px-2 rounded-xl mt-10"
            >
              VER MENSAJES
            </Link>

   

          </div>
        </div>
      </div>
    </div>
  );
};

export default Conteo;
