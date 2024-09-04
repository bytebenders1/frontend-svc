import { STORAGE_KEY } from "@/src/lib/types/constant";
import Service from "@/src/services";
import { useQuery } from "@tanstack/react-query";

export const useGetSecret = (enabled = false) => {
  return useQuery({
    enabled,
    queryKey: ["getSecret"],
    refetchOnMount: false,
    queryFn: async () => {
      const response = await Service.KeyManagementService.grantAccess();
      return response;
    },
  });
};
