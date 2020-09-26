// import { adaptRoute } from '@/main/adapters/express-route-adapter'
// import { makeAddSurveyController } from '@/main/factories/controllers/survey/add-survey/add-survey-controller-factory'
// import { makeLoadSurveysController } from '@/main/factories/controllers/survey/load-surveys/load-surveys-controller-factory'
// import { adminAuth } from '@/main/middlewares/admin-auth'
// import { auth } from '@/main/middlewares/auth'
import { Router } from 'express'
import { nextTick } from 'process'

export default (router: Router): void => {
  // router.post('/surveys', adminAuth, adaptRoute(makeAddSurveyController()))
  // router.get('/surveys', auth, adaptRoute(makeLoadSurveysController()))
  console.log("products up")
  // router.post('/products')
  router.get('/products', middleware, controller)
}

function middleware(req, res, next) {
  console.log("middleware products")
  next()
}

function controller(req, res) {
  console.log("controller products")
  res.send("controller products")
}