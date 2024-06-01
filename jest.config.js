module.exports = {
  preset: 'react-native',
  coveragePathIgnorePatterns: ['/node_modules/', 'index'],
  verbose: true,
  collectCoverageFrom: ['src/{components,utils}/**/*.{js,jsx,ts,tsx}'],
};
