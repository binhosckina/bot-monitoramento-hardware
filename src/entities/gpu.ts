import { Entity } from "typeorm";

import { GPUModel } from "./gpu-models";
import { Product } from "./product";

@Entity()
export class GPU extends Product {
  constructor(name: string, models?: GPUModel[]) {
    super();
    this.name = name
    this.models = models
  }
}