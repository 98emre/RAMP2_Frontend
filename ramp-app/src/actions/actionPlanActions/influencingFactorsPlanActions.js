import {
  SET_INFLUENCING_FACTORS_ACTIONS,
  SET_INFLUENCING_FACTORS_ACTIONS_ID,
  SET_BYWHOM51A,
  SET_BYWHOM51B,
  SET_BYWHOM51C,
  SET_BYWHOM51D,
  SET_BYWHOM51E,
  SET_BYWHOM51F,
  SET_BYWHOM52A,
  SET_BYWHOM52B,
  SET_BYWHOM52C,
  SET_BYWHOM52D,
  SET_BYWHOM52E,
  SET_BYWHOM52F,
  SET_BYWHOM52G,
  SET_BYWHOM52H,
  SET_BYWHOM53A,
  SET_BYWHOM53B,
  SET_BYWHOM53C,
  SET_BYWHOM53D,
  SET_DATE51A,
  SET_DATE51B,
  SET_DATE51C,
  SET_DATE51D,
  SET_DATE51E,
  SET_DATE51F,
  SET_DATE52A,
  SET_DATE52B,
  SET_DATE52C,
  SET_DATE52D,
  SET_DATE52E,
  SET_DATE52F,
  SET_DATE52G,
  SET_DATE52H,
  SET_DATE53A,
  SET_DATE53B,
  SET_DATE53C,
  SET_DATE53D,
  SET_FOLLOW_UPDATE51A,
  SET_FOLLOW_UPDATE51B,
  SET_FOLLOW_UPDATE51C,
  SET_FOLLOW_UPDATE51D,
  SET_FOLLOW_UPDATE51E,
  SET_FOLLOW_UPDATE51F,
  SET_FOLLOW_UPDATE52A,
  SET_FOLLOW_UPDATE52B,
  SET_FOLLOW_UPDATE52C,
  SET_FOLLOW_UPDATE52D,
  SET_FOLLOW_UPDATE52E,
  SET_FOLLOW_UPDATE52F,
  SET_FOLLOW_UPDATE52G,
  SET_FOLLOW_UPDATE52H,
  SET_FOLLOW_UPDATE53A,
  SET_FOLLOW_UPDATE53B,
  SET_FOLLOW_UPDATE53C,
  SET_FOLLOW_UPDATE53D,
  SET_PLANNED_ACTIONS51A,
  SET_PLANNED_ACTIONS51B,
  SET_PLANNED_ACTIONS51C,
  SET_PLANNED_ACTIONS51D,
  SET_PLANNED_ACTIONS51E,
  SET_PLANNED_ACTIONS51F,
  SET_PLANNED_ACTIONS52A,
  SET_PLANNED_ACTIONS52B,
  SET_PLANNED_ACTIONS52C,
  SET_PLANNED_ACTIONS52D,
  SET_PLANNED_ACTIONS52E,
  SET_PLANNED_ACTIONS52F,
  SET_PLANNED_ACTIONS52G,
  SET_PLANNED_ACTIONS52H,
  SET_PLANNED_ACTIONS53A,
  SET_PLANNED_ACTIONS53B,
  SET_PLANNED_ACTIONS53C,
  SET_PLANNED_ACTIONS53D,
  SET_READY_DATE51A,
  SET_READY_DATE51B,
  SET_READY_DATE51C,
  SET_READY_DATE51D,
  SET_READY_DATE51E,
  SET_READY_DATE51F,
  SET_READY_DATE52A,
  SET_READY_DATE52B,
  SET_READY_DATE52C,
  SET_READY_DATE52D,
  SET_READY_DATE52E,
  SET_READY_DATE52F,
  SET_READY_DATE52G,
  SET_READY_DATE52H,
  SET_READY_DATE53A,
  SET_READY_DATE53B,
  SET_READY_DATE53C,
  SET_READY_DATE53D,
} from "../../actionTypes/actionPlanTypes/influencingFactorsActionsTypes";

