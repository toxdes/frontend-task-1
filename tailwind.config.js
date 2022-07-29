/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#14172B",
        white: "#ECF0FF",
      },
      fontFamily: {
        tomorrow: ["Tomorrow"],
      },
    },
  },
  plugins: [],
};
