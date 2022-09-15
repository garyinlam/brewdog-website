import React from 'react'
import { useState } from 'react'
import FilterMenu from '../FilterMenu/FilterMenu'
import "./SearchBar.scss"

const SearchBar = (props) => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilter = () => setShowFilters(!showFilters);

  const { getSearchTerm, getResultsNumber, getIsAcidic, getIsClassic, getAbvRange } = props
  return (
    <div className='search-bar'>
      <input type="text" onChange={getSearchTerm} placeholder="Search beers by name..." className='search-bar__textbox' />
      <button className='search-bar__filter-toggle' onClick={toggleFilter}>Filters</button>
      <select name="" id="" onChange={getResultsNumber} className='search-bar__results-drop' >
        <option className='search-bar__option' value="all">All</option>
        <option className='search-bar__option' value="160">160</option>
        <option className='search-bar__option' value="80">80</option>
        <option className='search-bar__option' value="40">40</option>
        <option className='search-bar__option' value="20">20</option>
      </select>
      {showFilters&&(<FilterMenu getIsAcidic={getIsAcidic} getIsClassic={getIsClassic} getAbvRange={getAbvRange} />)}
    </div>
  )
}

export default SearchBar