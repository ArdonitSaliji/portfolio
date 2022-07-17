import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { FaTwitter } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer id='portfolio'>
      <a href='#home' className='footer__logo'>
        Ardonit's Portfolio
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'>
          <FaFacebookF />
        </a>
        <a href='https://instagram.com'>
          <FiInstagram />
        </a>
        <a href='https://twitter.com'>
          <FaTwitter />
        </a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Ardonit Saliji. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
