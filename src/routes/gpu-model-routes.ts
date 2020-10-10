import { 
  makeAddGpuModelController, 
  makeDeleteGpuModelByIdController, 
  makeEditGpuModelController, 
  makeFindAllGpuModelController, 
  makeFindGpuModelByIdController 
} from '../factories/gpu-model'
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'

export const setupGpuModelRoutes = (router: Router): void => {
  router.get('/gpu-model', adaptRoute(makeFindAllGpuModelController()))
  router.get('/gpu-model/:id', adaptRoute(makeFindGpuModelByIdController()))
  router.post('/gpu-model', adaptRoute(makeAddGpuModelController()))
  router.put('/gpu-model/:id', adaptRoute(makeEditGpuModelController()))
  router.delete('/gpu-model/:id', adaptRoute(makeDeleteGpuModelByIdController()))
}
