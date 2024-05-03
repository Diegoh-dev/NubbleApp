module.exports = {
  root: true,
  extends: ['@react-native','plugin:@tanstack/eslint-plugin-query/recommended'],
  plugins: ['import','@tanstack/query'], //Informando para o eslint o plugin que está sendo ususado
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/order': [
          'error',
          {
            groups: ['external', 'builtin', 'internal', 'parent', 'sibling'],
            pathGroups: [
              {
                pattern: 'react+(|-native)',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '@+(routes|screens|components|hooks|theme)',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: './',
                group: 'internal',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react+(|-native)'],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
            'newlines-between': 'always',// coloca uma linha entre cada grupo
          },
        ],
      },
    },
  ],
  rules: {
    'prettier/prettier': 0,
  },
};
