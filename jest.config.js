module.exports = {
  preset: 'react-native',
  coveragePathIgnorePatterns: ['/node_modules/', 'index'],
  verbose: true,
  collectCoverageFrom: ['src/{components,utils,hooks,domain}/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['@testing-library/react-native/extend-expect'],
  moduleDirectories: ['node_modules', './src/test'],
  modulePathIgnorePatterns: ['.*/mockedData/.*'],
  setupFiles: ['<rootDir>/src/test/jestSetup.ts'],
};
