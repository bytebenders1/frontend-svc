import { AxiosError } from "axios";

export function handleRequestError(error: any): never {
  if (error.response && error.response.data) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  } else {
    throw new Error("An error occurred.");
  }
}
