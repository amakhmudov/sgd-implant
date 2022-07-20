const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./dist/**/*.html"],
  theme: {
    screens: {
      sm: "641px",
      "sm-down": { max: "640px" },
      md: "769px",
      "md-down": { max: "768px" },
      lg: "1025px",
      "lg-down": { max: "1024px" },
      xl: "1281px",
      "xl-down": { max: "1280px" },
      "2xl": "1921px",
      "2xl-down": { max: "1920px" },
    },
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        mont: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {},
      fontSize: {},
      colors: {
        brand: {
          DEFAULT: "#20166c",
          dark: "#223e3f",
        },
        body: {
          DEFAULT: "#000",
          dark: "#000000",
          light: "#3e3e3e",
        },
        grass: "#1EB53A",
        flame: "#f00",
      },
      aspectRatio: {
        "cert-portrait": "756 / 1080",
        "cert-landscape": "1920 / 1330",
      },
      boxShadow: {
        icon: "0 -1px 0 rgb(102 102 102 / 0.2)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
