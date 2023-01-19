import React, { Component } from "react"

export default class ScoreKeeper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0,
    }
    this.singleKill = this.singleKill.bind(this)
    this.trippleKill = this.trippleKill.bind(this)
  }

  /*singleKill() {
    this.setState((prevState) => {
      return { score: prevState.score + 1 }
    })
  }
*/
  // using functional setState by seperating the logic //
  singleKill() {
    this.setState(this.incrementScore)
  }

  incrementScore(prevState) {
    return { score: prevState.score + 1 }
  }

  trippleKill() {
    this.setState(this.incrementScore)
    this.setState(this.incrementScore)
    this.setState(this.incrementScore)
  }

  render() {
    return (
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.singleKill}>Single Kill!</button>
        <button onClick={this.trippleKill}>Tripple Kill</button>
      </div>
    )
  }
}
