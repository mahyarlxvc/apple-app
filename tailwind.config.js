/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui-components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      colors: {
        "primary-color": "#FDD406",
        "white-color": "#fff",
        "black-color": "#000000",
        "dark-color": "#565657",
      },
    }
  },
  plugins: [],
};
