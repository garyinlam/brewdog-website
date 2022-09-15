import React from 'react'
import "./FilterMenu.scss"

const FilterMenu = (props) => {
  const { getIsAcidic, getIsClassic } = props
  return (
    <div className='filter'>
      <h4 className='filter__title'>Filter Menu:</h4>
      <label htmlFor="acidic-check">{`Acidic (pH<4)`}</label>
      <input type="checkbox" id="acidic-check" onChange={getIsAcidic} />
      <label htmlFor="classic-check">{`Classic range (brewed before 2010)`}</label>
      <input type="checkbox" id='classic-check' onChange={getIsClassic} />
    </div>
  )
}

export default FilterMenu