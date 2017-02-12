import React from "react";

class Chart extends React.Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Chart {this.props.chart.chart}</th><th>Probability: {this.props.chart.probability}</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.chart.abilities.map(function(ability) {
              return(
                  <tr key={ability.number}>
                    <td>{ability.name}</td ><td>{ability.number}</td>
                  </tr> );
            })
          }
        </tbody>
      </table>
    );
  }
}

export default class MinorAbilitiesProbabilities extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.charts.map(function(item) {
            return ( <Chart chart={item} key={item.chart}/> );
          })
        }
      </div>
    );
  }
}
