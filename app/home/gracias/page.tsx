"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function GraciasPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 4000);
  }, []);
  return (
    <div className="flex justify-center items-center md:mt-72 ">
      <video
        autoPlay
        loop
        muted
        className="relative md:absolute md:ml-64 min-w-full min-h-full "
      >
        <source src="/gira.mp4" />
      </video>
    </div>
  );
}

export default GraciasPage;
