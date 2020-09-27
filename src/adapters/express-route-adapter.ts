import { Request as Req, Response as Res } from 'express'
import { Controller } from '../interfaces/controller'
import { Request } from '../interfaces/request'

export const adaptRoute = (controller: Controller) => {
  return async (req: Req, res: Res) => {
    const request: Request = {
      body: req.body,
      headers: req.headers,
      params: req.params
    }

    const response = await controller.handle(request)

    if (response.statusCode >= 200 && response.statusCode <= 299) {
      res.status(response.statusCode).json(response.body)
    } else {
      res.status(response.statusCode).json({
        error: response.body.message
      })
    }
  }
}
