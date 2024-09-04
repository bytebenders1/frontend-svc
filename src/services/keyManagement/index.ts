import { TAuth } from "@/src/lib/types/auth.type";
import { CLIENT } from "../api";
import { handleRequestError } from "../helper";
import DataManagement from "@/app/dashboard/data-management/page";

class KeyManagementService {
  async grantAccess() {
    try {
      const response = await CLIENT.get("/generate-key");
      return response.data;
    } catch (error) {
      handleRequestError(error);
    }
  }
}

export default new KeyManagementService();
