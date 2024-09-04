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

  // async signIn2FA(data: { email: string; code: string; otpId: string }) {
  //   try {
  //     const response = await CLIENT.post('/auth/signin-2Fa', data)
  //     return response.data
  //   } catch (error) {
  //     handleRequestError(error)
  //   }
  // }

  // async logout() {
  //   try {
  //     const response = await CLIENT.get('/auth/logout')
  //     return response.data
  //   } catch (error) {
  //     handleRequestError(error)
  //   }
  // }

  // async forgotPassword(data: { email: string }) {
  //   try {
  //     const response = await CLIENT.post('/auth/forgot-password', data)
  //     return response.data
  //   } catch (error) {
  //     handleRequestError(error)
  //   }
  // }
  // async resetPassword(data: TResetPassword) {
  //   try {
  //     const response = await CLIENT.post('/auth/reset-password', data)
  //     return response.data
  //   } catch (error) {
  //     handleRequestError(error)
  //   }
  // }

  // async changePassword(data: { oldPassword: string; newPassword: string }) {
  //   try {
  //     const response = await CLIENT.post('/users/change-password', data)
  //     return response.data
  //   } catch (error) {
  //     handleRequestError(error)
  //   }
  // }
}

export default new AuthService();
