module.exports = {
  extends: [
    './rules/import'
  ],
  plugins: ['import'],
  rules: {
    'import/no-anonymous-default-export': 'warn',
  },
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  settings: {
    'import/resolver': {
      [require.resolve('eslint-import-resolver-node')]: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      [require.resolve('eslint-import-resolver-typescript')]: {
        alwaysTryTypes: true,
      },
    },
  },
}
