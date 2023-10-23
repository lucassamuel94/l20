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
    colors: {
      black: '#070707',
      white: '#fafafa',
      primary: {
        DEFAULT: '#F8E08E',
        hover: '#f4cb55'
      },
      secondary: {
        DEFAULT: '#8ED2F8',
        hover: '#3fb4f1'
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-beVietnamPro), sans-serif'],
      }
    },
  },
  plugins: [],
}
