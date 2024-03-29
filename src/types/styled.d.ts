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
      BLUE_DARK: string;
      YELLOW: string;
      YELLOW_LIGHT: string;
      YELLOW_LIGHTER: string;
      YELLOW_DARK: string;
      YELLOW_DARKER: string;
      PINK: string;
      PINK_LIGHT: string;
      GREEN: string;
      GREEN_LIGHT: string;
      PURPLE: string;
      PURPLE_LIGHT: string;
      RED: string;
      RED_LIGHT: string;
      TURQUOISE: string;
      TURQUOISE_LIGHT: string;
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
      F1416: string;
      F1616: string;
      F1418: string;
      F1618: string;
      F1818: string;
      F1424: string;
      F1624: string;
      F1824: string;
      F2424: string;
      F2428: string;
      F2828: string;
    };
    borderRadius: {
      all4: string;
      all8: string;
      bottom4: string;
      bottom8: string;
      top4: string;
      top8: string;
      drop4: string;
      drop8: string;
    };
    fontWeight: {
      light: 300;
      medium: 400;
      bold: 700;
    };
    shadow: {
      drop: string;
      inset: string;
    };
  }
}
