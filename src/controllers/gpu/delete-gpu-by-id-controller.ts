import { badRequest, noContent, notFoundError, serverError } from "../../interfaces/response-types";
import { GPU } from "../../entities";
import { Controller } from "../../interfaces/controller";
import { Request } from "../../interfaces/request"
import { Response } from "../../interfaces/response"
// import { Controller, HttpRequest, HttpResponse, Validation, AddSurvey } from './add-survey-controller-protocols'

export class DeleteGpuByIdController implements Controller {
  constructor (
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      const { id } = request.params

      if (!id) return badRequest(new Error("Id not found"))

      let gpu = await GPU.findOne(id)

      if (!gpu) return notFoundError()

      await GPU.delete(gpu)

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
