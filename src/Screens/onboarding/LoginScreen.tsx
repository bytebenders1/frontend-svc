"use client";
import OnboardingLayout from "@/src/layout/OnboardingLayout";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { useState } from "react";

function LoginScreen() {
  return (
    <OnboardingLayout>
      <div className="h-[95%] md:h-[73%] w-11/12 md:w-8/12 flex flex-col items-center">
        <Image
          src="/images/Logomark.svg"
          width="48"
          height={48}
          alt="logo"
          className="md:h-12 md:w-12 q"
        />
        <h1 className="text-3xl mt-2 font-semibold">Create an account</h1>
        <div className="mt-8 z-10">
          {/* tabs */}
          <TabComp />
        </div>
      </div>
    </OnboardingLayout>
  );
}

export default LoginScreen;

function TabComp() {
  const [activeTab, setActiveTab] = useState("account");

  const onTrigger = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger onClick={() => onTrigger("account")} value="account">
          Account
        </TabsTrigger>
        <TabsTrigger onClick={() => onTrigger("account")} value="password">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div>Account</div>
      </TabsContent>
      <TabsContent value="password">
        <div>password</div>
      </TabsContent>
    </Tabs>
  );
}
