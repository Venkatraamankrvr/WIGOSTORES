import '../css/style.css'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Link } from "react-router-dom";
import ReactLoading from 'react-loading';
// import Loading from '../LoadingError/Loading';
import axios from 'axios'
import { listProduct } from '../../Redux/Actions/ProductActions';
import { useNavigate } from 'react-router-dom';

// import products from '../../Data/Product';

export const ShopSection = () => {
  // const [products, setProducts] = useState([])
  let navigate = useNavigate()
  // let history = useHistory()
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  // api call to get all products
  useEffect(() => {
    dispatch(listProduct())


    // const fetchproducts = async () => {
    //   const { data } = await axios.get('/api/products')
    //   // console.log('====================================');
    //   // console.log(data[1]._id);
    //   // console.log('====================================');
    //   setProducts(data)
    // }
    // fetchproducts()

  }, [dispatch])
  return (
    <div className="main-content">

      <header className="header bg-white" id="header">
        <div className="container">
          <div className="page-header">
            <div className="header-left">
              <div className="logo-image">
                <Link to="/">
                  <img src="/images/wigo-logo-img.png" style={{ "width": "70", "height": "36" }} alt="Wigo Store" itemProp="logo" />
                </Link>
              </div>
              <div className="header-menu">
                <nav className="navigation">
                  <ul>
                    <li><Link to="/">Collections</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right">
              <div className="header-items">
                <span className="sign-in">
                  <svg width="22px" height="22px" viewBox="-1 -1 21 20">
                    <g transform="translate(0.968750, -0.031250)" stroke="none" strokeWidth="1" fill="currentColor" fillRule="nonzero">
                      <path d="M9,7.5 C10.704,7.5 12.086,6.157 12.086,4.5 C12.086,2.843 10.704,1.5 9,1.5 C7.296,1.5 5.914,2.843 5.914,4.5 C5.914,6.157 7.296,7.5 9,7.5 Z M9,9 C6.444,9 4.371,6.985 4.371,4.5 C4.371,2.015 6.444,0 9,0 C11.556,0 13.629,2.015 13.629,4.5 C13.629,6.985 11.556,9 9,9 Z M1.543,18 L0,18 L0,15 C0,12.377 2.187,10.25 4.886,10.25 L14.143,10.25 C16.273,10.25 18,11.929 18,14 L18,18 L16.457,18 L16.457,14 C16.457,12.757 15.421,11.75 14.143,11.75 L4.886,11.75 C3.04,11.75 1.543,13.205 1.543,15 L1.543,18 Z"></path>
                    </g>
                  </svg>
                  <div className="head-link bg-white">
                    <a className="main-menu-link" href="login.html">Login</a>
                    <a href="register.html">Register</a>
                  </div>
                </span>

                <span className="cart-link">
                  <a href="cart.html">
                    <svg width="24px" height="24px" viewBox="0 -2 37 35">
                      <g transform="translate(0.500000, 0.500000)" stroke="none" fill="currentColor" fillRule="nonzero">
                        <path d="M0.2,11 L9.5,29 L26.4,29 L35.7,11 L0.2,11 Z M24.5,26 L11.5,26 L4.8,14 L31.2,14 L24.5,26 L24.5,26 Z M18.5,3 C22.7,3 25.5,6.3 25.5,8.5 L28.5,8.5 C28.5,4.5 24.2,0 18.5,0 C12.8,0 8.5,4.5 8.5,8.5 L11.5,8.5 C11.5,6.3 14.3,3 18.5,3 Z"></path>
                      </g>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="product-collection page-content">
            <h2>Collections</h2>
            <div className="products-grid row">
              {loading ? (<ReactLoading type={'spin'} color={'black'} height={'5%'} width={'5%'} />) : error ? (<p>Error:{error}</p>) : (<>
                {products.map((product) => (
                  <div
                    className="grid-item"
                    key={product._id}
                  >
                    <div className="product-item">
                      <div className="product-image">
                        <Link to={`/products/${product._id}`}>
                          <div className="shopBack">
                            <img src={product.image} alt={product.name} />
                          </div>
                        </Link>
                      </div>
                      <div className="product-content">
                        <p>
                          <Link to={`/products/${product._id}`}>
                            {product.name}
                          </Link>
                        </p>
                        <div className="price">
                          <div className="regular-price">
                            <span><span className="money">${product.price}</span></span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </>)}




              {/* ================================================ */}
              {/* <div className="product-item">
                <div className="product-image">
                  <a href="product.html">
                    <img src="/images/black-01.jpg" alt="" />
                  </a>
                </div>
                <div className="product-content">
                  <h3><a href="product.html" className="product-title" title="">Basic Black T-Shirt </a></h3>
                  <div className="price">
                    <div className="regular-price">
                      <span><span className="money">$200.00</span></span>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* </div> */}
              {/* <div className="grid-item">
                <div className="product-item">
                  <div className="product-image">
                    <a href="product.html">
                      <img src="images/green-01.jpg" alt="" />
                    </a>
                  </div>
                  <div className="product-content">
                    <h3><a href="product.html" className="product-title" title="">Basic Green T-Shirt </a></h3>
                    <div className="price">
                      <div className="regular-price">
                        <span><span className="money">$200.00</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="product-item">
                  <div className="product-image">
                    <a href="product.html">
                      <img src="components/" alt="" />
                    </a>
                  </div>
                  <div className="product-content">
                    <h3><a href="product.html" className="product-title" title="">Basic White T-Shirt </a></h3>
                    <div className="price">
                      <div className="regular-price">
                        <span><span className="money">$200.00</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="product-item">
                  <div className="product-image">
                    <a href="product.html">
                      <img src="images/pink-01.jpg" alt="" />
                    </a>
                  </div>
                  <div className="product-content">
                    <h3><a href="product.html" className="product-title" title="">Basic Pink T-Shirt </a></h3>
                    <div className="price">
                      <div className="regular-price">
                        <span><span className="money">$200.00</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="product-item">
                  <div className="product-image">
                    <a href="product.html">
                      <img src="images/floral.jpg" alt="" />
                    </a>
                  </div>
                  <div className="product-content">
                    <h3><a href="product.html" className="product-title" title="">Floral Dress with Flounce</a></h3>
                    <div className="price">
                      <div className="regular-price">
                        <span><span className="money">$200.00</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="product-item">
                  <div className="product-image">
                    <a href="product.html">
                      <img src="images/men-shirt.jpg" alt="" />
                    </a>
                  </div>
                  <div className="product-content">
                    <h3><a href="product.html" className="product-title" title="">Blend Long Sleeve Shirt</a></h3>
                    <div className="price">
                      <div className="regular-price">
                        <span><span className="money">$200.00</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer bg-white">
        <div className="container">
          This is footer section
        </div>
      </footer>
    </div>
  )
}