import type {Linter} from 'eslint';
import base from './base';
const rules: Linter.RulesRecord = {
    '@typescript-eslint/consistent-type-assertions': 'off', // 允许 as
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'off',
};

export default [
    ...base,
    {
        files: ['**/*.{ts,tsx,mts}'],
        languageOptions: {
            sourceType: 'module' as 'module',
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: process.cwd(),
            },
        },
        rules,
    },
];
