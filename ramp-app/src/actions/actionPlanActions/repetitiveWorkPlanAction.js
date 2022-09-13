import {
  SET_REPETITIVE_WORK_ACTIONS,
  SET_REPETITIVE_WORK_ACTIONS_ID,
  SET_BYWHOM21,
  SET_BYWHOM22,
  SET_BYWHOM23,
  SET_BYWHOM24,
  SET_BYWHOM25,
  SET_DATE21,
  SET_DATE22,
  SET_DATE23,
  SET_DATE24,
  SET_DATE25,
  SET_FOLLOW_UPDATE21,
  SET_FOLLOW_UPDATE22,
  SET_FOLLOW_UPDATE23,
  SET_FOLLOW_UPDATE24,
  SET_FOLLOW_UPDATE25,
  SET_PLANNED_ACTIONS21,
  SET_PLANNED_ACTIONS22,
  SET_PLANNED_ACTIONS23,
  SET_PLANNED_ACTIONS24,
  SET_PLANNED_ACTIONS25,
  SET_READY_DATE21,
  SET_READY_DATE22,
  SET_READY_DATE23,
  SET_READY_DATE24,
  SET_READY_DATE25,
} from "../../actionTypes/actionPlanTypes/repetitiveWorkActionsTypes";

export const setRepetitiveWorkActions = (RepetitiveWorkActions) => {
  return (dispatch) => {
    dispatch({
      type: SET_REPETITIVE_WORK_ACTIONS,
      payload: RepetitiveWorkActions,
    });
  };
};

export const setRepetitiveWorkActionsId = (ID) => {
  return (dispatch) => {
    dispatch({
      type: SET_REPETITIVE_WORK_ACTIONS_ID,
      payload: ID,
    });
  };
};

export const setPlannedActions21 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS21,
      payload: ans,
    });
  };
};

export const setPlannedActions22 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS22,
      payload: ans,
    });
  };
};

export const setPlannedActions23 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS23,
      payload: ans,
    });
  };
};

export const setPlannedActions24 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS24,
      payload: ans,
    });
  };
};

export const setPlannedActions25 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS25,
      payload: ans,
    });
  };
};

export const setByWhom21 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM21,
      payload: ans,
    });
  };
};

export const setByWhom22 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM22,
      payload: ans,
    });
  };
};

export const setByWhom23 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM23,
      payload: ans,
    });
  };
};

export const setByWhom24 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM24,
      payload: ans,
    });
  };
};

export const setByWhom25 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM25,
      payload: ans,
    });
  };
};

export const setDate21 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE21,
      payload: ans,
    });
  };
};

export const setDate22 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE22,
      payload: ans,
    });
  };
};

export const setDate23 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE23,
      payload: ans,
    });
  };
};

export const setDate24 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE24,
      payload: ans,
    });
  };
};

export const setDate25 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE25,
      payload: ans,
    });
  };
};

export const setReadyDate21 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE21,
      payload: ans,
    });
  };
};

export const setReadyDate22 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE22,
      payload: ans,
    });
  };
};

export const setReadyDate23 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE23,
      payload: ans,
    });
  };
};

export const setReadyDate24 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE24,
      payload: ans,
    });
  };
};

export const setReadyDate25 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE25,
      payload: ans,
    });
  };
};

export const setFollowUpDate21 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE21,
      payload: ans,
    });
  };
};

export const setFollowUpDate22 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE22,
      payload: ans,
    });
  };
};

export const setFollowUpDate23 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE23,
      payload: ans,
    });
  };
};

export const setFollowUpDate24 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE24,
      payload: ans,
    });
  };
};

export const setFollowUpDate25 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE25,
      payload: ans,
    });
  };
};
