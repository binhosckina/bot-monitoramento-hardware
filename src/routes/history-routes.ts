import { makeFindAllHistoryController } from '../factories/history'
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'

export const setupHistoryRoutes = (router: Router): void => {
  router.get('/history', adaptRoute(makeFindAllHistoryController()))
  // router.get('/gpu/:id', adaptRoute(makeFindGpuByIdController()))
  // router.post('/gpu', adaptRoute(makeAddGpuController()))
  // router.put('/gpu/:id', adaptRoute(makeEditGpuController()))
  // router.delete('/gpu/:id', adaptRoute(makeDeleteGpuByIdController()))
}
