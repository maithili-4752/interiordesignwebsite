import React from 'react';
import Recentcatimg1 from '../images/illustration/product-img-1.png';
import Recentcatimg2 from '../images/illustration/product-img-2.png';
import Recentcatimg3 from '../images/illustration/product-img-3.png';
import Shopimg1 from '../images/illustration/Product-feat-img-1.jpg';
import Shopimg2 from '../images/illustration/Product-feat-img-2.jpg';
import Shopimg3 from '../images/illustration/Product-feat-img-3.jpg';
import Shopimg4 from '../images/illustration/Product-feat-img-4.jpg';
import Shopimg5 from '../images/illustration/Product-feat-img-5.jpg';
import Shopimg6 from '../images/illustration/Product-feat-img-6.jpg';
import Shopimg7 from '../images/illustration/Product-feat-img-7.jpg';
import Shopimg8 from '../images/illustration/Product-feat-img-8.jpg';
import Shopimg9 from '../images/illustration/Product-feat-img-9.jpg';
import { FaSistrix } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
// import { FaCartShopping } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import '../css/Shop.css';

const Shop = () => {
  return (
    <div>
      <section className="all-hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="section-title text-center">
              <h1>Shop</h1>
              <h4 className="explore-btn">
                <Link to='/' className="home-btn">Home  </Link> / Shop
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className='shopwrapper'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <div className="project-details-sidebar">
                <div className="project-details-box shop-content">
                  <div className="product-search">
                    <input type="text" placeholder='Search Product...' /><FaSistrix />
                  </div>
                  <div className="categories-data">
                    <h2>Product Categories</h2>

                    <ul className='mb-5'>
                      <li className='category-items'>Bookcase <span> (2) </span></li>
                      <li className='category-items'>Dressing Table <span> (2) </span></li>
                      <li className='category-items'>Office Chair <span> (2) </span></li>
                      <li className='category-items'>Sofa <span> (2) </span></li>
                      <li className='category-items'>Study Table <span> (2) </span></li>
                      <li className='category-items'>Lamp <span> (2) </span></li>
                      <li className='category-items'>Wardrobe <span> (2) </span></li>
                    </ul>
                    <h2>Recent Products</h2>
                    <div className="recent-content">
                      <div className="recent-cat-img">
                        <img src={Recentcatimg1} alt="" />
                      </div>
                      <div className="recent-cat-info discount-price">
                        <h4 className='m-0'> Solid Wood Chair</h4>
                        <div><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStarHalfStroke className='icon-color' /></div>
                        <p><span>$ 65.00  </span> $ 60.00</p>
                      </div>
                    </div>
                    <div className="recent-content">
                      <div className="recent-cat-img">
                        <img src={Recentcatimg2} alt="" />
                      </div>
                      <div className="recent-cat-info discount-price">
                        <h4 className='m-0'>Table Lamp</h4>
                        <div><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStarHalfStroke className='icon-color' /></div>
                        <p><span>$ 60.00  </span> $ 55.00</p>
                      </div>
                    </div>
                    <div className="recent-content">
                      <div className="recent-cat-img">
                        <img src={Recentcatimg3} alt="" />
                      </div>
                      <div className="recent-cat-info discount-price">
                        <h4 className='m-0'>Garden Chair</h4>
                        <div><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStarHalfStroke className='icon-color' /></div>
                        <p><span>$ 80.00  </span> $ 75.00</p>
                      </div>
                    </div>
                    <h2>Products Tags</h2>
                    <ul className='tags-content'>
                      <li className='tags'>Chair</li>
                      <li className='tags'>Table</li>
                      <li className='tags'>Sofa</li>
                      <li className='tags'>Study Table</li>
                      <li className='tags'>Lamp</li>
                      <li className='tags'>Wardrobe</li>
                      <li className='tags'>Rolling Chair</li>
                      <li className='tags'>Stool</li>
                      <li className='tags'>Furniture</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-8">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="shop-detaild-info">
                    <div className="collection-item-info text-center">
                      <div className="collection-item-data">
                        <div className="shop-imgs product-tag">
                          <img src={Shopimg1} alt="" className='img-fluid' />
                          <div className='add-label product-label'><span>SALE</span> </div>
                          <div className='add-cart'><span>ADD TO CART</span> </div>
                        </div>
                        
                        <div className="shop-item-details discount-price">
                          <h2 className='m-0'><Link to='' className='shop-link' >
                            Glass Table</Link></h2>
                          <p><span>$ 215.00  </span> $ 210.00</p>   
                          <div><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStarHalfStroke className='icon-color' /></div>                      
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="shop-detaild-info">
                    <div className="collection-item-info text-center">
                      <div className="collection-item-data">
                        <div className="shop-imgs product-tag">
                          <img src={Shopimg2} alt="" className='img-fluid' />
                          <div className='add-cart'><span>ADD TO CART</span> </div>
                        </div>
                        <div className="shop-item-details discount-price">
                          <h2 className='m-0'><Link to='' className='shop-link'  >
                            Wire Lamp</Link></h2>
                          <p><span>$ 300.00  </span> $ 270.00</p>
                          <div><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStarHalfStroke className='icon-color' /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="shop-detaild-info">
                    <div className="collection-item-info text-center">
                      <div className="collection-item-data">
                        <div className="shop-imgs product-tag">
                          <img src={Shopimg3} alt="" className='img-fluid' />
                          <div className='add-label product-label'><span>NEW</span> </div>
                          <div className='add-cart'><span>ADD TO CART</span> </div>
                        </div>
                        <div className="shop-item-details discount-price">
                          <h2 className='m-0'><Link to='' className='shop-link'  >
                            Wall Light</Link></h2>
                          <p><span>$ 100.00  </span> $ 90.00</p>
                          <div><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStarHalfStroke className='icon-color' /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="shop-detaild-info">
                    <div className="collection-item-info text-center">
                      <div className="collection-item-data">
                        <div className="shop-imgs product-tag">
                          <img src={Shopimg4} alt="" className='img-fluid' />
                          <div className='add-cart'><span>ADD TO CART</span> </div>
                        </div>
                        <div className="shop-item-details discount-price">
                          <h2 className='m-0'><Link to='' className='shop-link' >
                            Origami Lamps</Link></h2>
                          <p><span>$ 215.00  </span> $ 210.00</p>
                          <div><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStarHalfStroke className='icon-color' /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="shop-detaild-info">
                    <div className="collection-item-info text-center">
                      <div className="collection-item-data">
                        <div className="shop-imgs product-tag">
                          <img src={Shopimg5} alt="" className='img-fluid' />
                          <div className='add-label product-label'><span>NEW</span> </div>
                          <div className='add-cart'><span>ADD TO CART</span> </div>
                        </div>
                        <div className="shop-item-details discount-price">
                          <h2 className='m-0'><Link to='' className='shop-link' >
                            Two Chairs</Link></h2>
                          <p><span>$ 170.00  </span> $ 150.00</p>
                          <div><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStarHalfStroke className='icon-color' /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="shop-detaild-info">
                    <div className="collection-item-info text-center">
                      <div className="collection-item-data">
                        <div className="shop-imgs product-tag">
                          <img src={Shopimg6} alt="" className='img-fluid' />           
                          <div className='add-cart'><span>ADD TO CART</span> </div>
                        </div>
                        <div className="shop-item-details discount-price">
                          <h2 className='m-0'><Link to='' className='shop-link' >
                            Decorative Details</Link></h2>
                          <p><span>$ 200.00  </span> $ 190.00</p>
                          <div><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStarHalfStroke className='icon-color' /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="shop-detaild-info">
                    <div className="collection-item-info text-center">
                      <div className="collection-item-data">
                        <div className="shop-imgs product-tag">
                          <img src={Shopimg7} alt="" className='img-fluid' />
                          <div className='add-cart'><span>ADD TO CART</span> </div>
                        </div>
                        <div className="shop-item-details discount-price">
                          <h2 className='m-0'><Link to='' className='shop-link' >
                            Black Chairs</Link></h2>
                          <p><span>$ 200.00  </span> $ 190.00</p>
                          <div><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStarHalfStroke className='icon-color' /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="shop-detaild-info">
                    <div className="collection-item-info text-center">
                      <div className="collection-item-data">
                        <div className="shop-imgs product-tag">
                          <img src={Shopimg8} alt="" className='img-fluid' />
                          <div className='add-label product-label'><span>SOLD</span> </div>
                          <div className='add-cart'><span>ADD TO CART</span> </div>
                        </div>
                        <div className="shop-item-details discount-price">
                          <h2 className='m-0'><Link to='' className='shop-link' >
                            Livingroom Details</Link></h2>
                          <p><span>$ 200.00  </span> $ 190.00</p>
                          <div><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStarHalfStroke className='icon-color' /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="shop-detaild-info">
                    <div className="collection-item-info text-center">
                      <div className="collection-item-data">
                        <div className="shop-imgs product-tag">
                          <img src={Shopimg9} alt="" className='img-fluid' />
                          <div className='add-cart'><span>ADD TO CART</span> </div>
                        </div>
                        <div className="shop-item-details discount-price">
                          <h2 className='m-0'><Link to='' className='shop-link' >
                            Cozy Chair</Link></h2>
                          <p><span>$ 200.00  </span> $ 190.00</p>
                          <div><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStar className='icon-color' /><FaStarHalfStroke className='icon-color' /></div>
                        </div>
                      </div>
                    </div>
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

export default Shop
