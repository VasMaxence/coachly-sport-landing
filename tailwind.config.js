// tailwind.config.js
module.exports = {
  purge: ["./components/**/*.{vue,js}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "320px",
        "2md": "900px",
        "2lg": "1200px",
        "3xl": "1600px",
        "4xl": "2000px",
      },
      width: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "10/10": "100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
