import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";
import path from "path";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        dts({
            insertTypesEntry: true,
        }),
        react(),
        cssInjectedByJsPlugin(),
    ],
    build: {
        lib: {
            // путь к основному файлу библиотеки
            entry: path.resolve(__dirname, "src/index.ts"),
            // название библиотеки
            name: "RibbonMenu",
            // форматы генерируемых файлов
            formats: ["es", "umd"],
            // названия генерируемых файлов
            fileName: (format) => `index.${format}.js`,
        },
        // https://vitejs.dev/config/build-options.html#build-rollupoptions
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                }
            },
        },
    },
})
