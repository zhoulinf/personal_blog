import js from '@eslint/js';
import globals from 'globals';
import {defineConfig} from 'eslint/config';
import type {Linter} from 'eslint';

const rules:Linter.RulesRecord = {
  'linebreak-style': ['error', 'unix'],
  quotes: ['error', 'single'],
  eqeqeq: ['error', 'smart'],
  semi: ['error', 'always'],
  'comma-dangle': ['error', 'always-multiline'],
  'no-unused-vars': 'error',
  'default-case': 'error',
  'brace-style': ['error', 'stroustrup', {allowSingleLine: true}],
  'no-dupe-keys': 'error',
  'no-sparse-arrays': 'error',
  'no-empty': 'error',
  'block-scoped-var': 'error',
  curly: ['error', 'all'],
  'no-self-compare': 'error',
  'no-multiple-empty-lines': ['error', {max: 2}],
  'no-const-assign': 'error',
  'no-redeclare': 'error',
  'no-func-assign': 'error',
  'no-shadow': 'error',
  'space-infix-ops': ['error', {int32Hint: true}],
  'space-before-function-paren': [
    'error',
    {anonymous: 'never', named: 'never', asyncArrow: 'always'},
  ],
  'space-before-blocks': ['error', 'always'],
  'template-curly-spacing': ['off', 'never'],
  'key-spacing': ['error', {beforeColon: false, afterColon: true}],
  'array-bracket-spacing': ['off', 'always'],
  'object-curly-spacing': ['error', 'never'],
  'arrow-spacing': ['error', {before: true, after: true}],
  'comma-spacing': ['error', {before: false, after: true}],
  'keyword-spacing': 'error',
  'no-trailing-spaces': 'error',
  'switch-colon-spacing': ['error', {before: false, after: true}],
  'no-multi-spaces': 'error',
};

export default defineConfig([
  {
    ignores: ['dist/**', 'build/**', 'node_modules/**'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,tsx,d.ts,cts,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules,
  },
]);
