import React, { useState } from 'react'
import "./BeerRecipe.scss"

const BeerRecipe = (props) => {
  const [isShow, setIsShow] = useState(false);
  const { beer } = props
  const {
    ibu,
    target_fg,
    target_og,
    ebc,
    srm,
    attenuation_level,
    volume,
    boil_volume,
    method,
    ingredients,
    brewers_tips
  } = beer;

  const toggleIsShow = () => {
    setIsShow(!isShow)
  }

  return (
    <div className='beer-recipe'>
      <h3 className='beer-recipe__title'>Recipe:</h3>
      <button onClick={toggleIsShow} className='beer-recipe__button'>Show/Hide:</button>

      {isShow && (<>
        <h4 className='beer-recipe__subtitle'>Basics:</h4>
        <p className='beer-recipe__text'>Volume: {volume.value}L</p>
        <p className='beer-recipe__text'>Boil Volume: {boil_volume.value}L</p>
        <p className='beer-recipe__text'>IBU: {ibu}</p>
        <p className='beer-recipe__text'>Target FG: {target_fg}</p>
        <p className='beer-recipe__text'>Target OG: {target_og}</p>
        <p className='beer-recipe__text'>EBC: {ebc}</p>
        <p className='beer-recipe__text'>SRM: {srm}</p>
        <p className='beer-recipe__text'>Attenuation Level: {attenuation_level}</p>

        <h4 className='beer-recipe__subtitle'>Method/Timings</h4>
        <h5 className='beer-recipe__list-title'>Mash Temp</h5>
        <ul className='beer-recipe__list'>
          {method.mash_temp.map((one,index) => <li key={index} className='beer-recipe__list-item'>{one.temp.value}&#8451; {one.duration} mins</li>)}
        </ul>
        <h5 className='beer-recipe__list-title'>Fermentation</h5>
        <p className='beer-recipe__text'>{method.fermentation.temp.value} &#8451;</p>
        {method.twist ? (<>
          <h5 className='beer-recipe__list-title'>Twist</h5>
          <p className='beer-recipe__text'>{method.twist}</p>
        </>) : <></>}

        <h4 className='beer-recipe__subtitle'>Ingredients</h4>
        <h5 className='beer-recipe__list-title'>Malt</h5>
        <ul className='beer-recipe__list'>
          {ingredients.malt.map((one,index) => <li key={index} className='beer-recipe__list-item'>{one.name}: {one.amount.value}kg</li>)}
        </ul>
        <h5 className='beer-recipe__list-title'>Hops</h5>
        <ul className='beer-recipe__list'>
          {ingredients.hops.map((one,index) => <li key={index} className='beer-recipe__list-item'>{one.name}: {one.amount.value}g | Add:{one.add} | Attribute:{one.attribute}</li>)}
        </ul>
        <h5 className='beer-recipe__list-title'>Yeast</h5>
        <p className='beer-recipe__text'>{ingredients.yeast}</p>

        <h4 className='beer-recipe__subtitle'>Brewers Tips</h4>
        <p className='beer-recipe__text'>{brewers_tips}</p>
      </>)}
    </div>
  )
}

export default BeerRecipe