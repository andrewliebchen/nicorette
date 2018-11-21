import React from "react";
import bikeshed from "@jxnblk/bikeshed";
import styled from "styled-components";
import hello from "hello-color";
import Avatar from "./Avatar";
import Text from "./Text";
import { Box, Flex } from "reflexbox";
import PropTypes from "prop-types";
import { feedTypes } from "./types";
import LikeButton from "./LikeButton";

const Feature = styled.div`
  background-color: ${props => props.hue.base};
  height: 200px;
  width: 100%;
  color: ${props => props.hue.color};
`;

const FeedItem = props => (
  <Flex column p={2}>
    <Flex align="center">
      <Avatar />
      <Box pl={2} w={1}>
        <Text lines={1} size={1} />
        <Text lines={1} size={2} />
      </Box>
    </Flex>
    <Feature hue={hello(bikeshed())} />
    <Text />
    <LikeButton />
  </Flex>
);

FeedItem.propTypes = {
  type: PropTypes.oneOf(feedTypes)
};

export default FeedItem;
