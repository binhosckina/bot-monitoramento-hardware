import { badRequest, noContent, notFoundError, serverError } from "../../interfaces/response-types";
import { Controller } from "../../interfaces/controller";
import { Request } from "../../interfaces/request"
import { Response } from "../../interfaces/response"
import { Store } from "../../entities";
// import { Controller, HttpRequest, HttpResponse, Validation, AddSurvey } from './add-survey-controller-protocols'

export class DeleteStoreByIdController implements Controller {
  constructor (
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      const { id } = request.params

      if (!id) return badRequest(new Error("Id not found"))

      let store = await Store.findOne(id)

      if (!store) return notFoundError()

      await Store.delete(store)

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
