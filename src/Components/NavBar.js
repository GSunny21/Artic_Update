import React from "react";
import { Link } from "react-router-dom";
import '../pages/Navbar.css';
import logo from '../resources/logo.png'

export default function NavBar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark custom-name" style={{backgroundColor: 'rgb(7 8 10)'}}>
        <div className="container-fluid">
          <img style={{height: '45px', width: 'auto'}} src={logo} alt="Logo"/>
          <Link className="navbar-brand ms-2 site-name" to="/">
            Artic Update
          </Link>
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
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
            <li className="nav-item mx-1">
                <Link className="nav-link active links" to="/general">General</Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link active links" to="/business">Business</Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link active links" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link active links" to="/health">Health</Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link active links" to="/science">Science</Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link active links" to="/sports">Sports</Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link active links" to="/technology">Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
