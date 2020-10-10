import { DeleteStoreByIdController } from "../../controllers/store";
import { Controller } from "../../interfaces/controller";

export const makeDeleteStoreByIdController = (): Controller => {
  return new DeleteStoreByIdController();
}