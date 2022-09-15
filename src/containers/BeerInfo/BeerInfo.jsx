import React from 'react'
import { useParams } from 'react-router'
import "./BeerInfo.scss"
// Single beer page display

const BeerInfo = (props) => {
  const { beersArr } = props;

  const { beerId } = useParams();

  const noImage = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"

  const {name, tagline, first_brewed, description, image_url, abv, food_pairing, ph} = beersArr.find((beer) => beer.id === Number(beerId)) ?? {};

  return (
    <div>
      <p>{beerId}</p>
      <h2>{name}</h2>
      <img src={image_url ?? noImage} alt={name} />
      <h3>{tagline}</h3>
      <p>{first_brewed}</p>
      <p>{description}</p>
      <p>ABV: {abv}</p>
      <p>pH: {ph}</p>
      <p>Food this beer goes well with:</p>
      <ul>
        {food_pairing.map((food,index) => <li key={index}>{food}</li>)}
      </ul>
    </div>
  )
}

export default BeerInfo