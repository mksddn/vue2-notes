module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: ['error', 'single', { avoidEscape: true }], // Меняем двойные кавычки на одинарные
    // 'validateNewlineAfterArrayElements': { // Не обращаем внимание на построчный массив (но prettier все равно изменит)
    //   'maximum': 1,
    // },
  },
};
