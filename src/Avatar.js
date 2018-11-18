import React from "react";
import Avataaar from "avataaars";
import styled from "styled-components";

// Gotta randomize these params

const Root = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ccc;
  border-radius: 40px;
  overflow: hidden;
`;

const Avatar = props => (
  <Root>
    <Avataaar style={{ width: "40px", height: "40px" }} />
  </Root>
);

export default Avatar;
