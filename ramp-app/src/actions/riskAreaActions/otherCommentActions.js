import {
  SET_OTHERCOMMENT,
  SET_ID,
  SET_TEXT,
} from "../../actionTypes/riskAreaTypes/otherCommentTypes";

export const setOtherComment = (OtherComment) => {
  return (dispatch) => {
    dispatch({
      type: SET_OTHERCOMMENT,
      payload: OtherComment,
    });
  };
};

export const setId = (ID) => {
  return (dispatch) => {
    dispatch({
      type: SET_ID,
      payload: ID,
    });
  };
};

export const setText = (text) => {
  return (dispatch) => {
    dispatch({
      type: SET_TEXT,
      payload: text,
    });
  };
};
