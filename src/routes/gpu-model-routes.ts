import { makeAddGpuModelController, makeFindAllGpuModelController } from '../factories/gpu-model'
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'

export const setupGpuModelRoutes = (router: Router): void => {
  router.get('/gpu-model', adaptRoute(makeFindAllGpuModelController()))
  // router.get('/gpu/:id', adaptRoute(makeFindGpuByIdController()))
  router.post('/gpu-model', adaptRoute(makeAddGpuModelController()))
  // router.put('/gpu/:id', adaptRoute(makeEditGpuController()))
  // router.delete('/gpu/:id', adaptRoute(makeDeleteGpuByIdController()))
}
