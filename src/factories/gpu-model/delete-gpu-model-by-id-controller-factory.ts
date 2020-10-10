import { DeleteGpuModelByIdController } from "../../controllers/gpu-model";
import { Controller } from "../../interfaces/controller";

export const makeDeleteGpuModelByIdController = (): Controller => {
  return new DeleteGpuModelByIdController();
}