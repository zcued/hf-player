module.exports = {
  extends: '@zcool/eslint-config/browser-ts',
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
  },
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    camelcase: [0],
    '@typescript-eslint/explicit-module-boundary-types': [0],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
}
