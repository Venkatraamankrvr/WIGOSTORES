import { Link } from "react-router-dom"

export const CartScreen = () => {
  return (<div className="main-content">

    <header className="header bg-white" id="header">
      <div className="container">
        <div className="page-header">
          <div className="header-left">
            <div className="logo-image">
              <Link to="index.html">
                <img src="images/wigo-logo-img.png" width="70" height="36" alt="Wigo Store" itemprop="logo" />
              </Link>
            </div>
            <div className="header-menu">
              <nav className="navigation">
                <ul>
                  <li><Link to="collections.html">Collections</Link></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="header-right">
            <div className="header-items">
              <span className="sign-in">
                <svg width="22px" height="22px" viewBox="-1 -1 21 20">
                  <g transform="translate(0.968750, -0.031250)" stroke="none" stroke-width="1" fill="currentColor" fill-rule="nonzero">
                    <path d="M9,7.5 C10.704,7.5 12.086,6.157 12.086,4.5 C12.086,2.843 10.704,1.5 9,1.5 C7.296,1.5 5.914,2.843 5.914,4.5 C5.914,6.157 7.296,7.5 9,7.5 Z M9,9 C6.444,9 4.371,6.985 4.371,4.5 C4.371,2.015 6.444,0 9,0 C11.556,0 13.629,2.015 13.629,4.5 C13.629,6.985 11.556,9 9,9 Z M1.543,18 L0,18 L0,15 C0,12.377 2.187,10.25 4.886,10.25 L14.143,10.25 C16.273,10.25 18,11.929 18,14 L18,18 L16.457,18 L16.457,14 C16.457,12.757 15.421,11.75 14.143,11.75 L4.886,11.75 C3.04,11.75 1.543,13.205 1.543,15 L1.543,18 Z"></path>
                  </g>
                </svg>
                <div className="head-link bg-white">
                  <Link className="main-menu-link" to="login.html">Login</Link>
                  <Link to="register.html">Register</Link>
                </div>
              </span>

              <span className="cart-link">
                <Link to="cart.html">
                  <svg width="24px" height="24px" viewBox="0 -2 37 35">
                    <g transform="translate(0.500000, 0.500000)" stroke="none" fill="currentColor" fill-rule="nonzero">
                      <path d="M0.2,11 L9.5,29 L26.4,29 L35.7,11 L0.2,11 Z M24.5,26 L11.5,26 L4.8,14 L31.2,14 L24.5,26 L24.5,26 Z M18.5,3 C22.7,3 25.5,6.3 25.5,8.5 L28.5,8.5 C28.5,4.5 24.2,0 18.5,0 C12.8,0 8.5,4.5 8.5,8.5 L11.5,8.5 C11.5,6.3 14.3,3 18.5,3 Z"></path>
                    </g>
                  </svg>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section>
      <div className="container">
        <div className="cart-template page-content">
          <h2>Cart</h2>
          <div className="cart-count-price">
            <p className="no-margin">
              <span className="cart-total-quantity">TOTAL: 3 items</span>
              <strong className="cart-total-price">
                (<span><span id="revy-cart-subtotal-price">€204,15</span></span>)
              </strong>
            </p>
          </div>
          <div className="main-cart-wrapper">
            <div className="cart__items cart__block">
              <div className="line-items">
                <div className="line-item">
                  <div className="line-item__left">
                    <div className="line-item__image-wrapper">
                      <img className="line-item__image" src="images/green-01.jpg" alt="" />
                    </div>
                  </div>
                  <div className="line-item__right">
                    <div className="line-item__details">
                      <h2 className="line-item-title">
                        <Link to="product.html" className="cart__product-title">
                          Basic Green Shirt
                        </Link>
                      </h2>
                      <Link title="Remove item" className="line-item__remove" to="#">
                        <svg aria-hidden="true" viewBox="0 0 448 512" className="svg-inline--fa fa-trash-alt fa-w-14 fa-3x">
                          <path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" className=""></path>
                        </svg>
                      </Link>
                    </div>

                    <div className="line-item__price">
                      <span><strong>Price:</strong></span>€68,05
                    </div>

                    <div className="line-item__total-amount-price">
                      <span><strong>Total Price:</strong></span>€68,05
                    </div>

                    <div className="line-item__quantity">
                      <span className="line-item__quantity-text">Quantity:</span>
                      <input type="text" name="updates[]" size="4" value="1" />
                      <button className="button update_btn" type="submit">Update Quantity</button>
                    </div>
                  </div>
                </div>
                <div className="line-item">
                  <div className="line-item__left">
                    <div className="line-item__image-wrapper">
                      <img className="line-item__image" src="images/black-01.jpg" alt="" />
                    </div>
                  </div>
                  <div className="line-item__right">
                    <div className="line-item__details">
                      <h2 className="line-item-title">
                        <Link to="product.html" className="cart__product-title">
                          Basic Black Shirt
                        </Link>
                      </h2>
                      <Link title="Remove item" className="line-item__remove" to="#">
                        <svg aria-hidden="true" viewBox="0 0 448 512" className="svg-inline--fa fa-trash-alt fa-w-14 fa-3x">
                          <path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" className=""></path>
                        </svg>
                      </Link>
                    </div>

                    <div className="line-item__price">
                      <span><strong>Price:</strong></span>€68,05
                    </div>

                    <div className="line-item__total-amount-price">
                      <span><strong>Total Price:</strong></span>€68,05
                    </div>

                    <div className="line-item__quantity">
                      <span className="line-item__quantity-text">Quantity:</span>
                      <input type="text" name="updates[]" size="4" value="1" />
                      <button className="button update_btn" type="submit">Update Quantity</button>
                    </div>
                  </div>
                </div>
                <div className="line-item">
                  <div className="line-item__left">
                    <div className="line-item__image-wrapper">
                      <img className="line-item__image" src="images/pink-01.jpg" alt="" />
                    </div>
                  </div>
                  <div className="line-item__right">
                    <div className="line-item__details">
                      <h2 className="line-item-title">
                        <Link to="product.html" className="cart__product-title">
                          Basic Pink Shirt
                        </Link>
                      </h2>
                      <Link title="Remove item" className="line-item__remove" to="#">
                        <svg aria-hidden="true" viewBox="0 0 448 512" className="svg-inline--fa fa-trash-alt fa-w-14 fa-3x">
                          <path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" className=""></path>
                        </svg>
                      </Link>
                    </div>

                    <div className="line-item__price">
                      <span><strong>Price:</strong></span>€68,05
                    </div>

                    <div className="line-item__total-amount-price">
                      <span><strong>Total Price:</strong></span>€68,05
                    </div>

                    <div className="line-item__quantity">
                      <span className="line-item__quantity-text">Quantity:</span>
                      <input type="text" name="updates[]" size="4" value="1" />
                      <button className="button update_btn" type="submit">Update Quantity</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart__details cart__block">
              <div className="cart__details-wrap">
                <h5>ORDER SUMMARY</h5>
                <p className="no-margin evenly-align">
                  <span className="cart-total-quantity">3 items</span>
                  <span className="cart-total-price">
                    <span>€204,15</span>
                  </span>
                </p>
                <div className="cart-subtotal evenly-align cart__total">
                  <span className="cart-subtotal__title">Subtotal</span>
                  <strong><span className="cart-subtotal__price">€204,15</span></strong>
                </div>
                <div className="cart__total evenly-align">
                  <span className="cart__total-text">Total:</span>
                  <strong className="cart__total-price">
                    <span>€204,15</span>
                    <span> EUR</span>
                  </strong>
                </div>
                <button className="button update_btn" type="submit">Update Quantity</button>
                <Link to="checkout.html" className="button checkout_btn button--hollow">Checkout</Link>
                <div className="cart-promo">
                  <h5>ENTER A PROMO CODE</h5>
                  <input type="text" id="devPromo" />
                  <Link to="#">Apply Coupon</Link>
                </div>
                <div className="text-center mt-20">
                  <Link className="link-text-line" to="/" title="Continue shopping">Continue shopping</Link>
                </div>
              </div>

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
  </div>)
}