const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qwb1uy',
  allowCypressEnv: false,
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
    },
  },
});