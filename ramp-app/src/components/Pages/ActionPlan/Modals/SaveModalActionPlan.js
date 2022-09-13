import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import ErrorFormIdName from "../../Checklist/ErrorHandler/ErrorFormIdName";
import ErrorFormSave from "../../Checklist/ErrorHandler/ErrorFormSave";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Action Plan 
import {
  setActionPlanId,
  setActionPlan,
  setActionPlanName,
  setFormedBy,
  setNote,
  setOrderBy,
  setDate,
  setUpdateActionPlan,
  setCheckListActionPlan,
  setPostureActionPlan,
  setRepetitiveWorkActionPlan,
  setLiftingWorkActionPlan,
  setPushingAndPullingWorkActionPlan,
  setInfluencingFactorsActionPlan,
  setPhysicalStrenuousWorkActionPlan,
  setPhysicalDiscomFortActionPlan,
  setUser
} from "../../../../actions/actionPlanActions/actionPlanActions";

import { setPostureAction, setPostureActionId } from "../../../../actions/actionPlanActions/posturePlanActions";
import { setRepetitiveWorkActions, setRepetitiveWorkActionsId } from "../../../../actions/actionPlanActions/repetitiveWorkPlanAction";
import { setLiftingWorkActions, setLiftingWorkActionsId } from "../../../../actions/actionPlanActions/liftingWorkPlanActions";
import { setPushingAndPullingWorkActions, setPushingAndPullingWorkActionsId } from "../../../../actions/actionPlanActions/pushingAndPullingWorkPlanActions";
import { setInfluencingFactorsActions, setInfluencingFactorsActionsId } from "../../../../actions/actionPlanActions/influencingFactorsPlanActions";
import { setPhysicallyStrenuousWorkActions, setPhysicallyStrenuousWorkActionsId } from "../../../../actions/actionPlanActions/physicallyStrenuousWorkPlanActions";
import { setPhysicalDiscomfortActions, setPhysicalDiscomfortActionsId } from "../../../../actions/actionPlanActions/physicalDiscomfortPlanActions";

import {
  ResetPostureAction,
  ResetRepetitiveWorkAction,
  ResetLiftingWorkAction,
  ResetPushingAndPullingWorkAction,
  ResetInfluencingFactorsAction,
  ResetPhysicallyStrenuousWorkActions,
  ResetPhysicalDiscomfortActions
} from "../ResetActionPlanValue"
// Action Plan Stop

// Check List 
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
} from "../../../../actions/riskAreaActions/checklistActions";


import {
  resetInputData,
  resetPosture,
  resetRepetitiveWork,
  resetLiftingWork,
  resetPushingAndPulling,
  resetInfluecningFactors,
  resetPhysicallyStrenuousWork,
  resetPhysicalDiscomfort,
  resetOtherComment,
} from "../../Checklist/ResetCheckList";

// Check List Stop

const mapStateToProps = (state) => ({
  inputDataProps: state.inputDataState,
  postureProps: state.postureState,
  repetitiveWorkProps: state.repetitiveWorkState,
  liftingWorkProps: state.liftingWorkState,
  pushingAndPullingProps: state.pushingAndPullingState,
  influencingFactorsProps: state.influencingFactorsState,
  physicallyStrenousWorkProps: state.physicallyStrenuousWorkState,
  physicalDiscomfortProps: state.physicalDiscomfortState,
  otherCommentProps: state.otherCommentState,
  checklistProps: state.checklistState,
  postureActionsProps: state.postureActionsState,
  repetitiveWorkActionsProps: state.repetitiveWorkActionsState,
  liftingWorkActionsProps: state.liftingWorkActionsState,
  pushingAndPullingWorkActionsProps: state.pushingAndPullingWorkActionsState,
  influencingFactorsActionsProps: state.influencingFactorsActionsState,
  physicallyStrenuousWorkActionsProps: state.physicallyStrenuousWorkActionsState,
  physicalDiscomfortActionsProps: state.physicalDiscomfortActionsState,
  actionPlanProps: state.actionPlanState,
  userProps: state.userState,
  errorProps: state.errorState,
});

