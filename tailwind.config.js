module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  important: true,
  theme: {
    extend: {},
  },
  plugins: [ require('tailwind-scrollbar-hide')],
}