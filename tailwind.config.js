/** @type {import('tailwindcss').Config} */
// Used for customization
module.exports = {
  distDir: "out",
  content: ["./*.html"], // using this in content array means in all the HTML files where utility classes are being used, tailwind css will generate styles
  theme: {
    screens: {
      sm: "480px",
      md: "767px",
      lg: "1069px",
      xl: "1408px",
      "2xl": "1440px",
    },
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #ff0000, #0000ff)",
      },
    },
    fontFamily: {
      rakkas: ["Rakkas", "cursive"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
