import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  font: {
    size: {
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

  colors: {
    mainBg: "#FFF",
    secondaryBg: "#0C0C0CFA",
    darkGrey: "#6E6E6E73",
    darkGreyHover: "#D2D2D2",
    mainRed: "#FF2800",
    text: {
      header: "#6D6D6DB3",
      headerHover: "#0C0C0CFA",
      homeHeading: "#F0F0F0",
      homeText: "#7A7A7A",
    },
  },
};

export default theme;
