import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import vueParse from 'vue-eslint-parser';
import base from './base';
import {Linter} from 'eslint';
import {defineConfig} from 'eslint/config';
import {rules as tsRules} from './ts';

const rules: Linter.RulesRecord = {
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': 'off',
    ...tsRules,
};

export interface VueConfigOptions {
    tsconfigRootDir?: string;
    project?: string |string [] | boolean;
}

export function configureVue(options:VueConfigOptions = {}): Linter.Config[] {
    const {tsconfigRootDir = './', project = ['./tsconfig.json']} = options;
    const files = ['**/*.ts', '**/*.tsx', '**/*.vue'];

    return [
        ...pluginVue.configs['flat/essential'],
        ...pluginVue.configs['flat/strongly-recommended'],
        {
            files,
            plugins: {
                '@typescript-eslint': tseslint.plugin,
            },
            languageOptions: {
                ecmaVersion: 'latest',
                globals: globals.browser,
                parser: vueParse,
                parserOptions: {
                    sourceType: 'module',
                    'parser': {
                        '<template>': 'espree',
                        'ts': '@typescript-eslint/parser',
                    },
                    tsconfigRootDir,
                    project: project,
                    extraFileExtensions: ['.vue'],
                },
            },
            rules,
        },
        ...base,
    ];
}

export default defineConfig(configureVue());