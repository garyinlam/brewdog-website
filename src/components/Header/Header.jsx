import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <h1 className='header__title'>Brewdog DIY Dog Catalogue</h1>
      </Link>
      <Link to="/">
        <p className='header__home'>Home</p>
      </Link>
    </div>
  )
}

export default Header