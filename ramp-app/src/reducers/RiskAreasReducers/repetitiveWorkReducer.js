import {
  SET_REPETITIVEWORK,
  SET_ID,
  SET_Q21A,
  SET_Q21B,
  SET_Q21COMM,
  SET_Q22A,
  SET_Q22B,
  SET_Q22COMM,
  SET_Q23A,
  SET_Q23B,
  SET_Q23COMM,
  SET_Q24,
  SET_Q24COMM,
  SET_Q25,
  SET_Q25COMM,
} from "../../actionTypes/riskAreaTypes/repetitiveWorkTypes";

const NONE = "none";

const initialState = {
  repetitiveWork: {
    q21a: NONE,
    q21b: NONE,
    q21_Comm: "",
    q22a: NONE,
    q22b: NONE,
    q22_Comm: "",
    q23a: NONE,
    q23b: NONE,
    q23_Comm: "",
    q24: NONE,
    q24_Comm: "",
    q25: NONE,
    q25_Comm: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_REPETITIVEWORK:
      state.repetitiveWork = action.payload;
      return {
        ...state,
      };
    case SET_ID:
      state.repetitiveWork.id = action.payload;
      return {
        ...state,
      };
    case SET_Q21A:
      state.repetitiveWork.q21a = action.payload;
      return {
        ...state,
      };

    case SET_Q21B:
      state.repetitiveWork.q21b = action.payload;
      return {
        ...state,
      };
    case SET_Q21COMM:
      state.repetitiveWork.q21_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q22A:
      state.repetitiveWork.q22a = action.payload;
      return {
        ...state,
      };

    case SET_Q22B:
      state.repetitiveWork.q22b = action.payload;
      return {
        ...state,
      };
    case SET_Q22COMM:
      state.repetitiveWork.q22_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q23A:
      state.repetitiveWork.q23a = action.payload;
      return {
        ...state,
      };

    case SET_Q23B:
      state.repetitiveWork.q23b = action.payload;
      return {
        ...state,
      };
    case SET_Q23COMM:
      state.repetitiveWork.q23_Comm = action.payload;
      return {
        ...state,
      };
    case SET_Q24:
      state.repetitiveWork.q24 = action.payload;
      return {
        ...state,
      };
    case SET_Q24COMM:
      state.repetitiveWork.q24_Comm = action.payload;
      return {
        ...state,
      };
    case SET_Q25:
      state.repetitiveWork.q25 = action.payload;
      return {
        ...state,
      };
    case SET_Q25COMM:
      state.repetitiveWork.q25_Comm = action.payload;
      return {
        ...state,
      };
    default:
      return state;
  }
};
