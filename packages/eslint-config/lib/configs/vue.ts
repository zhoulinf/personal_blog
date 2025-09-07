import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import base from './base';
import {Linter} from 'eslint';
import {defineConfig} from 'eslint/config';


const rules: Linter.RulesRecord = {
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': 'off',
};


export interface VueConfigOptions {
    tsconfigRootDir?: string;
    project?: string | boolean;
}

export function configureVue(options:VueConfigOptions = {}): Linter.Config[] {
    const {tsconfigRootDir = './', project = true} = options;
    return [
    ...pluginVue.configs['flat/base'],
    ...pluginVue.configs['flat/recommended'],
    ...pluginVue.configs['flat/essential'],
    ...pluginVue.configs['flat/strongly-recommended'],
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
        files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
        languageOptions: {
            parserOptions: {
                tsconfigRootDir,
                project: project,
                parser: tseslint.parser,
                extraFileExtensions: ['.vue'],
            },
        },
    },
    ...base,
];
}
export default defineConfig(configureVue());