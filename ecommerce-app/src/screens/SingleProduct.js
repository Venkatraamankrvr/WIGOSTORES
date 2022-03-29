import { Link, UseHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ReactLoading from 'react-loading';
import axios from 'axios'
import { listProductDetails } from '../Redux/Actions/ProductActions';
import { useNavigate } from 'react-router-dom';
// import products from '../Data/Product';
import { useParams } from "react-router";

// let history = useHistory()
export const SingleProduct = () => {
  let navigate = useNavigate();
  const [qty, setQty] = useState(1)
  const { id } = useParams()
  console.log(id)
  let productId = id
  // const product = products.find((p) =>
  //   p._id === id
  // );
  // const [product, setProduct] = useState({})
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails
  useEffect(() => {
    dispatch(listProductDetails(productId))
    // const fetchproduct = async () => {
    //   const { data } = await axios.get(`/api/products/${id}`)
    //   setProduct(data)
    // }
    // fetchproduct()

  }, [dispatch, productId])

  const addToBagHandler = (e) => {
    e.preventDefault()
    navigate(`/cart/${productId}?qty=${qty}`)
  }

  return (
    <div className="main-content">

      <header className="header bg-white" id="header">
        <div className="container">
          <div className="page-header">
            <div className="header-left">
              <div className="logo-image">
                <Link to='/'>
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
          <div className="product-template page-content">
            <h2>Product Details</h2>
            <div className="product-details row">
              <div className="product-wrap">
                {loading ? ((<ReactLoading type={'spin'} color={'black'} height={'5%'} width={'5%'} />)) : error ? (<p>Error:{error}</p>) : (<>

                  <div className="product-single">
                    <div className="product-media">
                      <Link to={`/ products / ${product._id}`}>
                        <img src={product.image} alt="" className="product-img-size" />
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="right-side">
                        <span className="product-sku">SKU: SHIR0001</span>
                        <h3 className="product-title main-title">{product.name}</h3>
                        <div className="price">
                          <div className="regular-price">
                            <span><span className="money" data-currency-usd="$200.00">${product.price}</span></span>
                          </div>
                        </div>
                        <div className="">
                          <h6>Status</h6>
                          {product.countInStock > 0 ? (<h3>InStock</h3>) : (<h3>Out Of Stock</h3>)}
                        </div>
                        <div className="line-item-quantity">
                          <span className="line-item__quantity-text">Quantity:</span>
                          <input type="text" name="" size="4" id="" defaultValue="1" />
                        </div>
                        {product.countInStock > 0 ? (<div className="product-add">
                          <button onClick={addToBagHandler} className="button button--alt" name="add" id="add" type="submit">Add to Bag</button>
                        </div>) : (<div className="product-add">
                          <button className="button button--alt" name="add" id="add" type="submit">Out of Stock</button>
                        </div>)}

                      </div>
                    </div>
                  </div>
                  <div className="desc-wrap">
                    <h4>Description</h4>
                    <div className="detail-desc">
                      {product.description}
                    </div>
                  </div>
                </>)}
              </div>
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