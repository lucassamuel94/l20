/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '448px',
      md: '744px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1366px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-archivo), sans-serif'],
      },
    },
  },
  plugins: [],
}
