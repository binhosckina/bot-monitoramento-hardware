import { Entity } from "typeorm";

import { GPUMongoRepository } from "../db/mongodb/gpu-mongo-repository";
import { GetLinks } from "../interfaces/get-links";
import { GPUModel } from "./gpu-models";
import { Link } from "./link";
import { Product } from "./product";

@Entity()
export class GPU extends Product implements GetLinks {
  repository: GPUMongoRepository

  constructor(name: string, models: GPUModel[]) {
    super();
    this.name = name
    this.models = models
  }

  getLinks(): Link[] {
    // return this.models.map(model => model.links)
    return [];
  }
}