import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success px-2">
        <div className="container-fluid">
          <Link className="navbar-brand text-dark fs-3" to="/">Bon<span className='text-white me-2'>Voyage</span><i className="fas fa-paper-plane header_brand_icon"></i></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-6 text-center">
              <li className="nav-item">
                <Link className="nav-link active text-white text-decoration-underline" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">Contact-Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/sign">Sign-In</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;