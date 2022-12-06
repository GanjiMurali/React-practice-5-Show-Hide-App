// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstNameClicked: true, isSecondNameClicked: true}

  isFirstName = () => {
    this.setState(preState => ({
      isFirstNameClicked: !preState.isFirstNameClicked,
    }))
  }

  isLastName = () => {
    this.setState(preState => ({
      isSecondNameClicked: !preState.isSecondNameClicked,
    }))
  }

  render() {
    const {isFirstNameClicked, isSecondNameClicked} = this.state

    return (
      <div className="bg-conatiner">
        <h1 className="heading">Show/Hide</h1>
        <div className="btns-container">
          <div className="btn-container">
            <button className="button" onClick={this.isFirstName} type="button">
              Show/Hide Firstname
            </button>
            {isFirstNameClicked ? null : (
              <div className="first-name-card">
                <p>Joe</p>
              </div>
            )}
          </div>
          <div className="btn-container">
            <button className="button" onClick={this.isLastName} type="button">
              Show/Hide Lastname
            </button>
            {isSecondNameClicked ? null : (
              <div className="last-name-card">
                <p>Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
