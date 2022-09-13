import React from 'react'
import FilterMenu from '../../components/FilterMenu/FilterMenu'
import SearchBar from '../../components/SearchBar/SearchBar'
import CardContainer from '../CardContainer/CardContainer'
import "./Home.scss"
// Search beers

const Home = (props) => {
  const { beersArr } = props;
  return (
    <div>
      <SearchBar />
      <FilterMenu />
      <CardContainer beersArr={beersArr} />
    </div>
  )
}

export default Home