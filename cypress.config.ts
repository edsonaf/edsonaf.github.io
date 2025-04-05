import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) { },
    baseUrl: 'http://localhost:4173',
    specPattern: 'test/cypress/e2e/**/*.cy.js',
    supportFile: 'test/cypress/support/e2e.ts'
  },
})
