import { AddGpuController } from "../controllers/add-gpu-controller";
import { Controller } from "../interfaces/controller";
import { makeValidator } from "./validator-factory";

export const makeAddGpuController = (): Controller => {
  return new AddGpuController(makeValidator());
}