import Head from "next/head";
import { AppProps } from "next/app";
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
  return (
    <>
      <Head>
        <meta
          name="description"
          content="LAN Digital je tu da Vašem biznisu pruži digitalni temelj na kom može da raste."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
