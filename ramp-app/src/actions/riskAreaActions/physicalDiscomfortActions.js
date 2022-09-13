import {
  SET_PHYSICALDISCOMFORT,
  SET_ID,
  SET_Q71,
  SET_Q71_COMM,
  SET_Q72A,
  SET_Q72A_COMM,
  SET_Q72B,
  SET_Q72B_COMM,
  SET_Q72C,
  SET_Q72C_COMM,
  SET_Q72D,
  SET_Q72D_COMM,
  SET_Q72E,
  SET_Q72E_COMM,
} from "../../actionTypes/riskAreaTypes/physicalDiscomfortTypes";

export const setPhysicalDiscomfort = (PsyicalDiscomFort) => {
  return (dispatch) => {
    dispatch({
      type: SET_PHYSICALDISCOMFORT,
      payload: PsyicalDiscomFort,
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

export const setQ71 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q71,
      payload: ans,
    });
  };
};

export const setQ71_Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q71_COMM,
      payload: comm,
    });
  };
};

export const setQ72A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q72A,
      payload: ans,
    });
  };
};

export const setQ72A_Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q72A_COMM,
      payload: comm,
    });
  };
};

export const setQ72B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q72B,
      payload: ans,
    });
  };
};

export const setQ72B_Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q72B_COMM,
      payload: comm,
    });
  };
};

export const setQ72C = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q72C,
      payload: ans,
    });
  };
};

export const setQ72C_Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q72C_COMM,
      payload: comm,
    });
  };
};

export const setQ72D = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q72D,
      payload: ans,
    });
  };
};

export const setQ72D_Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q72D_COMM,
      payload: comm,
    });
  };
};

export const setQ72E = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q72E,
      payload: ans,
    });
  };
};

export const setQ72E_Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q72E_COMM,
      payload: comm,
    });
  };
};
