import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { CarouselProvider, Slider } from "pure-react-carousel";
import CarouselSlide from "./CarouselSlide";
import times from "lodash.times";
import "pure-react-carousel/dist/react-carousel.es.css";

const slideCount = 5;

const Root = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Carousel = props => (
  <Root>
    <CarouselProvider
      naturalSlideWidth={60}
      naturalSlideHeight={60}
      totalSlides={slideCount}
      visibleSlides={1.5}
    >
      <Slider>
        {times(slideCount, i => (
          <CarouselSlide
            key={i}
            index={i}
            color={props.hue.base}
            slideCount={slideCount}
          />
        ))}
      </Slider>
    </CarouselProvider>
  </Root>
);

Carousel.propTypes = {
  hue: PropTypes.object
};

export default Carousel;
