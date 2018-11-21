import React from "react";
import Avataaar from "avataaars";
import styled from "styled-components";
import random from "lodash.random";
import { avataaarTypes } from "./types";

const getType = type => type[random(0, type.length)];

const Root = styled.div`
  width: 40px;
  height: 40px;
`;

const Avatar = props => (
  <Root>
    <Avataaar
      accessoriesType={getType(avataaarTypes.accessories)}
      avatarStyle="Circle"
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
