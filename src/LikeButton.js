import React, { Component } from "react";
import theme from "./theme";

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }

  render() {
    const { liked } = this.state;
    return (
      <div onClick={() => this.setState({ liked: !liked })}>
        <svg height={30} viewBox="0 0 200 200">
          <path
            d="M139.523717,22.0031862 C124.115952,21.9516148 109.612241,29.2402941 100.5,41.6141226 C88.0657184,24.8385508 66.224375,17.9057468 46.3362799,24.4216612 C26.4481848,30.9375756 13.0054387,49.4304664 13,70.2816498 C13,129.602382 94.662875,175.46778 98.1396972,177.391064 C99.607639,178.202979 101.392361,178.202979 102.860303,177.391064 C106.337222,175.46778 188,129.602382 188,70.2816498 C187.970103,43.6305338 166.284035,22.0329616 139.523717,22.0031862 Z"
            fill={liked ? theme.colors.pink : "none"}
            stroke={liked ? "none" : theme.colors.pink}
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
}

export default LikeButton;
