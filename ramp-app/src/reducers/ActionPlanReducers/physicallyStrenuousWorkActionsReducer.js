import {
  SET_PHYSICALLY_STRENUOUS_WORK_ACTIONS,
  SET_PHYSICALLY_STRENUOUS_WORK_ACTIONS_ID,
  SET_BYWHOM61,
  SET_DATE61,
  SET_FOLLOW_UPDATE61,
  SET_PLANNED_ACTIONS61,
  SET_READY_DATE61,
} from "../../actionTypes/actionPlanTypes/physicallyStrenuousWorkActionsTypes";

const initialState = {
  physicallyStrenuousWorkActions: {
    plannedActions61: "",
    byWhom61: "",
    date61: "",
    readyDate61: "",
    followUpDate61: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PHYSICALLY_STRENUOUS_WORK_ACTIONS:
      state.physicallyStrenuousWorkActions = action.payload;
      return {
        ...state,
      };

    case SET_PHYSICALLY_STRENUOUS_WORK_ACTIONS_ID:
      state.physicallyStrenuousWorkActions.id = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS61:
      state.physicallyStrenuousWorkActions.plannedActions61 = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM61:
      state.physicallyStrenuousWorkActions.byWhom61 = action.payload;
      return {
        ...state,
      };

    case SET_DATE61:
      state.physicallyStrenuousWorkActions.date61 = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE61:
      state.physicallyStrenuousWorkActions.readyDate61 = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE61:
      state.physicallyStrenuousWorkActions.followUpDate61 = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};
