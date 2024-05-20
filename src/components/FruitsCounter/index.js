// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onIncrementMango = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  onIncrementBanana = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate {count1} mangoes {count2} bananas
          </h1>
          <div className="flex-card">
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="should be mango"
                className="image"
              />
              <button
                className="btn"
                type="button"
                onClick={this.onIncrementMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="should be banana"
                className="image"
              />
              <button
                className="btn"
                type="button"
                onClick={this.onIncrementBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
