import React from "react";
import bikeshed from "@jxnblk/bikeshed";
import styled from "styled-components";
import hello from "hello-color";
import Avatar from "./Avatar";
import Text from "./Text";

const Feature = styled.div`
  background-color: ${props => props.hue.base};
  height: 200px;
  width: 200px;
  color: ${props => props.hue.color};
`;

const FeedItem = props => (
  <div>
    <Avatar />
    <Feature hue={hello(bikeshed())}>FeedItem</Feature>
    <Text />
  </div>
);

export default FeedItem;
