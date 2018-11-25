import React from "react";
import { Flex, Box } from "reflexbox";
import { themeGet } from "styled-system";
import styled from "styled-components";
import logo from "./images/n_filled.svg";

const Root = styled(Flex)`
  height: 100vh;
  width: 100vw;
  background-color: ${themeGet("colors.gray9")};
  color: white;
`;

const LandingPage = props => (
  <Root align="center" justify="center">
    <Box w={1 / 2}>
      <Box mb={2}>
        <img src={logo} height={48} alt="Nicorette logo" />
      </Box>

      <h1>Feed your feed cravings. Safely.</h1>
      <p>
        Nicorette gives you all the satisfaction from scrolling through your
        endless Facebook, Twitter, or Instagram feed without the risk of
        exposure to dangerous content.
      </p>
      <p>
        The placeholder content in your Nicorette feed keeps you safe from fake
        news, flame wars, trolling, or retargeting ads.
      </p>
      <p>
        Add Nicorette to your phone's homescreen, and satisify your scroll
        cravings safely!
      </p>
    </Box>
  </Root>
);

export default LandingPage;
