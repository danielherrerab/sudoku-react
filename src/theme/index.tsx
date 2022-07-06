
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './global';

interface ThemeProps {
  children: JSX.Element
}

export const themeVariables =  {
  background: 'rgb(33,37,43)',
  backgroundGradient: ' linear-gradient(90deg, rgba(33,37,43,1) 0%, rgba(55,61,72,1) 75%, rgba(33,37,43,1) 100%)',
  fontColor: '#fff',
  transition: '0.3s',
  primaryColor: '113, 218, 218',
  primaryColorRgb: '154, 229, 229',
  primaryColorTint: '#9ae5e5',
  primaryColorTintRgb: '154, 229, 229',
}

const Theme = ({ children } : ThemeProps) => {
  return (
    <ThemeProvider theme={themeVariables}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  ) 
};

export default Theme;



