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

    const onClickZoomInMap = () =>{
        _map?.setLevel(_map.getLevel() - 1);
    }
  
    const onClickZoomOutMap = () =>{
        _map?.setLevel(_map.getLevel() + 1);
    }


  return (
    <Continer id="map">
        <BtnContiner>
        <button onClick={onClickZoomInMap}><p>+</p></button>
        <button onClick={onClickZoomOutMap}><p>-</p></button>
    
      </BtnContiner>
    </Continer>
  )
}

export default Map

const Continer = styled.div`
    width: 31.25rem;
    height: 43.75rem;
    position: relative;
`;

const BtnContiner= styled.div`
    position: absolute;
    width: 6.25rem;
    height: 3.125rem;
    left: .3125rem;
    bottom: 1.5625rem;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 5px;
    > button {
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
        border-radius: 2rem;
        border: 1px solid #878787;
        opacity: 0.7;
        > p {
            font-size: 1.25rem;
        }
    }
`;