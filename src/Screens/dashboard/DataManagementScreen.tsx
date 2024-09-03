import { Message } from "iconsax-react";
import { UploadCloud } from "lucide-react";
import React from "react";

function DataManagementScreen() {
  return (
    <div className="mt-[109px] lg:mt-[159px] flex flex-col items-center justify-center">
      <div className="border rounded-lg px-6 py-4 w-8/12 relative">
        <input type="file" className="absolute opacity-0 h-full w-full" />
        <div className="flex items-center flex-col">
          <div className="border rounded-lg flex items-center justify-center p-3  shrink-0">
            <UploadCloud size={16.5} color="#475467" />
          </div>
          <div className="mt-3">
            <h2 className="text-primary font-semibold text-sm">
              Click to upload{" "}
              <span className="text-secondary font-normal ">
                or drag and drop
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataManagementScreen;
