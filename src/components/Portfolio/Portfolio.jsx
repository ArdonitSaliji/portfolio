/* eslint-disable jsx-a11y/alt-text */
import { useLayoutEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "./portfolio.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import data, { more } from "./data";

const Portfolio = () => {
  const [popup, setPopup] = useState(false);
  const [popupImage, setPopupImage] = useState("");
  const [moreProjects, setMoreProjects] = useState(false);

  useLayoutEffect(() => {
    if (moreProjects) {
      let el = document.querySelector(".portfolio__container.more");
      let height = el.scrollHeight;
      el.style.maxHeight = height + "px";
      el.style.visibility = "visible";
      document.querySelector(".portfolio__container.more").style.transform =
        "translateY(0%)";
    } else {
      let el = document.querySelector(".portfolio__container.more");
      el.style.maxHeight = 0 + "px";
      el.style.visibility = "hidden";

      document.querySelector(".portfolio__container.more").style.transform =
        "translateY(-200%)";
    }
  }, [moreProjects]);

  const images = (image) =>
    image.map((img, index) => (
      <SwiperSlide key={index}>
        <img
          src={img}
          onClick={() => {
            setPopup((prev) => !prev);
            setPopupImage(img);
          }}
          alt=""
        />
      </SwiperSlide>
    ));
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data?.map(({ image, title, github, demo }, index) => {
          return (
            <article key={index} className="portfolio__item">
              <div id="item" className="portfolio__item-img">
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
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Github
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}

        <div className={popup ? "popup active" : "popup"}>
          <AiOutlineClose
            className="x"
            onClick={() => setPopup(false)}
            color="white"
          />

          <img className="popup-img" src={popupImage}></img>
        </div>
      </div>
      <p
        className="show-more"
        onClick={() => {
          setMoreProjects((prev) => !prev);
        }}
      >
        Show More Projects...
      </p>
      <div className="more-projects">
        <div className="container portfolio__container more">
          {more?.map(({ image, title, github, demo }, index) => {
            return (
              <article key={index} className="portfolio__item">
                <div id="item" className="portfolio__item-img">
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
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}

          <div className={popup ? "popup active" : "popup"}>
            <AiOutlineClose
              className="x"
              onClick={() => setPopup(false)}
              color="white"
            />
            <img className="popup-img" src={popupImage}></img>
          </div>
          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
