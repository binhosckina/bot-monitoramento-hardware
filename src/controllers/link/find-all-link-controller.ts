import { ok, serverError } from "../../interfaces/response-types"
import { Controller } from "../../interfaces/controller"
import { Request } from "../../interfaces/request"
import { Response } from "../../interfaces/response"
import { Link } from "../../entities"

export class FindAllLinkController implements Controller {
  async handle (request: Request): Promise<Response> {
    try {
      let data = await Link.find()

      return ok(data)
    } catch (error) {
      return serverError(error)
    }
  }
}
