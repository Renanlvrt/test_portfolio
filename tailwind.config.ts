import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Light mode colors
                primary: {
                    DEFAULT: '#0EA5E9',
                    50: '#E0F2FE',
                    100: '#BAE6FD',
                    200: '#7DD3FC',
                    300: '#38BDF8',
                    400: '#0EA5E9',
                    500: '#0284C7',
                    600: '#0369A1',
                    700: '#075985',
                    800: '#0C4A6E',
                    900: '#082F49',
                },
                secondary: {
                    DEFAULT: '#EC4899',
                    50: '#FCE7F3',
                    100: '#FBCFE8',
                    200: '#F9A8D4',
                    300: '#F472B6',
                    400: '#EC4899',
                    500: '#DB2777',
                    600: '#BE185D',
                    700: '#9D174D',
                    800: '#831843',
                    900: '#500724',
                },
                accent: {
                    DEFAULT: '#8B5CF6',
                    50: '#F5F3FF',
                    100: '#EDE9FE',
                    200: '#DDD6FE',
                    300: '#C4B5FD',
                    400: '#A78BFA',
                    500: '#8B5CF6',
                    600: '#7C3AED',
                    700: '#6D28D9',
                    800: '#5B21B6',
                    900: '#4C1D95',
                },
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
                mono: ['var(--font-geist-mono)', 'monospace'],
            },
            animation: {
                'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.5s ease-out',
                'fade-in': 'fadeIn 0.5s ease-in',
                'scale-in': 'scaleIn 0.3s ease-out',
            },
            keyframes: {
                heartbeat: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '14%': { transform: 'scale(1.1)' },
                    '28%': { transform: 'scale(1)' },
                    '42%': { transform: 'scale(1.1)' },
                    '56%': { transform: 'scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
