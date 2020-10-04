import { ok, serverError, validationError } from "../../interfaces/response-types";
import { Controller } from "../../interfaces/controller";
import { Request } from "../../interfaces/request"
import { Response } from "../../interfaces/response"
import { Validator } from "../validator";
import { Link } from "../../entities";
// import { Controller, HttpRequest, HttpResponse, Validation, AddSurvey } from './add-survey-controller-protocols'

export class AddLinkController implements Controller {
  constructor (
    private readonly validator: Validator,
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      const { model, store, uri, history } = request.body
      let link = new Link(model, store, uri, history)

      const errors = await this.validator.validate(link)

      if (errors.length > 0) return validationError(errors)

      await link.save()

      return ok(link)
    } catch (error) {
      return serverError(error)
    }
  }
}
