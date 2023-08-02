const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      support: 'e2e/support/e2e.js'// Update this with the support file path
    }
  },
});
