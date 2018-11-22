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
import { themeGet } from "styled-system";

const Root = styled(Box)`
  background-color: ${themeGet("colors.gray0")};
  overflow: visible;
`;

const Card = styled(Flex)`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.05);
`;

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
  <Root px={2} py={1}>
    <Card column>
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
    </Card>
  </Root>
);

FeedItem.propTypes = {
  type: PropTypes.oneOf(feedTypes)
};

export default FeedItem;
