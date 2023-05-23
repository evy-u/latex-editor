import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

const pathSrc = path.resolve(__dirname, './src')
const pathVue3 = path.resolve(__dirname, './package/index.ts')
// https://vitejs.dev/config/
export default defineConfig({
  envDir: path.resolve(__dirname, './env'),
  server: {
    port: 6001,
    host: true,
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': pathSrc,
      'latex-editor': pathVue3,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        //element-plus error
        charset: false,
        // additionalData: `@import "./src/styles/variables.scss";`,
      },
    },
  },
})
