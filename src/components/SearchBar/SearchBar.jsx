import React from 'react'
import "./SearchBar.scss"

const SearchBar = (props) => {
  const { getSearchTerm, getResultsNumber } = props
  return (
    <div className='search-bar'>
      <input type="text" onChange={getSearchTerm} placeholder="Search beers by name..." className='search-bar__textbox' />
      <button className='search-bar__filter-toggle'>Filters</button>
      <select name="" id="" onChange={getResultsNumber} className='search-bar__results-drop' >
        <option className='search-bar__option' value="all">All</option>
        <option className='search-bar__option' value="160">160</option>
        <option className='search-bar__option' value="80">80</option>
        <option className='search-bar__option' value="40">40</option>
        <option className='search-bar__option' value="20">20</option>
      </select>
    </div>
  )
}

export default SearchBar