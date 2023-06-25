/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1a1a1a",
        darkPrimary: "#333333",
        darkSecondary: "#4d4d4d",
        white: "#ffffff",
        whitePrimay: "#f2f2f2",
        whiteSecondary: "#f5f5f5",
      },
      screens: {
        xs: "360px",
        xr: "414px", // iPhone XR
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
