import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { 
  makeAddStoreController, 
  makeDeleteStoreByIdController, 
  makeEditStoreController, 
  makeFindAllStoreController, 
  makeFindStoreByIdController 
} from '../factories/store'

export const storeRoutes = (router: Router): void => {
  router.get('/store', adaptRoute(makeFindAllStoreController()))
  router.get('/store/:id', adaptRoute(makeFindStoreByIdController()))
  router.post('/store', adaptRoute(makeAddStoreController()))
  router.put('/store/:id', adaptRoute(makeEditStoreController()))
  router.delete('/store/:id', adaptRoute(makeDeleteStoreByIdController()))
}
