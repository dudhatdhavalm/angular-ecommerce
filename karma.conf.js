// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      // Updated: replaced karma-coverage-istanbul-reporter with karma-coverage for Angular 11
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    // Updated: replaced coverageIstanbulReporter with coverageReporter for Angular 11
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/angular-ecommerce'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // No change needed for browsers, but you could add ChromeHeadless for CI environments
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};