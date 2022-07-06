import 'styled-components';
import { themeVariables } from '../theme'

type Theme = typeof themeVariables

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
