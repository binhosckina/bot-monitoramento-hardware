import { EditGpuModelController } from "../../controllers/gpu-model";
import { Controller } from "../../interfaces/controller";
import { makeValidator } from "../validator-factory";

export const makeEditGpuModelController = (): Controller => {
  return new EditGpuModelController(makeValidator());
}