"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

function Nav() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="px-4 lg:px-10 xl:px-28 h-[80px] flex items-center justify-between">
      <div className="relative h-12 w-[150px] md:w-[197px]">
        <Image src={"/images/logo.svg"} fill alt="logo" />
      </div>
      <div>
        {/* <h1>Home</h1>
        <h1>Dashboard</h1>
        <h1>Home</h1>
        <h1>Home</h1> */}
      </div>
    </nav>
  );
}

export default Nav;
