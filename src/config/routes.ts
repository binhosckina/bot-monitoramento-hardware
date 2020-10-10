import { Express, Router } from 'express'
var express = require('express')
import { setupGpuModelRoutes, setupGpuRoutes, setupHistoryRoutes, setupLinkRoutes, setupStoreRoutes } from "../routes/";

export default (app: Express): void => {
  const router = Router()
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  
  setupGpuRoutes(router)
  setupStoreRoutes(router)
  setupLinkRoutes(router)
  setupGpuModelRoutes(router)
  setupHistoryRoutes(router)

  app.use(router)
}
