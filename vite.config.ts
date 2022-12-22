import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// import Icons from 'unplugin-icons/vite';
// import IconsResolver from 'unplugin-icons/resolver';
import Inspect from 'vite-plugin-inspect';

import eslintPlugin from 'vite-plugin-eslint';

const pathSrc = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			resolvers: [
				ElementPlusResolver({
					importStyle: 'sass',
				}),
				// IconsResolver({
				// 	prefix: 'Icon',
				// }),
			],
		}),
		Components({
			resolvers: [
				ElementPlusResolver({
					importStyle: 'sass',
				}),
				// IconsResolver({
				// 	enabledCollections: ['ep'],
				// }),
			],
			dts: 'src/components.d.ts',
		}),
		// Icons({
		// 	autoInstall: true,
		// }),
		eslintPlugin({
			include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
		}),
		Inspect(),
	],
	resolve: {
		alias: {
			'~/': `${pathSrc}/`,
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				// 两种方式都可以
				// additionalData: `@use "~/assets/styles/variable.scss" as *;`,
			},
		},
	},
	server: {
		// cors: true,
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:8888/api/',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
});
