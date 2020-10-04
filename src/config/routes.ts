import { Express, Router } from 'express'
var express = require('express')
import products from "../routes/products-route";
import gpuRoutes from "../routes/gpu-routes";

export default (app: Express): void => {
  const router = Router()
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  
  // products(router)
  gpuRoutes(router)

  app.use(router)
}
