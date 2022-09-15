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
  const [isAcidic, setIsAcidic] = useState(false);
  const [isClassic, setIsClassic] = useState(false);


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

  const getIsAcidic = () => {
    setIsAcidic(!isAcidic);
  }

  const getIsClassic = () => {
    setIsClassic(!isClassic);
  }

  const filteredBeers = 
    beersArr?.filter((beer) => 
      beer.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()))
    .filter((beer) => isAcidic ? beer.ph < 4 : true)
    .filter((beer) => isClassic ? Number(beer.first_brewed.slice(-2)) < 11 : true)
    .slice(0,resultsNumber);

  return (
    <div className='home'>
      <div className='search'>
        <SearchBar 
          getSearchTerm={getSearchTerm} 
          getResultsNumber={getResultsNumber} 
          getIsAcidic={getIsAcidic}
          getIsClassic={getIsClassic}
        />
      </div>
      <div className='filter-menu'>
        <FilterMenu 
          getIsAcidic={getIsAcidic} 
          getIsClassic={getIsClassic}
        />
      </div>
      <div className='card-con'>
        <CardContainer beersArr={filteredBeers} />
      </div>
    </div>
  )
}

export default Home