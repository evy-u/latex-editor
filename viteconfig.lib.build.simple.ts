import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { uglify } from 'rollup-plugin-uglify'
import strip from '@rollup/plugin-strip'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './package/components/LatexEditorSimple/init.ts'),
      name: 'kezhi',
      fileName: () => `latex-editor.module.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [],
      output: {
        dir: 'simple-demo',
      },
    },
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: false,
      },
    },
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    strip({ include: '**/*.(js|ts|vue)' }),
    dts({
      outputDir: 'types',
      exclude: ['vue.d.ts'],
    }),
    uglify(),
  ],
})
