"use client";

import { AlignJustify, ChevronLeft, LogIn, LogOut } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import { Avatar } from "../ui/avatar";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemSwitcherBtn from "../ThemSwitcherBtn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

interface Props {
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
  showSidebar: boolean;
}
function Navbar(props: Props) {
  const { setShowSidebar, showSidebar } = props;
  const pathname = usePathname();
  const userData = useSession();

  // console.log(userData.data);

  return (
    <div className="flex items-center shadow-lg justify-between bg-green-400 dark:bg-slate-800 text-slate-50 h-[6rem] py-8 fixed w-full top-0 px-8 z-50 pr-[20rem]">
      <button
        className="block lg:hidden"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <AlignJustify className="text-slate-600" />
      </button>

      <div className="flex space-x-3 ml-40 lg:ml-auto">
        {pathname !== "/home/login" && !userData.data && (
          <Link
            href="/home/login"
            className="flex p-3 gap-2 items-center text-sm text-blue-500 hover:text-blue-800 font-medium"
          >
            <LogIn />
            INICIA SESIÓN
          </Link>
        )}

        {
          userData.data && (
            <button
            onClick={()=> signOut()}
            className="flex p-3 gap-2 items-center text-sm text-blue-500 hover:text-blue-800 font-medium"
          >
            <LogOut />
            CIERRA SESIÓN
          </button>
          )
        }
        {pathname != "/home" && (
          <Link
            href={"/home"}
            className="relative inline-flex items-center text-blue-500 hover:text-blue-800 p-3 text-sm font-medium text-center rounded-lg"
          >
            <ChevronLeft />
            IR A HOME
          </Link>
        )}
        {userData.data?.user.role == "ADMIN" && (
          <>
            
            <Link
              href={
                pathname === "/dashboard"
                  ? "/dashboard/crear-articulo"
                  : "/dashboard"
              }
              className="relative inline-flex items-center text-blue-500 hover:text-blue-800 p-3 text-sm font-medium text-center rounded-lg"
            >
              <ChevronLeft />
              {pathname === "/dashboard" ? "IR A SUBIR FOTO" : "IR A DASHBOARD"}
            </Link>
          </>
        )}

        <button className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg">
          <ThemSwitcherBtn />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <Image
                src={"/jose.jpeg"}
                alt="foto"
                width={250}
                height={250}
              ></Image>
            </Avatar>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Navbar;
