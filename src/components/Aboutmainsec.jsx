import React from 'react'
import { AiTwotoneCheckCircle } from "react-icons/ai";
import abtimg1 from '../images/illustration/about-img-1.jpg';
import abtimg2 from '../images/illustration/about-img-2.jpg';
import {Link} from "react-router-dom";
import '../css/About.css';


function Aboutmainsec() {
  return (
    <div>
        <div className="about-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <div className="abt-imgs">
                            <img src={abtimg1} alt="" className='ab-img1'/>
                            <img src={abtimg2} alt="" className='ab-img2'/>                    
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
                                    <p><AiTwotoneCheckCircle/> creative expertise</p>
                                    <p><AiTwotoneCheckCircle/> client-centered approach</p>
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
    </div>
  )
}

export default Aboutmainsec
