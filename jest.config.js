module.exports = {
  preset: 'react-native',
  coveragePathIgnorePatterns: ['/node_modules/', 'index'],
  verbose: true,
  collectCoverageFrom: ['src/{components,utils}/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['@testing-library/react-native/extend-expect'],
  moduleDirectories: ['node_modules', './src/test'],
};
