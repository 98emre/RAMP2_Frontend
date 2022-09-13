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

const initialState = {
  pushingAndPullingActions: {
    plannedActions41: "",
    byWhom41: "",
    date41: "",
    readyDate41: "",
    followUpDate41: "",
    plannedActions42: "",
    byWhom42: "",
    date42: "",
    readyDate42: "",
    followUpDate42: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PUSHING_AND_PULLING_WORK_ACTIONS:
      state.pushingAndPullingActions = action.payload;
      return {
        ...state,
      };

    case SET_PUSHING_AND_PULLING_WORK_ACTIONS_ID:
      state.pushingAndPullingActions.id = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS41:
      state.pushingAndPullingActions.plannedActions41 = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS42:
      state.pushingAndPullingActions.plannedActions42 = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM41:
      state.pushingAndPullingActions.byWhom41 = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM42:
      state.pushingAndPullingActions.byWhom42 = action.payload;
      return {
        ...state,
      };

    case SET_DATE41:
      state.pushingAndPullingActions.date41 = action.payload;
      return {
        ...state,
      };

    case SET_DATE42:
      state.pushingAndPullingActions.date42 = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE41:
      state.pushingAndPullingActions.readyDate41 = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE42:
      state.pushingAndPullingActions.readyDate42 = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE41:
      state.pushingAndPullingActions.followUpDate41 = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE42:
      state.pushingAndPullingActions.followUpDate42 = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};
