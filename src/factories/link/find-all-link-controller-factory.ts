import { FindAllLinkController } from "../../controllers/link";
import { Controller } from "../../interfaces/controller";

export const makeFindAllLinkController = (): Controller => {
  return new FindAllLinkController();
}