import { Entity } from "typeorm";

import { GpuRepository } from "../repositories/gpu-repository";
import { GPUModel } from "./gpu-models";
import { Product } from "./product";

@Entity()
export class GPU extends Product {
  repository: GpuRepository

  constructor(name: string, models?: GPUModel[]) {
    super();
    this.name = name
    this.models = models
  }

  
}