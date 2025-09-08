import {defineConfig} from 'eslint/config';
import {configs} from './index';

export default defineConfig([
  ...configs.base,
  ...configs.ts,
]);
