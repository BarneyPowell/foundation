module.exports = {
  root: true,
  extends: ['./index'].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  env: {
    node: true,
  },
};
