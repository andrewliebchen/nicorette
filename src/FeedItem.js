import React from "react";
import bikeshed from "@jxnblk/bikeshed";
import styled from "styled-components";
import hello from "hello-color";
import Avatar from "./Avatar";
import Text from "./Text";
import { Box, Flex } from "reflexbox";

const Feature = styled.div`
  background-color: ${props => props.hue.base};
  height: 200px;
  width: 200px;
  color: ${props => props.hue.color};
`;

const FeedItem = props => (
  <Flex column>
    <Flex align="center">
      <Avatar />
      <Box pl={2} w={1}>
        <Text lines={1} size={1} />
        <Text lines={1} size={2} />
      </Box>
    </Flex>
    <Feature hue={hello(bikeshed())}>FeedItem</Feature>
    <Text />
  </Flex>
);

export default FeedItem;
