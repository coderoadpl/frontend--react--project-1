import React from 'react'
import DisplayNumber from './DisplayNumber'

export class App extends React.Component {
  intervalId = null

  state = {
    hasError: false,
    randomNumber: null
  }

  static getDerivedStateFromError (error) {
    return { hasError: true }
  }

  componentDidMount () {
    this.intervalId = setInterval(
      () => {
        const number = Math.floor(Math.random() * 10)
        console.log('Random number', number)
        this.setState(() => ({
          randomNumber: number
        }))
      },
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
  }

  handleDismissError = () => {
    this.setState(() => ({
      hasError: false
    }))
  }

  render () {
    const {
      randomNumber,
      hasError
    } = this.state

    return (
      <div>
        CodeRoad APP
        {
          hasError ?
            <div>
              <h1>Error occurred</h1>
              <button
                onClick={this.handleDismissError}
              >
                Dismiss
              </button>
            </div>
            :
            randomNumber === null ?
              <h1>Waiting for first number</h1>
              :
              <DisplayNumber
                number={randomNumber}
              />
        }
      </div>
    )
  }
}

export default App
