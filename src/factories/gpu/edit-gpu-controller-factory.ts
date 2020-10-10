import { EditGpuController } from "../../controllers/gpu";
import { Controller } from "../../interfaces/controller";
import { makeValidator } from "../validator-factory";

export const makeEditGpuController = (): Controller => {
  return new EditGpuController(makeValidator());
}