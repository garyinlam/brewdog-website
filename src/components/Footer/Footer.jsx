import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <p>Data from <Link to="https://punkapi.com/">Punk API</Link></p>
      <p>No Image Placeholder: <a href="https://commons.wikimedia.org/wiki/File:No-Image-Placeholder.svg">Ranjithsiji</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons</p>
    </div>
  )
}

export default Footer