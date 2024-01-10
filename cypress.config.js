const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
      specPattern: 'cypress/integration/examples/*.js',
      // defaultCommandTimeout: 40000,
      // chromeWebSecurity: true,
      // downloadsFolder: 'cypress/downloads',
      screenshotOnRunFailure: true,
      screenshotsFolder: 'cypress/screenshots',
      // video: true,
      // videosFolder: 'cypress/videos',
  },
});
