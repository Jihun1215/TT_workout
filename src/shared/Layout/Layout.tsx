import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Continer>
       <Header/>
       <Outlet/>
    </Continer>
  )
}

export default Layout


const Continer  = styled.main`
  width: 100%;
  height: 100%;
  padding-top: 3.125rem;
`;