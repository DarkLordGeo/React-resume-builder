/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          'light-bg': '#ffffff',
          'dark-bg': '#1a202c',
          'light-text': '#000000',
          'dark-text': '#ffffff',
        },
      },
  },
  plugins: [],
}

