import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}", 
    ".flowbite-react\\class-list.json"
  ],
  theme: {
    extend: {
        colors: {
          'light-bg': '#ffffff',
          'dark-bg': '#1a202c',
          'light-text': '#000000',
          'dark-text': '#ffffff',
        }
      },
  },
  plugins: [flowbiteReact],
}