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
      },
      backgroundImage: {
        bgAbout: "url(/src/assets/image/image-about.svg)",
        bgPicnic: "url(/src/assets/image/image-pic.svg)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
