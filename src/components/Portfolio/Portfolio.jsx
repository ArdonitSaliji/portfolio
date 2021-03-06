/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import './portfolio.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import data from './data'

const Portfolio = () => {
  const [popup, setPopup] = React.useState(false)
  const [popupImage, setPopupImage] = React.useState('')
  const images = (image) =>
    image.map((img) => (
      <SwiperSlide>
        <img
          src={img}
          onClick={() => {
            setPopup((prev) => !prev)
            setPopupImage(img)
          }}
          alt=''
        />
      </SwiperSlide>
    ))

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-img'>
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={5}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                >
                  {images(image)}
                </Swiper>
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} target='_blank' rel='noreferrer' className='btn'>
                  Github
                </a>
                <a href={demo} target='_blank' rel='noreferrer' className='btn btn-primary'>
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}

        <div className={popup ? 'popup active' : 'popup'}>
          <AiOutlineClose className='x' onClick={() => setPopup(false)} color='white' />
          <img className='popup-img' src={popupImage} alt='' />
        </div>
      </div>
    </section>
  )
}

export default Portfolio
