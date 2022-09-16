import React from 'react'
import { useParams } from 'react-router'
import BeerAbout from '../../components/BeerAbout/BeerAbout';
import BeerRecipe from '../../components/BeerRecipe/BeerRecipe';
import "./BeerInfo.scss"
// Single beer page display

const BeerInfo = (props) => {
  const { beersArr } = props;

  const { beerId } = useParams();

  const beer = beersArr.find((beer) => beer.id === Number(beerId)) ?? {};

  return (
    <div className='beer-info'>
      <div className='beer-info__general'>
        <BeerAbout beer={beer} />
      </div>
      <div className='beer-info__recipe'>
        <BeerRecipe beer={beer} />
      </div>
    </div>
  )
}

export default BeerInfo