import { Express, Router } from 'express'
var express = require('express')
import { gpuRoutes, storeRoutes } from "../routes/";

export default (app: Express): void => {
  const router = Router()
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  
  // products(router)
  gpuRoutes(router)
  storeRoutes(router)

  app.use(router)
}
