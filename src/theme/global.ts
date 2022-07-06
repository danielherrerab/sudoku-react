import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
${props => css`
  html {
    height: 100%;
    font-family: 'Montserrat', sans-serif;

    body {
      height: 100%;
      margin: 0;

      #root {
        display: flex;
        flex-direction: column;
      }

      #app {
        color: ${props.theme.fontColor};
        background: ${props.theme.background};
        background: ${props.theme.backgroundGradient};
        display: flex;
        min-height: 100vh;
      }
    }
  }
`}`
