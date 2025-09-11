import path from 'node:path';
import {fileURLToPath} from 'node:url';
import postcss from 'rollup-plugin-postcss';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import esbuild from 'rollup-plugin-esbuild';
import vueJsx from '@vitejs/plugin-vue-jsx';
import {defineConfig} from 'rollup';
import deepmerge from 'deepmerge';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseConfig = defineConfig({
    input: 'packages/index.ts',
    plugins: [
        nodeResolve(
            {extensions: ['.js', '.ts', '.tsx']},
        ),
        commonjs(),
        esbuild({
            tsconfig: path.resolve(__dirname, 'tsconfig.build.json'),
            target: 'esnext',
            include: /\.[jt]s$/, // 只处理 ts/js，不要管 tsx,
            exclude: /\.tsx$/, // 避免跟 vueJsx 重复
            sourceMap: true,
        }),
        vueJsx({
            transformOn: true,
            mergeProps: true,
            include: /\.tsx$/, // 专门处理 tsx
        }),
        postcss({
           extract: true,
        }),
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
        preserveModulesRoot: './',
    },
});


export default [
    deepmerge.all([baseConfig, esmConfig]),
];