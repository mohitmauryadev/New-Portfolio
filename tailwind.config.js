/** @type {import('tailwindcss').Config} */
export const content = [
    "./index.html",
    "./src//*.{html,js,ts,jsx,tsx}", 
];
export const theme = {
    extend: {
        colors: {
            
            'footer-bg': '#0A1A1D',
            'footer-text': '#90E0EF',
            'primary-accent': '#00B4D8',
            'secondary-accent': '#0077B6',
        },
    },
    plugins: [
  require('tailwind-scrollbar-hide')
]
};
export const plugins = [];