import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      size: {
        xxsmall: string;
        xsmall: string;
        small: string;
        semiMedium: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        xxxlarge: string;
      };
      family: {
        200: string;
        300: string;
        400: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
    };
    colors: {
      mainBg: string;
      secondaryBg: string;
      darkGrey: string;
      darkGreyHover: string;
      mainRed: string;
      text: {
        header: string;
        headerHover: string;
        homeHeading: string;
        homeText: string;
      };
    };
  }
}
