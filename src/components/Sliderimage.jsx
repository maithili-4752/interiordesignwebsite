import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Heroimg1 from '../images/background/hero-bg.jpg';
import Heroimg2 from '../images/illustration/service-2.jpg';
import Heroimg3 from '../images/illustration/service-3.jpg';
import { Link } from 'react-router-dom';
import '../components/Sliderimage.css';

const Sliderimage = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className="hero-section">
                        <img src={Heroimg1} alt="" w-100  />
                    </div>
                    <Carousel.Caption className='hero-wrapper'>
                        <section className="hero-section hero">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-10">
                                        <div className="hero-content">
                                            <div className="section-title">
                                                <h3 className='hero-subtitle'>Inspired interiors</h3>
                                                <h1>Designing Your Dream Spaces</h1>
                                                <p className='hero-para'>We specialize in creating personalized, functional, and  stylish interiors that reflect your unique vision.</p>
                                            </div>
                                            <div className="explore-btn">
                                                <Link to='/about' className="section-btn">Explore More </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="hero-section">
                        <img src={Heroimg2} alt="" w-100/>
                    </div>
                    <Carousel.Caption className='hero-wrapper'>
                        <section className="hero-section hero">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-10">
                                        <div className="hero-content">
                                            <div className="section-title">
                                                <h3 className='hero-subtitle'>Inspired interiors</h3>
                                                <h1>Let Your Home Be Unique</h1>
                                                <p className='hero-para'>We specialize in creating personalized, functional, and  stylish interiors that reflect your unique vision.</p>
                                            </div>
                                            <div className="explore-btn">
                                                <Link to='/about' className="section-btn">Explore More </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="hero-section">
                        <img src={Heroimg3} alt="" w-100/>
                    </div>
                    <Carousel.Caption className='hero-wrapper'>
                        <section className="hero-section hero">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-10">
                                        <div className="hero-content">
                                            <div className="section-title">
                                                <h3 className='hero-subtitle'>Inspired interiors</h3>
                                                <h1>Creating Beautiful Living Spaces</h1>
                                                <p className='hero-para'>We specialize in creating personalized, functional and  stylish interiors that reflect your unique vision.</p>
                                            </div>
                                            <div className="explore-btn">
                                                <Link to='/about' className="section-btn">Explore More </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Sliderimage
