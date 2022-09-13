import {
  SET_PHYSICALLY_STRENUOUS_WORK_ACTIONS,
  SET_PHYSICALLY_STRENUOUS_WORK_ACTIONS_ID,
  SET_BYWHOM61,
  SET_DATE61,
  SET_FOLLOW_UPDATE61,
  SET_PLANNED_ACTIONS61,
  SET_READY_DATE61,
} from "../../actionTypes/actionPlanTypes/physicallyStrenuousWorkActionsTypes";

export const setPhysicallyStrenuousWorkActions = (PhysicallyStrenuousWorkActions) => {
  return (dispatch) => {
    dispatch({
      type: SET_PHYSICALLY_STRENUOUS_WORK_ACTIONS,
      payload: PhysicallyStrenuousWorkActions,
    });
  };
};

export const setPhysicallyStrenuousWorkActionsId = (ID) => {
  return (dispatch) => {
    dispatch({
      type: SET_PHYSICALLY_STRENUOUS_WORK_ACTIONS_ID,
      payload: ID,
    });
  };
};

export const setPlannedActions61 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS61,
      payload: ans,
    });
  };
};

export const setByWhom61 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM61,
      payload: ans,
    });
  };
};

export const setDate61 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE61,
      payload: ans,
    });
  };
};

export const setReadyDate61 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE61,
      payload: ans,
    });
  };
};

export const setFollowUpDate61 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE61,
      payload: ans,
    });
  };
};
