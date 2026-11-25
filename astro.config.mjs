// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// El adaptador Node permite los endpoints /api/* que llaman a Claude desde el
	// servidor (así la API key nunca llega al navegador).
	adapter: node({ mode: 'standalone' }),
	vite: {
		plugins: [tailwindcss()],
	},
});
