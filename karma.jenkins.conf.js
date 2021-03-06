// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-junit-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    files: [
      { pattern: './src/test.ts', watched: false }
    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true,
    concurrency: Infinity,
    reporters: ['progress', 'coverage', 'junit'],
    coverageReporters:{
      type: "cobertura",
      target:"/target/coverage-reports/"
    },
    junitReporter: {
          outputDir: '/target/surefire-reports/',
          outputFile: 'karma-results.xml'
    },
    browsers: ['PhantomJS']
  });
};
