/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'fGray':'#F0F2F5',
        'fBlue':'#0866FF',
        'fGreen':'#36A420'
      }
    },
  },
  plugins: [],
}