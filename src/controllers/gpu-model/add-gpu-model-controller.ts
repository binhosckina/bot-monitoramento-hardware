import { ok, serverError, validationError } from "../../interfaces/response-types";
import { Controller } from "../../interfaces/controller";
import { Request } from "../../interfaces/request"
import { Response } from "../../interfaces/response"
import { Validator } from "../validator";
import { GPUModel, Product, Store } from "../../entities";

export class AddGpuModelController implements Controller {
  constructor (
    private readonly validator: Validator,
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      const { name, manufacturer, productDto } = request.body

      const product = await Product.findOne(productDto?.id)

      let model = new GPUModel(name, manufacturer, product, undefined)

      const errors = await this.validator.validate(model)

      if (errors.length > 0) return validationError(errors)

      await model.save()

      return ok(model)
    } catch (error) {
      return serverError(error)
    }
  }
}
