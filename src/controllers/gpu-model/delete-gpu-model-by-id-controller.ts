import { badRequest, noContent, notFoundError, serverError } from "../../interfaces/response-types";
import { GPUModel } from "../../entities";
import { Controller } from "../../interfaces/controller";
import { Request } from "../../interfaces/request"
import { Response } from "../../interfaces/response"

export class DeleteGpuModelByIdController implements Controller {
  constructor (
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      const { id } = request.params

      if (!id) return badRequest(new Error("Id not found"))

      let model = await GPUModel.findOne(id)

      if (!model) return notFoundError()

      await GPUModel.delete(model)

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
