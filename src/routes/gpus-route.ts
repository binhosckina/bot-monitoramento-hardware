import { makeAddGpuController } from '../factories/add-gpu-controller-factory'
import { makeFindAllGpuController } from '../factories/find-all-gpu-controller-factory'
// import { adaptRoute } from '@/main/adapters/express-route-adapter'
// import { makeAddSurveyController } from '@/main/factories/controllers/survey/add-survey/add-survey-controller-factory'
// import { makeLoadSurveysController } from '@/main/factories/controllers/survey/load-surveys/load-surveys-controller-factory'
// import { adminAuth } from '@/main/middlewares/admin-auth'
// import { auth } from '@/main/middlewares/auth'
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/gpu', adaptRoute(makeFindAllGpuController()))
  router.post('/gpu', adaptRoute(makeAddGpuController()))
}
