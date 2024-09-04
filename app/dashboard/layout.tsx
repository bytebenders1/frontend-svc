import DashboardNav from "@/src/components/reuseables/DashboardNav";
import Nav from "@/src/components/reuseables/Nav";
import React from "react";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <DashboardNav />
      <div className="border-b h-px w-full border-neutral-300 lg:hidden" />
      <div className="px-2 md:px-8 lg:px-10 xl:px-28 ">{children}</div>
    </>
  );
}

export default Layout;
