import React from "react";
import { extractProbabilityString } from "./utils.js"

export default class RacesProbabilities extends React.Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Race Probability</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.probabilities.map(function(item, index) {
                return (
                  <tr key={index}>
                    <td>{item.name}</td ><td>{item.probability}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}
