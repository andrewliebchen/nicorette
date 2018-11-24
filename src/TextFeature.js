import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Text from "./Text";
import { Flex } from "reflexbox";
import Color from "color";

const Root = styled(Flex)`
  height: 100%;
  width: 100%;
`;

const TextFeature = props => (
  <Root
    align="center"
    justify="center"
    style={{ backgroundColor: props.hue.base }}
  >
    <Flex w={0.8}>
      <Text
        w={1}
        size={0}
        color={
          Color(props.hue.base).isLight()
            ? "rgba(0, 0, 0, 0.15)"
            : "rgba(255, 255, 255, 0.2)"
        }
        center
        lines={4}
      />
    </Flex>
  </Root>
);

TextFeature.propTypes = {
  hue: PropTypes.object
};

export default TextFeature;
