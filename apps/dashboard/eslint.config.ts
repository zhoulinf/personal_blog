import {globalIgnores} from 'eslint/config';
import {defineConfigWithVueTs, vueTsConfigs} from '@vue/eslint-config-typescript';
import {configs} from '@person_blog/eslint-config';
import pluginVitest from '@vitest/eslint-plugin';
import pluginPlaywright from 'eslint-plugin-playwright';

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: process.cwd(),
      },
    },
  },
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),
  vueTsConfigs.recommended,
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },
  {
    ...pluginPlaywright.configs['flat/recommended'],
    languageOptions: {
      parserOptions: {
        project: ['./e2e/tsconfig.json'], // 指定 e2e 用自己的 tsconfig
        tsconfigRootDir: process.cwd(),
      },
    },
    files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
  ...configs.vue,
);
