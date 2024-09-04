import { TAuth } from "@/src/lib/types/auth.type";
import { CLIENT } from "../api";
import { handleRequestError } from "../helper";

class AuthService {
  async signUp(data: TAuth) {
    try {
      const response = await CLIENT.post("/register", data);
      return response.data;
    } catch (error) {
      handleRequestError(error);
    }
  }

  async signIn(data: TAuth) {
    try {
      const response = await CLIENT.post("/login", data);
      return response.data;
    } catch (error) {
      handleRequestError(error);
    }
  }
}

export default new AuthService();
