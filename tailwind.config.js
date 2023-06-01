/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        saBlack: "satoshi-black",
        saBold: "satoshi-bold",
        saLight: "satoshi-light",
        saMedium: "satoshi-medium",
        saRegular: "satoshi-regular",
        saVariable: "satoshi-variable",
        header: ["Montserrat Alternates", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        bg: "#0c0a09",
        card: "#18181b",
        bgBoard: "#0b0e11",
        button: "#059669",
        textColor: "#00f6b2",
      },
    },
  },
  plugins: [],
};
