"use client";

import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronRight,
  LayoutGrid,
  LogOut,
  PawPrint,
  ShoppingCart,
  Slack,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { petsLinks, sidebarLinks } from "@/data";
import { Avatar } from "../ui/avatar";
import { signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";

interface Props {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}
function Sidebar(props: Props) {
  const { showSidebar, setShowSidebar } = props;
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const userData = useSession();

  async function logout() {
    await signOut().then(() =>
      toast("Sesión finalizada", { position: "bottom-right" })
    );
  }

  return (
    <div
      className={cn(
        " bg-white fade-in lg:block xl:block dark:bg-slate-700 space-y-6 w-64 h-screen text-slate-800 dark:text-slate-50 p-3 fixed left-0 top-0 shadow-2xl overflow-y-scroll ",
        {
          hidden: !showSidebar,
        }
      )}
    >
      <Link href="/home">
        <Image alt="foto" width={250} height={250} src={"/MIS.gif"} />
      </Link>
      <div className="space-y-3 flex flex-col mt-14">
        <Collapsible className="pr-1 ">
          <CollapsibleTrigger
            onClick={() => setOpenMenu(!openMenu)}
            className="flex cursor-pointer items-center space-x-3 py-2 px-6 border-l-4 border-white dark:border-slate-700"
          >
            <PawPrint
              className={cn("", {
                " text-lime-700": openMenu,
              })}
            />
            <span
              className={cn("", {
                " text-lime-700": openMenu,
              })}
            >
              Mis mascotas
            </span>
            {openMenu ? (
              <ChevronDown
                className={cn("fade-in", {
                  " text-lime-700": openMenu,
                })}
              />
            ) : (
              <ChevronRight className="fade-in" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className=" flex fade-in flex-col items-start bg-blue-100 rounded-sm">
            {petsLinks.map((c, index) => (
              <Link
                href={c.href}
                onClick={() => setShowSidebar(false)}
                key={index}
                className={cn(
                  "flex items-center text-sm space-x-3 py-2 px-6 border-l-4 hover:bg-lime-200 w-full border-slate-700",
                  {
                    " bg-lime-600 ": c.href === pathname,
                  }
                )}
              >
                <c.icon />
                <span>{c.name}</span>
              </Link>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {sidebarLinks.map((s, index) => (
          <Link
            href={s.href}
            key={index}
            onClick={() => setShowSidebar(false)}
            className={cn(
              "flex items-center space-x-3 py-2 px-6 border-l-4 border-white dark:border-slate-700",
              {
                "border-slate-700 dark:border-lime-600": s.href === pathname,
              }
            )}
          >
            <s.icon
              className={cn("", {
                " text-lime-700": s.href === pathname,
              })}
            />
            <span
              className={cn("", {
                " text-lime-700": s.href === pathname,
              })}
            >
              {s.name}
            </span>
          </Link>
        ))}

        {userData.data && (
          <button
            onClick={() => logout()}
            className="bg-lime-600 rounded-xl flex items-center space-x-3 py-2 px-6 border-l-4 border-green-600"
          >
            <LogOut />
            <span>Logout</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
