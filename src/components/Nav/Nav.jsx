import React from 'react'
import '../../index.css'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState(window.scrollY)

  const scrolled = () => {
    if (window.scrollY < 750) {
      setActiveNav(0)
    }
    if (window.scrollY > 820) {
      setActiveNav(821)
    }
    if (window.scrollY > 1480) {
      setActiveNav(1481)
    }
    if (window.scrollY > 2190) {
      setActiveNav(2191)
    }
    if (window.scrollY > 3632) {
      setActiveNav(3633)
    }
  }

  window.addEventListener('scroll', scrolled)
  return (
    <nav>
      <a href='#home' onClick={() => setActiveNav(0)} className={activeNav === 0 ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href='#about' onClick={() => setActiveNav(1057)} className={activeNav === 821 ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href='#experience' onClick={() => setActiveNav(1670)} className={activeNav === 1481 ? 'active' : ''}>
        <BiBook />
      </a>
      <a href='#services' onClick={() => setActiveNav(2255)} className={activeNav === 2191 ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a href='#contact' onClick={() => setActiveNav(3800)} className={activeNav === 3633 ? 'active' : ''}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Nav
