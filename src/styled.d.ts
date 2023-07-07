import "styled-components";
//https://styled-components.com/docs/api#typescript
declare module "styled-components" {
  export interface DefaultTheme {
    primary:string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;

    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;

    backgroud: string;

    onInverseSurface: string;
    inversePrimary: string;
  }
}