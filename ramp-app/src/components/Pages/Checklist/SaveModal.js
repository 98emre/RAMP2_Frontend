import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import ErrorForm from "./ErrorHandler/ErrorForm";
import ErrorFormIdName from "./ErrorHandler/ErrorFormIdName";
import ErrorFormSave from "./ErrorHandler/ErrorFormSave";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
  setUser,
} from "../../../actions/riskAreaActions/checklistActions";

import {
  ResetPostureAction,
  ResetRepetitiveWorkAction,
  ResetLiftingWorkAction,
  ResetPushingAndPullingWorkAction,
  ResetInfluencingFactorsAction,
  ResetPhysicallyStrenuousWorkActions,
  ResetPhysicalDiscomfortActions,
} from "../ActionPlan/ResetActionPlanValue";

import { setPostureAction, setPostureActionId } from "../../../actions/actionPlanActions/posturePlanActions";
import { setRepetitiveWorkActions, setRepetitiveWorkActionsId } from "../../../actions/actionPlanActions/repetitiveWorkPlanAction";
import { setLiftingWorkActions, setLiftingWorkActionsId } from "../../../actions/actionPlanActions/liftingWorkPlanActions";
import { setPushingAndPullingWorkActions, setPushingAndPullingWorkActionsId } from "../../../actions/actionPlanActions/pushingAndPullingWorkPlanActions";
import { setInfluencingFactorsActions, setInfluencingFactorsActionsId } from "../../../actions/actionPlanActions/influencingFactorsPlanActions";
import { setPhysicallyStrenuousWorkActions, setPhysicallyStrenuousWorkActionsId } from "../../../actions/actionPlanActions/physicallyStrenuousWorkPlanActions";
import { setPhysicalDiscomfortActions, setPhysicalDiscomfortActionsId } from "../../../actions/actionPlanActions/physicalDiscomfortPlanActions";


import ResetCheckList, {
  resetInputData,
  resetPosture,
  resetRepetitiveWork,
  resetLiftingWork,
  resetPushingAndPulling,
  resetInfluecningFactors,
  resetPhysicallyStrenuousWork,
  resetPhysicalDiscomfort,
  resetOtherComment,
} from "./ResetCheckList";

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
} from "../../../actions/actionPlanActions/actionPlanActions";

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
  userProps: state.userState,
  errorProps: state.errorState,
  actionPlanProps: state.actionPlanState,
});

