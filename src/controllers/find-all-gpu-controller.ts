import { ok } from "../interfaces/response-types";
import { GPU } from "../entities/gpu";
import { Controller } from "../interfaces/controller";
import { Request } from "../interfaces/request"
import { Response } from "../interfaces/response"
// import { Controller, HttpRequest, HttpResponse, Validation, AddSurvey } from './add-survey-controller-protocols'
// import { badRequest, serverError, noContent } from '@/presentation/helpers/http/http-helper'

export class FindAllGpuController implements Controller {
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

      // await this.repository.add(gpu)
      let data = await GPU.find()

      return ok(data)
    } catch (error) {
      // return serverError(error)
      return error
    }
  }
}
