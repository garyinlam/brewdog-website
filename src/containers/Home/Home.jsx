import React from 'react'
import { useState } from 'react'
import FilterMenu from '../../components/FilterMenu/FilterMenu'
import SearchBar from '../../components/SearchBar/SearchBar'
import CardContainer from '../CardContainer/CardContainer'
import "./Home.scss"
// Search beers

const Home = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [resultsNumber, setResultsNumber] = useState(Number.MAX_SAFE_INTEGER);

  const { beersArr } = props;

  const getSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  }

  const getResultsNumber = (e) => {
    const val = e.target.value
    if (val === "all") {
      setResultsNumber(Number.MAX_SAFE_INTEGER);
    } else {
      setResultsNumber(Number(val));
    }
  }

  const filteredBeers = beersArr?.filter((beer) => beer.name.toLowerCase().includes(searchTerm.toLowerCase())).slice(0,resultsNumber);

  return (
    <div>
      <SearchBar getSearchTerm={getSearchTerm} getResultsNumber={getResultsNumber} />
      <FilterMenu />
      <CardContainer beersArr={filteredBeers} />
    </div>
  )
}

export default Home