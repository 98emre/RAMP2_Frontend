import { connect } from "react-redux";
import "../../../Section/Section.css";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import {
  setChecklistName,
  GetChecklistById,
  setChecklistFetchError,
  setId,
} from "../../../../actions/riskAreaActions/checklistActions";

import FindAllCheckList from "../FindAllCheckList";
import FindOldAssessment from "../FindOldAssessment";
import FindOldAssessmetSaveNew from "../FindOldAssessmetSaveNew";

import { setInputData } from "../../../../actions/riskAreaActions/inputDataActions";
import { setPosture } from "../../../../actions/riskAreaActions/postureActions";
import { setRepetitiveWork } from "../../../../actions/riskAreaActions/repetitiveWorkActions";
import { setInfluencingFactors } from "../../../../actions/riskAreaActions/influencingFactorsActions";
import { setPhysicallyStrenuousWork } from "../../../../actions/riskAreaActions/physicallyStrenuousWorkActions";
import { setPhysicalDiscomfort } from "../../../../actions/riskAreaActions/physicalDiscomfortActions";
import { setLiftingWork } from "../../../../actions/riskAreaActions/liftingWorkActions";
import { setPushingAndPulling } from "../../../../actions/riskAreaActions/pushingAndPullingActions";
import { setOtherComment } from "../../../../actions/riskAreaActions/otherCommentActions";
import { useEffect, useState } from "react";


const mapStateToProps = (state) => ({
  postureProps: state.postureState,
  repetitiveWorkProps: state.repetitiveWorkState,
  inputDataProps: state.inputDataState,
  influencingFactorsProps: state.influencingFactorsState,
  physicallyStrenousWorkProps: state.physicallyStrenuousWorkState,
  physicalDiscomfortProps: state.physicalDiscomfortState,
  pushingAndPullingProps: state.pushingAndPullingState,
  liftingWorkProps: state.liftingWorkState,
  checklistProps: state.checklistState,
  otherCommentProps: state.otherCommentState,
  errorProps: state.errorState,
  userProps: state.userState,
});

const SectionsChecklist = (props) => {
  const [pressed, SetPressed] = useState(false);
  const [choicePressed, SetChoicePressed] = useState(false);
  const [statusIdName, setStatusIdName] = useState(false);
  const [statusIdName2, setStatusIdName2] = useState(false);

  useEffect(() => {
    if (pressed) {
      props.setChecklistFetchError(false);

      props.setChecklistName(props.checklistProps.id_name);
      props.setInputData(props.checklistProps.inputData);
      props.setPosture(props.checklistProps.posture);
      props.setRepetitiveWork(props.checklistProps.repetitiveWork);
      props.setInfluencingFactors(props.checklistProps.influencingFactors);
      props.setLiftingWork(props.checklistProps.liftingWork);
      props.setPushingAndPulling(props.checklistProps.pushingAndPulling);
      props.setPhysicallyStrenuousWork(props.checklistProps.physicallyStrenuousWork);
      props.setPhysicalDiscomfort(props.checklistProps.physicalDiscomfort);
      props.setOtherComment(props.checklistProps.otherComment);
      if (choicePressed === true) {
        props.setId(null);
      }
      SetChoicePressed(false);
      SetPressed(false);
    }
  }, [props.checklistProps.posture]);

  const erroHandlerIdName = () => {
    setStatusIdName(false);
  };

  const erroHandlerIdName2 = () => {
    setStatusIdName2(false);
  };

  $('#FetchOldAssessment').on('hidden.bs.modal', function () {
    setStatusIdName(false);
  })

  $('#FetchNewFromOldAssessment').on('hidden.bs.modal', function () {
    setStatusIdName2(false);
  })

  return (
    <>
      <div
        className={false ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="top-line">{"RAMP II Assessment"}</div>
              <h1 className={true ? "heading" : "heading dark"}>
                {"Checklist for screening physical risks for manual handling"}
              </h1>
              <p
                className={
                  true ? "home__hero-subtitle" : "home__hero-subtitle dark"
                }
              >
                {""}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <button
                className="btn btn-primary btn-lg"
                type="submit"
                data-bs-dismiss="modal"
                data-bs-toggle='modal'

                data-bs-target="#FetchOldAssessment"
              >
                Old assessment
              </button>

              <br />
              <br />

              <button
                className="btn btn-primary btn-lg"
                type="submit"
                data-bs-dismiss="modal"
                data-bs-toggle='modal'
                data-bs-target="#FetchNewFromOldAssessment"
              >
                New from an old assessment
              </button>

              <br />
              <br />

              <button
                className="btn btn-primary btn-lg"
                type="submit"
                data-bs-dismiss="modal"
                data-bs-toggle='modal'
                data-bs-target="#FindAllList"
              >
                Find all
              </button>

              <FindOldAssessment
                statusIdName={statusIdName}
                setStatusIdName={setStatusIdName}
                SetPressed={SetPressed}
                erroHandlerIdName = {erroHandlerIdName}
              />
              <FindOldAssessmetSaveNew
                statusIdName2={statusIdName2}
                setStatusIdName2={setStatusIdName2}
                SetPressed = {SetPressed}
                SetChoicePressed = {SetChoicePressed}
                erroHandlerIdName2 = {erroHandlerIdName2}
              />
              <FindAllCheckList />

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
  setChecklistFetchError,
  setId,
  setPosture,
  setInputData,
  setRepetitiveWork,
  setInfluencingFactors,
  setPhysicallyStrenuousWork,
  setLiftingWork,
  setPushingAndPulling,
  setPhysicalDiscomfort,
  setOtherComment,
})(SectionsChecklist);
