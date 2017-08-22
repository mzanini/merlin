import React from 'react'

export default class JsonToCsvTranslator extends React.Component {
  render() {
    return (
        <button className="btn btn-default btn-md" onClick={this.props.clickThisBaby}>Export to Excel</button>
    )
  }
}
