/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
  },
  plugins: [
    require("daisyui"),
    require('tw-elements/dist/plugin'),
    require('flowbite/plugin')
  ],
}
