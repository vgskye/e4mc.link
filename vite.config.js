import { createHtmlPlugin } from 'vite-plugin-html'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

/** @type {import('vite').UserConfig} */
export default {
    plugins: [
        createHtmlPlugin({
            minify: true,
        }),
        ViteImageOptimizer()
    ],
    build: {
        modulePreload: {
            polyfill: false
        }
    }
}