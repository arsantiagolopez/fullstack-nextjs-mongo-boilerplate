const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.zinc[900],
        secondary: colors.stone[800],
        tertiary: colors.zinc[400],
      },
      fontFamily: {
        Basic: ["Basic", "sans-serif"],
      },
      display: ["group-hover"],
    },
  },
};
