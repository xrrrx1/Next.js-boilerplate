import styled from 'styled-components';
import React, { useContext } from 'react';

import { HeadersColorContext } from '../context/context';

const StyledTitle = styled.h1`
  color: ${props => props.headerColor};
`;

const Title = () => {
  const HeadersColor = useContext(HeadersColorContext);

  return (
    <div>
      <StyledTitle headerColor={HeadersColor}>styled test</StyledTitle>
    </div>
  );
};

export default Title;
