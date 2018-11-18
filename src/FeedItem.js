import React from "react";
import bikeshed from "@jxnblk/bikeshed";
import styled from "styled-components";
import hello from "hello-color";

const Root = styled.div`
  background-color: ${props => props.hue.base};
  height: 200px;
  width: 200px;
  color: ${props => props.hue.color};
`;

const FeedItem = props => <Root hue={hello(bikeshed())}>FeedItem</Root>;

export default FeedItem;
