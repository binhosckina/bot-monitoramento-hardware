import { Express, Router } from 'express'
var express = require('express')
import { setupGpuRoutes, setupLinkRoutes, setupStoreRoutes } from "../routes/";

export default (app: Express): void => {
  const router = Router()
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  
  setupGpuRoutes(router)
  setupStoreRoutes(router)
  setupLinkRoutes(router)

  app.use(router)
}
