import { ThemeProvider } from "styled-components";
import React from "react";
import theme from "./theme";
import Feed from "./Feed";
import Header from "./Header";
import { BrowserView, MobileView } from "react-device-detect";
import Banner from "./Banner";

const App = props => (
  <ThemeProvider theme={theme}>
    <div>
      <BrowserView>This is a browser</BrowserView>
      <MobileView>
        <Header />
        <Feed />
        {window.navigator.standalone || <Banner />}
      </MobileView>
    </div>
  </ThemeProvider>
);

export default App;
