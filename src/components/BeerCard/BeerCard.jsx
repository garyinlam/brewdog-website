import React from 'react'
import "./BeerCard.scss"


const BeerCard = (props) => {
  const { name, image, abv, tagline } = props
  const noImage = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"

  return (
    <div className='beer-card'>
      <img src={image ?? noImage} alt={name} className="beer-card__image" />
      <div className='beer-card__content'>
        <h2 className='beer-card__title'>{name}</h2>
        <p className='beer-card__abv'>ABV: {abv}%</p>
        <p className='beer-card__tagline'>{tagline}</p>
      </div>
    </div>
  )
}

export default BeerCard