/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    corePlugins: {
        preflight: false, // Critical: Disabling preflight to preserve existing styles
    },
    theme: {
        extend: {},
    },
    plugins: [],
}
