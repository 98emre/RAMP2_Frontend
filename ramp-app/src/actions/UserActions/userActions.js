import {
  SET_USERNAME,
  SET_PASSWORD,
  SET_USER,
  GET_CREDENTIALS,
  SET_LOGIN_ERROR,
  SET_SIGNUP_ERROR,
} from "../../actionTypes/userTypes/userTypes";

import axios from "axios";
var bcrypt = require("bcryptjs");

export const setUsername = (Username) => {
  return (dispatch) => {
    dispatch({
      type: SET_USERNAME,
      payload: Username,
    });
  };
};

export const setPassword = (Password) => {
  return (dispatch) => {
    dispatch({
      type: SET_PASSWORD,
      payload: Password,
    });
  };
};

export const setUser = (user) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8081/api/auth/addUser", user)
      .then((response) => {
        dispatch({
          type: SET_USER,
          payload: response.data,
        });
        dispatch({
          type: SET_SIGNUP_ERROR,
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: SET_SIGNUP_ERROR,
          payload: true,
        });
      });
  };
};

export const getCredentials = (user) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8081/api/auth/login", user)
      .then((response) => {
        dispatch({
          type: GET_CREDENTIALS,
          payload: response.data,
        });
        dispatch({
          type: SET_LOGIN_ERROR,
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: SET_LOGIN_ERROR,
          payload: true,
        });
      });
  };
};
