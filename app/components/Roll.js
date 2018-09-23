import React from 'react'

export default class Roll extends React.Component {
  constructor() {
    super()
    this.state = {
      faces: '4',
      adjust: 0,
      count: 1,
      rolls: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeFaces = this.handleChangeFaces.bind(this)
    this.handleChangeDieAdjust = this.handleChangeDieAdjust.bind(this)
    this.handleChangeDieCount = this.handleChangeDieCount.bind(this)
    this.rollDie = this.rollDie.bind(this)
  }

  handleChangeFaces(event) {
    this.setState({ faces: event.target.value })
  }

  handleChangeDieAdjust(event) {
    this.setState({ adjust: event.target.value })
  }

  handleChangeDieCount(event) {
    this.setState({ count: event.target.value })
  }

  handleSubmit(event) {
    // Prevent default form behavior that posts to the server
    event.preventDefault()
    this.rollDie()
  }

  rollDie() {
    var newRolls = []
    for (var i = 0; i < this.state.count; i++)
      newRolls.push(Math.floor((Math.random() * this.state.faces) + 1) + this.state.adjust)

    this.setState({ rolls: newRolls })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Faces</label>
                <select className="form-control" value={this.state.faces} onChange={this.handleChangeFaces}>
                  <option value="4" defaultValue>4</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                  <option value="12">12</option>
                </select>
                <label>Adjust</label>
                <input type="number" className="form-control" value={this.state.adjust} onChange={this.handleChangeDieAdjust}/>
                <label>Number of</label>
                <input type="number" className="form-control" name="number_of" value={this.state.count} onChange={this.handleChangeDieCount}/>
              </div>
              <input type="submit" className="btn btn-primary" value="Roll"/>
            </form>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
            <ul className="list-group list-group-flush result">
              {
                this.state.rolls.map((number, index) => { return <li className="list-group-item" key={index}>{number}</li> })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
