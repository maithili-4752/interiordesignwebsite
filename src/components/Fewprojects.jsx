import React from 'react';
import Projectimg1 from '../images/illustration/project-1.jpg';
import Projectimg2 from '../images/illustration/project-2.jpg';
import Projectimg3 from '../images/illustration/project-3.jpg';
import Projectimg4 from '../images/illustration/project-4.jpg';
import { Link } from "react-router-dom";

const Fewprojects = () => {
    return (
        <div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className="service-item">
                            <div className="service-item-data">
                                <div className="project-imgs">
                                    <img src={Projectimg1} alt="" />
                                </div>
                                <div className="service-info project-info">
                                    <h3>Residential Spaces</h3>
                                    <h2><Link to='/project' className='project-link' >Urban Retreat: Modern Design Meets Comfort</Link></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="service-item">
                            <div className="service-item-data">
                                <div className="project-imgs">
                                    <img src={Projectimg2} alt="" />
                                </div>
                                <div className="service-info project-info">
                                    <h3>Luxury Homes</h3>
                                    <h2><Link to='/project' className='project-link' >Luxurious Loft: Industrial Chic For Living</Link></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="service-item">
                            <div className="service-item-data">
                                <div className="project-imgs">
                                    <img src={Projectimg3} alt="" />
                                </div>
                                <div className="service-info project-info">
                                    <h3>Outdoor Living Spaces</h3>
                                    <h2><Link to='/project' className='project-link' >Coastal Vibes: Serenity By The Sea</Link></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="service-item">
                            <div className="service-item-data">
                                <div className="project-imgs">
                                    <img src={Projectimg4} alt="" />
                                </div>
                                <div className="service-info project-info">
                                    <h3>Modern Designs</h3>
                                    <h2><Link to='/project' className='project-link' >Minimalist Haven: Simple, Clean, Inviting Spaces</Link></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Fewprojects
