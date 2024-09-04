"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { Login } from "iconsax-react";
import DataVerification from "./components/DataVerificationRequest";

function DataVerificationScreen() {
  return (
    <div className="mt-4 flex items-center justify-center">
      {/* tabs */}
      <TabComp />
    </div>
  );
}

export default DataVerificationScreen;

function TabComp() {
  return (
    <Tabs defaultValue="request" className="w-[90vw] md:w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger className="text-xs md:text-sm" value="request">
          Request Verification
        </TabsTrigger>
        <TabsTrigger className="text-xs md:text-sm" value="verification">
          Verification Requests
        </TabsTrigger>
        <TabsTrigger className="text-xs md:text-sm" value="dataSharing">
          Data Sharing
        </TabsTrigger>
      </TabsList>
      <TabsContent value="request">
        <DataVerification />
      </TabsContent>
      <TabsContent value="verification">
        <Login />
      </TabsContent>
      <TabsContent value="dataSharing">
        <Login />
      </TabsContent>
    </Tabs>
  );
}
