import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import path from 'path'
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@components': path.resolve(__dirname, './src/components'),
			'@assets': path.resolve(__dirname, './src/assets'),
		}
	},
	plugins: [imagetools()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@styles/_variables" as vars;`
			}
		}
	},
	server: {
		port: 5173,
		strictPort: false
	},
	preview: {
		port: 4173,
		strictPort: false
	}
})