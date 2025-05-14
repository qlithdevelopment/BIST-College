/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',       // Example primary color (blue-800)
        secondary: '#F97316',     // Example secondary color (orange-500)
        textPrimary: '#1F2937',   // Gray-800
      },
      animation: {
        'bg-blink': 'bgBlink 2s infinite ease-in-out',
      },
      keyframes: {
        bgBlink: {
          '0%': { backgroundColor: '#F97316' },
          '30%': { backgroundColor: '#0771DA' },
          '60%': { backgroundColor: '#21DDFF' },
          '100%': { backgroundColor: '#FF21FE' },
        },
      },
    },
  },
  plugins: [],
};
