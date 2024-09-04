"use client";
import { Button } from "@/src/components/ui/button";
import { Progress } from "@/src/components/ui/progress";
import { file, getKB, getMB, uploadedFileObj } from "@/src/lib/types/constant";
import { uploadedFile } from "@/src/lib/types/dashboard.types";
import { Trash } from "iconsax-react";
import { UploadCloud } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { DataTableDemo } from "./dataManagementTable";
import { useGetSecret } from "@/src/hooks/generateSecret/generateSecret";
import { useStoreDataMutation } from "@/src/hooks/dataManagement/dataManagement";
import { useStoreOnBlockchainMutation } from "@/src/hooks/blockchain/useBlockchain";
import Spinner from "@/src/components/reuseables/Spinner";
import Web3 from "web3";
import DataStorage from "./DataStorage.json";

// Declare ethereum interface
declare global {
  interface Window {
    ethereum?: any;
  }
}

function DataManagementUpload() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [web3, setWeb3] = useState<Web3 | null>(null);

  // Initialize Web3 in useEffect to ensure it only runs on the client side
  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    } else {
      console.error("MetaMask is not installed.");
    }
  }, []);

  const connectWallet = async (): Promise<string> => {
    if (!web3) throw new Error("Web3 is not initialized");

    try {
      const accounts = await web3.eth.requestAccounts();
      return accounts[0];
    } catch (error) {
      throw new Error("Failed to connect wallet: " + error);
    }
  };

  const signAndSubmitTransaction = async (
    contractAddress: string,
    contractAbi: any,
    methodName: string,
    args: any[]
  ): Promise<any> => {
    if (!web3) throw new Error("Web3 is not initialized");

    try {
      const userAddress = await connectWallet();

      const contract = new web3.eth.Contract(contractAbi, contractAddress);

      const txData = contract.methods[methodName](...args).encodeABI();

      const gasLimit = await contract.methods[methodName](...args).estimateGas({
        from: userAddress,
      });

      const tx = {
        from: userAddress,
        to: contractAddress,
        data: txData,
        gas: gasLimit,
      };

      const signedTx = await web3.eth.personal.signTransaction(tx, userAddress);

      const response = await fetch("/api/submit-transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ signedTx }),
      });

      if (!response.ok) {
        throw new Error("Transaction submission failed");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error signing or submitting transaction:", error);
      throw error;
    }
  };

  const { refetch, data, isFetching, isError, error, isLoading } =
    useGetSecret(isEnabled);
  const {
    mutateAsync,
    isPending,
    isError: isStoreError,
    error: storeError,
  } = useStoreDataMutation();
  const {
    mutateAsync: storeOnBlockAsync,
    isPending: blocking,
    isError: isBlockError,
    error: blockError,
  } = useStoreOnBlockchainMutation();

  const [uploadedFiles, setUploadedFiles] = useState<uploadedFile[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles: any) => {
      setIsEnabled(true);
      try {
        refetch().then((res) => {
          console.log(res);
        });
        const secretRes = await refetch();
        setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
        console.log(acceptedFiles[0]);
        console.log(secretRes);
        if (secretRes?.data) {
          setIsEnabled(false);
          const fileData = await mutateAsync({
            file: acceptedFiles[0],
            secret: secretRes.data.secretKey,
          });

          if (fileData?.data && web3) {
            const contractAddress =
              "0xbE1bC8C4e157EEAA5f41A6891E05A83a023c9Db1";
            const contractAbi = DataStorage.abi; // Your contract ABI
            const methodName = "storeData"; // Replace with the actual method name
            const args = [fileData.data.txHash]; // Arguments for contract method

            // User signs and submits the transaction
            await signAndSubmitTransaction(
              contractAddress,
              contractAbi,
              methodName,
              args
            );
          }
        }
      } catch (error) {
        console.error("Error uploading file or signing transaction:", error);
      }
    },
  });

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
                </div>
                {isFetching || isLoading || isPending || blocking ? (
                  <Spinner className="w-4 h-4" />
                ) : (
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
                )}
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
