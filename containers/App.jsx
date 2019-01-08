import React, { useContext } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Title from '../components/Title';
import { TextColorContext } from '../context/context';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.textColor};
    font-family: ${props => props.theme.fontFamily};
    overflow-y: scroll;
  }
`;

const App = () => {
  const TextColor = useContext(TextColorContext);

  return (
    <ThemeProvider theme={{ fontFamily: 'Georgia, Times New Roman, Times, serif' }}>
      <React.Fragment>
        <GlobalStyle textColor={TextColor} />

        <Title />

        <span>Next default</span>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
