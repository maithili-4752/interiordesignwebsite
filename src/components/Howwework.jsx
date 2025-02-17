import React from 'react'
import Workimg1 from '../images/illustration/icon-how-we-work-1.svg';
import Workimg2 from '../images/illustration/icon-how-we-work-2.svg';
import Workimg3 from '../images/illustration/icon-how-we-work-3.svg';
import Workimg4 from '../images/illustration/icon-how-we-work-4.svg';

const Howwework = () => {
    return (
        <div>
            <section className="work">
                <div className="container-fluid">
                    <div className="row row-section">
                        <div className="col-lg-6">
                            <div className="service-work-title">
                                <div className="section-title light-color">
                                    <h3>How We Work</h3>
                                    <h2>From concept to completion in <span>our work</span></   h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-para">
                                <div className="section-title">
                                    <p>Our comprehensive approach guides you through each phase of the design process, from initial brainstorming and conceptualization.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="work-content">
                                <figure>
                                    <img src={Workimg1} alt="workimage" />
                                    <figcaption>
                                        <div className="section-sub-data">
                                            <h3 className='mb-2'>01. Initial Consultation</h3>
                                            <p>We start with a one-on meeting to understand your vision preferences and requirement.</p>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="work-content">
                                <figure>
                                    <img src={Workimg2} alt="workimage" />
                                    <figcaption>
                                        <div className="section-sub-data">
                                            <h3 className='mb-2'>02. Design Planning</h3>
                                            <p>This involves selecting materials, and layouts, furnishings, as well as creating 3D renderings.</p>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="work-content">
                                <figure>
                                    <img src={Workimg3} alt="workimage" />
                                    <figcaption>
                                        <div className="section-sub-data">
                                            <h3 className='mb-2'>03. Project Execution</h3>
                                            <p>With the design plans in this place, we manage and coordinate all aspects of the projects.</p>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="work-content">
                                <figure>
                                    <img src={Workimg4} alt="workimage" />
                                    <figcaption>
                                        <div className="section-sub-data">
                                            <h3 className='mb-2'>04. Final Review</h3>
                                            <p>After completing project we conduct a thorough walkthrough with you to review the space.</p>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Howwework
