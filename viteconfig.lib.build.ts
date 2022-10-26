import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { uglify } from 'rollup-plugin-uglify'
import strip from '@rollup/plugin-strip'

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, './package/index.ts'),
			name: 'kezhi',
			fileName: format => `index.${format}.js`,
		},
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ['vue'],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: 'Vue',
				},
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
