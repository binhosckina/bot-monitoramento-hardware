import { AddGpuModelController } from "../../controllers/gpu-model";
import { Controller } from "../../interfaces/controller";
import { makeValidator } from "../validator-factory";

export const makeAddGpuModelController = (): Controller => {
  return new AddGpuModelController(makeValidator());
}