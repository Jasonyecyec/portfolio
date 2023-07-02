/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1D2C33",
        darkPrimary: "#00D1C7",
        darkSecondary: "#999999",
        white: "#ffffff",
        whitePrimay: "#646AFF",
        whiteSecondary: "#818384",
      },
      screens: {
        xs: "360px",
        xr: "414px", // iPhone XR
        sm: "480px",
        md: "768px", // tablet
        lg: "976px",
        smLaptop: "1366px",
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
