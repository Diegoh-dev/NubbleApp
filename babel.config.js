module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@domain': './src/domain',
          '@brand': './src/brand',
          // '@api': './src/api',//verificar erro de Require cycle
          '@types': './src/types',
          '@utils': './src/utils',
          '@infra': './src/infra',
          '@Auth': './src/Auth',
          '@services': './src/services',
          '@user': './src/user',
          '@test': './src/test',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
