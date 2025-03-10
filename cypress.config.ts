import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) { },
    baseUrl: 'http://localhost:4173',
    supportFile: 'cypress/support/e2e.ts'
  },
})
