import React from 'react';
import Galleryimg1 from '../images/illustration/gallery-1.jpg';
import Galleryimg2 from '../images/illustration/gallery-2.jpg';
import Galleryimg3 from '../images/illustration/gallery-3.jpg';
import Galleryimg4 from '../images/illustration/gallery-10.jpg';
import Galleryimg5 from '../images/illustration/gallery-5.jpg';
import Galleryimg6 from '../images/illustration/gallery-6.jpg';
import Galleryimg7 from '../images/illustration/gallery-7.jpg';
import Galleryimg8 from '../images/illustration/gallery-9.jpg';
import { Link } from 'react-router-dom';
import '../css/Gallery.css';

const Gallerypage = () => {
  return (
    <div>
      <section className="all-hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="section-title text-center">
              <h1>Image Gallery</h1>
              <h4 className="explore-btn">
                <Link to='/' className="home-btn">Home  </Link> / Gallery
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery-wraper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="gallery-img">
                <img src={Galleryimg1} alt="" />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="gallery-img">
                <img src={Galleryimg2} alt="" />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="gallery-img">
                <img src={Galleryimg3} alt="" />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="gallery-img">
                <img src={Galleryimg4} alt="" />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="gallery-img">
                <img src={Galleryimg5} alt="" />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="gallery-img">
                <img src={Galleryimg6} alt="" />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="gallery-img">
                <img src={Galleryimg7} alt="" />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="gallery-img">
                <img src={Galleryimg8} alt="" />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="gallery-img">
                <img src={Galleryimg1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallerypage
