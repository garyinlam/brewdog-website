import React from 'react'
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <p>Data from <a href="https://punkapi.com/" className='link'>Punk API</a></p>
      <p>No Image Placeholder: <a href="https://commons.wikimedia.org/wiki/File:No-Image-Placeholder.svg" className='link'>Ranjithsiji</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0" className='link'>CC BY-SA 4.0</a>, via Wikimedia Commons</p>
    </div>
  )
}

export default Footer