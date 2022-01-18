
import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`


body{
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  max-width: 100%;
  height: auto;
}
* {
  max-width: 100%;
  height: auto;
}
`;
 
const theme = {
  colors: {
    primary: "#fafafa",
    
  },
};
function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <GlobalStyle />
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
</>
}

export default MyApp
