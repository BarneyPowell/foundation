/* TypeScript ESLint config provides different versions
  of existing ESLint rules. To avoid getting duplicate errors
  we load the base set of rules and replace them with the @typescript-eslint version.
  */
const { rules: baseRules } = require('../problems');

module.exports = {
  rules: {
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members':
      baseRules['no-dupe-class-members'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision':
      baseRules['no-loss-of-precision'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': baseRules['no-unused-vars'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define':
      baseRules['no-use-before-define'],

    // Enforce consistent returning of awaited values
    // https://typescript-eslint.io/rules/return-await
    // TODO: Enable `return-await`
    '@typescript-eslint/return-await': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // These rules are already checked by the TypeScript compiler, so shouldn't be checked
        // by ESLint based on the default settings for JavaScript files.
        // Based on the Airbnb TypeScript config which in turn was inspired by
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts

        // Require super() calls in constructors
        // https://eslint.org/docs/latest/rules/constructor-super
        'constructor-super': 'off',

        // Enforce 'return' statements in getters
        // https://eslint.org/docs/rules/getter-return
        'getter-return': 'off',

        // Disallow reassigning const variables
        // https://eslint.org/docs/latest/rules/no-const-assign
        'no-const-assign': 'off',

        // Disallow duplicate arguments in functions
        // https://eslint.org/docs/latest/rules/no-dupe-args
        'no-dupe-args': 'off',

        // Disallow duplicate class members
        // https://eslint.org/docs/rules/no-dupe-class-members
        'no-dupe-class-members': 'off',

        // Disallow duplicate keys in object literals
        // https://eslint.org/docs/latest/rules/no-dupe-keys
        'no-dupe-keys': 'off',

        // Disallow reassigning function declarations
        // https://eslint.org/docs/latest/rules/no-func-assign
        'no-func-assign': 'off',

        // Disallow assigning to imported bindings
        // https://eslint.org/docs/rules/no-import-assign
        'no-import-assign': 'off',

        // Disallow `new` operators with the `Symbol` object
        // https://eslint.org/docs/latest/rules/no-new-symbol
        'no-new-symbol': 'off',

        // Disallow calling global object properties as functions
        // https://eslint.org/docs/latest/rules/no-obj-calls
        'no-obj-calls': 'off',

        // Disallow returning values from setters
        // https://eslint.org/docs/rules/no-setter-return
        'no-setter-return': 'off',

        // Disallow 'this/super' before calling super() in constructors
        // https://eslint.org/docs/rules/no-this-before-super
        'no-this-before-super': 'off',

        // Disallow use of undeclared variables unless mentioned in a /*global */ block
        // https://eslint.org/docs/latest/rules/no-undef
        'no-undef': 'off',

        // Disallow unreachable statements after return, throw, continue, or break statements
        // https://eslint.org/docs/latest/rules/no-unreachable
        'no-unreachable': 'off',

        // Disallow negating the left operand of relational operators
        // https://eslint.org/docs/rules/no-unsafe-negation
        'no-unsafe-negation': 'off',

        // Enforce comparing 'typeof' expressions against valid strings
        // https://eslint.org/docs/rules/valid-typeof
        'valid-typeof': 'off',
      },
    },
  ],
};
