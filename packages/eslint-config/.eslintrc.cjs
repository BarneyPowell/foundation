module.exports = {
  root: true,
  extends: ['./index', './rules/node'].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
};
