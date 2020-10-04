import { makeAddGpuController } from '../factories/gpu/add-gpu-controller-factory'
import { makeFindAllGpuController } from '../factories/gpu/find-all-gpu-controller-factory'
// import { adaptRoute } from '@/main/adapters/express-route-adapter'
// import { makeAddSurveyController } from '@/main/factories/controllers/survey/add-survey/add-survey-controller-factory'
// import { makeLoadSurveysController } from '@/main/factories/controllers/survey/load-surveys/load-surveys-controller-factory'
// import { adminAuth } from '@/main/middlewares/admin-auth'
// import { auth } from '@/main/middlewares/auth'
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeDeleteGpuByIdController } from '../factories/gpu/delete-gpu-by-id-controller-factory'

export default (router: Router): void => {
  router.get('/gpu', adaptRoute(makeFindAllGpuController()))
  router.post('/gpu', adaptRoute(makeAddGpuController()))
  router.delete('/gpu/:id', adaptRoute(makeDeleteGpuByIdController()))
}
