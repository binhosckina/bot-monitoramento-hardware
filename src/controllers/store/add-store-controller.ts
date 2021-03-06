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
      let store = new Store(name)

      const errors = await this.validator.validate(store)

      if (errors.length > 0) return validationError(errors)

      await store.save()

      return ok(store)
    } catch (error) {
      return serverError(error)
    }
  }
}
