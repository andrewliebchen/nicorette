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
import TextFeature from "./TextFeature";

const Root = styled(Flex)`
  background-color: white;
`;

const Feature = styled.div`
  height: 60vw;
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
    case "text":
      item = <TextFeature hue={hue} />;
      break;
    default:
      item = <Image hue={hue} />;
  }
  return item;
};

const FeedItem = props => (
  <Root column mb={2}>
    <Flex align="center" p={2}>
      <Avatar />
      <Box pl={1} w={1} pt={1}>
        <Text lines={1} size={1} />
        <Text lines={1} size={2} />
      </Box>
    </Flex>
    <Feature>{FeatureItem(props.type)}</Feature>
    <Box p={2}>
      <Text pb={1} />
      <LikeButton />
    </Box>
  </Root>
);

FeedItem.propTypes = {
  type: PropTypes.oneOf(feedTypes)
};

export default FeedItem;