const SaveModal = (props) => {
  const [status, setStatus] = useState(false);
  const [statusIdName, setStatusIdName] = useState(false);
  const [statusSaveError, setStatusSaveError] = useState(false);
  const [pressed, SetPressed] = useState(false);
  const [pressed2, SetPressed2] = useState(false);
  const [pressed3, SetPressed3] = useState(false);

  const [updateStatus, setUpdateStatus] = useState(false);

  useEffect(() => {
    props.errorProps.error_save_ap = undefined;
    if (props.errorProps.error_save === false) {
      resetCheckList(props);
      ResetActionPlan(props);
    }
  }, [props.errorProps.error_save]);

  useEffect(() => {
    if (pressed3) {
      if (props.checklistProps.user.username === undefined) {
        console.log("Det är inget namn här")
        return;
      } else {
        console.log("körr här2")
        props.setUpdateChecklist(props.checklistProps, props.userProps.token);
        setUpdateActionPlan(props.actionPlanProps);
        if (props.errorProps.error_save === false) {
          ResetActionPlan(props);
          resetCheckList(props);
        }
      }
      SetPressed3(false)
      SetPressed(true);
    }
  }, [pressed3]);

  useEffect(() => {
    if (pressed2) {
      if (props.checklistProps.user.username === undefined) {
        console.log("Det är inget namn här")
        return;
      } else {
        props.setChecklist(props.checklistProps, props.userProps.token);
      }
      SetPressed2(false)
      SetPressed(true);
    }
  }, [pressed2]);

  useEffect(() => {
    if (pressed) {
      setStatusSaveError(true);
      SetPressed(false);
    }
  }, [pressed]);


  const erroHandler = () => {
    setStatus(false);
  };

  const erroHandlerIdName = () => {
    setStatusIdName(false);
  };

  const erroHandlerSave = () => {
    setStatusSaveError(false);
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

  if (updateStatus === true) {
    props.checklistProps.checkUpdate = false;
    setUpdateStatus(false);
  }

  const setAllChecklist = () => {
    props.setChecklistName(props.checklistProps.id_name);
    props.setInputData(props.inputDataProps.inputData);
    props.setPosture(props.postureProps.posture);
    props.setRepetitiveWork(props.repetitiveWorkProps.repetitiveWork);
    props.setLiftingWork(props.liftingWorkProps.liftingWork);
    props.setPushingAndPulling(props.pushingAndPullingProps.pushingAndPulling);
    props.setInfluencingFactor(props.influencingFactorsProps.influencingFactors);
    props.setPhysicallyStrenuousWork(props.physicallyStrenousWorkProps.physicallyStrenuousWork);
    props.setPhysicalDiscomfort(props.physicalDiscomfortProps.physicalDiscomfort);
    props.setOtherComment(props.otherCommentProps.otherComment);
    props.setUser(props.userProps.user);
  }

  $('#ModalSave').on('hidden.bs.modal', function () {
    setStatusSaveError(false);
    props.errorProps.error_save = undefined;
  })

  return (
    <>
      <div
        className="modal fade"
        id="ModalSave"
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
                <h2 className="text-primary">Saving the assessment</h2>
                <div className="col">
                  <div className="form-group col">
                    <label className="badge text-dark">
                      Enter a name for the assessment
                    </label>
                    <input
                      maxLength={65}
                      placeholder="Assessment name"
                      type="text"
                      className="form-control"
                      value={props.checklistProps.id_name}
                      onChange={(e) => {
                        props.setChecklistName(e.target.value);
                        if (e.target.value != "") {
                          setStatusIdName(false);
                          setStatusSaveError(false);
                          props.errorProps.error_save = undefined;
                        }
                      }}
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter a name for saving
                    </div>
                    <br />
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <div className="form-group col">
                      <label
                        style={{ fontSize: "16px" }}
                        className="badge text-dark"
                      >
                        Assessment completed?
                      </label>
                      <input
                        type="checkbox"
                        value={props.checklistProps.completion}
                        onChange={(e) => {
                          props.setChecklistCompletion(e.target.checked);
                        }}
                        className="form-check-input"
                      />
                      <figcaption className="figure-caption">
                        ´Make sure you have filled in EVERYTHING in the
                        checklist
                      </figcaption>
                    </div>
                  </div>
                </div>
              </form>
              <div id="error3">
                {statusSaveError && (
                  <ErrorFormSave
                    status={erroHandlerSave}
                    check={props.errorProps.error_save}
                  />
                )}
              </div>
              <div id="error2">
                {statusIdName && (
                  <ErrorFormIdName
                    status2={erroHandlerIdName}
                    idName={props.checklistProps.id_name}
                  />
                )}
              </div>
              <div id="error1">
                {status && (
                  <ErrorForm
                    status={erroHandler}
                    idName={props.checklistProps.id_name}
                    inputData={props.inputDataProps.inputData}
                    posture={props.postureProps.posture}
                    repetitiveWork={props.repetitiveWorkProps.repetitiveWork}
                    liftingWork={props.liftingWorkProps.liftingWork}
                    pushingAndPullingWork={props.pushingAndPullingProps.pushingAndPulling}
                    influencingFactors={props.influencingFactorsProps.influencingFactors}
                    physicallyStrenuousWork={props.physicallyStrenousWorkProps.physicallyStrenuousWork}
                    physicalDiscomfort={props.physicalDiscomfortProps.physicalDiscomfort}
                  />
                )}
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger "
                data-bs-dismiss="modal"
                onClick={(e) => {
                  setStatusIdName(false);
                }}
              >
                Close
              </button>
              {props.checklistProps.id != null && <button
                className="btn btn-primary"
                variant="primary"
                onClick={(e) => {
                  if (props.checklistProps.id_name.trim().length == 0) {
                    setStatusIdName(true);
                    return;
                  }

                  if (props.checklistProps.completion) {
                    props.checklistProps.checkUpdate = true;
                    return checkErrorStatus(props, setStatus, SetPressed2, SetPressed3);
                  } else {
                    setAllChecklist();
                    SetPressed3(true);
                  }
                }}
              >
                Save
              </button>}
              {props.checklistProps.id == null && <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => {
                  if (props.checklistProps.id_name.trim().length == 0) {
                    setStatusIdName(true);
                    return;
                  }

                  if (props.checklistProps.completion) {
                    props.checklistProps.checkUpdate = false;
                    return checkErrorStatus(props, setStatus, SetPressed2, SetPressed3);
                  } else {
                    setAllChecklist();
                    SetPressed2(true);
                  }

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

const ResetActionPlan = (props) => {
  props.setActionPlanId(null);
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
  resetPhysicallyStrenuousWork(props);
  resetPhysicalDiscomfort(props);
  resetOtherComment(props);
};

const checkErrorStatus = (props, setStatus, SetPressed2, SetPressed3) => {
  if (
    props.inputDataProps.inputData.date.trim().length === 0 ||
    props.inputDataProps.inputData.workTask.trim().length === 0 ||
    props.inputDataProps.inputData.assessmentCompletedBy.trim().length === 0 ||
    props.inputDataProps.inputData.assessmentOrderByPosition.trim().length === 0 ||
    props.inputDataProps.inputData.station.trim().length === 0 ||
    props.inputDataProps.inputData.department.trim().length === 0 ||
    props.inputDataProps.inputData.site.trim().length === 0 ||
    props.inputDataProps.inputData.country.trim().length === 0 ||
    props.inputDataProps.inputData.assessmentOf.trim().length === 0
  ) {
    setStatus(true);
    return;
  }

  if (
    props.postureProps.posture.q11 === "none" ||
    props.postureProps.posture.q12 === "none" ||
    props.postureProps.posture.q13 === "none" ||
    props.postureProps.posture.q14 === "none" ||
    props.postureProps.posture.q15a === "none" ||
    props.postureProps.posture.q15b === "none" ||
    props.postureProps.posture.q16a === "none" ||
    props.postureProps.posture.q16b === "none" ||
    props.postureProps.posture.q17a === "none" ||
    props.postureProps.posture.q17b === "none" ||
    props.postureProps.posture.q18 === "none"
  ) {
    setStatus(true);
    return;
  }

  if (
    props.repetitiveWorkProps.repetitiveWork.q21a === "none" ||
    props.repetitiveWorkProps.repetitiveWork.q21b === "none" ||
    props.repetitiveWorkProps.repetitiveWork.q22a === "none" ||
    props.repetitiveWorkProps.repetitiveWork.q22b === "none" ||
    props.repetitiveWorkProps.repetitiveWork.q23a === "none" ||
    props.repetitiveWorkProps.repetitiveWork.q23b === "none" ||
    props.repetitiveWorkProps.repetitiveWork.q24 === "none" ||
    props.repetitiveWorkProps.repetitiveWork.q25 === "none"
  ) {
    setStatus(true);
    return;
  }

  if (props.liftingWorkProps.liftingWork.q30 === "none") {
    setStatus(true);
    return;
  }

  if (props.liftingWorkProps.liftingWork.q30 === 1) {
    if (
      props.liftingWorkProps.liftingWork.q31a === 0 ||
      props.liftingWorkProps.liftingWork.q31b === 0 ||
      props.liftingWorkProps.liftingWork.q32a === 0 ||
      props.liftingWorkProps.liftingWork.q32b === 0 ||
      props.liftingWorkProps.liftingWork.q33a === 0 ||
      props.liftingWorkProps.liftingWork.q33b === 0 ||
      props.liftingWorkProps.liftingWork.q34a === 0 ||
      props.liftingWorkProps.liftingWork.q34b === 0 ||
      props.liftingWorkProps.liftingWork.q35a === 0 ||
      props.liftingWorkProps.liftingWork.q35b === 0 ||
      props.liftingWorkProps.liftingWork.q36a === 0 ||
      props.liftingWorkProps.liftingWork.q36b === 0 ||
      props.liftingWorkProps.liftingWork.q37a === 0 ||
      props.liftingWorkProps.liftingWork.q37b === 0
    ) {
      setStatus(true);
      return;
    }
  }

  if (props.pushingAndPullingProps.pushingAndPulling.q40 === "none") {
    setStatus(true);
    return;
  }

  if (props.pushingAndPullingProps.pushingAndPulling.q40 === 1) {
    if (
      props.pushingAndPullingProps.pushingAndPulling.q41a === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q41b === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q41c === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q41d === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q42a === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q42b === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q42c === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q42d === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q43a === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q43b === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q43c === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q43d === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q44a === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q44b === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q44c === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q44d === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q45a === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q45b === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q45c === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q45d === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q46a === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q46b === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q46c === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q46d === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q47a === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q47b === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q47c === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q47d === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q48a === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q48b === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q48c === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q48d === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q49a === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q49b === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q49c === 0 ||
      props.pushingAndPullingProps.pushingAndPulling.q49d === 0
    ) {
      setStatus(true);
      return;
    }
  }

  if (
    props.influencingFactorsProps.influencingFactors.q51a === "none" ||
    props.influencingFactorsProps.influencingFactors.q51b === "none" ||
    props.influencingFactorsProps.influencingFactors.q51c === "none" ||
    props.influencingFactorsProps.influencingFactors.q51d === "none" ||
    props.influencingFactorsProps.influencingFactors.q51e === "none" ||
    props.influencingFactorsProps.influencingFactors.q51f === "none" ||
    props.influencingFactorsProps.influencingFactors.q52a === "none" ||
    props.influencingFactorsProps.influencingFactors.q52b === "none" ||
    props.influencingFactorsProps.influencingFactors.q52c === "none" ||
    props.influencingFactorsProps.influencingFactors.q52d === "none" ||
    props.influencingFactorsProps.influencingFactors.q52e === "none" ||
    props.influencingFactorsProps.influencingFactors.q52f === "none" ||
    props.influencingFactorsProps.influencingFactors.q52h === "none" ||
    props.influencingFactorsProps.influencingFactors.q52h === "none" ||
    props.influencingFactorsProps.influencingFactors.q53a === "none" ||
    props.influencingFactorsProps.influencingFactors.q53b === "none" ||
    props.influencingFactorsProps.influencingFactors.q53c === "none" ||
    props.influencingFactorsProps.influencingFactors.q53d === "none"
  ) {
    setStatus(true);
    return;
  }

  if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q61 === "none") {
    setStatus(true);
    return;
  }

  if (props.physicalDiscomfortProps.physicalDiscomfort.q71 === "none") {
    setStatus(true);
    return;
  }

  else {
    props.setStatus(false);
    props.setAllChecklist();
    ResetActionPlan(props);

    if (props.checklistProps.checkUpdate === false) {
      SetPressed2(true);
    }
    else if (props.checklistProps.checkUpdate === undefined || props.checklistProps.checkUpdate === true) {
      SetPressed3(true);
    }
  }
};

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
  setUser,
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
})(SaveModal);
