import React from 'react';
import './Footer.css'; 


import usdIcon from '../images/us-flag.png';
import visaIcon from '../images/visa.png';
import mastercardIcon from '../images/mastercard.png';
import paypalIcon from '../images/paypal.png';
import amexIcon from '../images/amex.png';
import applepayIcon from '../images/apple-pay.png';
import opayIcon from '../images/o-pay.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-subscribe">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from metta muse.</p>
          <div className="subscribe">
            <input type="email" placeholder="" />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-contact-currency"> {}
          <div className="footer-contact">
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <div className="footer-currency">
            <h4>CURRENCY</h4>
            <p>
              <img 
                src={usdIcon} 
                alt="USD" 
                className="currency-image"
              /> 
              +USD
            </p> 
            <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>
      </div>

      <hr className="footer-divider" /> 

      <div className="footer-content">
        <div className="footer-section">
          <h4>mettä muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-section">
          <div className="footer-follow">
            <h4>FOLLOW US</h4>
            <div className="social-icons">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
          <div className="footer-payment">
            <h4>mettä muse ACCEPTS</h4>
            <div className="payment-icons">
              <img 
                src={visaIcon} 
                alt="Visa" 
                className="payment-image"
              />
              <img 
                src={mastercardIcon} 
                alt="MasterCard" 
                className="payment-image"
              />
              <img 
                src={paypalIcon} 
                alt="PayPal" 
                className="payment-image"
              />
              <img 
                src={amexIcon} 
                alt="American Express" 
                className="payment-image"
              />
              <img 
                src={applepayIcon} 
                alt="Apple Pay" 
                className="payment-image"
              />
              <img 
                src={opayIcon} 
                alt="O Pay" 
                className="payment-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
