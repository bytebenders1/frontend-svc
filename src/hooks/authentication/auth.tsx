import { TAuth } from "@/src/lib/types/auth.type";
import Service from "@/src/services";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useSignUpMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: TAuth) => {
      return Service.AuthService.signUp(data);
    },
    onSuccess: (data, variables, context) => {
      // toast.success('Signed Up successfully')
      console.log("successful signup", data, variables, context);
      // localStorage.setItem(
      //   `${STORAGE_KEY}_userStore`,
      //   JSON.stringify(data.accessToken)
      // )
      // setToken({
      //   accessToken: data.accessToken,
      //   refreshToken: data.refreshToken,
      // })
      // setUserType(data.role)
      // router.push('/preferences/industry')
    },
  });
};

export const useSignInMutation = ({
  onSuccess,
}: {
  onSuccess?: (data: any) => void;
}) => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: TAuth) => {
      return Service.AuthService.signIn(data);
    },
    onSuccess: (data, variables, context) => {
      console.log("successful signup", data, variables, context);
    },
    mutationKey: ["signin"],
  });
};
