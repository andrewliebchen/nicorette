import React from "react";
import Avataaar from "avataaars";
import styled from "styled-components";

// Gotta randomize these params

const Root = styled.div``;

const Avatar = props => (
  <Root>
    <Avataaar style={{ width: "50px", height: "50px" }} />
  </Root>
);

export default Avatar;
