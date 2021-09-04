import { theme } from 'styles/theme';

export namespace ThemeTypes {
  export type Colors = keyof typeof theme.colors;
  export type Spacing = keyof typeof theme.spacing;
  export type BorderRadius = keyof typeof theme.borderRadius;
  export type FontSize = keyof typeof theme.fontSize;
  export type FontWeight = keyof typeof theme.fontWeight;
  export type Shadow = keyof typeof theme.shadow;
}
