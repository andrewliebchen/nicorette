import { BrowserView, MobileView } from "react-device-detect";
import { ThemeProvider } from "styled-components";
import Banner from "./Banner";
import Feed from "./Feed";
import Header from "./Header";
import LandingPage from "./LandingPage";
import React from "react";
import theme from "./theme";

const App = props => (
  <ThemeProvider theme={theme}>
    <div>
      <BrowserView>
        <LandingPage />
      </BrowserView>
      <MobileView>
        <Header />
        <Feed />
        {window.navigator.standalone || <Banner />}
      </MobileView>
    </div>
  </ThemeProvider>
);

export default App;
