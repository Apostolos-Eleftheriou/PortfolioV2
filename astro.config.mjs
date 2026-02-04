// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    integrations: [],
    vite: {
        css: {
            postcss: './postcss.config.mjs',
        },
        plugins: [tailwindcss()],
    },
});
