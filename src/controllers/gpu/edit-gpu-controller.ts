import { badRequest, notFoundError, ok, serverError, validationError } from "../../interfaces/response-types";
import { GPU } from "../../entities";
import { Controller } from "../../interfaces/controller";
import { Request } from "../../interfaces/request"
import { Response } from "../../interfaces/response"
import { Validator } from "../validator";
// import { Controller, HttpRequest, HttpResponse, Validation, AddSurvey } from './add-survey-controller-protocols'

export class EditGpuController implements Controller {
  constructor (
    private readonly validator: Validator,
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      const { id } = request.params
      const { name, models } = request.body

      if (!id) return badRequest(new Error("Id not found"))

      let gpu = await GPU.findOne(id)

      if (!gpu) return notFoundError()

      gpu.name = name
      gpu.models = models ?? undefined

      const errors = await this.validator.validate(gpu)

      if (errors.length > 0) return validationError(errors)

      await gpu.save()

      return ok(gpu)
    } catch (error) {
      return serverError(error)
    }
  }
}
