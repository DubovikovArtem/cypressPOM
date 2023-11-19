const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: true,
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 20000,
  trashAssetsBeforeRuns: false,
  screenshotOnRunFailure: true,
  video: true,
  viewportHeight: 1200,
  viewportWidth: 1600,
  e2e: {
    baseUrl: "https://youtube.com/",
    retries: {
      openMode: 1,
      runMode: 0
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
