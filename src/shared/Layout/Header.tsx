import React from 'react'
import styled, { css } from 'styled-components';

const Header = () => {
  return (
    <HeaderContiner>
    </HeaderContiner>
  )
}

export default Header

const HeaderContiner = styled.header`
  width: 100%;
  height: 3.5rem;
  position: fixed;
  top: 0;
  left: 0;
  border: 1px solid red;
  z-index: 99;
`;