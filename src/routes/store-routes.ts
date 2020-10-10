import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeAddStoreController, makeDeleteStoreByIdController, makeEditStoreController, makeFindAllStoreController } from '../factories/store'

export const storeRoutes = (router: Router): void => {
  router.get('/store', adaptRoute(makeFindAllStoreController()))
  // router.get('/gpu/:id', adaptRoute(makeFindGpuByIdController()))
  router.post('/store', adaptRoute(makeAddStoreController()))
  router.put('/store/:id', adaptRoute(makeEditStoreController()))
  router.delete('/store/:id', adaptRoute(makeDeleteStoreByIdController()))
}
