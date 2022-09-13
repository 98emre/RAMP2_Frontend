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

const initialState = {
  liftingWorkActions: {
    plannedActions31: "",
    byWhom31: "",
    date31: "",
    readyDate31: "",
    followUpDate31: "",
    plannedActions32: "",
    byWhom32: "",
    date32: "",
    readyDate32: "",
    followUpDate32: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LIFTING_WORK_ACTIONS:
      state.liftingWorkActions = action.payload;
      return {
        ...state,
      };

    case SET_LIFTING_WORK_ACTIONS_ID:
      state.liftingWorkActions.id = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS31:
      state.liftingWorkActions.plannedActions31 = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS32:
      state.liftingWorkActions.plannedActions32 = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM31:
      state.liftingWorkActions.byWhom31 = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM32:
      state.liftingWorkActions.byWhom32 = action.payload;
      return {
        ...state,
      };

    case SET_DATE31:
      state.liftingWorkActions.date31 = action.payload;
      return {
        ...state,
      };

    case SET_DATE32:
      state.liftingWorkActions.date32 = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE31:
      state.liftingWorkActions.readyDate31 = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE32:
      state.liftingWorkActions.readyDate32 = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE31:
      state.liftingWorkActions.followUpDate31 = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE32:
      state.liftingWorkActions.followUpDate32 = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};
