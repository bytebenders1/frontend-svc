import { TAuth } from "@/src/lib/types/auth.type";
import { CLIENT } from "../api";
import { handleRequestError } from "../helper";
import DataManagement from "@/app/dashboard/data-management/page";

class BlockchainService {
  async storeData(data: any) {
    try {
      const response = await CLIENT.post("/submit-transaction", data);
      return response.data;
    } catch (error) {
      handleRequestError(error);
    }
  }
}

export default new BlockchainService();
