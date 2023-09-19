import { Elysia, t } from 'elysia'
import { healthService } from '../services/health.service'

export const base = new Elysia({ prefix: '/' }).get(
  '',
  () => healthService.getHealth(),
  {
    response: {
      200: t.Object({
        status: t.String(),
        uptime: t.Number(),
      }),
    },
    detail: {
      summary: 'Get health',
      description: 'Get health',
      tags: ['Health'],
    },
  }
)
