import {
  SET_LIFTING_WORK_ACTIONS,
  SET_LIFTING_WORK_ACTIONS_ID,
  SET_BYWHOM31,
  SET_BYWHOM32,
  SET_DATE31,
  SET_DATE32,
  SET_FOLLOW_UPDATE31,
  SET_FOLLOW_UPDATE32,
  SET_PLANNED_ACTIONS31,
  SET_PLANNED_ACTIONS32,
  SET_READY_DATE31,
  SET_READY_DATE32,
} from "../../actionTypes/actionPlanTypes/liftingWorkActionsTypes";

export const setLiftingWorkActions = (LiftingWorkActions) => {
  return (dispatch) => {
    dispatch({
      type: SET_LIFTING_WORK_ACTIONS,
      payload: LiftingWorkActions,
    });
  };
};

export const setLiftingWorkActionsId = (ID) => {
  return (dispatch) => {
    dispatch({
      type: SET_LIFTING_WORK_ACTIONS_ID,
      payload: ID,
    });
  };
};

export const setPlannedActions31 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS31,
      payload: ans,
    });
  };
};

export const setPlannedActions32 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS32,
      payload: ans,
    });
  };
};

export const setByWhom31 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM31,
      payload: ans,
    });
  };
};

export const setByWhom32 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM32,
      payload: ans,
    });
  };
};

export const setDate31 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE31,
      payload: ans,
    });
  };
};

export const setDate32 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE32,
      payload: ans,
    });
  };
};

export const setReadyDate31 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE31,
      payload: ans,
    });
  };
};

export const setReadyDate32 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE32,
      payload: ans,
    });
  };
};

export const setFollowUpDate31 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE31,
      payload: ans,
    });
  };
};

export const setFollowUpDate32 = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE32,
      payload: ans,
    });
  };
};
