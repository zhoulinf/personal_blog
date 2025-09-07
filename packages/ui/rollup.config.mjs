import path from 'node:path';
import {fileURLToPath} from 'node:url';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import esbuild from 'rollup-plugin-esbuild';
import {defineConfig} from 'rollup';

import deepmerge from 'deepmerge';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseConfig = defineConfig({
    input: './packages/index.ts',
    plugins: [
        nodeResolve(
            {extensions: ['.js', '.ts', '.tsx']},
        ),
        esbuild({
            tsconfig: path.resolve(__dirname, 'tsconfig.build.json'),
            target: 'esnext',
            sourceMap: true,
        }),
        commonjs(),
        terser(),
    ],
    external: ['vue'],
});


const esmConfig = defineConfig({
    output: {
        dir: path.resolve(__dirname, 'dist'),
        format: 'esm',
        sourcemap: true,
        // 保留源文件目录结构
        preserveModules: true,
        preserveModulesRoot: 'src',
    },
});


export default [
    deepmerge.all([baseConfig, esmConfig]),
];