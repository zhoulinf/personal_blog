import {configureTypeScript, configureVue} from '@person_blog/eslint-config';
import pluginVitest from '@vitest/eslint-plugin';
import {defineConfigWithVueTs, vueTsConfigs} from '@vue/eslint-config-typescript';
import pluginPlaywright from 'eslint-plugin-playwright';
import {globalIgnores} from 'eslint/config';
import {fileURLToPath} from 'node:url';
import {dirname} from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = defineConfigWithVueTs(
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),
  configureVue({
    tsconfigRootDir: __dirname,
  }),
  configureTypeScript({
    tsconfigRootDir: __dirname,
  }),
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },
  vueTsConfigs.recommended,
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
);
export default config;