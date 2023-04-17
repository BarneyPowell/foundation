/*
 * @rushstack/eslint-patch is used to include plugins as dev
 * dependencies instead of imposing them as peer dependencies
 *
 * https://www.npmjs.com/package/@rushstack/eslint-patch
 */
const keptPaths = [];
const sortedPaths = [];
const cwd = process.cwd().replace(/\\/g, '/');
const originalPaths = require.resolve.paths('eslint-plugin-import');

// eslint throws a conflict error when plugins resolve to different
// locations, since we want to lock our dependencies by default
// but also need to allow using user dependencies this updates
// our resolve paths to first check the cwd and iterate to
// eslint-config-next's dependencies if needed

for (let i = originalPaths.length - 1; i >= 0; i--) {
  const currentPath = originalPaths[i];

  if (currentPath.replace(/\\/g, '/').startsWith(cwd)) {
    sortedPaths.push(currentPath);
  } else {
    keptPaths.unshift(currentPath);
  }
}

// maintain order of node_modules outside of cwd
sortedPaths.push(...keptPaths);

const hookPropertyMap = new Map(
  [
    ['eslint-plugin-import', 'eslint-plugin-import'],
    ['eslint-plugin-react', 'eslint-plugin-react'],
    ['eslint-plugin-react-hooks', 'eslint-plugin-react-hooks'],
    ['eslint-plugin-jsx-a11y', 'eslint-plugin-jsx-a11y'],
  ].map(([request, replacement]) => [
    request,
    require.resolve(replacement, { paths: sortedPaths }),
  ])
);

const mod = require('module');
const resolveFilename = mod._resolveFilename;
mod._resolveFilename = function (request, parent, isMain, options) {
  const hookResolved = hookPropertyMap.get(request);
  if (hookResolved) {
    request = hookResolved;
  }
  return resolveFilename.call(mod, request, parent, isMain, options);
};

require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [require.resolve('./import')],
  rules: {},
  overrides: [
    {
      files: ['**/*.tsx', '**/*.jsx'],
      extends: [require.resolve('./jsx-a11y'), require.resolve('./react')],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
  },
};
