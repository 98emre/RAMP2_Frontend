import axios from "axios";

import {
  SET_ID,
  SET_CHECKLIST_COMPLETION,
  SET_UPDATE_CHECKLIST,
  SET_CHECKLISTNAME,
  SET_CHECKLIST,
  GET_CHECKLIST_BY_ID,
  SET_CHECKLIST_BY_ID_ERROR,
  SET_CHECKLIST_SAVE_ERROR,
  SET_INPUTDATA,
  SET_LIFTINGWORK,
  SET_PUSHINGANDPULLING,
  SET_POSTURE,
  SET_REPETITIVEWORK,
  SET_INFLUENCINGFACTORS,
  SET_PHYSICALLYSTRENUOUSWORK,
  SET_PHYSICALDISCOMFORT,
  SET_OTHERCOMMENT,
  SET_COMPLETED,
  SET_USER,
} from "../../actionTypes/riskAreaTypes/checklistTypes";

export const setId = (ID) => {
  return (dispatch) => {
    dispatch({
      type: SET_ID,
      payload: ID,
    });
  };
};

export const setCompleted = (Completed) => {
  return (dispatch) => {
    dispatch({
      type: SET_COMPLETED,
      payload: Completed,
    });
  };
};

export const setInputData = (InputData) => {
  return (dispatch) => {
    dispatch({
      type: SET_INPUTDATA,
      payload: InputData,
    });
  };
};

export const setPosture = (Posture) => {
  return (dispatch) => {
    dispatch({
      type: SET_POSTURE,
      payload: Posture,
    });
  };
};

export const setRepetitiveWork = (RepetitiveWork) => {
  return (dispatch) => {
    dispatch({
      type: SET_REPETITIVEWORK,
      payload: RepetitiveWork,
    });
  };
};

export const setLiftingWork = (LiftingWork) => {
  return (dispatch) => {
    dispatch({
      type: SET_LIFTINGWORK,
      payload: LiftingWork,
    });
  };
};

export const setInfluencingFactor = (InfluencingFactors) => {
  return (dispatch) => {
    dispatch({
      type: SET_INFLUENCINGFACTORS,
      payload: InfluencingFactors,
    });
  };
};

export const setPhysicallyStrenuousWork = (PhysicallyStrenuousWork) => {
  return (dispatch) => {
    dispatch({
      type: SET_PHYSICALLYSTRENUOUSWORK,
      payload: PhysicallyStrenuousWork,
    });
  };
};

export const setPhysicalDiscomfort = (PhysicalDiscomfort) => {
  return (dispatch) => {
    dispatch({
      type: SET_PHYSICALDISCOMFORT,
      payload: PhysicalDiscomfort,
    });
  };
};

export const setPushingAndPulling = (PushingAndPulling) => {
  return (dispatch) => {
    dispatch({
      type: SET_PUSHINGANDPULLING,
      payload: PushingAndPulling,
    });
  };
};

export const setOtherComment = (OtherComment) => {
  return (dispatch) => {
    dispatch({
      type: SET_OTHERCOMMENT,
      payload: OtherComment,
    });
  };
};

export const setUser = (User) => {
  return (dispatch) => {
    dispatch({
      type: SET_USER,
      payload: User,
    });
  };
};

export const setChecklistName = (ChecklistName) => {
  return (dispatch) => {
    dispatch({
      type: SET_CHECKLISTNAME,
      payload: ChecklistName,
    });
  };
};

export const setChecklistCompletion = (Completion) => {
  return (dispatch) => {
    dispatch({
      type: SET_CHECKLIST_COMPLETION,
      payload: Completion,
    });
  };
};

export const setUpdateChecklist = (Checklist, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return (dispatch) => {
    axios
      .put("http://localhost:8081/api/checklist/updateList/", Checklist, config)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SET_CHECKLIST,
          payload: response.data,
        });
        dispatch({
          type: SET_CHECKLIST_SAVE_ERROR,
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: SET_CHECKLIST_SAVE_ERROR,
          payload: true,
        });
        console.log(error.response.data)
      });
  };
};

export const setChecklist = (Checklist, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return (dispatch) => {
    axios
      .post("http://localhost:8081/api/checklist/addList/", Checklist, config)
      .then((response) => {
        dispatch({
          type: SET_UPDATE_CHECKLIST,
          payload: response.data,
        });
        dispatch({
          type: SET_CHECKLIST_SAVE_ERROR,
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: SET_CHECKLIST_SAVE_ERROR,
          payload: true,
        });
        console.log(error.response.data)
      });
  };
};

export const GetChecklistById = (id, userid, token) => async (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const response = await axios.get(
      `http://localhost:8081/api/checklist/searchIdName/${id}/${userid}`,
      config
    );
    console.log(response.data),
      dispatch({
        type: GET_CHECKLIST_BY_ID,
        payload: response.data,
      });
    dispatch({
      type: SET_CHECKLIST_BY_ID_ERROR,
      payload: false,
    });
  } catch (error) {
    dispatch({
      type: SET_CHECKLIST_BY_ID_ERROR,
      payload: true,
    });
    console.log(error.response.data);
  }
};

export const setChecklistFetchError = (check) => {
  return (dispatch) => {
    dispatch({
      type: SET_CHECKLIST_BY_ID_ERROR,
      payload: check,
    });
  };
};
