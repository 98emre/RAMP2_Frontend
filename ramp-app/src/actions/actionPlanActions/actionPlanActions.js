import axios from "axios";

import {
  SET_ACTION_PLAN,
  SET_ACTION_PLAN_ID,
  SET_ORDER_BY,
  SET_FORMED_BY,
  SET_DATE,
  SET_NOTE,
  GET_ACTION_PLAN_BY_IDNAME,
  SET_ACTION_PLAN_NAME,
  SET_ACTION_PLAN_UPDATE,
  GET_ActionPlan_ERROR,
  SET_CHECKLIST_ACTION,
  SET_POSTURE_ACTION,
  SET_REPETITIWORK_ACTION,
  SET_LIFTING_WORK_ACTION,
  SET_PUSHING_AND_PULLING_WORK_ACTION,
  SET_INFLUENCING_FACTORS_ACTIONS,
  SET_PHYSICALLY_STRENUOUS_WORK_ACTIONS,
  SET_PHYSICAL_DISCOMFORT_ACTIONS,
  SET_UPDATE_STATUS,
  SET_USER,
  SET_CHECKLIST_SAVE_ERROR_AP,
  SET_CHECKLIST_BY_ID_ERROR_AP,
} from "../../actionTypes/actionPlanTypes/actionPlanTypes";

export const setActionPlanId = (ID) => {
  return (dispatch) => {
    dispatch({
      type: SET_ACTION_PLAN_ID,
      payload: ID,
    });
  };
};

export const setCheckListActionPlan = (CheckList) => {
  return (dispatch) => {
    dispatch({
      type: SET_CHECKLIST_ACTION,
      payload: CheckList,
    });
  };
};

export const setPostureActionPlan = (PostureAction) => {
  return (dispatch) => {
    dispatch({
      type: SET_POSTURE_ACTION,
      payload: PostureAction,
    });
  };
};

export const setRepetitiveWorkActionPlan = (RepetitiWorkAction) => {
  return (dispatch) => {
    dispatch({
      type: SET_REPETITIWORK_ACTION,
      payload: RepetitiWorkAction,
    });
  };
};

export const setLiftingWorkActionPlan = (LiftingWork) => {
  return (dispatch) => {
    dispatch({
      type: SET_LIFTING_WORK_ACTION,
      payload: LiftingWork,
    });
  };
};

export const setPushingAndPullingWorkActionPlan = (PushingAndPullingWork) => {
  return (dispatch) => {
    dispatch({
      type: SET_PUSHING_AND_PULLING_WORK_ACTION,
      payload: PushingAndPullingWork,
    });
  };
};

export const setInfluencingFactorsActionPlan = (InfluencingFactors) => {
  return (dispatch) => {
    dispatch({
      type: SET_INFLUENCING_FACTORS_ACTIONS,
      payload: InfluencingFactors,
    });
  };
};

export const setPhysicalStrenuousWorkActionPlan = (PhysicalStrenuousWork) => {
  return (dispatch) => {
    dispatch({
      type: SET_PHYSICALLY_STRENUOUS_WORK_ACTIONS,
      payload: PhysicalStrenuousWork,
    });
  };
};

export const setPhysicalDiscomFortActionPlan = (PhysicalDiscomFort) => {
  return (dispatch) => {
    dispatch({
      type: SET_PHYSICAL_DISCOMFORT_ACTIONS,
      payload: PhysicalDiscomFort,
    });
  };
};

export const setActionPlanName = (IdName) => {
  return (dispatch) => {
    dispatch({
      type: SET_ACTION_PLAN_NAME,
      payload: IdName,
    });
  };
};

export const setOrderBy = (OrderBy) => {
  return (dispatch) => {
    dispatch({
      type: SET_ORDER_BY,
      payload: OrderBy,
    });
  };
};

export const setUpdateStatus = (Status) => {
  return (dispatch) => {
    dispatch({
      type: SET_UPDATE_STATUS,
      payload: Status,
    });
  };
};

export const setFormedBy = (FormedBy) => {
  return (dispatch) => {
    dispatch({
      type: SET_FORMED_BY,
      payload: FormedBy,
    });
  };
};

export const setDate = (Date) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE,
      payload: Date,
    });
  };
};

export const setNote = (Note) => {
  return (dispatch) => {
    dispatch({
      type: SET_NOTE,
      payload: Note,
    });
  };
};

export const setUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: SET_USER,
      payload: user,
    });
  };
};

export const setActionPlan = (ActionPlan, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return (dispatch) => {
    console.log(ActionPlan, "Actions");
    axios
      .post(
        "http://localhost:8081/api/actionplan/addAction/",
        ActionPlan,
        config
      )
      .then((response) => {
        console.log("Response", response);
        dispatch({
          type: SET_ACTION_PLAN,
          payload: response.data,
        });
        dispatch({
          type: SET_CHECKLIST_SAVE_ERROR_AP,
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: SET_CHECKLIST_SAVE_ERROR_AP,
          payload: true,
        });
        console.log(error.response.data)
      });
  };
};

export const setUpdateActionPlan = (ActionPlan, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return (dispatch) => {
    axios
      .put("http://localhost:8081/api/actionplan/update/", ActionPlan, config)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SET_ACTION_PLAN_UPDATE,
          payload: response.data,
        });
        dispatch({
          type: SET_CHECKLIST_SAVE_ERROR_AP,
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: SET_CHECKLIST_SAVE_ERROR_AP,
          payload: true,
        });
        console.log(error.response.data)
      });
  };
};

export const GetActionPlanById = (id, userid, token) => async (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    console.log(id);
    const response = await axios.get(
      `http://localhost:8081/api/actionplan/search/${id}/${userid}`,
      config
    );
    dispatch({
      type: GET_ACTION_PLAN_BY_IDNAME,
      payload: response.data,
    });
    dispatch({
      type: SET_CHECKLIST_BY_ID_ERROR_AP,
      payload: false,
    });
  } catch (error) {
    dispatch({
      type: SET_CHECKLIST_BY_ID_ERROR_AP,
      payload: true,
    });
    console.log(error.response.data);
  }
};

