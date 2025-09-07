import {defineConfig} from 'eslint/config';
import globals from 'globals';
import {configs} from '@person_blog/eslint-config';


export default defineConfig(
  configs.base,
  configs.ts,
  [
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
      '@typescript-eslint/init-declarations': 'off',
    },
  },
  ],
);

