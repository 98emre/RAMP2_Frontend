import "./Modal.css";
import { IoLogInOutline } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import bootstrap from "bootstrap";
import { Modal, NavLink } from "react-bootstrap";
import "./Navbar.css";
import {
  setUsername,
  setPassword,
  getCredentials,
} from "../../actions/UserActions/userActions";
import ErrorFormLogInSignUp from "./ErrorFormLogInSignUp";

const mapStateToProps = (state) => ({
  userProps: state.userState,
  errorProps: state.errorState,
});

function ModalLogIn(props) {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(false);
  
  const handleShow = () => setShow(true);
  const handleClose = () => {
    props.errorProps.error_login = undefined;
    setStatus(false);
    setShow(false);
  }

  useEffect(() => {
    if (props.errorProps.error_login === false) {
      props.errorProps.error_login = undefined;
      handleClose();
    }
    else if (props.errorProps.error_login === true) {
      setStatus(true);
    } else {
      setStatus(false);
    }

     const unloadCallback = (event) => {
       event.preventDefault();
       event.returnValue = "";
       return "";
     };

     window.addEventListener("beforeunload", unloadCallback);
     return () => window.removeEventListener("beforeunload", unloadCallback);
  }, [props.errorProps.error_login]);

  const refreshPage = () => {
    window.location.reload();
  }

  const erroHandler = () => {
    setStatus(false);
  };

  return (
    <>
      <button
        hidden={props.userProps.user.id}
        style={{ background: "#1954A6", border: "none" }}
        className="nav-links"
        type="button"
        onClick={(e) => {
          handleShow();
        }}
      >

        Log in
      </button>
      <button
        hidden={!props.userProps.user.id}
        style={{ background: "#1954A6", border: "none" }}
        className="nav-links"
        type="button"
        onClick={refreshPage}
      >
        <a href='/' className="nav-links">   Log out</a>
      </button>

      <Modal show={show}>
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="title">
              <h2 className="text-primary">
                Log in <IoLogInOutline />
              </h2>
            </div>
            <div className="body">
              <form>
                <div className="col">
                  <div className="form-group col-12">
                    <label className="badge text-dark">Email address</label>
                    <input
                      id="form-control"
                      placeholder="Enter email"
                      value={props.userProps.user.username}
                      maxLength={65}
                      type="email"
                      className="form-control"
                      onChange={(e) => {
                        props.setUsername(e.target.value)
                        if (e.target.value != "") {
                          props.errorProps.error_login = undefined;
                          setStatus(false);
                        }
                      }}
                      required
                    />
                  </div>
                  <div className="form-group col-12">
                    <label className="badge text-dark">Password</label>
                    <input
                      id="form-control"
                      required
                      type="password"
                      maxLength={65}
                      value={props.userProps.user.password}
                      onChange={(e) => props.setPassword(e.target.value)}
                      className="form-control"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="mb-3">
                    <p className="forgot-password text-right">
                      Forgot <a href="#">password?</a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
            <div id="error2">
              {status && (
                <ErrorFormLogInSignUp
                  status={erroHandler}
                  type="Login"
                />
              )}
            </div>
            <div className="footer">
              <button id="cancelBtn" onClick={handleClose}>
                Close
              </button>
              <button
                type="submit"
                className="btn-primary"
                onClick={(e) => {
                  props.getCredentials(props.userProps.user);
                }}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default connect(mapStateToProps, {
  setUsername,
  setPassword,
  getCredentials,
})(ModalLogIn);
