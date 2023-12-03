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
    retries: {
      openMode: 1,
      runMode: 0
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      // username1: process.env.USERNAME,
      // password1: process.env.PASSWORD,
      username: "xqweAS12123",
      password: "xqweAS12sadsd",
      baseUrl:{
        ui: 'https://bookcart.azurewebsites.net',
        apiRegistration: 'https://bookcart.azurewebsites.net/api/User',
        apiLogin: 'https://bookcart.azurewebsites.net/api/Login',
        apiCreateWishlist: '/api/Wishlist/ToggleWishlist/{userId}/{bookId}'
      }
    }
  },
});
