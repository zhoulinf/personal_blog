import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import vueParse from 'vue-eslint-parser';
import globals from 'globals';
import base from './base';
import {Linter} from 'eslint';
import {defineConfig} from 'eslint/config';


const rules: Linter.RulesRecord = {
    'vue/multi-word-component-names': 'off',
};


export interface VueConfigOptions {
    tsconfigRootDir?: string;
}

export function configureVue(options: VueConfigOptions = {}): Linter.Config[] {
    const {tsconfigRootDir} = options;
    return [
    ...base,
    ...pluginVue.configs['flat/base'],
    ...pluginVue.configs['flat/recommended'],
    ...pluginVue.configs['flat/essential'],
    ...pluginVue.configs['flat/strongly-recommended'],
    {
        rules,
        languageOptions: {
            parser: vueParse,
            sourceType: 'module' as const,
            globals: {
                ...globals.browser,
            },
        },
    },
    {
        files: ['**/*.{ts,vue,tsx}'],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                tsconfigRootDir: tsconfigRootDir,
            },
        },
    },
];
}
export default defineConfig(configureVue());