import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mobile App Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Animated UI Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Brand Interface Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ecommerce Website UI/UX Design</p>
            </li>
          </ul>

          {/* END OF UI/UX */}
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Design and Re-design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>24x7 Support and Maintenance.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Site Speed Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Progressive Web Apps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Search Engine Optimization</p>
            </li>
          </ul>

          {/* END OF WEB DEVELOPMENT*/}
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Copywriting Services</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Graphic Design Services</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Video Marketing Services</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Blog Writing Services</p>
            </li>
          </ul>

          {/* END OF CONTENT CREATION */}
        </article>
      </div>
    </section>
  )
}

export default Services
