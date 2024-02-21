// Write your code here
// Write your code here
import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  brake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="heading">Speed is {count}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            className="accelerate-button"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button type="button" className="break-button" onClick={this.brake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
