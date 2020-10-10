import { badRequest, ok, serverError } from "../../interfaces/response-types";
import { GPUModel } from "../../entities";
import { Controller } from "../../interfaces/controller";
import { Request } from "../../interfaces/request"
import { Response } from "../../interfaces/response"

export class FindGpuModelByIdController implements Controller {
  constructor (
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      const { id } = request.params

      if (!id) return badRequest(new Error("Id not found"))

      let model = await GPUModel.findOne(id)

      return ok(model)
    } catch (error) {
      return serverError(error)
    }
  }
}
