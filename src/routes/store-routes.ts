import { makeAddStoreController } from '../factories/store/add-store-controller-factory'
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'

export const storeRoutes = (router: Router): void => {
  // router.get('/store', adaptRoute(makeFindAllGpuController()))
  // router.get('/gpu/:id', adaptRoute(makeFindGpuByIdController()))
  router.post('/store', adaptRoute(makeAddStoreController()))
  // router.put('/gpu/:id', adaptRoute(makeEditGpuController()))
  // router.delete('/gpu/:id', adaptRoute(makeDeleteGpuByIdController()))
}
