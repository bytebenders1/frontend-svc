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
      <div className="px-8 lg:px-28 ">{children}</div>
    </>
  );
}

export default Layout;
