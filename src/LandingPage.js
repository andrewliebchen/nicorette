import React from "react";
import { Flex, Box } from "reflexbox";
import { themeGet } from "styled-system";
import styled from "styled-components";
import logo from "./images/n_filled.svg";
import demo from "./images/demo.gif";

const Root = styled(Flex)`
  height: 100vh;
  width: 100vw;
  background-color: ${themeGet("colors.gray9")};
  color: white;
`;

const Demo = styled.div`
  overflow: hidden;
  border-radius: 58px;
  display: inline-block;
  height: 847px;
  box-shadow: 0 10px 60px rgba(0, 0, 0, 0.5);
`;

const LandingPage = props => (
  <Root align="center" justify="center">
    <Box w={1 / 3} mr={4}>
      <Box mb={2}>
        <img src={logo} height={48} alt="Nicorette logo" />
      </Box>

      <h1>Feed your feed cravings. Safely.</h1>
      <p>
        <b>Nicorette</b> gives you all the satisfaction from scrolling through
        your endless Facebook, Twitter, or Instagram feed without the risk of
        exposure to dangerous content.
      </p>
      <p>
        The placeholder content in your Nicorette feed keeps you safe from fake
        news, flame wars, trolling, or retargeting ads.
      </p>
      <p>
        Add <b>Nicorette</b> to your phone's homescreen, and satisify your
        scroll cravings safely!
      </p>
      <small>
        Brought to you by <a href="andrewliebchen.com">me</a>
      </small>
    </Box>
    <Box>
      <Demo>
        <img src={demo} alt="Demo" />
      </Demo>
    </Box>
  </Root>
);

export default LandingPage;
