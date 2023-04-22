const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {},
    baseUrl: 'https://www.magazineluiza.com.br',
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000
  },
  component: {
    // setupNodeEvents(on, config) {},
    supportFile: 'cypress/support/component.ts',
    specPattern: 'cypress/**/*.cy.{js,jsx,ts,tsx}'
  }
});
