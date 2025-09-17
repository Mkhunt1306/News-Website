import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid ">
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
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/india">
                India
              </Link>
            </li>
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
                <li>
                  <Link className="dropdown-item" to="/general">
                    General
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/business">
                    Business
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/health">
                    Health
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/science">
                    Science
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sports">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/technology">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/demo">
                    Demo
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
         
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              onChange={props.togglebtn}
              role="switch"
              id="switchCheckDefault"
            />
            <label class="form-check-label text-white" for="switchCheckDefault">
              {props.text}
            </label>
          </div>
        </div>
      </div>
      
    </nav>
    </div>
    </>
  );
}
