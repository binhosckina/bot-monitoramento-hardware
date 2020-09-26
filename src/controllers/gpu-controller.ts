import { GPU } from "@/entities/gpu";
import { HttpRequest } from "@/interfaces/http-request"
import { HttpResponse } from "@/interfaces/http-response"
import { GpuRepository } from "@/repositories/gpu-repository"
// import { Controller, HttpRequest, HttpResponse, Validation, AddSurvey } from './add-survey-controller-protocols'
// import { badRequest, serverError, noContent } from '@/presentation/helpers/http/http-helper'

export class AddGpuController {
  constructor (
    // private readonly validation: Validation,
    private readonly repository: GpuRepository
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      // const error = this.validation.validate(httpRequest.body)
      // if (error) {
      //   // return badRequest(error)
      //   return error
      // }
      // const { question, answers } = httpRequest.body
      let gpu = new GPU(httpRequest.body.question)

      await this.repository.add(gpu)
      // return noContent()
      return null
    } catch (error) {
      // return serverError(error)
      return error
    }
  }
}
