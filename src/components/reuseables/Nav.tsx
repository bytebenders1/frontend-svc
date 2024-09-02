import Image from "next/image";
import React from "react";

function Nav() {
  return (
    <nav className=" px-8 lg:px-28 h-[80px] flex items-center justify-between">
      <div className="relative h-12 w-[120px] md:w-[197px]">
        <Image src={"/images/logo.svg"} fill alt="logo" />
      </div>
      <div />
    </nav>
  );
}

export default Nav;
