/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1200px',
            },
            colors: {
                primary: {
                    text: '#212529',
                    bg: '#0d6efd',
                    border: '#6c757d',
                },
                secondary: {
                    bg: '#6c757d',
                },
                danger: {
                    text: '#dc3545',
                    bg: '#dc3545',
                },
                success: {
                    bg: '#198754',
                },
                warning: {
                    bg: '#ffc107',
                },
                light: {
                    bg: '#f8f9fa',
                },
            },
        },
    },
    plugins: [],
};
