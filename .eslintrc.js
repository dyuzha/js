module.exports = {
  extends: "eslint:recommended", // базовые правила
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: "latest"
  }
};
