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

const initialState = {
  influencingFactorsActions: {
    plannedActions51a: "",
    byWhom51a: "",
    date51a: "",
    readyDate51a: "",
    followUpDate51a: "",
    plannedActions51b: "",
    byWhom51b: "",
    date51b: "",
    readyDate51b: "",
    followUpDate51b: "",
    plannedActions51c: "",
    byWhom51c: "",
    date51c: "",
    readyDate51c: "",
    followUpDate51c: "",
    plannedActions51d: "",
    byWhom51d: "",
    date51d: "",
    readyDate51d: "",
    followUpDate51d: "",
    plannedActions51e: "",
    byWhom51e: "",
    date51e: "",
    readyDate51e: "",
    followUpDate51e: "",
    plannedActions51f: "",
    byWhom51f: "",
    date51f: "",
    readyDate51f: "",
    followUpDate51f: "",
    plannedActions52a: "",
    byWhom52a: "",
    date52a: "",
    readyDate52a: "",
    followUpDate52a: "",
    plannedActions52b: "",
    byWhom52b: "",
    date52b: "",
    readyDate52b: "",
    followUpDate52b: "",
    plannedActions52c: "",
    byWhom52c: "",
    date52c: "",
    readyDate52c: "",
    followUpDate52c: "",
    plannedActions52d: "",
    byWhom52d: "",
    date52d: "",
    readyDate52d: "",
    followUpDate52d: "",
    plannedActions52e: "",
    byWhom52e: "",
    date52e: "",
    readyDate52e: "",
    followUpDate52e: "",
    plannedActions52f: "",
    byWhom52f: "",
    date52f: "",
    readyDate52f: "",
    followUpDate52f: "",
    plannedActions52g: "",
    byWhom52g: "",
    date52g: "",
    readyDate52g: "",
    followUpDate52g: "",
    plannedActions52h: "",
    byWhom52h: "",
    date52h: "",
    readyDate52h: "",
    followUpDate52h: "",
    plannedActions53a: "",
    byWhom53a: "",
    date53a: "",
    readyDate53a: "",
    followUpDate53a: "",
    plannedActions53b: "",
    byWhom53b: "",
    date53b: "",
    readyDate53b: "",
    followUpDate53b: "",
    plannedActions53c: "",
    byWhom53c: "",
    date53c: "",
    readyDate53c: "",
    followUpDate53c: "",
    plannedActions53d: "",
    byWhom53d: "",
    date53d: "",
    readyDate53d: "",
    followUpDate53d: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_INFLUENCING_FACTORS_ACTIONS:
      state.influencingFactorsActions = action.payload;
      return {
        ...state,
      };

    case SET_INFLUENCING_FACTORS_ACTIONS_ID:
      state.influencingFactorsActions.id = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS51A:
      state.influencingFactorsActions.plannedActions51a = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM51A:
      state.influencingFactorsActions.byWhom51a = action.payload;
      return {
        ...state,
      };

    case SET_DATE51A:
      state.influencingFactorsActions.date51a = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE51A:
      state.influencingFactorsActions.readyDate51a = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE51A:
      state.influencingFactorsActions.followUpDate51a = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS51B:
      state.influencingFactorsActions.plannedActions51b = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM51B:
      state.influencingFactorsActions.byWhom51b = action.payload;
      return {
        ...state,
      };

    case SET_DATE51B:
      state.influencingFactorsActions.date51b = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE51B:
      state.influencingFactorsActions.readyDate51b = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE51B:
      state.influencingFactorsActions.followUpDate51b = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS51C:
      state.influencingFactorsActions.plannedActions51c = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM51C:
      state.influencingFactorsActions.byWhom51c = action.payload;
      return {
        ...state,
      };

    case SET_DATE51C:
      state.influencingFactorsActions.date51c = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE51C:
      state.influencingFactorsActions.readyDate51c = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE51C:
      state.influencingFactorsActions.followUpDate51c = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS51D:
      state.influencingFactorsActions.plannedActions51d = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM51D:
      state.influencingFactorsActions.byWhom51d = action.payload;
      return {
        ...state,
      };

    case SET_DATE51D:
      state.influencingFactorsActions.date51d = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE51D:
      state.influencingFactorsActions.readyDate51d = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE51D:
      state.influencingFactorsActions.followUpDate51d = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS51E:
      state.influencingFactorsActions.plannedActions51e = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM51E:
      state.influencingFactorsActions.byWhom51e = action.payload;
      return {
        ...state,
      };

    case SET_DATE51E:
      state.influencingFactorsActions.date51e = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE51E:
      state.influencingFactorsActions.readyDate51e = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE51E:
      state.influencingFactorsActions.followUpDate51e = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS51F:
      state.influencingFactorsActions.plannedActions51f = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM51F:
      state.influencingFactorsActions.byWhom51f = action.payload;
      return {
        ...state,
      };

    case SET_DATE51F:
      state.influencingFactorsActions.date51f = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE51F:
      state.influencingFactorsActions.readyDate51f = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE51F:
      state.influencingFactorsActions.followUpDate51f = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS52A:
      state.influencingFactorsActions.plannedActions52a = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM52A:
      state.influencingFactorsActions.byWhom52a = action.payload;
      return {
        ...state,
      };

    case SET_DATE52A:
      state.influencingFactorsActions.date52a = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE52A:
      state.influencingFactorsActions.readyDate52a = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE52A:
      state.influencingFactorsActions.followUpDate52a = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS52B:
      state.influencingFactorsActions.plannedActions52b = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM52B:
      state.influencingFactorsActions.byWhom52b = action.payload;
      return {
        ...state,
      };

    case SET_DATE52B:
      state.influencingFactorsActions.date52b = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE52B:
      state.influencingFactorsActions.readyDate52b = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE52B:
      state.influencingFactorsActions.followUpDate52b = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS52C:
      state.influencingFactorsActions.plannedActions52c = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM52C:
      state.influencingFactorsActions.byWhom52c = action.payload;
      return {
        ...state,
      };

    case SET_DATE52C:
      state.influencingFactorsActions.date52c = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE52C:
      state.influencingFactorsActions.readyDate52c = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE52C:
      state.influencingFactorsActions.followUpDate52c = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS52D:
      state.influencingFactorsActions.plannedActions52d = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM52D:
      state.influencingFactorsActions.byWhom52d = action.payload;
      return {
        ...state,
      };

    case SET_DATE52D:
      state.influencingFactorsActions.date52d = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE52D:
      state.influencingFactorsActions.readyDate52d = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE52D:
      state.influencingFactorsActions.followUpDate52d = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS52E:
      state.influencingFactorsActions.plannedActions52e = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM52E:
      state.influencingFactorsActions.byWhom52e = action.payload;
      return {
        ...state,
      };

    case SET_DATE52E:
      state.influencingFactorsActions.date52e = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE52E:
      state.influencingFactorsActions.readyDate52e = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE52E:
      state.influencingFactorsActions.followUpDate52e = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS52F:
      state.influencingFactorsActions.plannedActions52f = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM52F:
      state.influencingFactorsActions.byWhom52f = action.payload;
      return {
        ...state,
      };

    case SET_DATE52F:
      state.influencingFactorsActions.date52f = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE52F:
      state.influencingFactorsActions.readyDate52f = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE52F:
      state.influencingFactorsActions.followUpDate52f = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS52G:
      state.influencingFactorsActions.plannedActions52g = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM52G:
      state.influencingFactorsActions.byWhom52g = action.payload;
      return {
        ...state,
      };

    case SET_DATE52G:
      state.influencingFactorsActions.date52g = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE52G:
      state.influencingFactorsActions.readyDate52g = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE52G:
      state.influencingFactorsActions.followUpDate52g = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS52H:
      state.influencingFactorsActions.plannedActions52h = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM52H:
      state.influencingFactorsActions.byWhom52h = action.payload;
      return {
        ...state,
      };

    case SET_DATE52H:
      state.influencingFactorsActions.date52h = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE52H:
      state.influencingFactorsActions.readyDate52h = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE52H:
      state.influencingFactorsActions.followUpDate52h = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS53A:
      state.influencingFactorsActions.plannedActions53a = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM53A:
      state.influencingFactorsActions.byWhom53a= action.payload;
      return {
        ...state,
      };

    case SET_DATE53A:
      state.influencingFactorsActions.date53a = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE53A:
      state.influencingFactorsActions.readyDate53a = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE53A:
      state.influencingFactorsActions.followUpDate53a = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS53B:
      state.influencingFactorsActions.plannedActions53b = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM53B:
      state.influencingFactorsActions.byWhom53b= action.payload;
      return {
        ...state,
      };

    case SET_DATE53B:
      state.influencingFactorsActions.date53b = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE53B:
      state.influencingFactorsActions.readyDate53b = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE53B:
      state.influencingFactorsActions.followUpDate53b = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS53C:
      state.influencingFactorsActions.plannedActions53c = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM53C:
      state.influencingFactorsActions.byWhom53c = action.payload;
      return {
        ...state,
      };

    case SET_DATE53C:
      state.influencingFactorsActions.date53c = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE53C:
      state.influencingFactorsActions.readyDate53c = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE53C:
      state.influencingFactorsActions.followUpDate53c = action.payload;
      return {
        ...state,
      };

    case SET_PLANNED_ACTIONS53D:
      state.influencingFactorsActions.plannedActions53d = action.payload;
      return {
        ...state,
      };

    case SET_BYWHOM53D:
      state.influencingFactorsActions.byWhom53d = action.payload;
      return {
        ...state,
      };

    case SET_DATE53D:
      state.influencingFactorsActions.date53d = action.payload;
      return {
        ...state,
      };

    case SET_READY_DATE53D:
      state.influencingFactorsActions.readyDate53d = action.payload;
      return {
        ...state,
      };

    case SET_FOLLOW_UPDATE53D:
      state.influencingFactorsActions.followUpDate53d = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};
