import { TAuth } from "@/src/lib/types/auth.type";
import { CLIENT } from "../api";
import { handleRequestError } from "../helper";
import DataManagement from "@/app/dashboard/data-management/page";

class UserServices {
  async getUserDetails() {
    try {
      const response = await CLIENT.get("/user-details");
      return response.data;
    } catch (error) {
      handleRequestError(error);
    }
  }

  async getUserDataHashes() {
    try {
      const response = await CLIENT.get("/user-data-hashes");
      return response.data;
    } catch (error) {
      handleRequestError(error);
    }
  }
}

export default new UserServices();
