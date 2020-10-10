import { badRequest, ok, serverError } from "../../interfaces/response-types";
import { GPU } from "../../entities";
import { Controller } from "../../interfaces/controller";
import { Request } from "../../interfaces/request"
import { Response } from "../../interfaces/response"

export class FindGpuByIdController implements Controller {
  constructor (
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      const { id } = request.params

      if (!id) return badRequest(new Error("Id not found"))

      let gpu = await GPU.findOne(id)

      return ok(gpu)
    } catch (error) {
      return serverError(error)
    }
  }
}
