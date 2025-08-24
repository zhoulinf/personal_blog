import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import base from './base';
export default [
    ...base,
    ...pluginVue.configs['flat/base'],
    ...pluginVue.configs['flat/recommended'],
    ...pluginVue.configs['flat/essential'],
    ...pluginVue.configs['flat/strongly-recommended'],
    {
        languageOptions: {
            sourceType: 'module' as 'module',
            globals: {
                ...globals.browser,
            },
        },
    },
];