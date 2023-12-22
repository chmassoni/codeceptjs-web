const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */

const server = require('./server/server.js')

exports.config = {
  name: 'udemy-codeceptjs-web',
  tests: './steps/upload_test.js',
  output: './output',
  helpers: {
    //WebDriver: {
    Playwright: {
      url: 'http://automationpratice.com.br',
      browser: process.env.BROWSER || 'chromium',
      show: true,
      windowSize: "1920x1200",
      waitForTimeout: 5000,
      desiredCapabilities: {
        chromeOptions: {
          args: ["--window-size=1920,1200",
            "--headless"
          ]
        }
      }
    }
  },
  include: {
    I: './steps_file.js',
    home_page: "./pages/home_page.js",
    create_user_page: "./pages/create_user_page.js",
    my_account_page: "./pages/my_account_page.js",
  },
  bootstrap: async () => {
    await server.start();
  },
  teardown: async () => {
    await server.stop();
  },
  mocha: {},
  plugins: {
    allure: {
      enable: true,
      require: '@codeceptjs/allure-legacy',
    },
    mocha: {
      reporterOptions: {}
    },
    stepByStepReport: {
    enabled: true,
    deleteSuccessful: false,
    fullPageScreenshots: true,
    screenshotsForAllureReport: true
    },
    retryFailedSteps: {
      enable: true
    },
    screenshotOnFail: {
      enable: true
    },

    // wdio: {
    //   enabled: true,
    //   services: ['selenium-standalone']
    // }
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: 'login',
      users: {
        user: {
          // loginAdmin function is defined in `steps_file.js`
          login: (I) => {
            I.amOnPage('error');
            I.waitForElement('.fa-user')
            I.click('.fa-user')
            I.waitForElement('#user',10)
            console.log("preencheu email")
            I.fillField('#user','JoaoSilva@teste.com')
            console.log("preencheu senha")
            I.waitForElement('#password',10)
            I.fillField('#password',secret('123456'))
            I.click('#btnLogin')
            console.log("logou")
            
          },
          // if we see `Admin` on page, we assume we are logged in
          check: (I) => {
             I.amOnPage('error');
             I.see('JoaoSilva@teste.com');
          }
        }
      }
    }
  }
}