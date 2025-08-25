import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import {configs} from '@person_blog/eslint-config';

const config: ReturnType<typeof tseslint.config> = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...configs.ts,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },
  },
  {
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
    },
  },
);

export default config;