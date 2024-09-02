import React from "react";
import Nav from "../components/reuseables/Nav";

function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full bg-white w-full">
      <Nav />
      {children}
    </div>
  );
}

export default OnboardingLayout;
