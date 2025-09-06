import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import {vueTsConfigs} from '@vue/eslint-config-typescript';
import globals from 'globals';
import base from './base';
import {Linter} from 'eslint';
import {defineConfig} from 'eslint/config';


const rules:Linter.RulesRecord = {
    'vue/multi-word-component-names': 'off',
};

export default defineConfig([
    ...base,
    ...pluginVue.configs['flat/base'],
    ...pluginVue.configs['flat/recommended'],
    ...pluginVue.configs['flat/essential'],
    ...pluginVue.configs['flat/strongly-recommended'],
    vueTsConfigs.recommended,
    {
        rules,
        languageOptions: {
            sourceType: 'module' as const,
            globals: {
                ...globals.browser,
            },
        },
    },
    {
        files: ['**/*.vue'], languageOptions: {parserOptions: {parser: tseslint.parser}},
    },
]);