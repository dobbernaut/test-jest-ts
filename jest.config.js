module.exports = {
  globals: {
    'ts-jest': {
      isolatedModules: false,
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  testMatch: ['**/tests/**/*.test.ts'],
  testTimeout: 30000,
  verbose: true,
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'Tests',
        outputDirectory: './artifacts/report/junit',
        outputName: 'junit.xml',
        classNameTemplate: '{classname}',
        titleTemplate: '{title}',
      },
    ],
    [
      'jest-html-reporters',
      {
        publicPath: './artifacts/report',
      },
    ],
  ],
  moduleNameMapper: {
    '^@config/(.*)$': '<rootDir>/config/$1',
    '^@constant/(.*)$': '<rootDir>/constants/$1',
    '^@service/(.*)$': '<rootDir>/services/$1',
  },
};
