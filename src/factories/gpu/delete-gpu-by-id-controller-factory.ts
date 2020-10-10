import { DeleteGpuByIdController } from "../../controllers/gpu";
import { Controller } from "../../interfaces/controller";

export const makeDeleteGpuByIdController = (): Controller => {
  return new DeleteGpuByIdController();
}