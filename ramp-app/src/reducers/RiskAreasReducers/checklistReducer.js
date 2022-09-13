import {
  SET_ID,
  SET_CHECKLIST_COMPLETION,
  SET_UPDATE_CHECKLIST,
  SET_CHECKLIST,
  SET_CHECKLISTNAME,
  GET_CHECKLIST_BY_ID,
  SET_INPUTDATA,
  SET_POSTURE,
  SET_LIFTINGWORK,
  SET_PUSHINGANDPULLING,
  SET_REPETITIVEWORK,
  SET_INFLUENCINGFACTORS,
  SET_PHYSICALLYSTRENUOUSWORK,
  SET_PHYSICALDISCOMFORT,
  SET_OTHERCOMMENT,
  SET_USER,
} from "../../actionTypes/riskAreaTypes/checklistTypes";

const initialState = {
  id: null,
  id_name: "",
  completion: false,
  inputData: {},
  posture: {},
  repetitiveWork: {},
  liftingWork: {},
  pushingAndPulling: {},
  influencingFactors: {},
  physicallyStrenuousWork: {},
  physicalDiscomfort: {},
  otherComment: {},
  user: {},
  checkUpdate: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ID:
      state.id = action.payload;
      return {
        ...state,
      };

    case SET_UPDATE_CHECKLIST:
      return {
        ...state,
      };

    case SET_CHECKLIST:
      return {
        ...state,
      };

    case SET_CHECKLISTNAME:
      state.id_name = action.payload;
      return {
        ...state,
      };

    case SET_CHECKLIST_COMPLETION:
      state.completion = action.payload;
      return {
        ...state,
      };

    case SET_INPUTDATA:
      state.inputData = action.payload;
      return {
        ...state,
      };

    case SET_LIFTINGWORK:
      state.liftingWork = action.payload;
      return {
        ...state,
      };

    case SET_POSTURE:
      state.posture = action.payload;
      return {
        ...state,
      };

    case SET_REPETITIVEWORK:
      state.repetitiveWork = action.payload;
      return {
        ...state,
      };

    case SET_INFLUENCINGFACTORS:
      state.influencingFactors = action.payload;
      return {
        ...state,
      };

    case SET_PHYSICALLYSTRENUOUSWORK:
      state.physicallyStrenuousWork = action.payload;
      return {
        ...state,
      };

    case SET_PHYSICALDISCOMFORT:
      state.physicalDiscomfort = action.payload;
      return {
        ...state,
      };

    case SET_PUSHINGANDPULLING:
      state.pushingAndPulling = action.payload;
      return {
        ...state,
      };

    case SET_OTHERCOMMENT:
      state.otherComment = action.payload;
      return {
        ...state,
      };

    case SET_USER:
      state.user = action.payload;
      return {
        ...state,
      };

    case GET_CHECKLIST_BY_ID:
      state = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};
