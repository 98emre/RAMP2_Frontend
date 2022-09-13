import {
  SET_POSTURE_ACTIONS,
  SET_POSTURE_ACTIONS_ID,
  SET_BYWHOM11,
  SET_BYWHOM12,
  SET_BYWHOM13,
  SET_BYWHOM14,
  SET_BYWHOM15,
  SET_BYWHOM16,
  SET_BYWHOM17,
  SET_BYWHOM18,
  SET_DATE11,
  SET_DATE12,
  SET_DATE13,
  SET_DATE14,
  SET_DATE15,
  SET_DATE16,
  SET_DATE17,
  SET_DATE18,
  SET_FOLLOW_UPDATE11,
  SET_FOLLOW_UPDATE12,
  SET_FOLLOW_UPDATE13,
  SET_FOLLOW_UPDATE14,
  SET_FOLLOW_UPDATE15,
  SET_FOLLOW_UPDATE16,
  SET_FOLLOW_UPDATE17,
  SET_FOLLOW_UPDATE18,
  SET_PLANNED_ACTIONS11,
  SET_PLANNED_ACTIONS12,
  SET_PLANNED_ACTIONS13,
  SET_PLANNED_ACTIONS14,
  SET_PLANNED_ACTIONS15,
  SET_PLANNED_ACTIONS16,
  SET_PLANNED_ACTIONS17,
  SET_PLANNED_ACTIONS18,
  SET_READY_DATE11,
  SET_READY_DATE12,
  SET_READY_DATE13,
  SET_READY_DATE14,
  SET_READY_DATE15,
  SET_READY_DATE16,
  SET_READY_DATE17,
  SET_READY_DATE18,
} from "../../actionTypes/actionPlanTypes/postureActionsTypes";

const initialState = {
  postureActions: {
    plannedActions11: "",
    byWhom11: "",
    date11: "",
    readyDate11: "",
    followUpDate11: "",
    plannedActions12: "",
    byWhom12: "",
    date12: "",
    readyDate12: "",
    followUpDate12: "",
    plannedActions13: "",
    byWhom13: "",
    date13: "",
    readyDate13: "",
    followUpDate13: "",
    plannedActions14: "",
    byWhom14: "",
    date14: "",
    readyDate14: "",
    followUpDate14: "",
    plannedActions15: "",
    byWhom15: "",
    date15: "",
    readyDate15: "",
    followUpDate15: "",
    plannedActions16: "",
    byWhom16: "",
    date16: "",
    readyDate16: "",
    followUpDate16: "",
    plannedActions17: "",
    byWhom17: "",
    date17: "",
    readyDate17: "",
    followUpDate17: "",
    plannedActions18: "",
    byWhom18: "",
    date18: "",
    readyDate18: "",
    followUpDate18: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTURE_ACTIONS:
      state.postureActions = action.payload;
      return {
        ...state,
      };

    case SET_POSTURE_ACTIONS_ID:
      state.postureActions.id = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS11:
      state.postureActions.plannedActions11 = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS12:
      state.postureActions.plannedActions12 = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS13:
      state.postureActions.plannedActions13 = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS14:
      state.postureActions.plannedActions14 = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS15:
      state.postureActions.plannedActions15 = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS16:
      state.postureActions.plannedActions16 = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS17:
      state.postureActions.plannedActions17 = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS18:
      state.postureActions.plannedActions18 = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM11:
      state.postureActions.byWhom11 = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM12:
      state.postureActions.byWhom12 = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM13:
      state.postureActions.byWhom13 = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM14:
      state.postureActions.byWhom14 = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM15:
      state.postureActions.byWhom15 = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM16:
      state.postureActions.byWhom16 = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM17:
      state.postureActions.byWhom17 = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM18:
      state.postureActions.byWhom18 = action.payload;
      return {
        ...state,
      };

    case SET_DATE11:
      state.postureActions.date11 = action.payload;
      return {
        ...state,
      };

    case SET_DATE12:
      state.postureActions.date12 = action.payload;
      return {
        ...state,
      };

    case SET_DATE13:
      state.postureActions.date13 = action.payload;
      return {
        ...state,
      };

    case SET_DATE14:
      state.postureActions.date14 = action.payload;
      return {
        ...state,
      };

    case SET_DATE15:
      state.postureActions.date15 = action.payload;
      return {
        ...state,
      };

    case SET_DATE16:
      state.postureActions.date16 = action.payload;
      return {
        ...state,
      };

    case SET_DATE17:
      state.postureActions.date17 = action.payload;
      return {
        ...state,
      };

    case SET_DATE18:
      state.postureActions.date18 = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE11:
      state.postureActions.readyDate11 = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE12:
      state.postureActions.readyDate12 = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE13:
      state.postureActions.readyDate13 = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE14:
      state.postureActions.readyDate14 = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE15:
      state.postureActions.readyDate15 = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE16:
      state.postureActions.readyDate16 = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE17:
      state.postureActions.readyDate17 = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE18:
      state.postureActions.readyDate18 = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE11:
      state.postureActions.followUpDate11 = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE12:
      state.postureActions.followUpDate12 = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE13:
      state.postureActions.followUpDate13 = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE14:
      state.postureActions.followUpDate14 = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE15:
      state.postureActions.followUpDate15 = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE16:
      state.postureActions.followUpDate16 = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE17:
      state.postureActions.followUpDate17 = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE18:
      state.postureActions.followUpDate18 = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};
