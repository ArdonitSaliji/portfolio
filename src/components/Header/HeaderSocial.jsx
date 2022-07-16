import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'
import '../../index.css'
import './Header.css'
const HeaderSocial = () => {
  return (
    <div className='header_socials'>
      <a
        href='https://www.linkedin.com/in/ardonit-saliji-61b2ba1b6/'
        target='_blank'
        rel='noreferrer'
      >
        <BsLinkedin className='socials' />
      </a>
      <a href='https://github.com/ArdonitSaliji' target='_blank' rel='noreferrer'>
        <FaGithub className='socials' />
      </a>
    </div>
  )
}

export default HeaderSocial
