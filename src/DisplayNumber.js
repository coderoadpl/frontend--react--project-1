import React from 'react'
import PropTypes from 'prop-types'

export const DisplayNumber = (props) => {
  const { number } = props

  if (number === 1 || number === 2) throw new Error('Invalid number')

  return (
    <h1>
      {number}
    </h1>
  )
}

DisplayNumber.propTypes = {
  number: PropTypes.number.isRequired
}

export default DisplayNumber
