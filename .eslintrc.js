module.exports = {
  extends: ['@teambit/eslint-config-bit-react'],
  rules: {
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never']
  },
  parserOptions: {
    project: './tsconfig.json'
  },
}