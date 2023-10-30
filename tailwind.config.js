/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'got-gray': '#eeeeee',
        'got-red': '#951b1f',
        'got-sand': '#f4dfb4'

      },
      maxWidth: {
        '1000': '1000px',
        '1100': '1100px',
        '1450': '1450px',
      },
      spacing: {
        '75px': '75px',
      }
    },
  },
  plugins: [],
};
