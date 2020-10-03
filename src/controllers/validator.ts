import { DefaultEntity } from "../entities/default-entity";
import { validate, ValidationError } from "class-validator";

export class Validator {
  async validate(entity: DefaultEntity): Promise<ValidationError[]> {
    return await validate(entity)
  }
}