import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeAddStoreController, makeFindAllStoreController } from '../factories/store'

export const storeRoutes = (router: Router): void => {
  router.get('/store', adaptRoute(makeFindAllStoreController()))
  // router.get('/gpu/:id', adaptRoute(makeFindGpuByIdController()))
  router.post('/store', adaptRoute(makeAddStoreController()))
  // router.put('/gpu/:id', adaptRoute(makeEditGpuController()))
  // router.delete('/gpu/:id', adaptRoute(makeDeleteGpuByIdController()))
}
