import { noContent } from "../interfaces/response-types";
import { GPU } from "../entities/gpu";
import { Controller } from "../interfaces/controller";
import { Request } from "../interfaces/request"
import { Response } from "../interfaces/response"
// import { Controller, HttpRequest, HttpResponse, Validation, AddSurvey } from './add-survey-controller-protocols'
// import { badRequest, serverError, noContent } from '@/presentation/helpers/http/http-helper'

export class AddGpuController implements Controller {
  constructor (
    // private readonly validation: Validation,
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      // const error = this.validation.validate(httpRequest.body)
      // if (error) {
      //   // return badRequest(error)
      //   return error
      // }
      // const { question, answers } = httpRequest.body
      const { name, models } = request.body
      let gpu = new GPU(name, models)

      // await this.repository.add(gpu)
      await GPU.save(gpu)

      return noContent()
    } catch (error) {
      // return serverError(error)
      return error
    }
  }
}
