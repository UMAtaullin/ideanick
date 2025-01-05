import express from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import { trpcRouter } from './trpc'

const expressApp = express()
expressApp.get('/ping', (req, res) => {
  res.send('pong')
})
// use - это все типы запросов связанные с trpc передавать сюда
expressApp.use(
  '/trpc', 
  trpcExpress.createExpressMiddleware({
  router: trpcRouter,
}))
expressApp.listen(3000, () => {
  console.log('Server is running on port 3000')
})