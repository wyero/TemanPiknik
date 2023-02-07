/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ['Work Sans', 'sans-serif']
      },
      margin:{
        70: '70px'
      },
      fontWeight: {
        400: '400',
        500: '500',
        700: '700'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
