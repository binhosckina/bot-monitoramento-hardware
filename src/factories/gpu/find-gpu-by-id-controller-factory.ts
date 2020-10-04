import { FindGpuByIdController } from "../../controllers/gpu/find-gpu-by-id-controller";
import { Controller } from "../../interfaces/controller";

export const makeFindGpuByIdController = (): Controller => {
  return new FindGpuByIdController();
}