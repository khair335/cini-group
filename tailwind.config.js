/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xxl': '1380px', // Custom breakpoint at 480px
      },
    },
  },
  plugins: [],
}
