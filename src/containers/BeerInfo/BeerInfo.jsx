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
    <div className='beer-info'>
      <p>#{beerId}</p>
      <h2 className='beer-info__name'>{name}</h2>
      <img src={image_url ?? noImage} alt={name} className='beer-info__image' />
      <h3 className='beer-info__tagline'>{tagline}</h3>
      <p className='beer-info__date'>First brewed: {first_brewed}</p>
      <p className='beer-info__desc'>{description}</p>
      <p className='beer-info__abv'>ABV: {abv}</p>
      <p className='beer-info__ph'>pH: {ph}</p>
      <p>Food this beer goes well with:</p>
      <ul className='beer-info__food-list'>
        {food_pairing.map((food,index) => <li key={index} className='beer-info__food-item'>{food}</li>)}
      </ul>
    </div>
  )
}

export default BeerInfo