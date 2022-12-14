import React from 'react'
import { useState } from 'react'
import FilterMenu from '../FilterMenu/FilterMenu'
import "./SearchBar.scss"

const SearchBar = (props) => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilter = () => setShowFilters(!showFilters);

  const { getSearchTerm, getResultsNumber, getIsAcidic, getIsClassic, getAbvRange, getSortValue } = props
  return (
    <div className='search-bar'>
      <label htmlFor="beer-search" className='search-bar__label search-bar__label--search'>Search beers by name:</label>
      <input id="beer-search" type="text" onChange={getSearchTerm} placeholder="Beer name..." className='search-bar__textbox' />
      <button className='search-bar__filter-toggle' onClick={toggleFilter}>Filters</button>
      <label htmlFor="results-number" className='search-bar__label search-bar__label--results'>Max number of results displayed:</label>
      <select name="results-number" id="results-number" onChange={getResultsNumber} className='search-bar__drop search-bar__drop--results' >
        <option className='search-bar__option' value="20">20</option>
        <option className='search-bar__option' value="40">40</option>
        <option className='search-bar__option' value="80">80</option>
        <option className='search-bar__option' value="160">160</option>
        <option className='search-bar__option' value="all">All</option>
      </select>

      <label htmlFor="results-sort" className='search-bar__label search-bar__label--sort'>Sort results by:</label>
      <select name="results-sort" id="results-sort" className='search-bar__drop search-bar__drop--sort' onChange={getSortValue} >
        <option className="search-bar__option" value="nameASC">Name (Ascending)</option>
        <option className="search-bar__option" value="nameDSC">Name (Descending)</option>
        <option className="search-bar__option" value="abvASC">ABV (Ascending)</option>
        <option className="search-bar__option" value="abvDSC">ABV (Descending)</option>
        <option className="search-bar__option" value="idASC">ID (Ascending)</option>
        <option className="search-bar__option" value="idDSC">ID (Descending)</option>
      </select>

      {showFilters&&(
        <div className='search-bar__filters'>
          <FilterMenu getIsAcidic={getIsAcidic} getIsClassic={getIsClassic} getAbvRange={getAbvRange} />
        </div>
      )}
    </div>
  )
}

export default SearchBar