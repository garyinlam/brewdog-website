import React from 'react'
import { useParams } from 'react-router'
import "./BeerInfo.scss"
// Single beer page display

const BeerInfo = (props) => {
  const { beersArr } = props;

  const { beerId } = useParams();

  const currentBeer = beersArr.find((beer) => beer.id === Number(beerId)) ?? {};

  return (
    <div>
      <p>{beerId}</p>
      <p>{currentBeer.name}</p>
    </div>
  )
}

export default BeerInfo