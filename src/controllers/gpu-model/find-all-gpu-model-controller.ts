import { ok, serverError } from "../../interfaces/response-types";
import { GPUModel } from "../../entities";
import { Controller } from "../../interfaces/controller";
import { Request } from "../../interfaces/request"
import { Response } from "../../interfaces/response"
// import { Controller, HttpRequest, HttpResponse, Validation, AddSurvey } from './add-survey-controller-protocols'
// import { badRequest, serverError, noContent } from '@/presentation/helpers/http/http-helper'

export class FindAllGpuModelController implements Controller {
  constructor (
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      let data = await GPUModel.find()

      return ok(data)
    } catch (error) {
      return serverError(error)
    }
  }
}
