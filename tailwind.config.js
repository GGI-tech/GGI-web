/** @type {import('tailwindcss').Config} */

module.exports = {
  // purge: [],
  mode: 'jit',
  content: [
    './src/**/*.{html,js,json}',
    // './node_modules/tw-elements/dist/js/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [
    // require('tw-elements/dist/plugin')
  ]
}
