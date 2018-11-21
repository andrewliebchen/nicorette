import React from "react";
import FeedItem from "./FeedItem";
import times from "lodash.times";
import random from "lodash.random";
import ScrollViewport from "react-scroll-viewport";
import { feedTypes } from "./types";

const App = props => (
  <ScrollViewport overscan={10}>
    {times(1000, i => (
      <FeedItem key={i} type={feedTypes[random(0, feedTypes.length)]} />
    ))}
  </ScrollViewport>
);

export default App;
