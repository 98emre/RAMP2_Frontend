import {
  SET_ID,
  SET_LIFTINGWORK,
  SET_Q30,
  SET_Q31A,
  SET_Q31B,
  SET_Q32A,
  SET_Q32B,
  SET_Q33A,
  SET_Q33B,
  SET_Q34A,
  SET_Q34B,
  SET_Q35A,
  SET_Q35B,
  SET_Q36A,
  SET_Q36B,
  SET_Q37A,
  SET_Q37B,
  SET_Q31_AVERAGECOMM,
  SET_Q31_WORSTCOMM,
} from "../../actionTypes/riskAreaTypes/liftingWorkTypes";

const NONE = "none";

const initialState = {
  liftingWork: {
    q30: NONE,
    q31_averageComm: "",
    q31_worstComm: "",
    q31a: "",
    q31b: "",
    q32a: "",
    q32b: "",
    q33a: "",
    q33b: "",
    q34a: "",
    q34b: "",
    q35a: "",
    q35b: "",
    q36a: "",
    q36b: "",
    q37a: "",
    q37b: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LIFTINGWORK:
      state.liftingWork = action.payload;
      return {
        ...state,
      };
    case SET_ID:
      state.liftingWork.id = action.payload;
      return {
        ...state,
      };
    case SET_Q30:
      state.liftingWork.q30 = action.payload;
      return {
        ...state,
      };

    case SET_Q31A:
      state.liftingWork.q31a = action.payload;
      return {
        ...state,
      };

    case SET_Q31B:
      state.liftingWork.q31b = action.payload;
      return {
        ...state,
      };
    case SET_Q31_AVERAGECOMM:
      state.liftingWork.q31_averageComm = action.payload;
      return {
        ...state,
      };

    case SET_Q31_WORSTCOMM:
      state.liftingWork.q31_worstComm = action.payload;
      return {
        ...state,
      };

    case SET_Q32A:
      state.liftingWork.q32a = action.payload;
      return {
        ...state,
      };

    case SET_Q32B:
      state.liftingWork.q32b = action.payload;
      return {
        ...state,
      };

    case SET_Q33A:
      state.liftingWork.q33a = action.payload;
      return {
        ...state,
      };

    case SET_Q33B:
      state.liftingWork.q33b = action.payload;
      return {
        ...state,
      };

    case SET_Q34A:
      state.liftingWork.q34a = action.payload;
      return {
        ...state,
      };

    case SET_Q34B:
      state.liftingWork.q34b = action.payload;
      return {
        ...state,
      };

    case SET_Q35A:
      state.liftingWork.q35a = action.payload;
      return {
        ...state,
      };

    case SET_Q35B:
      state.liftingWork.q35b = action.payload;
      return {
        ...state,
      };

    case SET_Q36A:
      state.liftingWork.q36a = action.payload;
      return {
        ...state,
      };

    case SET_Q36B:
      state.liftingWork.q36b = action.payload;
      return {
        ...state,
      };

    case SET_Q37A:
      state.liftingWork.q37a = action.payload;
      return {
        ...state,
      };

    case SET_Q37B:
      state.liftingWork.q37b = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};
