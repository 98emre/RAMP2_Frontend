import {
  SET_POSTURE,
  SET_ID,
  SET_Q11,
  SET_Q11COMM,
  SET_Q12,
  SET_Q12COMM,
  SET_Q13,
  SET_Q13COMM,
  SET_Q14,
  SET_Q14COMM,
  SET_Q15A,
  SET_Q15B,
  SET_Q15COMM,
  SET_Q16A,
  SET_Q16B,
  SET_Q16COMM,
  SET_Q17A,
  SET_Q17B,
  SET_Q17COMM,
  SET_Q18,
  SET_Q18COMM,
} from "../../actionTypes/riskAreaTypes/postureTypes";

const NONE = "none";

const initialState = {
  posture: {
    q11: NONE,
    q11_Comm: "",
    q12: NONE,
    q12_Comm: "",
    q13: NONE,
    q13_Comm: "",
    q14: NONE,
    q14_Comm: "",
    q15a: NONE,
    q15b: NONE,
    q15_Comm: "",
    q16a: NONE,
    q16b: NONE,
    q16_Comm: "",
    q17a: NONE,
    q17b: NONE,
    q17_Comm: "",
    q18: NONE,
    q18_Comm: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTURE:
      state.posture = action.payload;
      return {
        ...state,
      };
    case SET_ID:
      state.posture.id = action.payload;
      return {
        ...state,
      };
    case SET_Q11:
      state.posture.q11 = action.payload;
      return {
        ...state,
      };
    case SET_Q11COMM:
      state.posture.q11_Comm = action.payload;
      return {
        ...state,
      };
    case SET_Q12:
      state.posture.q12 = action.payload;
      return {
        ...state,
      };
    case SET_Q12COMM:
      state.posture.q12_Comm = action.payload;
      return {
        ...state,
      };
    case SET_Q13:
      state.posture.q13 = action.payload;
      return {
        ...state,
      };
    case SET_Q13COMM:
      state.posture.q13_Comm = action.payload;
      return {
        ...state,
      };
    case SET_Q14:
      state.posture.q14 = action.payload;
      return {
        ...state,
      };
    case SET_Q14COMM:
      state.posture.q14_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q15A:
      state.posture.q15a = action.payload;
      return {
        ...state,
      };

    case SET_Q15B:
      state.posture.q15b = action.payload;
      return {
        ...state,
      };
    case SET_Q15COMM:
      state.posture.q15_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q16A:
      state.posture.q16a = action.payload;
      return {
        ...state,
      };

    case SET_Q16B:
      state.posture.q16b = action.payload;
      return {
        ...state,
      };
    case SET_Q16COMM:
      state.posture.q16_Comm = action.payload;
      return {
        ...state,
      };
    case SET_Q17A:
      state.posture.q17a = action.payload;
      return {
        ...state,
      };
    case SET_Q17B:
      state.posture.q17b = action.payload;
      return {
        ...state,
      };
    case SET_Q17COMM:
      state.posture.q17_Comm = action.payload;
      return {
        ...state,
      };
    case SET_Q18:
      state.posture.q18 = action.payload;
      return {
        ...state,
      };
    case SET_Q18COMM:
      state.posture.q18_Comm = action.payload;
      return {
        ...state,
      };
    default:
      return state;
  }
};
