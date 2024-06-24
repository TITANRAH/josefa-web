"use client";

import Navbar from "@/components/home/Navbar";
// import { auth } from "../utils/auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (

    <div className="w-full min-h-screen mt-5">
      <Navbar setShowSidebar={() => {}} showSidebar={true} key={1} />
      {children}
    </div>
  );
}
