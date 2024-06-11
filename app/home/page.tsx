"use client";
import FormPay from "@/components/home/FormPay";
import Image from "next/image";

export default function Home() {
  return (
    <div className="md:w-[1000px] m-auto grid grod-col-1 md:grid-cols-2 md:mt-16 gap-5" >
      <Image width={500} height={500} src="/josefa.jpeg" alt="jose" className="rounded-full border-2 border-green-400" />
      <div className="flex flex-col">
        <FormPay />
        <div className=" text-center text-1xl md:px-16 mt-20 md:mt-11 md:text-2xl font-bold text-slate-100 animate-bounce">
          <h2>
            HOLAA¡¡ SOY JOSEFA, AYÚDAME A LLEGAR A BRASIL PARA MI GIRA DE
            ESTUDIOS 2027
          </h2>
        </div>
      </div>
      <div className="text-center md:mt-6 text-slate-100">

      Josefa Camus Nuñez
      </div>
    </div>
  );
}
