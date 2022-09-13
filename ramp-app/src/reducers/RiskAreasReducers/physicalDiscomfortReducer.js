import {
  SET_PHYSICALDISCOMFORT,
  SET_ID,
  SET_Q71,
  SET_Q71_COMM,
  SET_Q72A,
  SET_Q72A_COMM,
  SET_Q72B,
  SET_Q72B_COMM,
  SET_Q72C,
  SET_Q72C_COMM,
  SET_Q72D,
  SET_Q72D_COMM,
  SET_Q72E,
  SET_Q72E_COMM,
} from "../../actionTypes/riskAreaTypes/physicalDiscomfortTypes";
const none = "none";

const initialState = {
  physicalDiscomfort: {
    q71: none,
    q71_Comm: "",
    q72a: "",
    q72a_Comm: "",
    q72b: "",
    q72b_Comm: "",
    q72c: "",
    q72c_Comm: "",
    q72d: "",
    q72d_Comm: "",
    q72e: "",
    q72e_Comm: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PHYSICALDISCOMFORT:
      state.physicalDiscomfort = action.payload;
      return {
        ...state,
      };

    case SET_ID:
      state.physicalDiscomfort.id = action.payload;
      return {
        ...state,
      };

    case SET_Q71:
      state.physicalDiscomfort.q71 = action.payload;
      return {
        ...state,
      };

    case SET_Q71_COMM:
      state.physicalDiscomfort.q71_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q72A:
      state.physicalDiscomfort.q72a = action.payload;
      return {
        ...state,
      };

    case SET_Q72A_COMM:
      state.physicalDiscomfort.q72a_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q72B:
      state.physicalDiscomfort.q72b = action.payload;
      return {
        ...state,
      };

    case SET_Q72B_COMM:
      state.physicalDiscomfort.q72b_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q72C:
      state.physicalDiscomfort.q72c = action.payload;
      return {
        ...state,
      };

    case SET_Q72C_COMM:
      state.physicalDiscomfort.q72c_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q72C:
      state.physicalDiscomfort.q72c = action.payload;
      return {
        ...state,
      };

    case SET_Q72C_COMM:
      state.physicalDiscomfort.q72c_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q72D:
      state.physicalDiscomfort.q72d = action.payload;
      return {
        ...state,
      };

    case SET_Q72D_COMM:
      state.physicalDiscomfort.q72d_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q72E:
      state.physicalDiscomfort.q72e = action.payload;
      return {
        ...state,
      };

    case SET_Q72E_COMM:
      state.physicalDiscomfort.q72e_Comm = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};
