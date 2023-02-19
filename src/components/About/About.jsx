import React from 'react';
import '../../index.css';
import './About.css';
import me from '../../images/me1.jpeg';
import { FaAward } from 'react-icons/fa';
// import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={me} alt='About' />
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ Years</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>20+ Completed Projects</small>
                        </article>
                    </div>
                    <p>
                        Hi, my name is Ardonit Saliji, I am an ambitious Software Developer from
                        North Macedonia.
                    </p>
                    <a href='#contact' className='btn btn-primary'>
                        Contact me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
