import React from "react";
import styled from "styled-components";
import random from "lodash.random";
import times from "lodash.times";
import PropTypes from "prop-types";

const heights = [18, 14, 8];

const TextLine = styled.div`
  height: ${props => heights[props.size]}px;
  background-color: #ccc;
  border-radius: 10px;
  width: ${props => props.length}%;
  margin-bottom: ${props => heights[props.size] * 1.6 - heights[props.size]}px;
`;

const Text = props => (
  <div>
    {times(props.lines, i => (
      <TextLine key={i} length={random(90, 98)} {...props} />
    ))}
  </div>
);

Text.defaultProps = {
  size: 2,
  lines: 3
};

Text.propTypes = {
  size: PropTypes.oneOf([0, 1, 2]),
  lines: PropTypes.number
};

export default Text;
