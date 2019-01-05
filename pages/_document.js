import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet, createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.blue ? 'blue' : 'black')};
    font-family: ${props => props.theme.fontFamily};
    overflow-y: scroll;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Retrieve styles from components in the page
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));

    // Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="eu">
        <Head>
          <title>My page</title>
          {/* Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body>
          {/* Output Theme and Global style in the body  */}
          <ThemeProvider theme={{ fontFamily: 'Georgia, Times New Roman, Times, serif' }}>
            <React.Fragment>
              <GlobalStyle blue />
              <Main />
              <NextScript />
            </React.Fragment>
          </ThemeProvider>
        </body>
      </html>
    );
  }
}
