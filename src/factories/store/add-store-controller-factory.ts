import { AddStoreController } from "../../controllers";
import { Controller } from "../../interfaces/controller";
import { makeValidator } from "../validator-factory";

export const makeAddStoreController = (): Controller => {
  return new AddStoreController(makeValidator());
}