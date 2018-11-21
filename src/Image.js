import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Root = styled.div`
  height: 100%;
  width: 100%;
`;

const Image = props => <Root style={{ backgroundColor: props.hue.base }} />;

Image.propTypes = {
  hue: PropTypes.object
};

export default Image;
