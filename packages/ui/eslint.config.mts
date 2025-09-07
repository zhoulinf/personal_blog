import {configureVue, configureTypeScript} from '@person_blog/eslint-config';
import {defineConfig} from 'eslint/config';
import {fileURLToPath} from 'node:url';
import {dirname} from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(
    configureVue({
        tsconfigRootDir: __dirname,
    }),
    configureTypeScript({
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    }),
);
