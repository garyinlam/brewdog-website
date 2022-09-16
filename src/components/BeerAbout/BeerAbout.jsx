import React from 'react'
import "./BeerAbout.scss"

const BeerAbout = (props) => {
  const { beer } = props;
  const noImage = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
  const { 
    name, 
    image_url,
    tagline,
    first_brewed,
    description,
    abv,
    ph,
    food_pairing,
    id
  } = beer;
  return (
    <div className='beer-about'>
      <p>#{id}</p>
      <h2 className='beer-about__name'>{name}</h2>
      <img src={image_url ?? noImage} alt={name} className='beer-about__image' />
      <h3 className='beer-about__tagline'>{tagline}</h3>
      <p className='beer-about__date'>First brewed: {first_brewed}</p>
      <p className='beer-about__desc'>{description}</p>
      <p className='beer-about__abv'>ABV: {abv}</p>
      <p className='beer-about__ph'>pH: {ph}</p>
      <p>Food this beer goes well with:</p>
      <ul className='beer-about__food-list'>
        {food_pairing?.map((food,index) => <li key={index} className='beer-about__food-item'>{food}</li>)}
      </ul>
    </div>
  )
}

export default BeerAbout