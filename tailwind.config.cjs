/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'blue': {
          600: '#3d8cbc',
        },
        'gray': {
          50: '#859098',
          600: '#4b5563',
        }
      }
    },
  },
  plugins: [],
}