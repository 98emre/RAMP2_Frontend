import React, { useState } from "react";
import { FaBars, FaLessThan, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import { connect } from "react-redux";
import './../Section/Section.css';
import ModalLogIn from "./ModalLogIn"
import ModalSignUp from "./ModalSignUp";

import {
  setUsername,
  setPassword,
  getCredentials,
} from "../../actions/UserActions/userActions";


const mapStateToProps = (state) => ({
  userProps: state.userState,
});


const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const close = () => setClick(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="navbar" style={{ position: 'fixed' }}>
        <div className="navbar-container container">
          <NavLink to="/" className="navbar-logo" onClick={close}>
            <img
              className="nav-item"
              src="/images/rampLogo.png"
              alt="LOGO"
            />
          </NavLink>

          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : "nav-menu"}>
            <li className="nav-item" hidden={!props.userProps.user.id}>
              <NavLink to="/Checklist" className="nav-links" onClick={close} >
                Checklist
              </NavLink>
            </li>
            <li className="nav-item" hidden={!props.userProps.user.id}>
              <NavLink to="/Result" className="nav-links" onClick={close}>
                Result
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Actionmodel" className="nav-links" onClick={close}>
                Action model
              </NavLink>
            </li>
            <li className="nav-item" hidden={!true}>
              <NavLink
                to="/Actionssuggestions"
                className="nav-links"
                onClick={close}
              >
                Action suggestions
              </NavLink>
            </li>
            <li className="nav-item" hidden={!props.userProps.user.id}>
              <NavLink to="/Actionplan" className="nav-links" onClick={close}>
                Action plan
              </NavLink>
            </li>
            <li className="nav-item login-signup">
              <ModalLogIn />
            </li>
            <li className="nav-item login-signup">
              <ModalSignUp />
            </li>
            <li className="nav-item" hidden={!props.userProps.user.id}>
              <button
                hidden={!props.userProps.user.id}
                style={{ background: "#242424", border: "none", cursor:'default'}}
                className="nav-links"
                type="button"
              >
                {props.userProps.user.username}
              </button>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
};
export default connect(mapStateToProps, {
  setUsername,
  setPassword,
  getCredentials,
})(Navbar);

