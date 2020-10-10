import { FindAllGpuController } from "../../controllers/gpu";
import { Controller } from "../../interfaces/controller";

export const makeFindAllGpuController = (): Controller => {
  return new FindAllGpuController();
}