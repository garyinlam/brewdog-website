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
    <div>
      <h3>Recipe:</h3>
      <button onClick={toggleIsShow}>Show/Hide:</button>

      {isShow && (<>
        <h4>Basics:</h4>
        <p>Volume: {volume.value}L</p>
        <p>Boil Volume: {boil_volume.value}L</p>
        <p>IBU: {ibu}</p>
        <p>Target FG: {target_fg}</p>
        <p>Target OG: {target_og}</p>
        <p>EBC: {ebc}</p>
        <p>SRM: {srm}</p>
        <p>Attenuation Level: {attenuation_level}</p>

        <h4>Method/Timings</h4>
        <h5>Mash Temp</h5>
        {method.mash_temp.map((one,index) => <p key={index}>{one.temp.value}&#8451; {one.duration} mins</p>)}
        <h5>Fermentation</h5>
        <p>{method.fermentation.temp.value} &#8451;</p>
        {method.twist ?? (<>
          <h5>Twist</h5>
          <p>method.twist</p>
        </>)}

        <h4>Ingredients</h4>
        <h5>Malt</h5>
        {ingredients.malt.map((one,index) => <p key={index}>{one.name}: {one.amount.value}kg</p>)}
        <h5>Hops</h5>
        {ingredients.hops.map((one,index) => <p key={index}>{one.name}: {one.amount.value}g | Add:{one.add} | Attribute:{one.attribute}</p>)}
        <h5>Yeast</h5>
        <p>{ingredients.yeast}</p>

        <h4>Brewers Tips</h4>
        <p>{brewers_tips}</p>
      </>)}
    </div>
  )
}

export default BeerRecipe