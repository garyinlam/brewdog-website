import React from 'react'
import "./Range.scss"

const Range = (props) => {
  const { category, getAbvRange } = props;
  return (
    <form className='range' onSubmit={getAbvRange}>
      <label htmlFor="minimum" className='range__label'>Minimum {category}: </label>
      <input type="number" id='minimum' step="0.1" max="99.9" min="0" className='range__input'/>
      <label htmlFor="maximum" className='range__label'>Maximum {category}: </label>
      <input type="number" id='maximum' step="0.1" max="100" min="0.1" className='range__input'/>
      <button className='range__button'>Set {category} range</button>
    </form>
  )
}

export default Range