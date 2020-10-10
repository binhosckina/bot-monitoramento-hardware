import { FindStoreByIdController } from "../../controllers/store";
import { Controller } from "../../interfaces/controller";

export const makeFindStoreByIdController = (): Controller => {
  return new FindStoreByIdController();
}