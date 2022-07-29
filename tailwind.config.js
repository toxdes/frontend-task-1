/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#14172B",
        white: "#ECF0FF",
        white2: "#737BAE",
        gray: "rgba(98, 106, 136, 0.1)",
        gray2: "rgba(98, 106, 136, 0.2)",
        btc: "rgba(234, 179, 0, 0.6)",
        sol: "rgba(220, 31, 255, 1)",
        eth: "rgba(237, 240, 244, 1)",
        busd: "rgba(234, 179, 0, 0.6)",
      },
      fontFamily: {
        tomorrow: ["Tomorrow"],
      },
    },
  },
  plugins: [],
};
