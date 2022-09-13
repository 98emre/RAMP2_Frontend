import {
  SET_OTHERCOMMENT,
  SET_ID,
  SET_TEXT,
} from "../../actionTypes/riskAreaTypes/otherCommentTypes";

const initialState = {
  otherComment: {
    text: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_OTHERCOMMENT:
      state.otherComment = action.payload;
      return {
        ...state,
      };

    case SET_ID:
      state.otherComment.id = action.payload;
      return {
        ...state,
      };

    case SET_TEXT:
      state.otherComment.text = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};
