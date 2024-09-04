import React from "react";
import { DataTableDemo } from "./components/dataVerificationTable";

function  VerificationRequest() {
  return <div className="">
  <h1 className="py-2 text-lg font-semibold mb-2">Verification Request</h1>
  <div className="border border-neutral-300 rounded-lg w-full mt-4">
  {/* <h1 className="py-2  px-6 text-lg font-semibold mb-2 border border-b">Verification Request</h1> */}
  <DataTableDemo />
  </div>
</div>;
}

export default VerificationRequest;
