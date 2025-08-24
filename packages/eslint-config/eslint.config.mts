import {defineConfig} from 'eslint/config';
import {configs} from './index';
import globals from 'globals';

export default defineConfig([
  ...configs.ts,
  {
    files: ['**/*.{ts,mts}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  ...configs.base,
]);
