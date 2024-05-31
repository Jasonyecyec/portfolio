/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0a192f",
        darkPrimary: "#00D1C7",
        darkSecondary: "#B2B2B2",
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
        smLaptop: "1366px", // small laptop
        mdDesktop: "1600px", // medium desktop
        lgDesktop: "1800px", // large desktop
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
