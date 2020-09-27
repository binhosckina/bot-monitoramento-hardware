import { Request } from '../interfaces/request'
import { Request as Req, Response as Res, NextFunction } from 'express'
import { Middleware } from '../interfaces/middleware'

export const adaptMiddleware = (middleware: Middleware) => {
  return async (req: Req, res: Res, next: NextFunction) => {
    const httpRequest: Request = {
      headers: req.headers
    }
    const httpResponse = await middleware.handle(httpRequest)
    if (httpResponse.statusCode === 200) {
      Object.assign(req, httpResponse.body)
      next()
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}
