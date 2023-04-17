module.exports = {
  root: true,
  extends: [
    '@foundation/eslint-config',
    // require.resolve('./index'),
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['test/*.ts', 'test/*.js', 'test/*.tsx', 'test/*.jsx'],
      extends: [require.resolve('./index')],
    },
  ],
};
