import { FindGpuModelByIdController } from "../../controllers/gpu-model";
import { Controller } from "../../interfaces/controller";

export const makeFindGpuModelByIdController = (): Controller => {
  return new FindGpuModelByIdController();
}