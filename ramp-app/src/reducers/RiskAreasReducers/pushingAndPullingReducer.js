import {
  SET_ID,
  SET_PUSHINGANDPULLING,
  SET_Q40,
  SET_Q41A,
  SET_Q41B,
  SET_Q41C,
  SET_Q41D,
  SET_Q42A,
  SET_Q42B,
  SET_Q42C,
  SET_Q42D,
  SET_Q43A,
  SET_Q43B,
  SET_Q43C,
  SET_Q43D,
  SET_Q44A,
  SET_Q44B,
  SET_Q44C,
  SET_Q44D,
  SET_Q45A,
  SET_Q45B,
  SET_Q45C,
  SET_Q45D,
  SET_Q46A,
  SET_Q46B,
  SET_Q46C,
  SET_Q46D,
  SET_Q47A,
  SET_Q47B,
  SET_Q47C,
  SET_Q47D,
  SET_Q48A,
  SET_Q48B,
  SET_Q48C,
  SET_Q48D,
  SET_Q49A,
  SET_Q49B,
  SET_Q49C,
  SET_Q49D,
  SET_Q41_AVERAGECOMM,
  SET_Q41_WORSTCOMM,
} from "../../actionTypes/riskAreaTypes/pushingAndPullingTypes";

const NONE = "none";

const initialState = {
  pushingAndPulling: {
    q40: NONE,
    q41_averageComm: "",
    q41_worstComm: "",
    q41a: "",
    q41b: "",
    q41c: "",
    q41d: "",
    q42a: "",
    q42b: "",
    q42c: "",
    q42d: "",
    q43a: "",
    q43b: "",
    q43c: "",
    q43d: "",
    q44a: "",
    q44b: "",
    q44c: "",
    q44d: "",
    q45a: "",
    q45b: "",
    q45c: "",
    q45d: "",
    q46a: "",
    q46b: "",
    q46c: "",
    q46d: "",
    q47a: "",
    q47b: "",
    q47c: "",
    q47d: "",
    q48a: "",
    q48b: "",
    q48c: "",
    q48d: "",
    q49a: "",
    q49b: "",
    q49c: "",
    q49d: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PUSHINGANDPULLING:
      state.pushingAndPulling = action.payload;
      return {
        ...state,
      };
    case SET_ID:
      state.pushingAndPulling.id = action.payload;
      return {
        ...state,
      };
    case SET_Q40:
      state.pushingAndPulling.q40 = action.payload;
      return {
        ...state,
      };

    case SET_Q41A:
      state.pushingAndPulling.q41a = action.payload;
      return {
        ...state,
      };

    case SET_Q41B:
      state.pushingAndPulling.q41b = action.payload;
      return {
        ...state,
      };

    case SET_Q41C:
      state.pushingAndPulling.q41c = action.payload;
      return {
        ...state,
      };

    case SET_Q41D:
      state.pushingAndPulling.q41d = action.payload;
      return {
        ...state,
      };
    case SET_Q41_AVERAGECOMM:
      state.pushingAndPulling.q41_averageComm = action.payload;
      return {
        ...state,
      };

    case SET_Q41_WORSTCOMM:
      state.pushingAndPulling.q41_worstComm = action.payload;
      return {
        ...state,
      };

    case SET_Q42A:
      state.pushingAndPulling.q42a = action.payload;
      return {
        ...state,
      };

    case SET_Q42B:
      state.pushingAndPulling.q42b = action.payload;
      return {
        ...state,
      };

    case SET_Q42C:
      state.pushingAndPulling.q42c = action.payload;
      return {
        ...state,
      };

    case SET_Q42D:
      state.pushingAndPulling.q42d = action.payload;
      return {
        ...state,
      };

    case SET_Q43A:
      state.pushingAndPulling.q43a = action.payload;
      return {
        ...state,
      };

    case SET_Q43B:
      state.pushingAndPulling.q43b = action.payload;
      return {
        ...state,
      };

    case SET_Q43C:
      state.pushingAndPulling.q43c = action.payload;
      return {
        ...state,
      };

    case SET_Q43D:
      state.pushingAndPulling.q43d = action.payload;
      return {
        ...state,
      };

    case SET_Q44A:
      state.pushingAndPulling.q44a = action.payload;
      return {
        ...state,
      };

    case SET_Q44B:
      state.pushingAndPulling.q44b = action.payload;
      return {
        ...state,
      };

    case SET_Q44C:
      state.pushingAndPulling.q44c = action.payload;
      return {
        ...state,
      };

    case SET_Q44D:
      state.pushingAndPulling.q44d = action.payload;
      return {
        ...state,
      };

    case SET_Q45A:
      state.pushingAndPulling.q45a = action.payload;
      return {
        ...state,
      };

    case SET_Q45B:
      state.pushingAndPulling.q45b = action.payload;
      return {
        ...state,
      };

    case SET_Q45C:
      state.pushingAndPulling.q45c = action.payload;
      return {
        ...state,
      };

    case SET_Q45D:
      state.pushingAndPulling.q45d = action.payload;
      return {
        ...state,
      };
    case SET_Q46A:
      state.pushingAndPulling.q46a = action.payload;
      return {
        ...state,
      };

    case SET_Q46B:
      state.pushingAndPulling.q46b = action.payload;
      return {
        ...state,
      };

    case SET_Q46C:
      state.pushingAndPulling.q46c = action.payload;
      return {
        ...state,
      };

    case SET_Q46D:
      state.pushingAndPulling.q46d = action.payload;
      return {
        ...state,
      };
    case SET_Q47A:
      state.pushingAndPulling.q47a = action.payload;
      return {
        ...state,
      };

    case SET_Q47B:
      state.pushingAndPulling.q47b = action.payload;
      return {
        ...state,
      };

    case SET_Q47C:
      state.pushingAndPulling.q47c = action.payload;
      return {
        ...state,
      };

    case SET_Q47D:
      state.pushingAndPulling.q47d = action.payload;
      return {
        ...state,
      };
    case SET_Q48A:
      state.pushingAndPulling.q48a = action.payload;
      return {
        ...state,
      };

    case SET_Q48B:
      state.pushingAndPulling.q48b = action.payload;
      return {
        ...state,
      };

    case SET_Q48C:
      state.pushingAndPulling.q48c = action.payload;
      return {
        ...state,
      };

    case SET_Q48D:
      state.pushingAndPulling.q48d = action.payload;
      return {
        ...state,
      };
    case SET_Q49A:
      state.pushingAndPulling.q49a = action.payload;
      return {
        ...state,
      };

    case SET_Q49B:
      state.pushingAndPulling.q49b = action.payload;
      return {
        ...state,
      };

    case SET_Q49C:
      state.pushingAndPulling.q49c = action.payload;
      return {
        ...state,
      };

    case SET_Q49D:
      state.pushingAndPulling.q49d = action.payload;
      return {
        ...state,
      };
    default:
      return state;
  }
};
