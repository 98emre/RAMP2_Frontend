import {
  SET_PHYSICAL_DISCOMFORT_ACTIONS,
  SET_PHYSICAL_DISCOMFORT_ACTIONS_ID,
  SET_BYWHOM71,
  SET_DATE71,
  SET_FOLLOW_UPDATE71,
  SET_PLANNED_ACTIONS71,
  SET_READY_DATE71,
} from "../../actionTypes/actionPlanTypes/physicalDiscomfortActionsTypes";

export const setPhysicalDiscomfortActions = (PhysicalDiscomfortActions) => {
  return (dispatch) => {
    dispatch({
      type: SET_PHYSICAL_DISCOMFORT_ACTIONS,
      payload: PhysicalDiscomfortActions,
    });
  };
};

export const setPhysicalDiscomfortActionsId = (ID) => {
  return (dispatch) => {
    dispatch({
      type: SET_PHYSICAL_DISCOMFORT_ACTIONS_ID,
      payload: ID,
    });
  };
};

export const setPlannedActions71 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS71,
      payload: ans,
    });
  };
};

export const setByWhom71 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM71,
      payload: ans,
    });
  };
};

export const setDate71 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE71,
      payload: ans,
    });
  };
};

export const setReadyDate71 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE71,
      payload: ans,
    });
  };
};

export const setFollowUpDate71 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE71,
      payload: ans,
    });
  };
};
