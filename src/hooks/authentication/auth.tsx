import { TAuth } from "@/src/lib/types/auth.type";
import { STORAGE_KEY } from "@/src/lib/types/constant";
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
      toast.success(
        "User registered successfully, please login with your details"
      );
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

export const useSignInMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: TAuth) => {
      return Service.AuthService.signIn(data);
    },
    onSuccess: (data, variables, context) => {
      console.log("successful signup", data, variables, context);
      toast.success("Logged in successfully");
      localStorage.setItem(
        `${STORAGE_KEY}_details`,
        JSON.stringify(data.token)
      );
      router.push("/dashboard/data-management");
    },
    mutationKey: ["signin"],
  });
};
