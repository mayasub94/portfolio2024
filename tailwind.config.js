/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          dark: "#171717",
          orange: "#DFA45C",
        },
        gray: {
          "on-text": "#404040",
          "on-black": "#D9D9D9",
          "on-bg": "#F0F0F0",
          highlight: "#BFBFBF",
          "on-bg-black": "#F0F0F0",
        },
        "m-pink": {
          light: "#FFD0F3",
          dark: "#A64C8F",
        },
        "m-green": {
          light: "#B3DDC4",
          dark: "#567462",
        },
        "m-teal": {
          light: "#BAEDEA",
          dark: "#62807E",
        },
        "m-purple": {
          light: "#C4B3DD",
          dark: "#605570",
        },
        "m-peach": {
          light: "#FFD0D0",
          dark: "#775A5A",
        },
        "m-orange": "#DFA45C",
      },
    },
  },
  plugins: [],
};
