class HealthService {
  getHealth() {
    return {
      status: 'ok',
      uptime: process.uptime(),
    }
  }
}

export const healthService = new HealthService()
