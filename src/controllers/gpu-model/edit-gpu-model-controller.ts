import { badRequest, notFoundError, ok, serverError, validationError } from "../../interfaces/response-types";
import { GPU, GPUModel } from "../../entities";
import { Controller } from "../../interfaces/controller";
import { Request } from "../../interfaces/request"
import { Response } from "../../interfaces/response"
import { Validator } from "../validator";

export class EditGpuModelController implements Controller {
  constructor (
    private readonly validator: Validator,
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      const { id } = request.params
      const { name, manufacturer, productDto } = request.body

      if (!id) return badRequest(new Error("Id not found"))

      let model = await GPUModel.findOne(id)

      if (!model) return notFoundError()

      const product = await GPU.findOne(productDto?.id)

      model.name = name
      model.manufacturer = manufacturer
      model.product = product ?? undefined

      const errors = await this.validator.validate(model)

      if (errors.length > 0) return validationError(errors)

      await model.save()

      return ok(model)
    } catch (error) {
      return serverError(error)
    }
  }
}
