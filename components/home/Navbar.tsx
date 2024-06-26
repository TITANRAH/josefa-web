"use client";

import { AlignJustify, ChevronLeft, LogIn, LogOut, X } from "lucide-react";
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
  showSidebar?: boolean;
}
function Navbar(props: Props) {
  const { setShowSidebar, showSidebar } = props;
  const pathname = usePathname();
  const userData = useSession();

  // console.log(userData.data);

  return (
    <div className="flex items-center shadow-lg justify-between bg-green-400 dark:bg-slate-800 text-slate-50 h-[6rem]  py-8 fixed w-full top-0 md:px-8 z-50 md:pr-[20rem]">
     { pathname != '/dashboard' && pathname != '/crear-articulo' && <button
        className="block lg:hidden ml-10"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? (
          <X className="text-slate-600 fade-in" />
        ) : (
          <AlignJustify className="text-slate-600 fade-in" />
        )}
      </button>}

      <div className="flex space-x-3 mr-4 ml-3 md:ml-40 lg:ml-auto">
        {pathname !== "/login" && !userData.data && (
          <Link
            href="/login"
            className="flex flex-row p-2 gap-2 items-center text-sm text-slate-700 hover:text-slate-900 font-medium"
          >
            <LogIn />

            <h1 className="w-[100px]">INICIA SESIÓN</h1>
          </Link>
        )}

        {userData.data && (
          <button
            onClick={() => signOut()}
            className="flex md:p-3 gap-2 items-center text-sm text-slate-700 hover:text-slate-900 font-medium"
          >
            <LogOut />

            <h1 className="w-[70px] md:w-full">CIERRA SESIÓN</h1>
          </button>
        )}
        {pathname != "/" && (
          <Link
            href={"/"}
            className="relative inline-flex items-center text-slate-700 hover:text-slate-900 p-3 text-sm font-medium text-center rounded-lg"
          >
            <ChevronLeft />
            <h1 className="w-[75px]">IR A HOME</h1>
          </Link>
        )}

        {userData.data?.user.role == "ADMIN" && (
          <>
            <Link
              href={
                pathname === "/dashboard" ? "/crear-articulo" : "/dashboard"
              }
              className="relative inline-flex items-center text-slate-700 hover:text-slate-900 md:p-3 text-sm font-medium text-center rounded-lg"
            >
              <ChevronLeft />
              {pathname === "/dashboard" ? (
                <h1 className="w-[90px] md:w-full">SUBIR FOTO</h1>
              ) : (
                <h1 className=" w-[90px] md:w-full">DASHBOARD</h1>
              )}
            </Link>
          </>
        )}

        {/* <button className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg">
          <ThemSwitcherBtn />
        </button> */}

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
