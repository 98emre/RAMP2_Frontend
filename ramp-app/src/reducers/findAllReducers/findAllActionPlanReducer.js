import {
    GET_ALL_ACTION_PLAN,
  } from "../../actionTypes/findAllTypes/findAllActionPlanTypes";
    
  const initalState = {
    allActionPlan: [],
  };
 
  export default (state = initalState, action) => {
    switch (action.type) {
      case GET_ALL_ACTION_PLAN:
        state.allActionPlan = action.payload;
        return {
          ...state,
        }
  
      default:
        return state;
    }
  };
  