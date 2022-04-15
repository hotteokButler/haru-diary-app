import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    accentColor?: string;
    liBgColor?: string;
    liTextColor?: string;
    lightPinkColor?: string;
    mainBoardColor?: string;
    pinkBeigeColor?: string;
  }
}
