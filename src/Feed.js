import React from "react";
import times from "lodash.times";
import ScrollViewport from "react-scroll-viewport";
import { feedTypes } from "./types";
import FeedItem from "./FeedItem";
import random from "lodash.random";
import styled from "styled-components";
import { themeGet } from "styled-system";

const Root = styled.div`
  padding-top: ${themeGet("sizes.headerHeight")}px;
`;

const Feed = props => (
  <Root>
    <ScrollViewport overscan={10}>
      {times(1000, i => (
        <FeedItem key={i} type={feedTypes[random(0, feedTypes.length)]} />
      ))}
    </ScrollViewport>
  </Root>
);

export default Feed;
