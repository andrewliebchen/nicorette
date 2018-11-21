import React from "react";
import FeedItem from "./FeedItem";
import times from "lodash.times";
import ScrollViewport from "react-scroll-viewport";

const App = props => (
  <ScrollViewport overscan={10}>
    {times(1000, i => (
      <FeedItem key={i} />
    ))}
  </ScrollViewport>
);

export default App;
