import {
  SET_ID,
  SET_LIFTINGWORK,
  SET_Q30,
  SET_Q31A,
  SET_Q31B,
  SET_Q32A,
  SET_Q32B,
  SET_Q33A,
  SET_Q33B,
  SET_Q34A,
  SET_Q34B,
  SET_Q35A,
  SET_Q35B,
  SET_Q36A,
  SET_Q36B,
  SET_Q37A,
  SET_Q37B,
  SET_Q31_AVERAGECOMM,
  SET_Q31_WORSTCOMM,
} from "../../actionTypes/riskAreaTypes/liftingWorkTypes";

export const setLiftingWork = (LiftingWork) => {
  return (dispatch) => {
    dispatch({
      type: SET_LIFTINGWORK,
      payload: LiftingWork,
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

export const setQ30 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q30,
      payload: ans,
    });
  };
};

export const setQ31A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q31A,
      payload: ans,
    });
  };
};

export const setQ31B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q31B,
      payload: ans,
    });
  };
};

export const setQ32A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q32A,
      payload: ans,
    });
  };
};

export const setQ32B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q32B,
      payload: ans,
    });
  };
};

export const setQ33A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q33A,
      payload: ans,
    });
  };
};

export const setQ33B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q33B,
      payload: ans,
    });
  };
};

export const setQ34A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q34A,
      payload: ans,
    });
  };
};

export const setQ34B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q34B,
      payload: ans,
    });
  };
};

export const setQ35A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q35A,
      payload: ans,
    });
  };
};

export const setQ35B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q35B,
      payload: ans,
    });
  };
};

export const setQ36A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q36A,
      payload: ans,
    });
  };
};

export const setQ36B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q36B,
      payload: ans,
    });
  };
};

export const setQ37A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q37A,
      payload: ans,
    });
  };
};

export const setQ37B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q37B,
      payload: ans,
    });
  };
};

export const setQ31AverageComm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q31_AVERAGECOMM,
      payload: comm,
    });
  };
};

export const setQ31WorstComm = (comm) => {
  return (dispatch) => {
    dispatch({
      type: SET_Q31_WORSTCOMM,
      payload: comm,
    });
  };
};
