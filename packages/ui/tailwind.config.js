
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './packages/**/*.{vue,js,ts,jsx,tsx}',
    './demo/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
        success: '#16a34a',
        danger: '#dc2626',
      },
    },
  },
  plugins: [],
};

