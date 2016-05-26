'use strict';

exports.config = {

    params: {
        url: 'http://localhost:10005/',
        implicitlyWait: 500,
        scriptWait: 20000
    },

    allScriptsTimeout: 11000,

    specs: [
        'test/e2e/**/*.js'
    ],

    exclude: [
        'test/e2e/pageObjects/**/*.js'
    ],

    multiCapabilities: [
        {
            browserName: 'chrome',
            shardTestFiles: true,
            chromeOptions: {
                args: ['--test-type']
            },
            maxInstances: 5
        }
    ],

    directConnect: false,

    framework: 'jasmine',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true,
        includeStackTrace: true
    },

    plugins: [],

    onPrepare: function () {
        browser.driver.manage().window().maximize();
    }
};