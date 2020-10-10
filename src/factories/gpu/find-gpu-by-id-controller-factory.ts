import { FindGpuByIdController } from "../../controllers/gpu";
import { Controller } from "../../interfaces/controller";

export const makeFindGpuByIdController = (): Controller => {
  return new FindGpuByIdController();
}