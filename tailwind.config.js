/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "main": "#00bd7e",
                "bg": "#1a1a1a",
                "bg-lighter": "#212121"
            },
            fontFamily: {
                "default": "'Poppins', sans-serif"
            }
        },
    },
    plugins: [],
}

