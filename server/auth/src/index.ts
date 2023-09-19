import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'
import { jwt } from '@elysiajs/jwt'
import { base } from './routes/base.route'

const app = new Elysia()
  .onError(({ code, error, set }) => {
    console.log({ code, error, set })
    return {
      code,
      httpCode: set.status,
      message: error.message,
      error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
    }
  })
  .use(
    swagger({
      path: '/api-docs',
    })
  )
  .use(jwt({ name: 'jwt', secret: Bun.env.JWT_SECRET || 'secret' }))
  .use(base)
  .listen(Bun.env.PORT || 4000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)

export type App = typeof app
