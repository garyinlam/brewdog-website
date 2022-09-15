import React from 'react'
import { useState } from 'react'
import FilterMenu from '../../components/FilterMenu/FilterMenu'
import SearchBar from '../../components/SearchBar/SearchBar'
import CardContainer from '../CardContainer/CardContainer'
import "./Home.scss"
// Search beers

const Home = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [resultsNumber, setResultsNumber] = useState(20);
  const [isAcidic, setIsAcidic] = useState(false);
  const [isClassic, setIsClassic] = useState(false);
  const [abvRange, setAbvRange] = useState([0,100]);
  const [sortValue, setSortValue] = useState("nameASC");

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

  const getAbvRange = (e) => {
    e.preventDefault();
    const min = Number(e.target[0].value);
    const max = Number(e.target[1].value) ? Number(e.target[1].value) : 100;
    if (min > max) {
      setAbvRange([max,min]);
    } else {
      setAbvRange([min,max]);
    }
  }

  const getSortValue = (e) => {
    setSortValue(e.target.value);
  }

  const filteredBeers = 
    beersArr?.filter((beer) => 
      beer.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()))
    .filter((beer) => isAcidic ? beer.ph < 4 : true)
    .filter((beer) => isClassic ? Number(beer.first_brewed.slice(-2)) < 11 : true)
    .filter((beer) => beer.abv >= abvRange[0] && beer.abv <= abvRange[1])
    .sort((a,b) => {
      switch (sortValue) {
        case "nameASC":
          return a.name.localeCompare(b.name)
        case "nameDSC":
          return b.name.localeCompare(a.name)
        case "abvASC":
          return a.abv - b.abv
        case "abvDSC":
          return b.abv - a.abv
        case "idASC":
          return a.id - b.id
        case "idDSC":
          return b.id - a.id
        default:
          return 0;
      }
    })
    .slice(0,resultsNumber);

  return (
    <div className='home'>
      <div className='search'>
        <SearchBar 
          getSearchTerm={getSearchTerm} 
          getResultsNumber={getResultsNumber} 
          getIsAcidic={getIsAcidic}
          getIsClassic={getIsClassic}
          getAbvRange={getAbvRange}
          getSortValue={getSortValue}
        />
      </div>
      <div className='filter-menu'>
        <FilterMenu 
          getIsAcidic={getIsAcidic} 
          getIsClassic={getIsClassic}
          getAbvRange={getAbvRange}
        />
      </div>
      <div className='card-con'>
        <CardContainer beersArr={filteredBeers} />
      </div>
    </div>
  )
}

export default Home