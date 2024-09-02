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
      <div className="relative flex items-center justify-center">
        <Image
          src="/images/logo2.png"
          className="absolute top-2 left:[10%] md:left-[3%] lg:left-[14%] xl:left-[23%]"
          alt="pattern"
          width={768}
          height={768}
        />
      </div>
      <Nav />
      <div className="px-8 md:px-28 flex items-center justify-center h-[91.5vh]">
        {children}
      </div>
    </div>
  );
}

export default OnboardingLayout;
