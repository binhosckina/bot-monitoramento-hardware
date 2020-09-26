import { Response as Res } from 'express'
import { Controller } from '../interfaces/controller'
import { Request } from '../interfaces/request'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Res) => {

    const response = await controller.handle(req)

    if (response.statusCode >= 200 && response.statusCode <= 299) {
      res.status(response.statusCode).json(response.body)
    } else {
      res.status(response.statusCode).json({
        error: response.body.message
      })
    }
  }
}
