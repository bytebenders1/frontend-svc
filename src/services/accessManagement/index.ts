import { TAuth } from "@/src/lib/types/auth.type";
import { CLIENT } from "../api";
import { handleRequestError } from "../helper";
import DataManagement from "@/app/dashboard/data-management/page";

class AccessManagementService {
  async grantAccess(data: any) {
    try {
      const response = await CLIENT.post("/grant-access", data);
      return response.data;
    } catch (error) {
      handleRequestError(error);
    }
  }

  async revokeAccess(data: any) {
    try {
      const response = await CLIENT.post("/revoke-access", data);
      return response.data;
    } catch (error) {
      handleRequestError(error);
    }
  }
}

export default new AccessManagementService();
