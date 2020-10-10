import { FindStoreByIdController } from "../../controllers/";
import { Controller } from "../../interfaces/controller";

export const makeFindStoreByIdController = (): Controller => {
  return new FindStoreByIdController();
}