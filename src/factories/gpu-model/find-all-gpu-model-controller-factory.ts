import { FindAllGpuModelController } from "../../controllers/gpu-model";
import { Controller } from "../../interfaces/controller";

export const makeFindAllGpuModelController = (): Controller => {
  return new FindAllGpuModelController();
}