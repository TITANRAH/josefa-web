
'use client'

import Navbar from "@/components/home/Navbar";
import { useState } from "react";
// import { auth } from "../utils/auth";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (

    <div className="w-full min-h-screen mt-5">
      <Navbar setShowSidebar={()=>(true)}/>
      {children}
    </div>
  );
}
