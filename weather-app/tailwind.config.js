/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alimama': ['AlimamaFangYuanTiVF-Square', 'helvetica']
      }
    },
    colors: {
      sky: '#7dd3fc',
      purple: '#3f3cbb'
    }
  },
  plugins: [],
}

