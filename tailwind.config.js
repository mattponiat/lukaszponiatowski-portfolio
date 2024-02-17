/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGrey: "#6E6E6E73",
        darkGreyHover: "#D2D2D2",
        lightGrey: "#989898",
        mainRed: "#FF2800",
        mainBg: "#FFF",
        secondaryBg: "#0C0C0CFA",
      },
      textColor: {
        header: "#6D6D6DB3",
        headerHover: "#0C0C0CFA",
        homeHeading: "#F0F0F0",
        homeText: "#878787",
      },
      fontSize: {
        xxsmall: "12px",
        xsmall: "13px",
        small: "14px",
        semiMedium: "15px",
        medium: "17px",
        large: "20px",
        xlarge: "24px",
        xxlarge: "32px",
        xxxlarge: "52px",
      },
    },
  },
  plugins: [],
};
