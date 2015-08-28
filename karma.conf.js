// Karma configuration
// Generated on Wed Aug 26 2015 17:08:33 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      "public/bower_components/jquery/dist/jquery.js",

      //inject:bower
      "public/bower_components/angular/angular.js",
      "public/bower_components/angular-ui-router/release/angular-ui-router.js",
      "public/bower_components/angular-mocks/angular-mocks.js",
      "public/bower_components/bootstrap/dist/js/bootstrap.js",
      //inject:end

      'src/js/**/*.js',
      'src/gen/templates.js',

      'test/helpers/injectDependencies.js',
      'test/helpers/module.js',
      'test/helpers/scope.js',
      'test/helpers/renderTemplate.js',

      'test/**/*Test.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
};
