import React from 'react'
import "./Range.scss"

const Range = (props) => {
  const { category, getAbvRange } = props;
  return (
    <form className='range' onSubmit={getAbvRange}>
      <label htmlFor="minimum">Minimum {category}: </label>
      <input type="number" id='minimum' step="0.1" max="99.9" min="0" />
      <label htmlFor="maximum">Maximum {category}: </label>
      <input type="number" id='maximum' step="0.1" max="100" min="0.1" />
      <button>Set {category} range</button>
    </form>
  )
}

export default Range