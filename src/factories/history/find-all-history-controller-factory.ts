import { FindAllHistoryController } from "../../controllers/history";
import { Controller } from "../../interfaces/controller";

export const makeFindAllHistoryController = (): Controller => {
  return new FindAllHistoryController();
}