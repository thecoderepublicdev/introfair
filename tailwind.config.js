/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['"Manrope"', ...defaultTheme.fontFamily.sans],
        outfit: ['"Outfit"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          primary: {
            100: "#F2F5F9",
            200: "#E1E8F1",
            300: "#BECEE3",
            400: "#94B0D4",
            500: "#0D76BA",
            600: "#0C6FAF",
            700: "#0B6098",
            800: "#094F7C",
            900: "#063858"
          },
          secondary: {
            100: "#FEF8F3",
            200: "#FEEFE3",
            300: "#FCDDC3",
            400: "#FBCA9D",
            500: "#F9A944",
            600: "#EB9F40",
            700: "#CB8A37",
            800: "#A6712D",
            900: "#755020"
          }
        }
      },
    },
  },
  plugins: [],
};
