import baseConfig from './configs/base';
import {configureTypeScript} from './configs/ts';
import vueConfig from './configs/vue';
export {configureTypeScript} from './configs/ts';

export const configs = {
  base: baseConfig,
  vue: vueConfig,
  ts: configureTypeScript(),
};
