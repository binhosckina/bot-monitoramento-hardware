import { Validator } from "../controllers/validator";

export const makeValidator = (): Validator => {
  return new Validator()
}