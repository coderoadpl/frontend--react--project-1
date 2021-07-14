import React from 'react'
import DisplayNumber from './DisplayNumber'

export class App extends React.Component {
  intervalId = null

  state = {
    randomNumber: null
  }

  componentDidMount () {
    this.intervalId = setInterval(
      () => {
        this.setState(() => ({
          randomNumber: Math.floor(Math.random() * 10)
        }))
      },
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
  }

  render () {
    const { randomNumber } = this.state

    return (
      <div>
        CodeRoad APP
        {
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
