import React from "react";
import PropTypes from "prop-types";
import { Slide } from "pure-react-carousel";
import styled from "styled-components";
import { Flex, Box } from "reflexbox";

const SlideBox = styled(Flex)`
  border: 1px solid;
  height: 60vw;
  width: 60vw;
`;

const CarouselSlide = props => (
  <Slide index={props.index}>
    <SlideBox>{props.children}</SlideBox>
  </Slide>
);

CarouselSlide.propTypes = {
  index: PropTypes.number,
  color: PropTypes.string,
  slideCount: PropTypes.number
};

export default CarouselSlide;
