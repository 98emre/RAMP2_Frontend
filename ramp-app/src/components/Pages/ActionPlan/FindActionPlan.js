import { React } from "react";
import { connect } from "react-redux";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import ErrorFormNameDoesntExist from "../Checklist/ErrorHandler/ErrorFormNameDoesntExist";

// ----------- Action Plan Start -----------
import {
  setActionPlanId,
  setActionPlan,
  setActionPlanName,
  setOrderBy,
  setFormedBy,
  setDate,
  setNote,
  setPostureActionPlan,
  setRepetitiveWorkActionPlan,
  setLiftingWorkActionPlan,
  setPushingAndPullingWorkActionPlan,
  setInfluencingFactorsActionPlan,
  setPhysicalStrenuousWorkActionPlan,
  setPhysicalDiscomFortActionPlan,
  setUpdateActionPlan,
  setCheckListActionPlan,
  GetActionPlanById,
} from "../../../actions/actionPlanActions/actionPlanActions";

import { setPostureAction } from "../../../actions/actionPlanActions/posturePlanActions";
import { setRepetitiveWorkActions } from "../../../actions/actionPlanActions/repetitiveWorkPlanAction";
import { setLiftingWorkActions } from "../../../actions/actionPlanActions/liftingWorkPlanActions";
import { setPushingAndPullingWorkActions } from "../../../actions/actionPlanActions/pushingAndPullingWorkPlanActions";
import { setInfluencingFactorsActions } from "../../../actions/actionPlanActions/influencingFactorsPlanActions";
import { setPhysicallyStrenuousWorkActions } from "../../../actions/actionPlanActions/physicallyStrenuousWorkPlanActions";
import { setPhysicalDiscomfortActions } from "../../../actions/actionPlanActions/physicalDiscomfortPlanActions";
// ----------- Action Plan End -----------

// ---------- CheckList List Start ----------
import {
  setId,
  setInputData,
  setPosture,
  setRepetitiveWork,
  setLiftingWork,
  setPushingAndPulling,
  setInfluencingFactor,
  setPhysicallyStrenuousWork,
  setPhysicalDiscomfort,
  setChecklist,
  setUpdateChecklist,
  setChecklistName,
  setChecklistCompletion,
  setCompleted,
  setOtherComment,
} from "../../../actions/riskAreaActions/checklistActions";
//---- Check List End ------------

const mapStateToProps = (state) => ({
  postureActionsProps: state.postureActionsState,
  repetitiveWorkActionsProps: state.repetitiveWorkActionsState,
  liftingWorkActionsProps: state.liftingWorkActionsState,
  pushingAndPullingWorkActionsProps: state.pushingAndPullingWorkActionsState,
  InfluencingFactorsActionsProps: state.influencingFactorsActionsState,
  physicallyStrenuousWorkActionsProps:
    state.physicallyStrenuousWorkActionsState,
  physicalDiscomfortActionsProps: state.physicalDiscomfortActionsState,
  actionPlansProps: state.actionPlanState,
  checklistProps: state.checklistState,
  userProps: state.userState,
  errorProps: state.errorState,
});

const FindActionPlan = (props) => {
  const [pressed, setPressed] = useState(false);
  const [statusIdName, setStatusIdName] = useState(false);

  useEffect(() => {
    if (pressed) {
      // ----- Action Plan ------
      props.setActionPlanId(props.actionPlansProps.id);
      props.setActionPlanName(props.actionPlansProps.id_name);
      props.setPostureAction(props.actionPlansProps.postureActions);
      props.setRepetitiveWorkActions(
        props.actionPlansProps.repetitiveWorkActions
      );
      props.setLiftingWorkActions(props.actionPlansProps.liftingWorkActions);
      props.setPushingAndPullingWorkActions(
        props.actionPlansProps.pushingAndPullingActions
      );
      props.setInfluencingFactorsActions(
        props.actionPlansProps.influencingFactorsActions
      );
      props.setPhysicallyStrenuousWorkActions(
        props.actionPlansProps.physicallyStrenuousWorkActions
      );
      props.setPhysicalDiscomfortActions(
        props.actionPlansProps.physicalDiscomfortActions
      );
      // ----- Action Plan End -----

      // ---- Check List ------
      props.setId(props.actionPlansProps.checkList.id);
      props.setChecklistName(props.actionPlansProps.checkList.id_name);
      props.setCompleted(props.actionPlansProps.checkList.completed);
      props.setInputData(props.actionPlansProps.checkList.inputData);
      props.setPosture(props.actionPlansProps.checkList.posture);
      props.setRepetitiveWork(props.actionPlansProps.checkList.repetitiveWork);
      props.setLiftingWork(props.actionPlansProps.checkList.liftingWork);
      props.setPushingAndPulling(
        props.actionPlansProps.checkList.pushingAndPulling
      );
      props.setInfluencingFactor(
        props.actionPlansProps.checkList.influencingFactors
      );
      props.setPhysicallyStrenuousWork(
        props.actionPlansProps.checkList.physicallyStrenuousWork
      );
      props.setPhysicalDiscomfort(
        props.actionPlansProps.checkList.physicalDiscomfort
      );
      props.setOtherComment(props.actionPlansProps.checkList.otherComment);
      //------ Check List End -------

      setPressed(false);
    }
  }, [props.actionPlansProps.postureActions]);

  const erroHandlerIdName = () => {
    setStatusIdName(false);
  };

  $('#ActionPlandFind').on('hidden.bs.modal', function () {
    setStatusIdName(false);
  })

  return (
    <>
      <div
        className="modal fade"
        id="ActionPlandFind"
        aria-labelledby="ActionPlanModal"
        aria-hidden="true"
        role="dialog"
        data-backdrop="static"
        data-keyboard="false"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form
                className="was-validated"
                style={{ textAlign: "center" }}
                noValidate
              >
                <h2 className="text-primary">
                  Continue with an old Action plan{" "}
                </h2>
                <div className="col">
                  <div className="form-group col">
                    <label className="badge text-dark">Enter the name</label>
                    <input
                      maxLength={20}
                      placeholder="Action plan name"
                      type="getActionPlanName"
                      className="form-control"
                      required
                      id="getActionPlanName"
                      value={props.actionPlansProps.id_name}
                      onChange={(e) => {
                        props.setActionPlanName(e.target.value);
                        setStatusIdName(false);
                      }}
                    />
                    <br />
                  </div>
                </div>
              </form>
              <div id="error2">
                {statusIdName && (
                  <ErrorFormNameDoesntExist
                    status={erroHandlerIdName}
                    check={props.errorProps.error_name_ap}
                  />
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger "
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  props.GetActionPlanById(
                    props.actionPlansProps.id_name,
                    props.userProps.user.id,
                    props.userProps.token
                  );
                  setStatusIdName(true);
                  setPressed(true);
                }}
              >
                Get
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default connect(mapStateToProps, {
  setActionPlanId,
  setActionPlan,
  setActionPlanName,
  setFormedBy,
  setNote,
  setOrderBy,
  setDate,
  GetActionPlanById,
  setUpdateActionPlan,
  setCheckListActionPlan,
  setPostureActionPlan,
  setRepetitiveWorkActionPlan,
  setLiftingWorkActionPlan,
  setPushingAndPullingWorkActionPlan,
  setInfluencingFactorsActionPlan,
  setPhysicalStrenuousWorkActionPlan,
  setPhysicalDiscomFortActionPlan,
  setUpdateActionPlan,

  setPostureAction,
  setRepetitiveWorkActions,
  setLiftingWorkActions,
  setPushingAndPullingWorkActions,
  setInfluencingFactorsActions,
  setPhysicallyStrenuousWorkActions,
  setPhysicalDiscomfortActions,

  setId,
  setInputData,
  setPosture,
  setRepetitiveWork,
  setLiftingWork,
  setPushingAndPulling,
  setInfluencingFactor,
  setPhysicallyStrenuousWork,
  setPhysicalDiscomfort,
  setChecklist,
  setUpdateChecklist,
  setChecklistName,
  setChecklistCompletion,
  setCompleted,
  setOtherComment,
})(FindActionPlan);
