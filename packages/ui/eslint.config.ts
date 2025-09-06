import {defineConfig} from 'eslint/config';
import {configs} from '@person_blog/eslint-config';

export default defineConfig([
  ...configs.vue,
  ...configs.ts,
]);
