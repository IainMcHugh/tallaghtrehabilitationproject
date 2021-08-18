// See docs: https://styled-components.com/docs/api#typescript
// import original module declarations
import 'styled-components';
// import { ThemeTypes } from '../types/Theme.namespace';
// and extend
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      BLUE: string;
      BLUE_LIGHT: string;
      BLUE_LIGHTER: string;
      YELLOW: string;
      YELLOW_LIGHT: string;
      YELLOW_LIGHTER: string;
      GREY: string;
      GREY_LIGHT: string;
      GREY_LIGHTER: string;
      GREY_DARK: string;
      GREY_DARKER: string;
      WHITE: string;
      BLACK: string;
      OFFWHITE: string;
    };
    spacing: {
      S2: string;
      S4: string;
      S8: string;
      S12: string;
      S16: string;
      S20: string;
      S24: string;
      S28: string;
      S32: string;
      S36: string;
      S40: string;
      S48: string;
      S56: string;
      S64: string;
      S72: string;
      S80: string;
    };
    fontSize: {
      F1016: string;
      F1216: string;
      F1616: string;
      F1624: string;
      F1824: string;
      F2424: string;
    };
    borderRadius: {
      default: string;
    };
    fontWeight: {
      regular: 400;
      bold: 700;
    };
    shadow: {
      drop: string;
    };
  }
}
