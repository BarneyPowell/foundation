// List from: https://eslint.org/docs/latest/rules/#possible-problems
// These rules relate to possible logic errors in code.
module.exports = {
  rules: {

    // Enforce return statements in callbacks of array methods
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['error', { allowImplicit: true }],

    // Require super() calls in constructors
    // https://eslint.org/docs/latest/rules/constructor-super
    'constructor-super': 'error',

    // Enforce 'for' loop update clause moving the counter in the right direction
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'error',

    // Enforce 'return' statements in getters
    // https://eslint.org/docs/rules/getter-return
    'getter-return': ['error', { allowImplicit: true }],

    // Disallow using an async function as a Promise executor
    // https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': 'error',

    // Disallow 'await' inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'error',

    // Disallow reassigning class members
    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // Disallow comparing against -0
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',

    // Disallow assignment operators in conditional expressions
    // https://eslint.org/docs/latest/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],

    // Disallow reassigning const variables
    // https://eslint.org/docs/latest/rules/no-const-assign
    'no-const-assign': 'error',

    // Disallows expressions where the operation doesn't affect the value
    // https://eslint.org/docs/rules/no-constant-binary-expression
    'no-constant-binary-expression': 'off',

    // Disallow constant expressions in conditions
    // https://eslint.org/docs/latest/rules/no-constant-condition
    'no-constant-condition': 'warn',

    // Disallow returning value from constructor
    // https://eslint.org/docs/rules/no-constructor-return
    'no-constructor-return': 'error',

    // Disallow control characters in regular expressions
    // https://eslint.org/docs/latest/rules/no-control-regex
    'no-control-regex': 'error',

    // Disallow use of debugger
    // https://eslint.org/docs/latest/rules/no-debugger
    'no-debugger': 'error',

    // Disallow duplicate arguments in functions
    // https://eslint.org/docs/latest/rules/no-dupe-args
    'no-dupe-args': 'error',

    // Disallow duplicate class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // Disallow duplicate conditions in if-else-if chains
    // https://eslint.org/docs/rules/no-dupe-else-if
    'no-dupe-else-if': 'error',

    // Disallow duplicate keys in object literals
    // https://eslint.org/docs/latest/rules/no-dupe-keys
    'no-dupe-keys': 'error',

    // Disallow duplicate case labels
    // https://eslint.org/docs/latest/rules/no-duplicate-case
    'no-duplicate-case': 'error',

    // Disallow duplicate module imports
    // https://eslint.org/docs/rules/no-duplicate-imports
    // This is 'off' as it's superceded by the `eslint-plugin-import` module
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'no-duplicate-imports': 'off',

    // Disallow empty character classes in regular expressions
    // https://eslint.org/docs/latest/rules/no-empty-character-class
    'no-empty-character-class': 'error',

    // Disallow empty destructuring patterns
    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // Disallow reassigning exceptions in catch clauses
    // https://eslint.org/docs/latest/rules/no-ex-assign
    'no-ex-assign': 'error',

    // Disallow fallthrough of case statements
    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',

    // Disallow reassigning function declarations
    // https://eslint.org/docs/latest/rules/no-func-assign
    'no-func-assign': 'error',

    // Disallow assigning to imported bindings
    // https://eslint.org/docs/rules/no-import-assign
    'no-import-assign': 'error',

    // Disallow function or variable declarations in nested blocks
    // https://eslint.org/docs/latest/rules/no-inner-declarations
    'no-inner-declarations': 'error',

    // Disallow invalid regular expression strings in RegExp constructors
    // https://eslint.org/docs/latest/rules/no-invalid-regexp
    'no-invalid-regexp': 'error',

    // Disallow irregular whitespace
    // https://eslint.org/docs/latest/rules/no-irregular-whitespace
    'no-irregular-whitespace': 'error',

    // Disallow literal numbers that lose precision
    // https://eslint.org/docs/rules/no-loss-of-precision
    'no-loss-of-precision': 'error',

    // Disallow characters which are made with multiple code points in character class syntax
    // https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': 'error',

    // Disallow new operators with global non-constructor functions
    // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
    'no-new-native-nonconstructor': 'error',

    // Disallow `new` operators with the `Symbol` object
    // https://eslint.org/docs/latest/rules/no-new-symbol
    'no-new-symbol': 'error',

    // Disallow calling global object properties as functions
    // https://eslint.org/docs/latest/rules/no-obj-calls
    'no-obj-calls': 'error',

    // Disallow returning values from Promise executor functions
    // https://eslint.org/docs/rules/no-promise-executor-return
    'no-promise-executor-return': 'error',

    // Disallow use of Object.prototypes builtins directly
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // Disallow assignments where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': ['error', {
      props: true,
    }],

    // Disallow comparisons where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',

    // Disallow returning values from setters
    // https://eslint.org/docs/rules/no-setter-return
    'no-setter-return': 'error',

    // Disallow sparse arrays
    // https://eslint.org/docs/latest/rules/no-sparse-arrays
    'no-sparse-arrays': 'error',

    // Disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // Disallow 'this/super' before calling super() in constructors
    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

    // Disallow use of undeclared variables unless mentioned in a /*global */ block
    // https://eslint.org/docs/latest/rules/no-undef
    'no-undef': 'error',

    // Disallow confusing multiline expressions
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',

    // Disallow unmodified loop conditions
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',    

    // Disallow unreachable statements after return, throw, continue, or break statements
    // https://eslint.org/docs/latest/rules/no-unreachable
    'no-unreachable': 'error',

    // Disallow loops with a body that allows only one iteration
    // https://eslint.org/docs/rules/no-unreachable-loop
    'no-unreachable-loop': ['error', {
      ignore: [], // DoWhileStatement, ForInStatement, ForOfStatement, ForStatement, WhileStatement
    }],

    // Disallow control flow statements in finally blocks
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // Disallow negating the left operand of relational operators
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // Disallow use of optional chaining in contexts where the undefined value is not allowed
    // https://eslint.org/docs/rules/no-unsafe-optional-chaining
    'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],

    // Disallow unused private class members
    // https://eslint.org/docs/rules/no-unused-private-class-members
    'no-unused-private-class-members': 'error',    

    // Disallow unused variables
    // https://eslint.org/docs/latest/rules/no-unused-vars
    // TODO: Enable no-unused-vars?
    'no-unused-vars': 'off',
    // 'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    // Disallow the use of variables before they are defined
    // https://eslint.org/docs/latest/rules/no-use-before-define
    // TODO: Enable `no-use-before-define`
    'no-use-before-define': 'off',
    // 'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],    

    // Disallow useless backreferences in regular expressions
    // https://eslint.org/docs/rules/no-useless-backreference
    'no-useless-backreference': 'error',
    
    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // https://eslint.org/docs/rules/require-atomic-updates
    // note: not enabled because it is very buggy
    'require-atomic-updates': 'off',
    
    // Require calls to `isNaN()` when checking for NaN
    // https://eslint.org/docs/latest/rules/use-isnan
    'use-isnan': 'error',    

    // Enforce comparing 'typeof' expressions against valid strings
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': ['error', { requireStringLiterals: true }],

  },
};
