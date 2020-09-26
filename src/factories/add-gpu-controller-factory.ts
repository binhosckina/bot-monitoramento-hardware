import { AddGpuController } from "../controllers/add-gpu-controller";
import { Controller } from "../interfaces/controller";

export const makeAddGpuController = (): Controller => {
  return new AddGpuController();
}