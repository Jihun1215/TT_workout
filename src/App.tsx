import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import Map from './Map';
import axios from 'axios';


declare global {
  interface Window {
    kakao: any;
  }
}

const App = () => {
  
  return (
    <Continer>
      <Map />
    </Continer>
  )
}

export default App

const Continer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;