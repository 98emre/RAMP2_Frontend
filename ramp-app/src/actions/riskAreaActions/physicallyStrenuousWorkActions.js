import {
  SET_ID,
  SET_PHYSICALLYSTRENUOUSWORK,
  SET_Q61,
  SET_Q61Comm,
  SET_Q62A,
  SET_Q62A_Comm,
  SET_Q62B,
  SET_Q62B_Comm,
  SET_Q62C,
  SET_Q62C_Comm,
  SET_Q62D,
  SET_Q62D_Comm,
  SET_Q62E,
  SET_Q62E_Comm,
} from "../../actionTypes/riskAreaTypes/physicallyStrenuousWorkTypes";

export const setPhysicallyStrenuousWork = (PhysicallyStrenuousWork) => {
  return (dispatch) => {
    dispatch({
      type: SET_PHYSICALLYSTRENUOUSWORK,
      payload: PhysicallyStrenuousWork,
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

export const setQ61 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q61,
      payload: ans,
    });
  };
};

export const setQ61_Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q61Comm,
      payload: comm,
    });
  };
};

export const setQ62A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q62A,
      payload: ans,
    });
  };
};

export const setQ62A_Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q62A_Comm,
      payload: comm,
    });
  };
};

export const setQ62B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q62B,
      payload: ans,
    });
  };
};

export const setQ62B_Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q62B_Comm,
      payload: comm,
    });
  };
};

export const setQ62C = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q62C,
      payload: ans,
    });
  };
};

export const setQ62C_Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q62C_Comm,
      payload: comm,
    });
  };
};

export const setQ62D = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q62D,
      payload: ans,
    });
  };
};

export const setQ62D_Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q62D_Comm,
      payload: comm,
    });
  };
};

export const setQ62E = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q62E,
      payload: ans,
    });
  };
};

export const setQ62E_Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q62E_Comm,
      payload: comm,
    });
  };
};
