import styled from 'styled-components';
import React from 'react';

const StyledTitle = styled.h1`
  color: red;
`;

const Title = () => (
  <React.Fragment>
    <StyledTitle>styled test</StyledTitle>
  </React.Fragment>
);

export default Title;
