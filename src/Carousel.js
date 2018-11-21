import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Root = styled.div`
  height: 100%;
  width: 100%;
`;

const Carousel = props => (
  <Root style={{ backgroundColor: props.hue.base }}>Carousel</Root>
);

Carousel.propTypes = {
  hue: PropTypes.object
};

export default Carousel;
