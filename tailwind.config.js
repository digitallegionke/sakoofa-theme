/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid'
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['var(--font-mono)'],
        'sans': ['var(--font-sans)']
      }
    }
  },
  plugins: []
}
