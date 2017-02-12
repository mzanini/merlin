import React from 'react';

export default class RollButton extends React.Component {
  render() {
    return (
        <button className="btn btn-default btn-md" disabled={this.props.disabled} onClick={this.props.func}>{this.props.text}</button>
    )
  }
}
