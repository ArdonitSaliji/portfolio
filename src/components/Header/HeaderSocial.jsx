import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'
import '../../index.css'
import './Header.css'
const HeaderSocial = () => {
  return (
    <div className='header_socials'>
      <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
        <BsLinkedin />
      </a>
      <a href='https://github.com' target='_blank' rel='noreferrer'>
        <FaGithub />
      </a>
      <a href='https://instagram.com' target='_blank' rel='noreferrer'>
        <FiDribbble />
      </a>
    </div>
  )
}

export default HeaderSocial
