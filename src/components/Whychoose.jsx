import React from 'react'
import Chooseicon1 from '../images/illustration/icon-why-choose-1.svg';
import Chooseicon2 from '../images/illustration/icon-why-choose-2.svg';
import Chooseicon3 from '../images/illustration/icon-why-choose-3.svg';
import Chooseimg1 from '../images/illustration/why-choose-img-1.jpg';
import Chooseimg2 from '../images/illustration/why-choose-img-2.jpg';
import Chooseimg3 from '../images/illustration/why-choose-img-3.jpg';
import Chooseimg4 from '../images/illustration/why-choose-img-4.jpg';

function Whychoose() {
    return (
        <div>
            <section className='choose'>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-5">
                            <div className="choose-content-info">
                                <div className="section-title">
                                    <h3>why choose us</h3>
                                    <h2>A behind the scenes look <span>at our agency</span></   h2>
                                    <p>From concept to completion, discover how we bring your   vision to life with innovation, collaboration, and expert     craftsmanship.</p>
                                </div>
                                <div className="choose-data">
                                    <div className="choose-data-img">
                                        <img src={Chooseicon1} alt="" />
                                    </div>
                                    <div className="section-sub-data">
                                        <h3>Tailored design solutions</h3>
                                        <p>We provide personalized interior design services that reflect your unique vision and lifestyle.</p>
                                    </div>
                                </div>
                                <div className="choose-data">
                                    <div className="choose-data-img">
                                        <img src={Chooseicon2} alt="" />
                                    </div>
                                    <div className="section-sub-data">
                                        <h3>Seamless Project Management</h3>
                                        <p>We handle the entire design process, from concept to completion, with flawless execution.</p>
                                    </div>
                                </div>
                                <div className="choose-data">
                                    <div className="choose-data-img">
                                        <img src={Chooseicon3} alt="" />
                                    </div>
                                    <div className="section-sub-data">
                                        <h3>Client-Centered Collaboration</h3>
                                        <p>We provide personalized interior design services that reflect your unique vision and lifestyle.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <div className="choose-content-imgs">
                                <div className="choose-image">
                                    <img src={Chooseimg1} alt="" className='choose-image-size1' />
                                    <img src={Chooseimg2} alt="" className='choose-image-size2' />
                                </div>
                                <div className="choose-image">
                                    <img src={Chooseimg3} alt="" className='choose-image-size3' />
                                    <img src={Chooseimg4} alt="" className='choose-image-size4' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Whychoose
