// List from: https://eslint.org/docs/latest/rules/#possible-problems
// These rules relate to possible logic errors in code.
module.exports = {
  rules: {
    // Enforce linebreaks after opening and before closing array brackets
    // https://eslint.org/docs/latest/rules/array-bracket-newline
    'array-bracket-newline': ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }

    // Enforce consistent spacing inside array brackets
    // https://eslint.org/docs/latest/rules/array-bracket-spacing
    'array-bracket-spacing': ['error', 'never'],

    // Enforce line breaks after each array element
    // https://eslint.org/docs/latest/rules/array-element-newline
    'array-element-newline': ['off', { multiline: true, minItems: 3 }],

    // Require parentheses around arrow function arguments
    // https://eslint.org/docs/latest/rules/arrow-parens
    'arrow-parens': ['error', 'always'],

    // Enforce consistent spacing before and after the arrow in arrow functions
    // https://eslint.org/docs/latest/rules/arrow-spacing
    'arrow-spacing': ['error', { before: true, after: true }],

    // Disallow or enforce spaces inside of blocks after opening block and before closing block
    // https://eslint.org/docs/latest/rules/block-spacing
    'block-spacing': ['error', 'always'],

    // Enforce consistent brace style for blocks
    // https://eslint.org/docs/latest/rules/brace-style
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // Require or disallow trailing commas
    // https://eslint.org/docs/latest/rules/comma-dangle
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],

    // Enforce consistent spacing before and after commas
    // https://eslint.org/docs/latest/rules/comma-spacing
    'comma-spacing': ['error', { before: false, after: true }],

    // Enforce consistent comma style
    // https://eslint.org/docs/latest/rules/comma-style
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],
    // Enforce consistent spacing inside computed property brackets
    // https://eslint.org/docs/latest/rules/computed-property-spacing
    'computed-property-spacing': ['error', 'never'],

    // Enforce consistent newlines before and after dots
    // https://eslint.org/docs/latest/rules/dot-location
    'dot-location': ['error', 'property'],

    // Require or disallow newline at the end of files
    // https://eslint.org/docs/latest/rules/eol-last
    'eol-last': ['error', 'always'],

    // Require or disallow spacing between function identifiers and their invocations
    // https://eslint.org/docs/latest/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    // Enforce line breaks between arguments of a function call
    // https://eslint.org/docs/latest/rules/function-call-argument-newline
    'function-call-argument-newline': ['error', 'consistent'],

    // Enforce consistent line breaks inside function parentheses
    // https://eslint.org/docs/latest/rules/function-paren-newline
    'function-paren-newline': ['error', 'multiline-arguments'],

    // Enforce consistent spacing around `*` operators in generator functions
    // https://eslint.org/docs/latest/rules/generator-star-spacing
    'generator-star-spacing': ['error', { before: false, after: true }],

    // Enforce the location of arrow function bodies
    // https://eslint.org/docs/latest/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': ['error', 'beside'],

    // Enforce consistent indentation
    // https://eslint.org/docs/latest/rules/indent
    indent: [
      'error',
      2,
      {
        ArrayExpression: 1,
        CallExpression: {
          arguments: 'first',
        },
        flatTernaryExpressions: false,
        FunctionDeclaration: {
          parameters: 'first',
          body: 1,
        },
        FunctionExpression: {
          parameters: 'first',
          body: 1,
        },
        ImportDeclaration: 1,
        ObjectExpression: 1,
        outerIIFEBody: 1,
        SwitchCase: 1,
        VariableDeclarator: 1,
        ignoreComments: false,
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
          'TSTypeParameterInstantiation',
          'TSTypeAliasDeclaration *',
          'TSTypeReference',
          'TSFunctionType',
          'TSUnionType',
          'ExportDefaultDeclaration > *',
        ],
      },
    ],

    // Enforce the consistent use of either double or single quotes in JSX attributes
    // https://eslint.org/docs/latest/rules/jsx-quotes
    'jsx-quotes': ['off', 'prefer-double'],

    // Enforce consistent spacing between keys and values in object literal properties
    // https://eslint.org/docs/latest/rules/key-spacing
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // Enforce consistent spacing before and after keywords
    // https://eslint.org/docs/latest/rules/keyword-spacing
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],

    // Enforce position of line comments
    // https://eslint.org/docs/latest/rules/line-comment-position
    'line-comment-position': [
      'off',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
      },
    ],

    // Enforce consistent linebreak style
    // https://eslint.org/docs/latest/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],

    // Require empty lines around comments
    // https://eslint.org/docs/latest/rules/lines-around-comment
    'lines-around-comment': 'off',

    // Require or disallow an empty line between class members
    // https://eslint.org/docs/latest/rules/lines-between-class-members
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: false },
    ],

    // Enforce a maximum line length
    // https://eslint.org/docs/latest/rules/max-len
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // Enforce a maximum number of statements allowed per line
    // https://eslint.org/docs/latest/rules/max-statements-per-line
    'max-statements-per-line': ['off', { max: 1 }],

    // Enforce newlines between operands of ternary expressions
    // https://eslint.org/docs/latest/rules/multiline-ternary
    'multiline-ternary': ['off', 'never'],

    // Enforce or disallow parentheses when invoking a constructor with no arguments
    // https://eslint.org/docs/latest/rules/new-parens
    'new-parens': 'error',

    // Require a newline after each call in a method chain
    // https://eslint.org/docs/latest/rules/newline-per-chained-call
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // Disallow unnecessary parentheses
    // https://eslint.org/docs/latest/rules/no-extra-parens
    'no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all', // delegate to eslint-plugin-react
        enforceForArrowConditionals: false,
      },
    ],

    // Disallow mixed spaces and tabs for indentation
    // https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'error',

    // Disallow multiple spaces
    // https://eslint.org/docs/latest/rules/no-multi-spaces
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
      },
    ],

    // Disallow multiple empty lines
    // https://eslint.org/docs/latest/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

    // Disallow all tabs
    // https://eslint.org/docs/latest/rules/no-tabs
    'no-tabs': 'error',

    // Disallow whitespace before properties
    // https://eslint.org/docs/latest/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',

    // Enforce the location of single-line statements
    // https://eslint.org/docs/latest/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

    // Enforce consistent line breaks after opening and before closing braces
    // https://eslint.org/docs/latest/rules/object-curly-newline
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
        ImportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
      },
    ],

    // Enforce consistent spacing inside braces
    // https://eslint.org/docs/latest/rules/object-curly-spacing
    'object-curly-spacing': ['error', 'always'],

    // Enforce placing object properties on separate lines
    // https://eslint.org/docs/latest/rules/object-property-newline
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],

    // Enforce consistent linebreak style for operators
    // https://eslint.org/docs/latest/rules/operator-linebreak
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

    // Require or disallow padding within blocks
    // https://eslint.org/docs/latest/rules/padded-blocks
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
      {
        allowSingleLineBlocks: true,
      },
    ],

    // Require or disallow padding lines between statements
    // https://eslint.org/docs/latest/rules/padding-line-between-statements
    'padding-line-between-statements': 'off',

    // Enforce the consistent use of either backticks, double, or single quotes
    // https://eslint.org/docs/latest/rules/quotes
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],

    // Enforce spacing between rest and spread operators and their expressions
    // https://eslint.org/docs/latest/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],

    // Require or disallow semicolons instead of ASI
    // https://eslint.org/docs/latest/rules/semi
    semi: ['error', 'always'],

    // Enforce consistent spacing before and after semicolons
    // https://eslint.org/docs/latest/rules/semi-spacing
    'semi-spacing': ['error', { before: false, after: true }],

    // Enforce location of semicolons
    // https://eslint.org/docs/latest/rules/semi-style
    'semi-style': ['error', 'last'],

    // Enforce consistent spacing before blocks
    // https://eslint.org/docs/latest/rules/space-before-blocks
    'space-before-blocks': 'error',

    // Enforce consistent spacing before `function` definition opening parenthesis
    // https://eslint.org/docs/latest/rules/space-before-function-paren
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // Enforce consistent spacing inside parentheses
    // https://eslint.org/docs/latest/rules/space-in-parens
    'space-in-parens': ['error', 'never'],

    // Require spacing around infix operators
    // https://eslint.org/docs/latest/rules/space-infix-ops
    'space-infix-ops': 'error',

    // Enforce consistent spacing before or after unary operators
    // https://eslint.org/docs/latest/rules/space-unary-ops
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],

    // Enforce spacing around colons of switch statements
    // https://eslint.org/docs/latest/rules/switch-colon-spacing
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // Require or disallow spacing around embedded expressions of template strings
    // https://eslint.org/docs/latest/rules/template-curly-spacing
    'template-curly-spacing': 'error',

    // Require or disallow spacing between template tags and their literals
    // https://eslint.org/docs/latest/rules/template-tag-spacing
    'template-tag-spacing': ['error', 'never'],

    // Require or disallow Unicode byte order mark (BOM)
    // https://eslint.org/docs/latest/rules/unicode-bom
    'unicode-bom': ['error', 'never'],

    // Require parentheses around immediate `function` invocations
    // https://eslint.org/docs/latest/rules/wrap-iife
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

    // Require parenthesis around regex literals
    // https://eslint.org/docs/latest/rules/wrap-regex
    'wrap-regex': 'off',

    // Require or disallow spacing around the `*` in `yield*` expressions
    // https://eslint.org/docs/latest/rules/yield-star-spacing
    'yield-star-spacing': ['error', 'after'],
  },
};
