import { defualtTheme } from '../styles/defaultTheme';

// inferência de tipos
type Theme = typeof defualtTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
