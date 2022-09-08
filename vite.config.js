import { defineConfig } from "vite"
import vue from '@vitejs/plugin-vue'

const path = require("path")

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname,'./src'),
        },
        
        extends: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    css: {
        preprocessorOptions: {
            less: {
                additionalData: `
                @import "./src/assets/css/global.less";
                @import "./src/assets/font/font.less";
                `
            }
        }
    },
})
