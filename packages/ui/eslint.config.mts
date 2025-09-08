import {configureVue, configureTypeScript} from '@person_blog/eslint-config';
import {defineConfig} from 'eslint/config';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig([
    ...configureTypeScript({
      tsconfigRootDir: __dirname,
      project: './tsconfig.json',
    }),
    ...configureVue({
      tsconfigRootDir: __dirname,
      project: './tsconfig.json',
    }),
]);
