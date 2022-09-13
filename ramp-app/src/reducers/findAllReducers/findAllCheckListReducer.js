import {
    GET_ALL_CHECKLIST,
  } from "../../actionTypes/findAllTypes/findAllCheckListTypes";
    
  const initalState = {
    allCheckList: [],
  };
 
  export default (state = initalState, action) => {
    switch (action.type) {
      case GET_ALL_CHECKLIST:
        state.allCheckList = action.payload;
        return {
          ...state,
        }
  
      default:
        return state;
    }
  };
  