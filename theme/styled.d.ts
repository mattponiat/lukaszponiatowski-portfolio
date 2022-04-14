import "styled-components";
import theme from "theme/theme";

type Theme = typeof theme;

declare module "styled-components" {
  export type Theme = typeof theme;
}
