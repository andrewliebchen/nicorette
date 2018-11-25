import React from "react";
import styled, { keyframes } from "styled-components";
import { Flex, Box } from "reflexbox";
import { themeGet } from "styled-system";
import logo from "./images/n_filled.svg";

const hop = keyframes`
  0% {
    transform: scale(1) translateY(0);
  }

  90% {
    transform: scale(0.98) translateY(-10%);
  }

  100% {
    transform: scale(0.98) translateY(-10%);
  }
`;

const Root = styled(Flex)`
  backface-visibility: visible;
  animation: ${hop} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite
    alternate;
  position: fixed;
  bottom: 16px;
  left: 16px;
  right: 16px;
  background-color: ${themeGet("colors.gray9")};
  border-radius: 8px;
  color: white;

  ${"" /* &::after {
    content: "";
    background-color: inherit;
    position: absolute;
    height: 16px;
    width: 16px;
    bottom: 0;
    left: 50%;
    transform: translate3d(-50%, 50%, 0) rotate(45deg);
  } */};
`;

const Logo = styled(Box)`
  position: relative;
  bottom: -2px;
`;

const Banner = props => (
  <Root p={2} align="center">
    <Logo mr={2}>
      <img src={logo} height={36} alt="Nicorette logo" />
    </Logo>
    <Flex column>
      <h3>Mindlessly scroll better!</h3>
      <Box>Add to your homescreen</Box>
    </Flex>
  </Root>
);

export default Banner;
