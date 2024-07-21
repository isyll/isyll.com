/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#146ef5',
        secondary: '#080808',
      },
      fontSize: {
        xxl: '50px',
      },
    },
  },
  plugins: [],
}
