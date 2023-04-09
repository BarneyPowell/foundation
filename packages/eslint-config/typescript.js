module.exports = {
  extends: [
    './rules/typescript',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {},
};
