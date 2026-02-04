// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    integrations: [],
    site: 'https://apostolos-eleftheriou.github.io/',
    // base: '/PortfolioV2',
    vite: {
        css: {
            postcss: './postcss.config.mjs',
        },
        plugins: [tailwindcss()],
    },
});
