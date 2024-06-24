"use client";
import FormPay from "@/components/home/FormPay";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    // <div className="md:w-[1000px] m-auto grid grod-col-1 md:grid-cols-2 md:mt-16 gap-5" >
    //   <Image width={500} height={500} src="/josefa.jpeg" alt="jose" className="rounded-full border-2 border-green-400" />
    //   <div className="flex flex-col">
    //     <FormPay />
    //     <div className=" text-center text-1xl md:px-16 mt-20 md:mt-11 md:text-2xl font-bold text-slate-100 animate-bounce">
    //       <h2>
    //         HOLAA¡¡ SOY JOSEFA, AYÚDAME A LLEGAR A BRASIL PARA MI GIRA DE
    //         ESTUDIOS 2027
    //       </h2>
    //     </div>
    //   </div>
    //   <div className="text-center md:mt-6 text-slate-100">

    //   Josefa Camus Nuñez
    //   </div>
    // </div>
<section className="relative w-full ">
      <div className="absolute  bg-black/50" />
      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto flex flex-col items-center justify-center max-w-xl space-y-6 text-center text-slate-700">

        <Image width={250} height={250} src="/josefa.jpeg" alt="jose" className="rounded-full border-2 border-green-400" />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Únete a la causa
          </h1>
          <p className="text-lg md:text-xl">Tu donación hará una diferencia significativa en mis esfuerzos.</p>
         <FormPay/>
        </div>
      </div>
    </section>
    
  );
}


