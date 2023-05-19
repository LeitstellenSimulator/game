module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    "prettier/prettier": "warn",
  },
};
