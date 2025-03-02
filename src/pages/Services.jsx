import React from 'react'
import { Link } from "react-router-dom";
import Whychoose from '../components/Whychoose';
import Howwework from '../components/Howwework';
import Serviceimg1 from '../images/illustration/service-1.jpg';
import Serviceimg2 from '../images/illustration/service-2.jpg';
import Serviceimg3 from '../images/illustration/service-3.jpg';
// import Commercialpage from './Commercialpage';
import '../css/Service.css';


const Services = () => {
  return (
    <div>
      <section className="all-hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="section-title text-center">
              <h1>Services</h1>
              <h4 className="explore-btn">
                <Link to='/' className="home-btn">Home  </Link> / Services
              </h4>
            </div>
          </div>
        </div>
      </section>
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
          <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="service-item">
                <div className="service-item-data">
                  <div className="service-img">
                    <img src={Serviceimg1} alt="" />
                  </div>
                  <div className="service-info">
                    <h3><Link to='' className='service-item-link'>Residential Interior  Design</Link></h3>
                    <p className='m-0'>We create personalized living spaces that reflect your   style and functional needs. </p>
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
                    <h3><Link to='' className='service-item-link'>Furniture and Decor Selection</Link></h3>
                    <p className='m-0'>Our experts help you choose the perfect furniture and decor complement your style. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <Howwework />
      <Whychoose />
    </div>
  )
}

export default Services
