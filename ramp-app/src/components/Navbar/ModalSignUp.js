import "./Modal.css";
import { IoLogInOutline } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import bootstrap from "bootstrap";
import { Modal } from "react-bootstrap";
var bcrypt = require("bcryptjs");
import {
  setUsername,
  setPassword,
  setUser,
} from "../../actions/UserActions/userActions";
import ErrorFormLogInSignUp from "./ErrorFormLogInSignUp";

const mapStateToProps = (state) => ({
  userProps: state.userState,
  errorProps: state.errorState,
});

function ModalSignUp(props) {
  const [statusIdName, setStatusIdName] = useState(false);
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(false);
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const handleShow = () => setShow(true);
  const handleClose = () => {
    props.errorProps.error_signup = undefined;
    setStatus(false);
    setStatusIdName(false);
    setShow(false);
  }

  useEffect(() => {
    if (props.errorProps.error_signup === false) {
      props.errorProps.error_signup = undefined;
      props.setUsername("");
      props.setPassword("");
      setConfirmedPassword("");
      handleClose();
    }
    else if (props.errorProps.error_signup === true) {
      setStatus(true);
      props.setUsername("");
      props.setPassword("");
      setConfirmedPassword("");
    } else {
      setStatus(false);
    }
  }, [props.errorProps.error_signup]);

  return (
    <>
      <button
        hidden={props.userProps.user.id}
        style={{ background: "#1954A6", border: "none" }}
        className="nav-links"
        type="button"
        onClick={handleShow}
      >
        Sign Up
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
              <h2 className="text-primary">Sign Up</h2>
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
                          props.errorProps.error_signup = undefined;
                          setStatus(false);
                          setStatusIdName(false);
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
                      onChange={(e) => {
                        props.setPassword(e.target.value)
                        if (props.userProps.user.username !== "") {
                          setStatusIdName(false);
                        }
                      }}
                      className="form-control"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="form-group col-12">
                    <label className="badge text-dark">Confirm password</label>
                    <input
                      required
                      type="password"
                      maxLength={65}
                      value={confirmedPassword}
                      onChange={(e) => {
                        setConfirmedPassword(e.target.value);
                      }}
                      className="form-control"
                      placeholder="Enter the password again"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div id="error1">
              {statusIdName && (
                <ErrorFormLogInSignUp
                  idName={props.userProps.user.username}
                  formpassword={props.userProps.user.password}
                  formpasswordConfirmed={confirmedPassword}
                  type="Sign up"
                />
              )}
            </div>
            <div id="error2">
              {status && (
                <ErrorFormLogInSignUp
                  type="Sign up"
                />
              )}
            </div>

            <div className="footer">
              <button id="cancelBtn" onClick={handleClose}>
                Close
              </button>
              <button
                type="submit"
                className=" btn-primary"
                onClick={() => {
                  setStatusIdName(false);
                  if (props.userProps.user.username !== "" && props.userProps.user.password !== "") {
                    if (props.userProps.user.password === confirmedPassword) {
                      bcrypt.hash(props.userProps.user.password, 5, (err, hash) => {
                        if (err) {
                          return;
                        }
                        props.setPassword(hash);
                        props.setUser(props.userProps.user);
                      });
                    } else {
                      setStatusIdName(true);
                    }
                  } else {
                    setStatusIdName(true);
                  }
                }}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default connect(mapStateToProps, { setUsername, setPassword, setUser })(
  ModalSignUp
);
