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
      weight: {
        200: number;
        300: number;
        400: number;
        600: number;
        700: number;
        800: number;
        900: number;
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
