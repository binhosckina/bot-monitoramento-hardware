import { badRequest, notFoundError, ok, serverError, validationError } from "../../interfaces/response-types";
import { Controller } from "../../interfaces/controller";
import { Request } from "../../interfaces/request"
import { Response } from "../../interfaces/response"
import { Validator } from "../validator";
import { Store } from "../../entities";
// import { Controller, HttpRequest, HttpResponse, Validation, AddSurvey } from './add-survey-controller-protocols'

export class EditStoreController implements Controller {
  constructor (
    private readonly validator: Validator,
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      const { id } = request.params
      const { name, links } = request.body

      if (!id) return badRequest(new Error("Id not found"))

      let store = await Store.findOne(id)

      if (!store) return notFoundError()

      store.name = name
      store.links = links ?? undefined

      const errors = await this.validator.validate(store)

      if (errors.length > 0) return validationError(errors)

      await store.save()

      return ok(store)
    } catch (error) {
      return serverError(error)
    }
  }
}
