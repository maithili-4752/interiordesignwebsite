import React from 'react';
import Projectimg6 from '../images/illustration/gallery-3.jpg';
import Projectimg5 from '../images/illustration/service-3.jpg';
import Fewprojects from '../components/Fewprojects';
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div>
            <section className="all-hero-section">
                <div className="container">
                    <div className="hero-content">
                        <div className="section-title text-center">
                            <h1>Projects</h1>
                            <h4 className="explore-btn">
                                <Link to='/' className="home-btn">Home  </Link> / Projects
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
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
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <div className="service-item">
                                <div className="service-item-data">
                                    <div className="project-imgs">
                                        <img src={Projectimg5} alt="" />
                                    </div>
                                    <div className="service-info project-info">
                                        <h3>Rustic Charm Revived</h3>
                                        <h2><Link to='' className='project-link' >Nature's Embrace: Timeless Tranquility</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="service-item">
                                <div className="service-item-data">
                                    <div className="project-imgs">
                                        <img src={Projectimg6} alt="" />
                                    </div>
                                    <div className="service-info project-info">
                                        <h3>Nature-Inspired Harmony</h3>
                                        <h2><Link to='' className='project-link' >Bold Accents: Statement Living Design</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects
