const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://mostly.ai',
        setupNodeEvents: "plugins.js",
        fixturesFolder: "cypress/fixtures",
        viewportHeight: 1200,
        viewportWidth: 1600,
        projectId: "someId",
        video: false,
        fileServerFolder: './',
        customCommands: 'cypress/commands/index.ts',
        modifyObstructiveCode: false,
        setupNodeEvents: '../setupNodeEvents/index.ts',
        specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
        screenshotsFolder: '../screenshots',
        chromeWebSecurity: true,
        defaultCommandTimeout: 15000,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
