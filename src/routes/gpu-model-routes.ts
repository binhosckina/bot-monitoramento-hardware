// import { adaptRoute } from '@/main/adapters/express-route-adapter'
// import { makeAddSurveyController } from '@/main/factories/controllers/survey/add-survey/add-survey-controller-factory'
// import { makeLoadSurveysController } from '@/main/factories/controllers/survey/load-surveys/load-surveys-controller-factory'
// import { adminAuth } from '@/main/middlewares/admin-auth'
// import { auth } from '@/main/middlewares/auth'
import { makeAddGpuModelController } from '../factories/gpu-model'
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'

export const setupGpuModelRoutes = (router: Router): void => {
  // router.get('/gpu', adaptRoute(makeFindAllGpuController()))
  // router.get('/gpu/:id', adaptRoute(makeFindGpuByIdController()))
  router.post('/gpu-model', adaptRoute(makeAddGpuModelController()))
  // router.put('/gpu/:id', adaptRoute(makeEditGpuController()))
  // router.delete('/gpu/:id', adaptRoute(makeDeleteGpuByIdController()))
}
