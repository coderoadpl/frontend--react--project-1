import React from 'react'

export class App extends React.Component {
  state = {
    randomNumber: null
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
