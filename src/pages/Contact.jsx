import React from 'react'
import Contimg from '../images/illustration/contact-us-image.jpg';
import { Link } from 'react-router-dom';
import { BsFillTelephoneFill, BsEnvelope } from "react-icons/bs";
import { FaHouse } from "react-icons/fa6";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div>
      <section className="all-hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="section-title text-center">
              <h1>Contact Us</h1>
              <h4 className="explore-btn">
                <Link to='/' className="home-btn">Home  </Link> / Contact Us
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <div className="contact-content mb-4">
                <img src={Contimg} alt="" className='img-fluid' />
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="contact-content-form mb-4">
                <div className="section-title ">
                  <h3>Contact Form</h3>
                  <h2>We would love to hear <span>from you</span></h2>
                </div>
                <p className='contact-para'>Your email address will not be published. Required fields are marked *</p>
                <form action="">
                  <div className="form-grp mb-3">
                    <input type="text" name='name' className='form-control me-2' placeholder='Name*' required />
                    <input type="email" name='mail' className='form-control' placeholder='Email*' required />
                  </div>
                  <div className="phone mb-3">
                    <input type="text" name='phone' className='form-control' placeholder='Phone*' required />
                  </div>
                  <div className="message mb-5">
                    <textarea name="message" id="" rows='4' className='form-control' placeholder='Your Message*' required></textarea>
                  </div>
                  <div className="submit-btn">
                    <Link to='' className="section-btn" type='submit'>Submit</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='contact-getin'>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center contact-data">
              <div className="section-title ">
                <h3>Our contact</h3>
                <h2>Get in touch with us</h2>
              </div>
              <p className='getin-para'>Get in touch to discuss your employee wellbeing needs today. Pleasegive us a call, drop us an email or fill out the contact form and we'llget back to you.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="contact-types">
                <div className="icon-box">
                  <span><BsFillTelephoneFill className='icon' /></span>
                </div>
                <div className="contact-info-content">
                  <h3>Phone Number</h3>
                  <p>(+05) 698 - 548 - 6354</p>
                  <p>(+07) 358 - 879 - 3257</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="contact-types">
                <div className="icon-box">
                  <span><BsEnvelope className='icon' /></span>
                </div>
                <div className="contact-info-content">
                  <h3>E-mail Support</h3>
                  <p>interiordesign@gmail.com</p>
                  <p>interiordesign@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="contact-types">
                <div className="icon-box">
                  <span><FaHouse className='icon' /></span>
                </div>
                <div className="contact-info-content">
                  <h3>Headquarter</h3>
                  <p> Westheimer Santa Illinois 85486</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
