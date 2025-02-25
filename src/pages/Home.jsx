import React from 'react'
import Whychoose from '../components/Whychoose';
import Sliderimage from '../components/Sliderimage';
import Howwework from '../components/Howwework';
import Fewprojects from '../components/Fewprojects';
import { Link } from "react-router-dom";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import abtimg1 from '../images/illustration/about-img-1.jpg';
import abtimg2 from '../images/illustration/about-img-2.jpg';
import Serviceimg1 from '../images/illustration/service-1.jpg';
import Serviceimg2 from '../images/illustration/service-2.jpg';
import Serviceimg3 from '../images/illustration/service-3.jpg';

import '../css/Home.css';



function Home() {
    return (
        <div>
            {/* <section className="hero-section hero">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-10">
                            <div className="hero-content">
                                <div className="section-title">
                                    <h3 className='hero-subtitle'>inspired interiors</h3>
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
            </section> */}
            < Sliderimage />
            <div className="about-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <div className="abt-imgs">
                                <img src={abtimg1} alt="" className='ab-img1' />
                                <img src={abtimg2} alt="" className='ab-img2' />
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <h3>About us</h3>
                                    <h2>Our passion for design, your <span>vision realized</span></h2>
                                    <p>Our dedicated team of designers works closely with you to    understand your vision and bring it to life with thoughtful    attention to detail. Whether it's transforming a single room   or an entire home..</p>
                                </div>
                                <div className="about-info">
                                    <div className="about-data1">
                                        <p><AiTwotoneCheckCircle /> creative expertise</p>
                                        <p><AiTwotoneCheckCircle /> client-centered approach</p>
                                    </div>
                                    <div className="explore-btn">
                                        <Link to='/about' className="section-btn">Read More </Link>
                                    </div>
                                    <div className="about-data2"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Whychoose />
            <section className='services'>
                <div className="container-fluid">
                    <div className="row row-section align-items-center">
                        <div className="col-md-6">
                            <div className="service-work-title">
                                <div className="section-title ">
                                    <h3>Our services</h3>
                                    <h2>Innovative design services for <span>every need</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="section-para">
                                <div className="section-title">
                                    <p>We offer a range of bespoke interior design  services     tailored    to your unique needs. From  concept development to   final    installation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="service-item">
                                <div className="service-item-data">
                                    <div className="service-img">
                                        <img src={Serviceimg1} alt="" />
                                    </div>
                                    <div className="service-info">
                                        <h3><Link to='/residencial' className='service-item-link'>Residential Interior  Design</Link></h3>
                                        <p className='m-0'>We create personalized living    spaces that reflect your   style and functional needs. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="service-item">
                                <div className="service-item-data">
                                    <div className="service-img">
                                        <img src={Serviceimg2} alt="" />
                                    </div>
                                    <div className="service-info">
                                        <h3><Link to='/commercial' className='service-item-link'>Commercial interior design</Link></h3>
                                        <p className='m-0'>Enhancing business environments with professional, functional, and aesthetically. </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="service-item">
                                <div className="service-item-data">
                                    <div className="service-img">
                                        <img src={Serviceimg3} alt="" />
                                    </div>
                                    <div className="service-info">
                                        <h3><Link to='/modernfurniture' className='service-item-link'>Furniture and Decor Selection</Link></h3>
                                        <p className='m-0'>Our experts help you choose the perfect furniture and decor complement your style. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="services-btn">
                            <Link to='/allservice' className="section-btn">See All Services</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Howwework />
            <section className='latest-project'>
                <div className="container-fluid">
                    <div className="row row-section align-items-center">
                        <div className="col-md-6">
                            <div className="section-heading">
                                <div className="section-title ">
                                    <h3>Latest Project</h3>
                                    <h2>Creative projects that define <span>our style</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="section-para">
                                <div className="section-title">
                                    <p>Our portfolio showcases a diverse range of projects, from beautifully crafted residential spaces functional and stylish commercial interiors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Fewprojects />
                </div>
            </section>
        </div>

    )
}

export default Home
