import React from "react";
import styled from "styled-components";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Globalstyle";
import { Theme } from "./styles/theme";
import Reset from "./styles/Reset";

import useWeather from "./hooks/useWeather";

import Layout from "./shared/Layout/Layout";

declare global {
  interface Window {
    kakao: any;
  }
}

const App = () => {
  const { weather } = useWeather();

  const theme = { ...Theme };

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
