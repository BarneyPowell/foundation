module.exports = {
  rules: {
    // Functional components can be quite long - so it's better to either turn this rule off or to
    // set something more reasonable for tsx files.
    'max-lines-per-function': 'off',
    'react/no-unknown-property': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
};
