import {
  SET_ACTION_PLAN,
  SET_ACTION_PLAN_ID,
  SET_ORDER_BY,
  SET_FORMED_BY,
  SET_DATE,
  SET_NOTE,
  GET_ACTION_PLAN_BY_IDNAME,
  SET_ACTION_PLAN_NAME,
  SET_ACTION_PLAN_UPDATE,
  GET_ActionPlan_ERROR,
  SET_CHECKLIST_ACTION,
  SET_POSTURE_ACTION,
  SET_REPETITIWORK_ACTION,
  SET_LIFTING_WORK_ACTION,
  SET_PUSHING_AND_PULLING_WORK_ACTION,
  SET_INFLUENCING_FACTORS_ACTIONS,
  SET_PHYSICALLY_STRENUOUS_WORK_ACTIONS,
  SET_PHYSICAL_DISCOMFORT_ACTIONS,
  SET_UPDATE_STATUS,
  SET_USER,
} from "../../actionTypes/actionPlanTypes/actionPlanTypes";

const NONE = "";

const initalState = {
  id: null,
  id_name: "",
  orderBy: NONE,
  formedBy: NONE,
  date: NONE,
  note: NONE,
  postureActions: {},
  repetitiveWorkActions: {},
  liftingWorkActions: {},
  pushingAndPullingActions: {},
  influencingFactorsActions: {},
  physicallyStrenuousWorkActions: {},
  physicalDiscomfortActions: {},
  checkList: {},
  user: {},
  updateStatus: false,
  allActionPlan: [],
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SET_ACTION_PLAN_ID:
      state.id = action.payload;
      return {
        ...state,
      };

    case SET_CHECKLIST_ACTION:
      state.checkList = action.payload;
      return {
        ...state,
      };

    case SET_POSTURE_ACTION:
      state.postureActions = action.payload;
      return {
        ...state,
      };

    case SET_REPETITIWORK_ACTION:
      state.repetitiveWorkActions = action.payload;
      return {
        ...state,
      };

    case SET_LIFTING_WORK_ACTION:
      state.liftingWorkActions = action.payload;
      return {
        ...state,
      };

    case SET_PUSHING_AND_PULLING_WORK_ACTION:
      state.pushingAndPullingActions = action.payload;
      return {
        ...state,
      };

    case SET_INFLUENCING_FACTORS_ACTIONS:
      state.influencingFactorsActions = action.payload;
      return {
        ...state,
      };

    case SET_PHYSICALLY_STRENUOUS_WORK_ACTIONS:
      state.physicallyStrenuousWorkActions = action.payload;
      return {
        ...state,
      };

    case SET_PHYSICAL_DISCOMFORT_ACTIONS:
      state.physicalDiscomfortActions = action.payload;
      return {
        ...state,
      };

    case SET_ACTION_PLAN:
      return {
        ...state,
      };

    case SET_FORMED_BY:
      state.formedBy = action.payload;
      return {
        ...state,
      };

    case SET_ORDER_BY:
      state.orderBy = action.payload;
      return {
        ...state,
      };

    case SET_DATE:
      state.date = action.payload;
      return {
        ...state,
      };

    case SET_NOTE:
      state.note = action.payload;
      return {
        ...state,
      };

    case SET_ACTION_PLAN_UPDATE:
      return {
        ...state,
      };

    case SET_ACTION_PLAN_NAME:
      state.id_name = action.payload;
      return {
        ...state,
      };

    case GET_ACTION_PLAN_BY_IDNAME:
      state = action.payload;
      return {
        ...state,
      };

    case SET_UPDATE_STATUS:
      state.updateStatus = action.payload;
      return {
        ...state,
      };

    case SET_USER:
      state.user = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};
