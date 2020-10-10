import { AddLinkController } from "../../controllers/link";
import { Controller } from "../../interfaces/controller";
import { makeValidator } from "../validator-factory";

export const makeAddLinkController = (): Controller => {
  return new AddLinkController(makeValidator());
}