import { Express, Router } from 'express'
import products from "../routes/products-route";
import gpus from "../routes/gpus-route";

export default (app: Express): void => {
  const router = Router()
  app.use('/', router)

  products(router)
  gpus(router)
}
