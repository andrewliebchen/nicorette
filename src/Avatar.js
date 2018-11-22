import React from "react";
import Avataaar from "avataaars";
import styled from "styled-components";
import random from "lodash.random";
import { avataaarTypes } from "./types";
import bikeshed from "@jxnblk/bikeshed";
import Color from "color";

const getType = type => type[random(0, type.length)];

const Root = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: ${props =>
    Color(props.bg)
      .fade(0.7)
      .string()};
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
`;

const Avatar = props => (
  <Root bg={bikeshed()}>
    <Avataaar
      accessoriesType={getType(avataaarTypes.accessories)}
      clotheColor={getType(avataaarTypes.clothes)}
      clotheType={getType(avataaarTypes.clothes)}
      eyebrowType={getType(avataaarTypes.eyebrows)}
      eyeType={getType(avataaarTypes.eyes)}
      facialHairType={getType(avataaarTypes.facialHair)}
      hairColors={getType(avataaarTypes.hairColors)}
      mouthType={getType(avataaarTypes.mouths)}
      skinColor={getType(avataaarTypes.skinColors)}
      style={{ width: "40px", height: "40px" }}
      topType={getType(avataaarTypes.tops)}
    />
  </Root>
);

export default Avatar;
