const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#bb2e2e",
        orange: "#ea7216",
        red: "#920000",
        blue: "#1698ea",
        purple: "#9258cd",
        green: "#009440",
        gray: "#707070",
        tertiary: "#2C2C2C",
        "black-100": "#1f1f1f",
        "black-200": "#3f3f3f",
        "black-300": "#5f5f5f",
        "white-100": "#f1f1f1",
        "white-200": "#afafaf",
        "white-300": "#808080",
      },
      boxShadow: {
        cardGrey: "0px 10px 80px -10px #6b6b6b",
        card_white: "0px 0px 20px 0px #ffffff",
        card_highlight: "0px 0px 20px 0px #920000",
        card_orange: "0px 0px 20px 0px #ea7216",
        card_red: "0px 0px 20px 0px #920000",
        card_blue: "0px 0px 20px 0px #0066ff",
        card_purple: "0px 0px 20px 0px #9258cd",
        card_green: "0px 0px 20px 0px #009440",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('https://media.discordapp.net/attachments/1036329368118640712/1168672351706157107/herobg.png')",
      },
    },
  },
  plugins: [],
});