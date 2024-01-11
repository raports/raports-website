/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "480px",
        tablet: "768px",
        desktop: "1200px",
      },
      colors: {
        white: "#ffffff",
        black: "#292F36",
        grey: {
          DEFAULT: "#6D7D8B",
          100: "#d4d9dd",
          200: "#b8c0c7",
          300: "#9ba6b1",
          400: "#7e8d9a",
          500: "#657481",
          600: "#4e5a64",
          700: "#384047",
        },
        blue: {
          DEFAULT: "#0E87C3",
          500: "#28aef0",
          600: "#0f94d7",
          700: "#0c73a7",
        },
        green: "#7FB685",
        yellow: "#F3B270",
        red: "C20114",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
