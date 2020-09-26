import { FindAllGpuController } from "../controllers/find-all-gpu-controller";
import { Controller } from "../interfaces/controller";

export const makeFindAllGpuController = (): Controller => {
  return new FindAllGpuController();
}