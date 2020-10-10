import { makeAddLinkController } from '../factories/link'
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'

export const setupLinkRoutes = (router: Router): void => {
  // router.get('/store', adaptRoute(makeFindAllStoreController()))
  // router.get('/store/:id', adaptRoute(makeFindStoreByIdController()))
  router.post('/link', adaptRoute(makeAddLinkController()))
  // router.put('/store/:id', adaptRoute(makeEditStoreController()))
  // router.delete('/store/:id', adaptRoute(makeDeleteStoreByIdController()))
}
