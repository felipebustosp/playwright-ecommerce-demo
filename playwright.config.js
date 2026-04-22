const { defineConfig } = require ('@playwright/test')

module.exports = defineConfig({
  testDir: "./tests/e2e",
  timeout: 30 * 1000,
  retries: 1,
  reporter: [['html', {open: 'never'}]],
  use: {
    baseURL: "https://www.saucedemo.com",
    headless: true,
    viewport: {width: 1280, height: 720},
    actionTimeout: 10 * 1000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
});
