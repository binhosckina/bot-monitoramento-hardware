import { ok, serverError } from "../../interfaces/response-types"
import { Controller } from "../../interfaces/controller"
import { Request } from "../../interfaces/request"
import { Response } from "../../interfaces/response"
import { History } from "../../entities"

export class FindAllHistoryController implements Controller {
  async handle (request: Request): Promise<Response> {
    try {
      let data = await History.find()

      return ok(data)
    } catch (error) {
      return serverError(error)
    }
  }
}
