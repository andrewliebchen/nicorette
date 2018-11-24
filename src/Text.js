import { Flex } from "reflexbox";
import React from "react";
import styled from "styled-components";
import random from "lodash.random";
import times from "lodash.times";
import PropTypes from "prop-types";
import { themeGet } from "styled-system";

const heights = [18, 14, 8];

const TextLine = styled.div`
  height: ${props => heights[props.size]}px;
  background-color: ${props => props.color || themeGet("colors.gray2")};
  border-radius: 10px;
  width: ${props => props.length}%;
  margin-bottom: ${props => heights[props.size] * 1.6 - heights[props.size]}px;
  margin-left: ${props => props.center && "auto"};
  margin-right: ${props => props.center && "auto"};
`;

const Text = props => (
  <Flex column {...props}>
    {times(props.lines, i => (
      <TextLine
        key={i}
        length={
          props.lines > 1 && i < props.lines - 1
            ? random(85, 98)
            : random(40, 80)
        }
        {...props}
      />
    ))}
  </Flex>
);

Text.defaultProps = {
  size: 2,
  lines: 3
};

Text.propTypes = {
  size: PropTypes.oneOf([0, 1, 2]),
  lines: PropTypes.number,
  color: PropTypes.string,
  center: PropTypes.boolean
};

export default Text;
