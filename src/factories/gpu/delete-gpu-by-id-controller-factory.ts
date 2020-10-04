import { DeleteGpuByIdController } from "../../controllers/gpu/delete-gpu-by-id-controller";
import { Controller } from "../../interfaces/controller";

export const makeDeleteGpuByIdController = (): Controller => {
  return new DeleteGpuByIdController();
}