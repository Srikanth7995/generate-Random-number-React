import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onGenrateRandom = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: newRandomNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range from 0 to 100</p>
          <button
            type="button"
            onClick={this.onGenrateRandom}
            className="button"
          >
            Generate
          </button>
          <p className="paragraph">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