export const setInfluencingFactorsActions = (InfluencingFactorsActions) => {
  return (dispatch) => {
    dispatch({
      type: SET_INFLUENCING_FACTORS_ACTIONS,
      payload: InfluencingFactorsActions,
    });
  };
};

export const setInfluencingFactorsActionsId = (ID) => {
  return (dispatch) => {
    dispatch({
      type: SET_INFLUENCING_FACTORS_ACTIONS_ID,
      payload: ID,
    });
  };
};

export const setPlannedActions51A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS51A,
      payload: ans,
    });
  };
};

export const setByWhom51A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM51A,
      payload: ans,
    });
  };
};

export const setDate51A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE51A,
      payload: ans,
    });
  };
};

export const setReadyDate51A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE51A,
      payload: ans,
    });
  };
};

export const setFollowUpDate51A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE51A,
      payload: ans,
    });
  };
};

export const setPlannedActions51B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS51B,
      payload: ans,
    });
  };
};

export const setByWhom51B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM51B,
      payload: ans,
    });
  };
};

export const setDate51B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE51B,
      payload: ans,
    });
  };
};

export const setReadyDate51B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE51B,
      payload: ans,
    });
  };
};

export const setFollowUpDate51B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE51B,
      payload: ans,
    });
  };
};

export const setPlannedActions51C = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS51C,
      payload: ans,
    });
  };
};

export const setByWhom51C = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM51C,
      payload: ans,
    });
  };
};

export const setDate51C = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE51C,
      payload: ans,
    });
  };
};

export const setReadyDate51C = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE51C,
      payload: ans,
    });
  };
};

export const setFollowUpDate51C = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE51C,
      payload: ans,
    });
  };
};

export const setPlannedActions51D = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS51D,
      payload: ans,
    });
  };
};

export const setByWhom51D = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM51D,
      payload: ans,
    });
  };
};

export const setDate51D = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE51D,
      payload: ans,
    });
  };
};

export const setReadyDate51D = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE51D,
      payload: ans,
    });
  };
};

export const setFollowUpDate51D = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE51D,
      payload: ans,
    });
  };
};

export const setPlannedActions51E = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS51E,
      payload: ans,
    });
  };
};

export const setByWhom51E = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM51E,
      payload: ans,
    });
  };
};

export const setDate51E = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE51E,
      payload: ans,
    });
  };
};

export const setReadyDate51E = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE51E,
      payload: ans,
    });
  };
};

export const setFollowUpDate51E = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE51E,
      payload: ans,
    });
  };
};

export const setPlannedActions51F = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS51F,
      payload: ans,
    });
  };
};

export const setByWhom51F = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM51F,
      payload: ans,
    });
  };
};

export const setDate51F = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE51F,
      payload: ans,
    });
  };
};

export const setReadyDate51F = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE51F,
      payload: ans,
    });
  };
};

export const setFollowUpDate51F = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE51F,
      payload: ans,
    });
  };
};

export const setPlannedActions52A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS52A,
      payload: ans,
    });
  };
};

export const setByWhom52A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM52A,
      payload: ans,
    });
  };
};

export const setDate52A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE52A,
      payload: ans,
    });
  };
};

export const setReadyDate52A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE52A,
      payload: ans,
    });
  };
};

export const setFollowUpDate52A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE52A,
      payload: ans,
    });
  };
};

export const setPlannedActions52B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS52B,
      payload: ans,
    });
  };
};

export const setByWhom52B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM52B,
      payload: ans,
    });
  };
};

export const setDate52B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE52B,
      payload: ans,
    });
  };
};

export const setReadyDate52B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE52B,
      payload: ans,
    });
  };
};

export const setFollowUpDate52B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE52B,
      payload: ans,
    });
  };
};

export const setPlannedActions52C = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS52C,
      payload: ans,
    });
  };
};

export const setByWhom52C = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM52C,
      payload: ans,
    });
  };
};

export const setDate52C = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE52C,
      payload: ans,
    });
  };
};

export const setReadyDate52C = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE52C,
      payload: ans,
    });
  };
};

