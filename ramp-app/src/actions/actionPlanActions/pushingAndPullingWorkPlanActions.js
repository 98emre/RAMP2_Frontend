import {
  SET_PUSHING_AND_PULLING_WORK_ACTIONS,
  SET_PUSHING_AND_PULLING_WORK_ACTIONS_ID,
  SET_BYWHOM41,
  SET_BYWHOM42,
  SET_DATE41,
  SET_DATE42,
  SET_FOLLOW_UPDATE41,
  SET_FOLLOW_UPDATE42,
  SET_PLANNED_ACTIONS41,
  SET_PLANNED_ACTIONS42,
  SET_READY_DATE41,
  SET_READY_DATE42,
} from "../../actionTypes/actionPlanTypes/pushingAndPullingWorkActionsTypes";

export const setPushingAndPullingWorkActions = (
  PushingAndPullingWorkActions
) => {
  return (dispatch) => {
    dispatch({
      type: SET_PUSHING_AND_PULLING_WORK_ACTIONS,
      payload: PushingAndPullingWorkActions,
    });
  };
};

export const setPushingAndPullingWorkActionsId = (ID) => {
  return (dispatch) => {
    dispatch({
      type: SET_PUSHING_AND_PULLING_WORK_ACTIONS_ID,
      payload: ID,
    });
  };
};

export const setPlannedActions41 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS41,
      payload: ans,
    });
  };
};

export const setPlannedActions42 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS42,
      payload: ans,
    });
  };
};

export const setByWhom41 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM41,
      payload: ans,
    });
  };
};

export const setByWhom42 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM42,
      payload: ans,
    });
  };
};

export const setDate41 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE41,
      payload: ans,
    });
  };
};

export const setDate42 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE42,
      payload: ans,
    });
  };
};

export const setReadyDate41 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE41,
      payload: ans,
    });
  };
};

export const setReadyDate42 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE42,
      payload: ans,
    });
  };
};

export const setFollowUpDate41 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE41,
      payload: ans,
    });
  };
};

export const setFollowUpDate42 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE42,
      payload: ans,
    });
  };
};
