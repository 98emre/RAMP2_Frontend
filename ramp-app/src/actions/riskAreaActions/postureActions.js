import {
  SET_POSTURE,
  SET_ID,
  SET_Q11,
  SET_Q11COMM,
  SET_Q12,
  SET_Q12COMM,
  SET_Q13,
  SET_Q13COMM,
  SET_Q14,
  SET_Q14COMM,
  SET_Q15A,
  SET_Q15B,
  SET_Q15COMM,
  SET_Q16A,
  SET_Q16B,
  SET_Q16COMM,
  SET_Q17A,
  SET_Q17B,
  SET_Q17COMM,
  SET_Q18,
  SET_Q18COMM,
} from "../../actionTypes/riskAreaTypes/postureTypes";

export const setPosture = (Posture) => {
  return (dispatch) => {
    dispatch({
      type: SET_POSTURE,
      payload: Posture,
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

export const setQ11 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q11,
      payload: ans,
    });
  };
};

export const setQ11Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q11COMM,
      payload: comm,
    });
  };
};

export const setQ12 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q12,
      payload: ans,
    });
  };
};

export const setQ12Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q12COMM,
      payload: comm,
    });
  };
};

export const setQ13 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q13,
      payload: ans,
    });
  };
};

export const setQ13Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q13COMM,
      payload: comm,
    });
  };
};

export const setQ14 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q14,
      payload: ans,
    });
  };
};

export const setQ14Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q14COMM,
      payload: comm,
    });
  };
};

export const setQ15A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q15A,
      payload: ans,
    });
  };
};

export const setQ15B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q15B,
      payload: ans,
    });
  };
};

export const setQ15Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q15COMM,
      payload: comm,
    });
  };
};

export const setQ16A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q16A,
      payload: ans,
    });
  };
};

export const setQ16B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q16B,
      payload: ans,
    });
  };
};

export const setQ16Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q16COMM,
      payload: comm,
    });
  };
};

export const setQ17A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q17A,
      payload: ans,
    });
  };
};

export const setQ17B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q17B,
      payload: ans,
    });
  };
};

export const setQ17Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q17COMM,
      payload: comm,
    });
  };
};

export const setQ18 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q18,
      payload: ans,
    });
  };
};

export const setQ18Comm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q18COMM,
      payload: comm,
    });
  };
};
