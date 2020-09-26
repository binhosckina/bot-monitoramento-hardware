import { Express, Router } from 'express'
import products from "../routes/products";

export default (app: Express): void => {
  const router = Router()
  app.use('/', router)

  products(router)

}
