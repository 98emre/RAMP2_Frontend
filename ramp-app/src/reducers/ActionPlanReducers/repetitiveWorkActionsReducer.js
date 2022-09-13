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

const initialState = {
  repetitiveWorkActions: {
    plannedActions21: "",
    byWhom21: "",
    date21: "",
    readyDate21: "",
    followUpDate21: "",
    plannedActions22: "",
    byWhom22: "",
    date22: "",
    readyDate22: "",
    followUpDate22: "",
    plannedActions23: "",
    byWhom23: "",
    date23: "",
    readyDate23: "",
    followUpDate23: "",
    plannedActions24: "",
    byWhom24: "",
    date24: "",
    readyDate24: "",
    followUpDate24: "",
    plannedActions25: "",
    byWhom25: "",
    date25: "",
    readyDate25: "",
    followUpDate25: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_REPETITIVE_WORK_ACTIONS:
      state.repetitiveWorkActions = action.payload;
      return {
        ...state,
      };

    case SET_REPETITIVE_WORK_ACTIONS_ID:
      state.repetitiveWorkActions.id = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS21:
      state.repetitiveWorkActions.plannedActions21 = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS22:
      state.repetitiveWorkActions.plannedActions22 = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS23:
      state.repetitiveWorkActions.plannedActions23 = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS24:
      state.repetitiveWorkActions.plannedActions24 = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS25:
      state.repetitiveWorkActions.plannedActions25 = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM21:
      state.repetitiveWorkActions.byWhom21 = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM22:
      state.repetitiveWorkActions.byWhom22 = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM23:
      state.repetitiveWorkActions.byWhom23 = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM24:
      state.repetitiveWorkActions.byWhom24 = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM25:
      state.repetitiveWorkActions.byWhom25 = action.payload;
      return {
        ...state,
      };

    case SET_DATE21:
      state.repetitiveWorkActions.date21 = action.payload;
      return {
        ...state,
      };

    case SET_DATE22:
      state.repetitiveWorkActions.date22 = action.payload;
      return {
        ...state,
      };

    case SET_DATE23:
      state.repetitiveWorkActions.date23 = action.payload;
      return {
        ...state,
      };

    case SET_DATE24:
      state.repetitiveWorkActions.date24 = action.payload;
      return {
        ...state,
      };

    case SET_DATE25:
      state.repetitiveWorkActions.date25 = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE21:
      state.repetitiveWorkActions.readyDate21 = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE22:
      state.repetitiveWorkActions.readyDate22 = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE23:
      state.repetitiveWorkActions.readyDate23 = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE24:
      state.repetitiveWorkActions.readyDate24 = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE25:
      state.repetitiveWorkActions.readyDate25 = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE21:
      state.repetitiveWorkActions.followUpDate21 = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE22:
      state.repetitiveWorkActions.followUpDate22 = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE23:
      state.repetitiveWorkActions.followUpDate23 = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE24:
      state.repetitiveWorkActions.followUpDate24 = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE25:
      state.repetitiveWorkActions.followUpDate25 = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};
