import { Express, Router } from 'express'
var express = require('express')
import products from "../routes/products-route";
import gpus from "../routes/gpus-route";

export default (app: Express): void => {
  const router = Router()
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  
  // products(router)
  gpus(router)

  app.use(router)
}
