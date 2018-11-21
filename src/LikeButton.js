import React, { Component } from "react";

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
        {liked ? "liked" : "like"}
      </div>
    );
  }
}

export default LikeButton;
