import axios from "axios";

import {
  GET_ALL_ACTION_PLAN,
} from "../../actionTypes/findAllTypes/findAllActionPlanTypes";


export const GetAllActionPlan = (token,id) => async (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const response = await axios.get(`http://localhost:8081/api/actionplan/user/${id}`, config);

    console.log(response.data),
      dispatch({
        type: GET_ALL_ACTION_PLAN,
        payload: response.data,
      });

    return;
  } catch (error) {
    if (error.response != undefined) {
      console.log(error.response);
    }
  }
};
