import React from 'react'
import '../../index.css'
import CTA from './CTA'
import Me from '../../me.jpg'
import './Header.css'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Ardonit Saliji</h1>
        <h5 className='text-light'>Fullstack developer</h5>
        <CTA />
        <HeaderSocial />
        <div className='me'>
          <img src={Me} alt='me' />
        </div>
        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
