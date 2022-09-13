import {
  SET_ID,
  SET_PHYSICALLYSTRENUOUSWORK,
  SET_Q61,
  SET_Q61Comm,
  SET_Q62A,
  SET_Q62A_Comm,
  SET_Q62B,
  SET_Q62B_Comm,
  SET_Q62C,
  SET_Q62C_Comm,
  SET_Q62D,
  SET_Q62D_Comm,
  SET_Q62E,
  SET_Q62E_Comm,
} from "../../actionTypes/riskAreaTypes/physicallyStrenuousWorkTypes";

const NONE = "none";

const initialState = {
  physicallyStrenuousWork: {
    q61: NONE,
    q61_Comm: "",
    q62a: 0,
    q62a_Comm: "",
    q62b: 0,
    q62b_Comm: "",
    q62c: 0,
    q62c_Comm: "",
    q62d: 0,
    q62d_Comm: "",
    q62e: 0,
    q62e_Comm: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PHYSICALLYSTRENUOUSWORK:
      state.physicallyStrenuousWork = action.payload;
      return {
        ...state,
      };

    case SET_ID:
      state.physicallyStrenuousWork.id = action.payload;
      return {
        ...state,
      };

    case SET_Q61:
      state.physicallyStrenuousWork.q61 = action.payload;
      return {
        ...state,
      };

    case SET_Q61Comm:
      state.physicallyStrenuousWork.q61_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q62A:
      state.physicallyStrenuousWork.q62a = action.payload;
      return {
        ...state,
      };

    case SET_Q62A_Comm:
      state.physicallyStrenuousWork.q62a_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q62B:
      state.physicallyStrenuousWork.q62b = action.payload;
      return {
        ...state,
      };

    case SET_Q62B_Comm:
      state.physicallyStrenuousWork.q62b_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q62C:
      state.physicallyStrenuousWork.q62c = action.payload;
      return {
        ...state,
      };

    case SET_Q62C_Comm:
      state.physicallyStrenuousWork.q62c_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q62D:
      state.physicallyStrenuousWork.q62d = action.payload;
      return {
        ...state,
      };

    case SET_Q62D_Comm:
      state.physicallyStrenuousWork.q62d_Comm = action.payload;
      return {
        ...state,
      };

    case SET_Q62E:
      state.physicallyStrenuousWork.q62e = action.payload;
      return {
        ...state,
      };

    case SET_Q62E_Comm:
      state.physicallyStrenuousWork.q62e_Comm = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};
