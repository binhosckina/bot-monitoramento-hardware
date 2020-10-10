import { DeleteStoreByIdController } from "../../controllers";
import { Controller } from "../../interfaces/controller";

export const makeDeleteStoreByIdController = (): Controller => {
  return new DeleteStoreByIdController();
}