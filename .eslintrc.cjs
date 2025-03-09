// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": "warn",
    "no-undef": "error", // Show error for undefined variables
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off", // For React 17+
  },
};
