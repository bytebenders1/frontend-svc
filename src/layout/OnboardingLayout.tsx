import Nav from "../components/reuseables/Nav";
import Image from "next/image";
import { logo2 } from "../lib/types/constant";

function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full bg-white w-full">
      <div className="relative flex items-center justify-center">
        <Image
          src={logo2}
          className="absolute -top-8 md:-top-5 xl:-top-20 left-[0%] md:left-[3%] lg:left-[14%] xl:left-[23%]"
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
