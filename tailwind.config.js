module.exports = {
  content: [
    "./src/componants/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "body-dark": "#1f2937",
      },
      fontFamily: {
        inter: ["INTER", "sans-serif"],
        interr: ["INTERR", "sans-serif"],
        writing: ["WRITING", "cursive"],
      },

      screens: {
        xs: { max: "321px" },
        xsm: { max: "352px" },
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
