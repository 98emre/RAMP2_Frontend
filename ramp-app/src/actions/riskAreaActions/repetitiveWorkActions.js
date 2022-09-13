import {
  SET_REPETITIVEWORK,
  SET_ID,
  SET_Q21A,
  SET_Q21B,
  SET_Q21COMM,
  SET_Q22A,
  SET_Q22B,
  SET_Q22COMM,
  SET_Q23A,
  SET_Q23B,
  SET_Q23COMM,
  SET_Q24,
  SET_Q24COMM,
  SET_Q25,
  SET_Q25COMM,
} from "../../actionTypes/riskAreaTypes/repetitiveWorkTypes";

export const setRepetitiveWork = (RepetitiveWork) => {
  return (dispatch) => {
    dispatch({
      type: SET_REPETITIVEWORK,
      payload: RepetitiveWork,
    });
  };
};

export const setID = (ID) => {
  return (dispatch) => {
    dispatch({
      type: SET_ID,
      payload: ID,
    });
  };
};

export const setQ21A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q21A,
      payload: ans,
    });
  };
};

export const setQ21B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q21B,
      payload: ans,
    });
  };
};

export const setQ21Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q21COMM,
      payload: comm,
    });
  };
};

export const setQ22A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q22A,
      payload: ans,
    });
  };
};

export const setQ22B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q22B,
      payload: ans,
    });
  };
};

export const setQ22Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q22COMM,
      payload: comm,
    });
  };
};

export const setQ23A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q23A,
      payload: ans,
    });
  };
};

export const setQ23B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q23B,
      payload: ans,
    });
  };
};

export const setQ23Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q23COMM,
      payload: comm,
    });
  };
};

export const setQ24 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q24,
      payload: ans,
    });
  };
};

export const setQ24Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q24COMM,
      payload: comm,
    });
  };
};

export const setQ25 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q25,
      payload: ans,
    });
  };
};

export const setQ25Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q25COMM,
      payload: comm,
    });
  };
};
