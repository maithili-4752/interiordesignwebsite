import React from 'react'
import '../css/About.css';
import { AiTwotoneCheckCircle } from "react-icons/ai";
import abtimg1 from '../images/illustration/about-img-1.jpg';
import abtimg2 from '../images/illustration/about-img-2.jpg';
import Feature1 from '../images/illustration/icon-about-facility-1.svg';
import Feature2 from '../images/illustration/icon-about-facility-2.svg';
import Missionicon from '../images/illustration/icon-our-mission.svg';
import Teamicon from '../images/illustration/teamicon.png';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <section className="all-hero-section">
                <div className="container">
                    <div className="hero-content">
                        <div className="section-title text-center">
                            <h1>About Us</h1>
                            <h4 className="explore-btn">
                                <Link to='/' className="home-btn">Home  </Link> / About
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
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
                                        <Link to='/about' className="section-btn">Contact Now </Link>
                                    </div>
                                    <div className="about-data2"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-feature">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="about-feature-data">
                                <div className="feature-icon">
                                    <img src={Feature1} alt="" />
                                </div>
                                <div className="about">
                                    <h3>Reasonable Prices</h3>
                                    <p>We produce furniture to fulfill needs of all people and
                                        offer it at affordable prices.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="about-feature-data">
                                <div className="feature-icon">
                                    <img src={Feature2} alt="" />
                                </div>
                                <div className="about">
                                    <h3>Exclusive Design</h3>
                                    <p>Mixture of imagination, experience and professionalism is the secret of our design!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="about-feature-data">
                                <div className="feature-icon">
                                    <img src={Teamicon} alt="" />
                                </div>
                                <div className="about">
                                    <h3>Professional team</h3>
                                    <p>We are proud of our amicable, professional and always developing team!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-mission">
                <div className="container-fluid">
                    <div className="row mission-row align-items-center">
                        <div className="col-sm-12 col-lg-6">
                            <div className="section-title dark-session">
                                <h3>Vision Mission</h3>
                                <h2>A behind the scenes look at <span>our agency</span></h2>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <div className="mission-content dark-session">
                                <p>Our portfolio showcases a diverse range of projects, from beautifully crafted residential spaces functional and stylish commercial interiors</p>
                            </div>
                        </div>
                    </div>
                    <div className="vision-content">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="vision-info">
                                            <div className="mission-vision-icon">
                                                <img src={Feature1} alt="" />
                                            </div>
                                            <div className="about">
                                                <h3>Our Vision</h3>
                                                <p>Our vision is rooted in the belief that thoughtfully designed spaces can transform lives, enhancing how people feel, work, and connect. We are committed to creating interiors that reflect our clients' unique identities, blending comfort, functionality, and beauty. By combining timeless design with modern innovations, we craft spaces that are visually stunning and practical.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="vision-info">
                                            <div className="mission-vision-icon">
                                                <img src={Missionicon} alt="" />
                                            </div>
                                            <div className="about">
                                                <h3>Our Mission</h3>
                                                <p>Our mission is to deliver exceptional interior designs that enhance the quality of life by prioritizing comfort, functionality, and aesthetics. We aim to create space that are not only visually appealing but also tailored to meet the specific needs and desires of our client By staying true to design innovation, we ensure that every project reflects the perfect balance between style and purpose.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About