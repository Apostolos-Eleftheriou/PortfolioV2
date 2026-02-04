/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary-color)',
            },
            fontFamily: {
                yellowtail: ['Yellowtail', 'Varela Round', 'sans-serif'],
                varela: ['Varela Round', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
                alegreya: ['Alegreya', 'sans-serif'],
            },
        },

    },
}