const SaveModalActionPlan = (props) => {
  const [statusIdName, setStatusIdName] = useState(false);
  const [statusSaveErrorAP, setStatusSaveErrorAP] = useState(false);
  const [checkListIdNameStatus, setCheckListIdNameStatus] = useState(false);
  const [pressed, SetPressed] = useState(false);
  const [pressed2, SetPressed2] = useState(false);
  const [pressed3, SetPressed3] = useState(false);

  useEffect(() => {
    props.errorProps.error_save = undefined;
    if (props.errorProps.error_save_ap === false) {
      console.log("reset")
      resetActionPlan(props);
      resetCheckList(props);
    }
  }, [props.errorProps.error_save_ap]);

  useEffect(() => {
    if (pressed3) {
      console.log("pressed3")
      props.setActionPlanId(props.actionPlanProps.id);
      props.setUpdateChecklist(props.checklistProps, props.userProps.token);
      props.setUpdateActionPlan(props.actionPlanProps, props.userProps.token);

      if (props.errorProps.error_save_ap === false) {
        console.log("reset")
        resetActionPlan(props);
        resetCheckList(props);
      }

      SetPressed3(false)
      SetPressed(true);
    }
  }, [pressed3]);

  useEffect(() => {
    if (pressed2) {
      console.log("pressed2")
      console.log(props.actionPlanProps)
      props.setCheckListActionPlan(props.checklistProps);
      props.setActionPlan(props.actionPlanProps, props.userProps.token);

      if (props.errorProps.error_save_ap === false) {
        console.log("reset")
        resetActionPlan(props);
        resetCheckList(props);
      }

      SetPressed2(false)
      SetPressed(true);
    }
  }, [pressed2]);

  useEffect(() => {
    if (pressed) {
      setStatusSaveErrorAP(true);
      SetPressed(false);
    }
  }, [pressed]);

  //Action Plan får värden tex om man lägger Details på posture så kommer det in i action plan redux posture
  const setAllActionPlan = () => {
    console.log("Set all")
    props.setCheckListActionPlan(props.checklistProps);
    props.setPostureActionPlan(props.postureActionsProps.postureActions);
    props.setRepetitiveWorkActionPlan(props.repetitiveWorkActionsProps.repetitiveWorkActions);
    props.setLiftingWorkActionPlan(props.liftingWorkActionsProps.liftingWorkActions);
    props.setPushingAndPullingWorkActionPlan(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions);
    props.setInfluencingFactorsActionPlan(props.influencingFactorsActionsProps.influencingFactorsActions);
    props.setPhysicalStrenuousWorkActionPlan(props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions);
    props.setPhysicalDiscomFortActionPlan(props.physicalDiscomfortActionsProps.physicalDiscomfortActions);
    props.setUser(props.userProps.user)
  }
  
  const erroHandlerIdName = () => {
    setStatusIdName(false);
  };

  const erroHandlerSave = () => {
    setStatusSaveErrorAP(false);
  };

  (function () {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();

  $('#ActionPlanSave').on('hidden.bs.modal', function () {
    setStatusSaveErrorAP(false);
    props.errorProps.error_save_ap = undefined;
  })

  return (
    <>
      <div
        className="modal fade"
        id="ActionPlanSave"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
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
                <h2 className="text-primary">Saving action plan</h2>
                <div className="col">
                  <div className="form-group col">
                    <label className="badge text-dark">
                      Enter a name for the action plan
                    </label>

                    {checkListIdNameStatus && errorIdName()}

                    <input
                      maxLength={65}
                      placeholder="Action plan name"
                      type="text"
                      className="form-control"
                      value={props.actionPlanProps.id_name}
                      onChange={(e) => {
                        props.setActionPlanName(e.target.value);
                        if (e.target.value != "") {
                          setStatusIdName(false);
                          setStatusSaveErrorAP(false);
                          props.errorProps.error_save_ap = undefined;
                        }
                      }}
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter a name for saving
                    </div>
                    <br />
                  </div>
                </div>
              </form>
              <div id="error3">
                {statusSaveErrorAP && (
                  <ErrorFormSave
                    status={erroHandlerSave}
                    check={props.errorProps.error_save_ap}
                  />
                )}
              </div>
              <div id="error2">
                {statusIdName && (
                  <ErrorFormIdName
                    status2={erroHandlerIdName}
                    idName={props.actionPlanProps.id_name}
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
              {props.actionPlanProps.id != null && <button
                className="btn btn-primary"
                variant="primary"
                onClick={(e) => {
                  console.log("Update");
                  if (props.checklistProps.id === null) {
                    setCheckListIdNameStatus(true);
                    return;
                  }

                  if (props.checklistProps.id_name.trim().length != 0) {
                    setCheckListIdNameStatus(false);
                  }

                  if (props.actionPlanProps.id_name.trim().length == 0) {
                    setStatusIdName(true);
                    return;
                  }
                  setAllActionPlan();
                  SetPressed3(true);
                }}
              >
                Save
              </button>}

              {props.actionPlanProps.id == null &&
                <button
                  className="btn btn-primary"
                  variant="primary"
                  onClick={(e) => {
                    console.log("New");
                    
                    if (props.checklistProps.id === null) {
                      setCheckListIdNameStatus(true);
                      return;
                    }
  
                    if (props.checklistProps.id_name.trim().length != 0) {
                      setCheckListIdNameStatus(false);
                    }

                    if (props.actionPlanProps.id_name.trim().length == 0) {
                      setStatusIdName(true);
                      return;
                    }
                    setAllActionPlan();
                    SetPressed2(true);
                  }}
                >
                  Save New
                </button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const resetActionPlan = (props) =>{
  props.setActionPlanId(null);
  props.setPostureActionId(null);
  props.setRepetitiveWorkActionsId(null);
  props.setLiftingWorkActionsId(null);
  props.setPushingAndPullingWorkActionsId(null);
  props.setInfluencingFactorsActionsId(null);
  props.setPhysicallyStrenuousWorkActionsId(null);
  props.setPhysicalDiscomfortActionsId(null);
  props.setActionPlanName("");
  props.setDate("");
  props.setFormedBy("");
  props.setOrderBy("");
  props.setNote("");
  ResetPostureAction(props);
  ResetRepetitiveWorkAction(props);
  ResetLiftingWorkAction(props);
  ResetPushingAndPullingWorkAction(props);
  ResetInfluencingFactorsAction(props);
  ResetPhysicallyStrenuousWorkActions(props);
  ResetPhysicalDiscomfortActions(props);
}

const resetCheckList = (props) => {
  props.setId(null);
  props.setChecklistName("");
  resetInputData(props);
  resetPosture(props);
  resetRepetitiveWork(props);
  resetLiftingWork(props);
  resetPushingAndPulling(props);
  resetInfluecningFactors(props);
  resetPushingAndPulling(props);
  resetPhysicallyStrenuousWork(props);
  resetPhysicalDiscomfort(props);
  resetOtherComment(props);
}

const errorIdName = () => {
  return (<div className="container">
    <div className="alert alert-danger alert-dismissible" style={{ "width": "400px", "marginTop": "25px" }}>
      <h3><strong>Invalid Scenario</strong></h3>
      <p>1. You Have Not Save The Check List</p>
      <p>2. You Have Must Get A Check List</p>
    </div>
  </div>);
}


export default connect(mapStateToProps, {
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
  setActionPlanId,
  setActionPlan,
  setActionPlanName,
  setFormedBy,
  setNote,
  setDate,
  setOrderBy,
  setUpdateActionPlan,
  setCheckListActionPlan,
  setPostureActionPlan,
  setRepetitiveWorkActionPlan,
  setLiftingWorkActionPlan,
  setPushingAndPullingWorkActionPlan,
  setInfluencingFactorsActionPlan,
  setPhysicalStrenuousWorkActionPlan,
  setPhysicalDiscomFortActionPlan,
  setPostureAction,
  setRepetitiveWorkActions,
  setLiftingWorkActions,
  setPushingAndPullingWorkActions,
  setInfluencingFactorsActions,
  setPhysicallyStrenuousWorkActions,
  setPhysicalDiscomfortActions,
  setPostureActionId,
  setRepetitiveWorkActionsId,
  setLiftingWorkActionsId,
  setPushingAndPullingWorkActionsId,
  setInfluencingFactorsActionsId,
  setPhysicallyStrenuousWorkActionsId,
  setPhysicalDiscomfortActionsId,
  setUser,
})(SaveModalActionPlan);