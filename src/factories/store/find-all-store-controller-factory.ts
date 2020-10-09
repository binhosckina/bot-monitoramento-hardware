import { FindAllStoreController } from "../../controllers";
import { Controller } from "../../interfaces/controller";

export const makeFindAllStoreController = (): Controller => {
  return new FindAllStoreController();
}