import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
import brewdog from "../../assets/images/brewdog.png"

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <h1 className='header__title'>Brewdog DIY Dog Catalogue</h1>
      </Link>

      <div className='header__logo'>
        <Link to="/">
          <img src={brewdog} alt="Brewdog Logo" height="80px"/>
        </Link>
      </div>

      <div className='header__home'>
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
    </div>
  )
}

export default Header