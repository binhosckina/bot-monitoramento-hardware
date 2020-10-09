import { ok, serverError } from "../../interfaces/response-types"
import { Controller } from "../../interfaces/controller"
import { Request } from "../../interfaces/request"
import { Response } from "../../interfaces/response"
import { Store } from "../../entities"

export class FindAllStoreController implements Controller {
  async handle (request: Request): Promise<Response> {
    try {
      let data = await Store.find()

      return ok(data)
    } catch (error) {
      return serverError(error)
    }
  }
}
