import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/utilities/logo1.png';

function Footer() {

  return (
  <div className="container border-top mt-4">
    <footer className="pt-5">
      <div className="row align-items-center">

        <div className="col-2">
          <Link className="navbar-brand text-dark" to="/">Bon<span className='text-success me-2'>Voyage</span><i className="fas fa-paper-plane"></i></Link>
          <ul className='list-unstyled text-muted mt-3'>
            <li>
              Designed and built with all the love in the world with the help of our 
              <Link to="/about" className="nav-link p-0 text-dark">team members.</Link>
            </li>
          </ul>
        </div>

        <div className="col-2">
          <h5>Sitemap</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
            <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-muted">About</Link></li>
            <li className="nav-item mb-2"><Link to="/services" className="nav-link p-0 text-muted">Services</Link></li>
            <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 text-muted">Contact-Us</Link></li>
            <li className="nav-item mb-2"><Link to="/sign" className="nav-link p-0 text-muted">Sign-in</Link></li>
          </ul>
        </div>

        <div className="col-2">
          <h5>Other Sections</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/allactivities" className="nav-link p-0 text-muted">API Hit</Link></li>
            <li className="nav-item mb-2"><Link to="/booktour" className="nav-link p-0 text-muted">Book Tour</Link></li>
            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Pricing</Link></li>
            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">FAQs</Link></li>
            <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">About</Link></li>
          </ul>
        </div>

        <div className="col-4 offset-1">
          <form>
            <h5 className='mb-4'>Reach Out to Us</h5>
            <i className="fas fa-phone mb-1"></i>  +91 79-0549-8297
            <p><i className="fas fa-map-marked-alt mb-1"></i>  Shahjahanpur, U.P (242001) <br /><i className="fas fa-envelope-open mb-1"></i> Shivamshankhwar559@gmail.com</p>
            <div className="d-flex w-100 gap-2 mt-4">
              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="email" className="form-control" placeholder="Email address" required />
              <button className="btn btn-primary" type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex justify-content-between pt-4 mt-4 border-top">
        <p className='text-muted'>&copy; 2022 BonVoyage | All Rights Reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><Link className="link-dark text-primary" to="#"><i className="fab fa-facebook"></i></Link></li>
          <li className="ms-3"><Link className="link-dark" to="#"><i className="fab fa-linkedin"></i></Link></li>
          <li className="ms-3"><Link className="link-dark" to="#"><i className="fab fa-github"></i></Link></li>
        </ul>
      </div>
    </footer>
  </div>

  )
}

export default Footer;