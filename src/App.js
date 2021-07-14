import React from 'react'

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
        <br />
        <br />
        {
          randomNumber === null ?
            'Waiting for first number'
            :
            randomNumber
        }
      </div>
    )
  }
}

export default App
