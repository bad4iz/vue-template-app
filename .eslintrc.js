module.exports = {
  root: true,

  env: {
    node: true,
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-v-html': 'error',
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    'vue/eqeqeq': 'warning',
    'vue/camelcase': 'warning',
    'vue/comma-dangle': 'error',
    'comma-dangle': ['error', 'always-multiline'],
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  extends: ['plugin:vue/strongly-recommended', '@vue/prettier'],
};
