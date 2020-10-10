import { ok, serverError, validationError } from "../../interfaces/response-types";
import { Controller } from "../../interfaces/controller";
import { Request } from "../../interfaces/request"
import { Response } from "../../interfaces/response"
import { Validator } from "../validator";
import { Link, Model, Store } from "../../entities";

export class AddLinkController implements Controller {
  constructor (
    private readonly validator: Validator,
  ) {}

  async handle (request: Request): Promise<Response> {
    try {
      const { modelDto, storeDto, uri, history } = request.body

      const store = await Store.findOne(storeDto?.id)
      const model = await Model.findOne(modelDto?.id)

      let link = new Link(uri, model, store, history ?? undefined)

      const errors = await this.validator.validate(link)

      if (errors.length > 0) return validationError(errors)

      await link.save()

      return ok(link)
    } catch (error) {
      return serverError(error)
    }
  }
}
