import React from "react";
import Nav from "../components/reuseables/Nav";
import Image from "next/image";

function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full bg-white w-full">
      <Nav />
      <div className="px-8 md:px-28 flex items-center justify-center h-[91.5vh]">
        {children}
      </div>
      <Image
        src="/images/backgroundpattern.png"
        className="absolute top-2 left:[10%] lg:left-[20%]"
        alt="pattern"
        width={768}
        height={768}
      />
    </div>
  );
}

export default OnboardingLayout;
