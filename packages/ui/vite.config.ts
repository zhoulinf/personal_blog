import {defineConfig} from 'vite';
import {fileURLToPath, URL} from 'node:url';
import vuePlugin from '@vitejs/plugin-vue';
import vueJSXPlugin from '@vitejs/plugin-vue-jsx';


export default defineConfig(() => {
    return {
        plugins: [
            vuePlugin(),
            vueJSXPlugin(),
        ],
        resolve: {
            alias: {
                 '@': fileURLToPath(new URL('./packages', import.meta.url)),
            },
        },
    };
});