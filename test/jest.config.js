module.exports = {
  preset: 'ts-jest',
  roots: ['src'],
  testRunner: 'jest-jasmine2',
  coverageDirectory: '<rootDir>/dist/test-results/',
  collectCoverageFrom: [
    'src/lib/**/*.ts',
    '!src/lib/**/*.spec.ts',
    '!src/**/index.ts',
    '!src/**/*.model.ts'
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/test/setup-jest.ts'],
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Unit tests report',
        outputPath: 'dist/test-results/html/tests-report.html',
        includeFailureMsg: false,
        includeConsoleLog: false,
      },
    ],
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true,
      tsconfig: '<rootDir>/tsconfig.json',
      stringifyContentPathRegex: '\\.html$',
    },
  },
  rootDir: '../',
};
