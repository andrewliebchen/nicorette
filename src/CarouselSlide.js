import React from "react";
import PropTypes from "prop-types";
import { Slide } from "pure-react-carousel";
import styled from "styled-components";
import { Flex, Box } from "reflexbox";
import { themeGet } from "styled-system";
import Color from "color";
import Text from "./Text";

const SlideBox = styled(Flex)`
  border: 1px solid ${themeGet("colors.gray3")};
  height: 60vw;
  width: 60vw;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`;

const ColorBox = styled(Box)`
  background-color: ${props =>
    Color(props.color)
      .rotate(15 * props.index)
      .string()};
`;

const CarouselSlide = props => (
  <Slide index={props.index}>
    <SlideBox ml={2} column justify="space-between">
      <ColorBox w={1} auto {...props} />
      <Box p={2}>
        <Text lines={2} />
      </Box>
    </SlideBox>
  </Slide>
);

CarouselSlide.propTypes = {
  index: PropTypes.number,
  color: PropTypes.string,
  slideCount: PropTypes.number
};

export default CarouselSlide;
