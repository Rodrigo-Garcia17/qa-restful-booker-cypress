const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://restful-booker.herokuapp.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    video: false
  }
});
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    baseUrl: 'https://restful-booker.herokuapp.com',
    env: {
      allure: true
    }
  }
};


