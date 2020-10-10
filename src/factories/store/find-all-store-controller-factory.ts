import { FindAllStoreController } from "../../controllers/store";
import { Controller } from "../../interfaces/controller";

export const makeFindAllStoreController = (): Controller => {
  return new FindAllStoreController();
}