import React from "react";
import times from "lodash.times";
import ScrollViewport from "react-scroll-viewport";
import { feedTypes } from "./types";
import FeedItem from "./FeedItem";
import random from "lodash.random";

const Feed = props => (
  <div>
    <ScrollViewport overscan={10}>
      {times(1000, i => (
        <FeedItem key={i} type={feedTypes[random(0, feedTypes.length)]} />
      ))}
    </ScrollViewport>
  </div>
);

export default Feed;
