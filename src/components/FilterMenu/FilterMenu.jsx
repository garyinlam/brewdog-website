import React from 'react'
import Range from '../Range/Range'
import "./FilterMenu.scss"

const FilterMenu = (props) => {
  const { getIsAcidic, getIsClassic, getAbvRange } = props
  return (
    <div className='filter'>
      <h4 className='filter__title'>Filter Menu:</h4>
      <div className='filter__check'>
        <label htmlFor="acidic-check" className='filter__label'>{`Acidic (pH<4) `}</label>
        <input type="checkbox" id="acidic-check" onChange={getIsAcidic} className='filter__checkbox'/>
      </div>
      <div className='filter__check'>
        <label htmlFor="classic-check" className='filter__label'>{`Classic range (brewed before 2010) `}</label>
        <input type="checkbox" id='classic-check' onChange={getIsClassic} className='filter__checkbox'/>
      </div>
      <Range category="ABV" getAbvRange={getAbvRange} />
    </div>
  )
}

export default FilterMenu