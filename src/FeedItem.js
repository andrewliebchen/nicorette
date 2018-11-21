import { Box, Flex } from "reflexbox";
import { feedTypes } from "./types";
import Avatar from "./Avatar";
import bikeshed from "@jxnblk/bikeshed";
import Carousel from "./Carousel";
import hello from "hello-color";
import Image from "./Image";
import LikeButton from "./LikeButton";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Text from "./Text";
import Video from "./Video";

const Feature = styled.div`
  height: 200px;
  width: 100%;
`;

const FeatureItem = type => {
  const hue = hello(bikeshed());
  let item;
  switch (type) {
    case "video":
      item = <Video hue={hue} />;
      break;
    case "carousel":
      item = <Carousel hue={hue} />;
      break;
    default:
      item = <Image hue={hue} />;
  }
  return item;
};

const FeedItem = props => (
  <Flex column p={2}>
    <Flex align="center">
      <Avatar />
      <Box pl={2} w={1}>
        <Text lines={1} size={1} />
        <Text lines={1} size={2} />
      </Box>
    </Flex>
    <Feature>{FeatureItem(props.type)}</Feature>
    <Text />
    <LikeButton />
  </Flex>
);

FeedItem.propTypes = {
  type: PropTypes.oneOf(feedTypes)
};

export default FeedItem;
