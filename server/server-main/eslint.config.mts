import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import {configs} from '@person_blog/eslint-config';

const config: ReturnType<typeof tseslint.config> = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
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
  ...configs.ts,
  {
    rules: {
      'no-unused-vars': 'off',
    },
  },
);

export default config;