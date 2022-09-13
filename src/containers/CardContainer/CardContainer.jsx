import React from 'react'
import { Link } from 'react-router-dom';
import BeerCard from '../../components/BeerCard/BeerCard';
import "./CardContainer.scss"

const CardContainer = (props) => {
  const { beersArr } = props;

  const beersJSX = beersArr?.map((beer, index) => (
    <Link to={`/beers/${beer.id}`} key={"beer" + (index + 1)}>
      <BeerCard 
        key={beer.id}
        name={beer.name}
        image={beer.image_url}
        abv={beer.abv}
        tagline={beer.tagline}
      />
    </Link>
  ));

  return (
    <div className='card-container'>{beersJSX}</div>
  )
}

export default CardContainer