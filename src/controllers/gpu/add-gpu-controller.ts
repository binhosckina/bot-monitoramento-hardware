import { badRequest, ok, serverError, validationError } from "../../interfaces/response-types";
import { GPU } from "../../entities/gpu";
import { Controller } from "../../interfaces/controller";
import { Request } from "../../interfaces/request"
import { Response } from "../../interfaces/response"
import { Validator } from "../validator";
// import { Controller, HttpRequest, HttpResponse, Validation, AddSurvey } from './add-survey-controller-protocols'

export class AddGpuController implements Controller {
  constructor (
    private readonly validator: Validator,
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      const { name, models } = request.body
      let gpu = new GPU(name, models)

      const errors = await this.validator.validate(gpu)

      if (errors.length > 0) return validationError(errors)

      await gpu.save()

      return ok(gpu)
    } catch (error) {
      return serverError(error)
    }
  }
}
