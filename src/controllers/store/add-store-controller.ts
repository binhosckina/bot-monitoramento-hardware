import { ok, serverError, validationError } from "../../interfaces/response-types";
import { Controller } from "../../interfaces/controller";
import { Request } from "../../interfaces/request"
import { Response } from "../../interfaces/response"
import { Validator } from "../validator";
import { Store } from "../../entities";
// import { Controller, HttpRequest, HttpResponse, Validation, AddSurvey } from './add-survey-controller-protocols'

export class AddStoreController implements Controller {
  constructor (
    private readonly validator: Validator,
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      const { name } = request.body
      let link = new Store(name)

      const errors = await this.validator.validate(link)

      if (errors.length > 0) return validationError(errors)

      await link.save()

      return ok(link)
    } catch (error) {
      return serverError(error)
    }
  }
}
