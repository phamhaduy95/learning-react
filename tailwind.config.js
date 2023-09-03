/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1440px',
            },
            colors: {
                primary: {
                    text: '#8492a6',
                    bg: '',
                },
                secondary: {
                    background: '#f0f3f599',
                },
            },
        },
    },
    plugins: [],
};
