import { React } from "react";
import { connect, useDispatch } from "react-redux";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap";
import { useEffect, useState } from "react";
import {
  setChecklistName,
  GetChecklistById,
} from "../../../actions/riskAreaActions/checklistActions";

import { setInputData } from "../../../actions/riskAreaActions/inputDataActions";
import { setPosture } from "../../../actions/riskAreaActions/postureActions";
import { setRepetitiveWork } from "../../../actions/riskAreaActions/repetitiveWorkActions";
import { setInfluencingFactors } from "../../../actions/riskAreaActions/influencingFactorsActions";
import { setPhysicallyStrenuousWork } from "../../../actions/riskAreaActions/physicallyStrenuousWorkActions";
import { setPhysicalDiscomfort } from "../../../actions/riskAreaActions/physicalDiscomfortActions";
import { setLiftingWork } from "../../../actions/riskAreaActions/liftingWorkActions";
import { setPushingAndPulling } from "../../../actions/riskAreaActions/pushingAndPullingActions";
import { setOtherComment } from "../../../actions/riskAreaActions/otherCommentActions";

const mapStateToProps = (state) => ({
  postureProps: state.postureState,
  repetitiveWorkProps: state.repetitiveWorkState,
  inputDataProps: state.inputDataState,
  influencingFactorsProps: state.influencingFactorsState,
  physicallyStrenousWorkProps: state.physicallyStrenuousWorkState,
  physicalDiscomfortProps: state.physicalDiscomfortState,
  pushingAndPullingProps: state.pushingAndPullingState,
  liftingWorkProps: state.liftingWorkState,
  ChecklistProps: state.checklistState,
  otherCommentProps: state.otherCommentState,
  actionPlanProps: state.actionPlanState,
  userProps: state.userState,
});

const FindCheckList = (props) => {
  const [pressed, SetPressed] = useState(false);

  useEffect(() => {
    if (pressed) {
      props.setChecklistName(props.ChecklistProps.id_name);
      props.setInputData(props.ChecklistProps.inputData);
      props.setPosture(props.ChecklistProps.posture);
      props.setRepetitiveWork(props.ChecklistProps.repetitiveWork);
      props.setInfluencingFactors(props.ChecklistProps.influencingFactors);
      props.setLiftingWork(props.ChecklistProps.liftingWork);
      props.setPushingAndPulling(props.ChecklistProps.pushingAndPulling);
      props.setPhysicallyStrenuousWork(
        props.ChecklistProps.physicallyStrenuousWork
      );
      props.setPhysicalDiscomfort(props.ChecklistProps.physicalDiscomfort);
      props.setOtherComment(props.ChecklistProps.otherComment);
      SetPressed(false);
    }
  }, [props.ChecklistProps.posture]);
  return (
    <>
      <div
        className="modal fade"
        id="FetchOldActionPlan"
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
                <h2 className="text-primary">Search for a checkList </h2>
                <div className="col">
                  <div className="form-group col">
                    <label className="badge text-dark">Enter The Name</label>
                    <input
                      maxLength={65}
                      placeholder="Check List Name"
                      type="getName"
                      className="form-control"
                      required
                      id="getName"
                      value={props.ChecklistProps.id_name}
                      onChange={(e) => {
                        props.setChecklistName(e.target.value);
                      }}
                    />
                    <br />
                  </div>
                </div>
              </form>
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
                data-bs-dismiss="modal"
                onClick={(e) => {
                  e.preventDefault();
                  props.GetChecklistById(
                    props.ChecklistProps.id_name,
                    props.userProps.user.id,
                    props.userProps.token
                  );
                  SetPressed(true);
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
  setChecklistName,
  GetChecklistById,
  setPosture,
  setInputData,
  setRepetitiveWork,
  setInfluencingFactors,
  setPhysicallyStrenuousWork,
  setLiftingWork,
  setPushingAndPulling,
  setPhysicalDiscomfort,
  setOtherComment,
})(FindCheckList);
