module.exports = {
  extends: [
    './rules/problems',
    './rules/suggestions',
    './rules/format',
    './rules/import',
  ].map(require.resolve),
  plugins: [
    'json-format',
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {},
};
