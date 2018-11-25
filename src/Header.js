import { Flex } from "reflexbox";
import { themeGet } from "styled-system";
import React from "react";
import styled from "styled-components";
import Headroom from "react-headroom";
import logo from "./images/n_filled.svg";

const Root = styled(Flex)`
  background-color: ${themeGet("colors.gray9")};
  color: white;
  height: ${themeGet("sizes.headerHeight")}px;
`;

const Header = props => (
  <Headroom>
    <Root px={2} w={1} justify="center" align="center">
      <img src={logo} height={24} alt="Nicorette logo" />
    </Root>
  </Headroom>
);

export default Header;
