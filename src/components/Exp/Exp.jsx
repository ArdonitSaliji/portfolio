import React from 'react';
import '../../index.css';
import './Exp.css';
import { BsPatchCheckFill } from 'react-icons/bs';
// Skills | Uncomment the line below to add skill level
const frontendExp = [
    { 'React.js': 'Experienced' },
    { 'Vue.js': 'Intermediate' },
    { Redux: 'Intermediate' },
    { JavaScript: 'Experienced' },
    { TypeScript: 'Intermediate' },
    { Git: 'Intermediate' },
    { HTML: 'Experienced' },
    { CSS: 'Experienced' },
    { Sass: 'Experienced' },
    { 'Material-UI': '' },
];

const backendExp = [
    { 'Node and Express js': 'Intermediate' },
    { PHP: 'Intermediate' },
    { MySQL: 'Intermediate' },
    { MongoDB: 'Experienced' },
    { Python: 'Intermediate' },
    { 'C (Programming Language)': 'Beginner' },
    { 'Microsoft Azure': 'Intermediate' },
    { Laravel: 'Beginner' },
    { FastApi: 'Beginner' },
    { Flask: 'Beginner' },
];

const Exp = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>
                        {frontendExp.map((obj, index) => (
                            <article key={index} className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>{Object.keys(obj)[0]}</h4>
                                    {/* This line below is to add skill levels for frontend */}
                                    {/* <small className='text-light'>{Object.values(obj)[0]}</small> */}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className='experience__backend'>
                    <h3>Backend Development</h3>
                    <div className='experience__content'>
                        {backendExp.map((obj, index) => (
                            <article key={index} className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>{Object.keys(obj)[0]}</h4>
                                    {/* This line below is to add skill levels for backend */}
                                    {/* <small className='text-light'>{Object.values(obj)[0]}</small> */}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
                {/*  */}
            </div>
        </section>
    );
};

export default Exp;
