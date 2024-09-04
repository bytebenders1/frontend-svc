import Service from "@/src/services";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useStoreOnBlockchainMutation = () => {
  return useMutation({
    mutationFn: (data: { signedTx: string }) => {
      return Service.BlockchainService.storeData(data);
    },
    onSuccess: (data, variables, context) => {
      toast.success("Uploaded successfully");
    },
    mutationKey: ["useSignInMutation"],
  });
};
