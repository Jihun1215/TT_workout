import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/Globalstyle';
import { Theme } from './styles/theme';
import Reset from './styles/Reset';

import useWeather from './hooks/useWeather'

import Map from './Map';
import axios from 'axios';


declare global {
  interface Window {
    kakao: any;
  }
}

const App = () => {
  const { weather } = useWeather();

  console.log(weather)
  const theme = {...Theme}
  
  return (
    <ThemeProvider theme={theme}>
    <Reset />
    <GlobalStyle />
    <Continer>
      1212
      <h1>폰트</h1>
      <h2>폰2</h2>
      <h3>2</h3>
      {/* <Map /> */}
    </Continer>
    </ThemeProvider>

  )
}

export default App

const Continer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  > h1 {
    ${props => props.theme.Body_700_16}
  }
  > h2 {
    ${props => props.theme.Body_500_14}
  }
`;