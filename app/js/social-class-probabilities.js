import React from "react";
import { extractProbabilityString } from "./utils.js"

export default class SocialClassesProbabilities extends React.Component {
  render() {
    let probabilitiesList = null;
    if (this.props.probabilities) {
      probabilitiesList = this.props.probabilities.map(function(item) {
        return (
          <tr key={item.name}>
            <td>{item.name}</td ><td>{item.probability}</td>
          </tr>
        );
      });
    } else {
      probabilitiesList = <tr><td><div className="alert alert-warning" role="alert"><strong>No social classes defined</strong> for this race!</div></td></tr>;
    }

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Social class probability</th>
            </tr>
          </thead>
          <tbody>
            {probabilitiesList}
          </tbody>
        </table>
      </div>
    );
  }
}
