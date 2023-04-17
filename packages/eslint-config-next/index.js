// NextJS already comes with ESLint conifg.
// Whet we'll do here is essentially override
// the defaults with our own rules.
//
// We'll assume that this already has the right next config isntalled.
const reactRules = require('@foundation/eslint-config-react/rules/react');
const importRules = require('@foundation/eslint-config-react/rules/import');
const jsxA11yRules = require('@foundation/eslint-config-react/rules/jsx-a11y');

module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    ...reactRules.rules,
    ...importRules.rules,
    ...jsxA11yRules.rules,
  },
};
