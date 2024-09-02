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
      {children}
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
