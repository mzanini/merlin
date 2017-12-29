import React from "react";
import RollButton from "./roll-button"

export default class RollControl extends React.Component {
  render() {
    return (
        <ul className="list-unstyled">
          <li><RollButton text="Roll Race" disabled={!this.props.buttonsState.racesTableReady} func={this.props.rollRace}/></li>
          <li><RollButton text="Roll Social Class" disabled={!this.props.buttonsState.socialClassesTableReady} func={this.props.rollSocialClass}/></li>
          <li><RollButton text="Roll Minors" disabled={!this.props.buttonsState.minorsTableReady} func={this.props.rollMinors}/></li>
          <li><RollButton text="Roll Stats" disabled={false} func={this.props.rollStats}/></li>
          <li><RollButton text="Roll All" disabled={!this.props.buttonsState.racesTableReady && !this.props.buttonsState.socialClassesTableReady && !this.props.buttonsState.minorsTableReady} func={this.props.rollAll}/></li>
        </ul>
    )
  }
}
