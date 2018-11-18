import React from "react";
import styled from "styled-components";
import random from "lodash.random";
import times from "lodash.times";

const heights = [18, 14, 8];

const TextLine = styled.div`
  height: ${props => heights[props.height]}px;
  background-color: #ccc;
  border-radius: 10px;
  width: ${props => props.length}%;
  margin-bottom: ${props =>
    heights[props.height] * 1.6 - heights[props.height]}px;
`;

const Text = props => (
  <div>
    {times(props.lines, i => (
      <TextLine key={i} length={random(90, 98)} {...props} />
    ))}
  </div>
);

Text.defaultProps = {
  height: 2,
  lines: 3
};

export default Text;
