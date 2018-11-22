import { feedTypes } from "./types";
import { ThemeProvider } from "styled-components";
import FeedItem from "./FeedItem";
import random from "lodash.random";
import React from "react";
import ScrollViewport from "react-scroll-viewport";
import theme from "./theme";
import times from "lodash.times";

const App = props => (
  <ThemeProvider theme={theme}>
    <ScrollViewport overscan={10}>
      {times(1000, i => (
        <FeedItem key={i} type={feedTypes[random(0, feedTypes.length)]} />
      ))}
    </ScrollViewport>
  </ThemeProvider>
);

export default App;
