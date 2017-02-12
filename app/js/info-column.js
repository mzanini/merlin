import React from "react";

export default class InfoColumn extends React.Component {
  render() {
    return (
      <div>
        {this.props.info}
      </div>
    );
  }
}