export const setFollowUpDate52C = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE52C,
      payload: ans,
    });
  };
};

export const setPlannedActions52D = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS52D,
      payload: ans,
    });
  };
};

export const setByWhom52D = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM52D,
      payload: ans,
    });
  };
};

export const setDate52D = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE52D,
      payload: ans,
    });
  };
};

export const setReadyDate52D = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE52D,
      payload: ans,
    });
  };
};

export const setFollowUpDate52D = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE52D,
      payload: ans,
    });
  };
};

export const setPlannedActions52E = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS52E,
      payload: ans,
    });
  };
};

export const setByWhom52E = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM52E,
      payload: ans,
    });
  };
};

export const setDate52E = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE52E,
      payload: ans,
    });
  };
};

export const setReadyDate52E = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE52E,
      payload: ans,
    });
  };
};

export const setFollowUpDate52E = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE52E,
      payload: ans,
    });
  };
};

export const setPlannedActions52F = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS52F,
      payload: ans,
    });
  };
};

export const setByWhom52F = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM52F,
      payload: ans,
    });
  };
};

export const setDate52F = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE52F,
      payload: ans,
    });
  };
};

export const setReadyDate52F = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE52F,
      payload: ans,
    });
  };
};

export const setFollowUpDate52F = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE52F,
      payload: ans,
    });
  };
};

export const setPlannedActions52G = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS52G,
      payload: ans,
    });
  };
};

export const setByWhom52G = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM52G,
      payload: ans,
    });
  };
};

export const setDate52G = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE52G,
      payload: ans,
    });
  };
};

export const setReadyDate52G = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE52G,
      payload: ans,
    });
  };
};

export const setFollowUpDate52G = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE52G,
      payload: ans,
    });
  };
};

export const setPlannedActions52H = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS52H,
      payload: ans,
    });
  };
};

export const setByWhom52H = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM52H,
      payload: ans,
    });
  };
};

export const setDate52H = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE52H,
      payload: ans,
    });
  };
};

export const setReadyDate52H = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE52H,
      payload: ans,
    });
  };
};

export const setFollowUpDate52H = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE52H,
      payload: ans,
    });
  };
};

export const setPlannedActions53A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS53A,
      payload: ans,
    });
  };
};

export const setByWhom53A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM53A,
      payload: ans,
    });
  };
};

export const setDate53A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE53A,
      payload: ans,
    });
  };
};

export const setReadyDate53A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE53A,
      payload: ans,
    });
  };
};

export const setFollowUpDate53A = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE53A,
      payload: ans,
    });
  };
};

export const setPlannedActions53B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS53B,
      payload: ans,
    });
  };
};

export const setByWhom53B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM53B,
      payload: ans,
    });
  };
};

export const setDate53B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE53B,
      payload: ans,
    });
  };
};

export const setReadyDate53B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE53B,
      payload: ans,
    });
  };
};

export const setFollowUpDate53B = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE53B,
      payload: ans,
    });
  };
};

export const setPlannedActions53C = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS53C,
      payload: ans,
    });
  };
};

export const setByWhom53C = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM53C,
      payload: ans,
    });
  };
};

export const setDate53C = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE53C,
      payload: ans,
    });
  };
};

export const setReadyDate53C = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE53C,
      payload: ans,
    });
  };
};

export const setFollowUpDate53C = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE53C,
      payload: ans,
    });
  };
};

export const setPlannedActions53D = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_PLANNED_ACTIONS53D,
      payload: ans,
    });
  };
};

export const setByWhom53D = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_BYWHOM53D,
      payload: ans,
    });
  };
};

export const setDate53D = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE53D,
      payload: ans,
    });
  };
};

export const setReadyDate53D = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_READY_DATE53D,
      payload: ans,
    });
  };
};

export const setFollowUpDate53D = (ans) => {
  return (dispatch) => {
    dispatch({
      type: SET_FOLLOW_UPDATE53D,
      payload: ans,
    });
  };
};
