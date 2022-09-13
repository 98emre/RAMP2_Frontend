import {
  SET_INFLUENCINGFACTORS,
  SET_ID,
  SET_Q51A,
  SET_Q51A_COMM,
  SET_Q51B,
  SET_Q51B_COMM,
  SET_Q51C,
  SET_Q51C_COMM,
  SET_Q51D,
  SET_Q51D_COMM,
  SET_Q51E,
  SET_Q51E_COMM,
  SET_Q51F,
  SET_Q51F_COMM,
  SET_Q52A,
  SET_Q52A_COMM,
  SET_Q52B,
  SET_Q52B_COMM,
  SET_Q52C,
  SET_Q52C_COMM,
  SET_Q52D,
  SET_Q52D_COMM,
  SET_Q52E,
  SET_Q52E_COMM,
  SET_Q52F,
  SET_Q52F_COMM,
  SET_Q52G,
  SET_Q52G_COMM,
  SET_Q52H,
  SET_Q52H_COMM,
  SET_Q53A,
  SET_Q53A_COMM,
  SET_Q53B,
  SET_Q53B_COMM,
  SET_Q53C,
  SET_Q53C_COMM,
  SET_Q53D,
  SET_Q53D_COMM,
} from "../../actionTypes/riskAreaTypes/influencingFactorsTypes";

const NONE = "none";

const initialState = {
  influencingFactors: {
    q51a: NONE,
    q51a_Comm: "",
    q51b: NONE,
    q51b_Comm: "",
    q51c: NONE,
    q51c_Comm: "",
    q51d: NONE,
    q51d_Comm: "",
    q51e: NONE,
    q51e_Comm: "",
    q51f: NONE,
    q51f_Comm: "",
    q52a: NONE,
    q52a_Comm: "",
    q52b: NONE,
    q52b_Comm: "",
    q52c: NONE,
    q52c_Comm: "",
    q52d: NONE,
    q52d_Comm: "",
    q52e: NONE,
    q52e_Comm: "",
    q52f: NONE,
    q52f_Comm: "",
    q52g: NONE,
    q52g_Comm: "",
    q52h: NONE,
    q52h_Comm: "",
    q53a: NONE,
    q53a_Comm: "",
    q53b: NONE,
    q53b_Comm: "",
    q53c: NONE,
    q53c_Comm: "",
    q53d: NONE,
    q53d_Comm: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_INFLUENCINGFACTORS:
      state.influencingFactors = action.payload;
      return {
        ...state,
      };

    case SET_ID:
      state.influencingFactors.id = action.payload;
      return {
        ...state,
      };

    case SET_Q51A:
      state.influencingFactors.q51a = action.payload;
      return {
        ...state,
      };

    case SET_Q51A_COMM:
      state.influencingFactors.q51a_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q51B:
      state.influencingFactors.q51b = action.payload;
      return {
        ...state,
      };

    case SET_Q51B_COMM:
      state.influencingFactors.q51b_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q51C:
      state.influencingFactors.q51c = action.payload;
      return {
        ...state,
      };

    case SET_Q51C_COMM:
      state.influencingFactors.q51c_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q51D:
      state.influencingFactors.q51d = action.payload;
      return {
        ...state,
      };

    case SET_Q51D_COMM:
      state.influencingFactors.q51d_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q51E:
      state.influencingFactors.q51e = action.payload;
      return {
        ...state,
      };

    case SET_Q51E_COMM:
      state.influencingFactors.q51e_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q51F:
      state.influencingFactors.q51f = action.payload;
      return {
        ...state,
      };

    case SET_Q51F_COMM:
      state.influencingFactors.q51f_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q52A:
      state.influencingFactors.q52a = action.payload;
      return {
        ...state,
      };

    case SET_Q52A_COMM:
      state.influencingFactors.q52a_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q52B:
      state.influencingFactors.q52b = action.payload;
      return {
        ...state,
      };

    case SET_Q52B_COMM:
      state.influencingFactors.q52b_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q52C:
      state.influencingFactors.q52c = action.payload;
      return {
        ...state,
      };

    case SET_Q52C_COMM:
      state.influencingFactors.q52c_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q52D:
      state.influencingFactors.q52d = action.payload;
      return {
        ...state,
      };

    case SET_Q52D_COMM:
      state.influencingFactors.q52d_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q52E:
      state.influencingFactors.q52e = action.payload;
      return {
        ...state,
      };

    case SET_Q52E_COMM:
      state.influencingFactors.q52e_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q52F:
      state.influencingFactors.q52f = action.payload;
      return {
        ...state,
      };

    case SET_Q52F_COMM:
      state.influencingFactors.q52f_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q52G:
      state.influencingFactors.q52g = action.payload;
      return {
        ...state,
      };

    case SET_Q52G_COMM:
      state.influencingFactors.q52g_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q52H:
      state.influencingFactors.q52h = action.payload;
      return {
        ...state,
      };

    case SET_Q52H_COMM:
      state.influencingFactors.q52h_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q53A:
      state.influencingFactors.q53a = action.payload;
      return {
        ...state,
      };

    case SET_Q53A_COMM:
      state.influencingFactors.q53a_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q53B:
      state.influencingFactors.q53b = action.payload;
      return {
        ...state,
      };

    case SET_Q53B_COMM:
      state.influencingFactors.q53b_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q53C:
      state.influencingFactors.q53c = action.payload;
      return {
        ...state,
      };

    case SET_Q53C_COMM:
      state.influencingFactors.q53c_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q53D:
      state.influencingFactors.q53d = action.payload;
      return {
        ...state,
      };

    case SET_Q53D_COMM:
      state.influencingFactors.q53d_Comm = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};
