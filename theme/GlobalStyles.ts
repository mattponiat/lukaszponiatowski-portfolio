import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Nunito Sans Regular', sans-serif;
        line-height: 1.5;

        @font-face {
            font-family: 'Nunito Sans ExtraLight';
            src: url('/fonts/NunitoSans/NunitoSans-ExtraLight.ttf');
            font-display: swap;
        }

        @font-face {
            font-family: 'Nunito Sans Light';
            src: url('/fonts/NunitoSans/NunitoSans-Light.ttf');
            font-display: swap;
        }

        @font-face {
            font-family: 'Nunito Sans Regular';
            src: url('/fonts/NunitoSans/NunitoSans-Regular.ttf');
            font-display: swap;
        }

        @font-face {
            font-family: 'Nunito Sans SemiBold';
            src: url('/fonts/NunitoSans/NunitoSans-SemiBold.ttf');
            font-display: swap;
        }

        @font-face {
            font-family: 'Nunito Sans Bold';
            src: url('/fonts/NunitoSans/NunitoSans-Bold.ttf');
            font-display: swap;
        }

        @font-face {
            font-family: 'Nunito Sans ExtraBold';
            src: url('/fonts/NunitoSans/NunitoSans-ExtraBold.ttf');
            font-display: swap;
        }

        @font-face {
            font-family: 'Nunito Sans Black';
            src: url('/fonts/NunitoSans/NunitoSans-Black.ttf');
            font-display: swap;
        }
    }
`;
