import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, letters: ''}

  countLetters = event => {
    const inputLetters = event.target.value
    const {letters} = this.state
    if (letters.length < inputLetters.length) {
      this.setState(prevState => ({
        count: prevState.count + 1,
        letters: event.target.value,
      }))
    } else {
      this.setState(prevState => ({
        count: prevState.count - 1,
        letters: event.target.value,
      }))
    }
  }

  render() {
    const {count, letters} = this.state
    return (
      <div className="counter-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="counter-image"
        />
        <div className="counter-card">
          <h1 className="counter-card-heading">
            Calculate the Letters you enter
          </h1>
          <label htmlFor="userInput" className="counter-card-description-1">
            Enter the phrase
          </label>
          <input
            type="text"
            placeholder="calculator"
            className="counter-card-input-box"
            onChange={this.countLetters}
            value={letters}
            id="userInput"
          />
          <div className="counter-text-container">
            <p className="counter-text">No.of letters: {count}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
