import type {Linter} from 'eslint';
import tsParser from '@typescript-eslint/parser';
const rules: Linter.RulesRecord = {
    '@typescript-eslint/consistent-type-assertions': 'off', // 允许 as
};

export default [
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: process.cwd(),
                sourceType: 'module',
            },
        },
        rules,
    },
];
