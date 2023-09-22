import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

declare global {
    interface Window {
      kakao: any;
    }
  }


const Map = () => {

    const [_map, setMap ] = useState<any>();

    useEffect(() => {

    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    let options = { //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(37.050701, 128.570667), //지도의 중심좌표.
      level: 12 //지도의 레벨(확대, 축소 정도)
    };

    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    setMap(map)
    }, [])

    // const onClickZoomInMap = () =>{
    //     _map?.setLevel(_map.getLevel() - 1);
    // }
  
    // const onClickZoomOutMap = () =>{
    //     _map?.setLevel(_map.getLevel() + 1);
    // }


  return (
    <Continer id="map">
    </Continer>
  )
}

export default Map

const Continer = styled.div`
    width: 31.25rem;
    height: 43.75rem;
    position: relative;
`;

