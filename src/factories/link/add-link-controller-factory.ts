import { AddLinkController } from "../../controllers";
import { Controller } from "../../interfaces/controller";
import { makeValidator } from "../validator-factory";

export const makeAddLinkController = (): Controller => {
  return new AddLinkController(makeValidator());
}