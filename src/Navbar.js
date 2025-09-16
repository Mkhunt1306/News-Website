import React from "react";
import { Link } from "react-router-dom";
import './App.css';

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container">
        <Link className="navbar-brand" to="/home">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
             <li className="nav-item">
              <Link className="nav-link" to="/india">India</Link></li>
               {/* <li className="nav-item">
              <Link className="nav-link" to="/guj">Gujarat</Link></li> */}
           <li className="nav-item dropdown">
                <Link 
                    className="nav-link dropdown-toggle" 
                    to="#" 
                    id="navbarDropdown" 
                    role="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                >
                    USA
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/general">General</Link></li>
                    <li><Link className="dropdown-item" to="/business">Business</Link></li>
                    <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                    <li><Link className="dropdown-item" to="/health">Health</Link></li>
                    <li><Link className="dropdown-item" to="/science">Science</Link></li>
                    <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                    <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                </ul>
            </li>
              
          </ul>
          <div className="custom-control custom-switch my-3 d-flex justify-content-end">
            <input
              type="checkbox"
              className="custom-control-input"
              onChange={props.togglebtn}
              id="customSwitch1"
            />
            <label className="custom-control-label text-muted" htmlFor="customSwitch1">
              {props.text}
            </label>
          </div>
        </div>
      </div>
      </nav>
    </>
  );
}
