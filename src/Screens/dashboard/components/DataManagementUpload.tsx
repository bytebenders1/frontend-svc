"use client";
import { Button } from "@/src/components/ui/button";
import { Progress } from "@/src/components/ui/progress";
import { file, getKB, getMB, uploadedFileObj } from "@/src/lib/types/constant";
import { uploadedFile } from "@/src/lib/types/dashboard.types";
import { Trash } from "iconsax-react";
import { UploadCloud } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { DataTableDemo } from "./dataManagementTable";

function DataManagementUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<uploadedFile[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: any) => {
      // @ts-ignore
      setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
    },
  });

  console.log(uploadedFiles);
  return (
    <>
      <div
        className="border-2 rounded-lg px-6 py-4 w-full border-primary relative mt-2.5"
        {...getRootProps()}
      >
        <input
          type="file"
          className="absolute opacity-0 h-full w-full"
          {...getInputProps()}
        />
        <div className="flex items-center flex-col">
          <div className="border rounded-lg flex items-center justify-center p-2.5 shadow-sm shrink-0">
            <UploadCloud size={16.5} color="#475467" />
          </div>
          <div className="mt-3">
            <h2 className="text-primary font-semibold text-sm text-center">
              Click to upload{" "}
              <span className="text-secondary font-normal ">
                or drag and drop
              </span>
            </h2>
            <p className="text-secondary text-xs font-normal mt-1 text-center">
              Supported files: Word, PDF, CSV or Excel
            </p>
          </div>
        </div>
      </div>
      {uploadedFiles.length > 0 && (
        <>
          <div className="mt-4 space-y-4 w-full md:w-8/12 md:mx-auto">
            {uploadedFiles.map((_file, _index) => (
              <div
                key={_index}
                className="border flex gap-x-4 rounded-lg px-6 py-4 border-neutral-300"
              >
                <Image
                  //   @ts-ignore
                  src={uploadedFileObj[_file.type] || file}
                  alt="file"
                  width={40}
                  height={40}
                />
                <div className="w-11/12">
                  <p className="text-sm text-secondary">{_file.name}</p>
                  <p className="text-xs text-secondary/90">
                    {_file.size > 200000
                      ? `${getMB(_file)} MB`
                      : `${getKB(_file)} KB`}
                  </p>
                  <Progress value={33} className="h-2 mt-1.5" />
                </div>
                <Button
                  variant={"ghost"}
                  className=""
                  onClick={() => {
                    setUploadedFiles(
                      uploadedFiles.filter(
                        (_file, _index2) => _index2 !== _index
                      )
                    );
                  }}
                >
                  <Trash size="24" color="#000" />
                </Button>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button className="h-12 w-full md:w-8/12 md:mx-auto mt-6">
              Submit
            </Button>
          </div>
        </>
      )}
      {uploadedFiles.length === 0 && (
        <>
          <div className="border border-neutral-300 rounded-lg w-full mt-8">
            <div className="px-6 py-5 border-b">
              <p>File Uploaded</p>
            </div>
            <DataTableDemo />
          </div>
        </>
      )}
    </>
  );
}

export default DataManagementUpload;
