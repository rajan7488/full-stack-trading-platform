import React from 'react';
import { Link } from 'react-router';
export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <a className="navbar-brand" href="#">
          <img
            src="media/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link navbar navactive" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link  navbar"  to='/about' >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navbar" to='/product'>
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navbar" to='/pricing'>
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navbar" to='/support'>
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
