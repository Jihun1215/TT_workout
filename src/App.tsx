import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import Map from './Map';


declare global {
  interface Window {
    kakao: any;
  }
}

const App = () => {
  // const [_map, setMap ] = useState<any>();



  // useEffect(() => {
  //   let container = document.getElementById('map'); 

  //   let options = { 
  //     center: new window.kakao.maps.LatLng(36.550701, 127.370667), 
  //     level: 12
  //   };

  //   let map = new window.kakao.maps.Map(container, options); 
  //   setMap(map)

  // }, [])

  // const onClickZoomInMap = () =>{
  //   _map?.setLevel(_map.getLevel() - 1);
  // }
  
  // const onClickZoomOutMap = () =>{
  //   _map?.setLevel(_map.getLevel() + 1);
  // }

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