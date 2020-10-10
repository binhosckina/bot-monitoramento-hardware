import { ok, serverError, validationError } from "../../interfaces/response-types";
import { Controller } from "../../interfaces/controller";
import { Request } from "../../interfaces/request"
import { Response } from "../../interfaces/response"
import { Validator } from "../validator";
import { Link, Store } from "../../entities";

export class AddLinkController implements Controller {
  constructor (
    private readonly validator: Validator,
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      const { model, store, uri, history } = request.body

      const s = await Store.findOne(store?.id)

      let link = new Link(model, s, uri, history)

      const errors = await this.validator.validate(link)

      if (errors.length > 0) return validationError(errors)

      await link.save()

      return ok(link)
    } catch (error) {
      return serverError(error)
    }
  }
}
