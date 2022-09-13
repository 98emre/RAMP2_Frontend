import {
  SET_PHYSICAL_DISCOMFORT_ACTIONS,
  SET_PHYSICAL_DISCOMFORT_ACTIONS_ID,
  SET_BYWHOM71,
  SET_DATE71,
  SET_FOLLOW_UPDATE71,
  SET_PLANNED_ACTIONS71,
  SET_READY_DATE71,
} from "../../actionTypes/actionPlanTypes/physicalDiscomfortActionsTypes";

const initialState = {
  physicalDiscomfortActions: {
    plannedActions71: "",
    byWhom71: "",
    date71: "",
    readyDate71: "",
    followUpDate71: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PHYSICAL_DISCOMFORT_ACTIONS:
      state.physicalDiscomfortActions = action.payload;
      return {
        ...state,
      };

    case SET_PHYSICAL_DISCOMFORT_ACTIONS_ID:
      state.physicalDiscomfortActions.id = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS71:
      state.physicalDiscomfortActions.plannedActions71 = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM71:
      state.physicalDiscomfortActions.byWhom71 = action.payload;
      return {
        ...state,
      };

    case SET_DATE71:
      state.physicalDiscomfortActions.date71 = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE71:
      state.physicalDiscomfortActions.readyDate71 = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE71:
      state.physicalDiscomfortActions.followUpDate71 = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};
