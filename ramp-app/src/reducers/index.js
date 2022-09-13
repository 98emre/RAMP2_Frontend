import inputDataReducer from "./RiskAreasReducers/inputReducer";
import postureReducer from "./RiskAreasReducers/postureReducer";
import repetitiveWorkReducer from "./RiskAreasReducers/repetitiveWorkReducer";
import liftingWorkReducer from "./RiskAreasReducers/liftingWorkReducer";
import checklistReducer from "./RiskAreasReducers/checklistReducer";
import influencingFactorsReducer from "./RiskAreasReducers/influencingFactorsReducer";
import physicallyStrenuousWorkReducer from "./RiskAreasReducers/physicallyStrenuousWorkReducer";
import physicalDiscomfortReducer from "./RiskAreasReducers/physicalDiscomfortReducer";
import pushingAndPullingReducer from "./RiskAreasReducers/pushingAndPullingReducer";
import otherCommentReducer from "./RiskAreasReducers/otherCommentReducer";

import postureActionsReducer from "./ActionPlanReducers/postureActionsReducer";
import repetitiveWorkActionsReducer from "./ActionPlanReducers/repetitiveWorkActionsReducer";
import liftingWorkActionsReducer from "./ActionPlanReducers/liftingWorkActionsReducer";
import pushingAndPullingWorkActionsReducer from "./ActionPlanReducers/pushingAndPullingWorkActionsReducer";
import influencingFactorsActionsReducer from "./ActionPlanReducers/influencingFactorsActionsReducer";
import physicallyStrenuousWorkActionsReducer from "./ActionPlanReducers/physicallyStrenuousWorkActionsReducer";
import physicalDiscomfortActionsReducer from "./ActionPlanReducers/physicalDiscomfortActionsReducer";
import actionPlanReducer from "./ActionPlanReducers/actionPlanReducer";

import errorReducer from "./ErrorReducers/errorReducer";
import userReducer from "./UserReducers/userReducer";
import findAllActionPlanReducer from "./findAllReducers/findAllActionPlanReducer";
import findAllCheckListReducer from "./findAllReducers/findAllCheckListReducer";

import { combineReducers } from "redux";

export default combineReducers({
  postureState: postureReducer,
  repetitiveWorkState: repetitiveWorkReducer,
  inputDataState: inputDataReducer,
  checklistState: checklistReducer,
  liftingWorkState: liftingWorkReducer,
  influencingFactorsState: influencingFactorsReducer,
  physicallyStrenuousWorkState: physicallyStrenuousWorkReducer,
  physicalDiscomfortState: physicalDiscomfortReducer,
  pushingAndPullingState: pushingAndPullingReducer,
  otherCommentState: otherCommentReducer,
  postureActionsState: postureActionsReducer,
  repetitiveWorkActionsState: repetitiveWorkActionsReducer,
  liftingWorkActionsState: liftingWorkActionsReducer,
  pushingAndPullingWorkActionsState: pushingAndPullingWorkActionsReducer,
  influencingFactorsActionsState: influencingFactorsActionsReducer,
  physicallyStrenuousWorkActionsState: physicallyStrenuousWorkActionsReducer,
  physicalDiscomfortActionsState: physicalDiscomfortActionsReducer,
  actionPlanState: actionPlanReducer,
  userState: userReducer,
  errorState: errorReducer,
  findAllActionPlanState: findAllActionPlanReducer,
  findAllCheckListState: findAllCheckListReducer,
});
