import { EditStoreController } from "../../controllers/store";
import { Controller } from "../../interfaces/controller";
import { makeValidator } from "../validator-factory";

export const makeEditStoreController = (): Controller => {
  return new EditStoreController(makeValidator());
}