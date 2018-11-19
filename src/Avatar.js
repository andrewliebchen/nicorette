import React from "react";
import Avataaar from "avataaars";
import styled from "styled-components";
import random from "lodash.random";
import {
  accessoriesTypes,
  clothesColors,
  clothesTypes,
  eyebrowTypes,
  eyeTypes,
  facialHairTypes,
  hairColors,
  mouthTypes,
  skinColors,
  topTypes
} from "./avatarTypes";

const getType = type => type[random(0, type.length)];

const Root = styled.div`
  width: 40px;
  height: 40px;
`;

const Avatar = props => (
  <Root>
    <Avataaar
      accessoriesType={getType(accessoriesTypes)}
      avatarStyle="Circle"
      clotheColor={getType(clothesColors)}
      clotheType={getType(clothesTypes)}
      eyebrowType={getType(eyebrowTypes)}
      eyeType={getType(eyeTypes)}
      facialHairType={getType(facialHairTypes)}
      hairColors={getType(hairColors)}
      mouthType={getType(mouthTypes)}
      skinColor={getType(skinColors)}
      style={{ width: "40px", height: "40px" }}
      topType={getType(topTypes)}
    />
  </Root>
);

export default Avatar;
