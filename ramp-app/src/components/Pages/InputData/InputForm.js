import React, { useState, useEffect } from "react";
import "../../Button/Button.css";
import ErrorForm from "./ErrorForm";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap";
import { connect } from "react-redux";
import {
  setDate,
  setAssesmentCompletedBy,
  setAssesmentOf,
  setAssesmentOrderedBy,
  setCompanyRepresentative,
  setCountry,
  setDepartment,
  setOther,
  setOtherInformation,
  setPositionFive,
  setPositionFour,
  setPositionOne,
  setPositionThree,
  setPositionTwo,
  setSafetyPersonnel,
  setSite,
  setWork,
  setWorkstation,
} from "../../../actions/riskAreaActions/inputDataActions";

const mapStateToProps = (state) => ({
  inputDataProps: state.inputDataState,
});

const InputForm = (props) => {
  const handleDate = (event) => {
    props.setDate(event.target.value);
  };

  const handleAssessment = (event) => {
    props.setAssesmentOf(event.target.value);
  };

  const handleTask = (event) => {
    props.setWork(event.target.value);
  };

  const handleWorkStation = (event) => {
    props.setWorkstation(event.target.value);
  };

  const handleCountry = (event) => {
    props.setCountry(event.target.value);
  };

  const handleDepartment = (event) => {
    props.setDepartment(event.target.value);
  };

  const handleSite = (event) => {
    props.setSite(event.target.value);
  };

  const handleAssessmentOrderBy = (event) => {
    props.setAssesmentOrderedBy(event.target.value);
  };

  const handleAssessmentCompleted = (event) => {
    props.setAssesmentCompletedBy(event.target.value);
  };

  const handleCompanyRepresentative = (event) => {
    props.setCompanyRepresentative(event.target.value);
  };

  const handleSafetyWork = (event) => {
    props.setSafetyPersonnel(event.target.value);
  };

  const handleOther = (event) => {
    props.setOther(event.target.value);
  };

  const handleOtherInfo = (event) => {
    props.setOtherInformation(event.target.value);
  };

  const handleAssessmentOrderByPos = (event) => {
    props.setPositionOne(event.target.value);
  };

  const handleAssessmentCompletedPos = (event) => {
    props.setPositionTwo(event.target.value);
  };

  const handleCompanyRepresentativePos = (event) => {
    props.setPositionThree(event.target.value);
  };

  const handleSafetyWorkPos = (event) => {
    props.setPositionFour(event.target.value);
  };

  const handleOtherPos = (event) => {
    props.setPositionFive(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    /* 
    if (
      inputDate.trim().length === 0 ||
      inputAssessment.trim().length === 0 ||
      inputTask.trim().length === 0 ||
      inputStation.trim().length === 0 ||
      inputDepartment.trim().length === 0 ||
      inputCountry.trim().length === 0 ||
      inputSite.trim().length === 0 ||
      inputAssessmentOrderBy.trim().length === 0 ||
      inputAssementOrderByPos.trim().length === 0 ||
      inputAssementCompleted.trim().length === 0 ||
      inputAssementCompletedPos.trim().length === 0 ||
      inputCompanyRepresentative.trim().length === 0 ||
      inputCompanyRepresentativePos.trim().length === 0 ||
      inputSafetyWork.trim().length === 0 ||
      inputSafetyWorkPos.trim().length === 0 ||
      inputOther.trim().length === 0 ||
      inputOtherInfo.trim().length === 0 ||
      inputOtherPos.trim().length === 0
    ) {
      setError({
        title: "invavlid submit ",
        message:
          "You Forgot To Write Down Some Areas,Please Fill In Those Areas",
      });
      return;
    } */
  };
  (() => {
    'use strict';

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach((form) => {
      form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  })();

  return (
    <div className="container ">
      <div className="container">
        <form onSubmit={handleSubmit} className="was-validated" noValidate>
          <div>
            <div className="row">
              <div className="form-group col">
                <input
                  placeholder="Date"
                  id="date"
                  maxLength={65}
                  className="form-control"
                  type="date"
                  value={props.inputDataProps.inputData.date}
                  onChange={handleDate}
                  required
                />
                <div className="invalid-feedback">Please enter a date</div>


              </div>

              <div className="form-group col">
                <input
                  placeholder="Work/Work task"
                  maxLength={65}
                  className="form-control"
                  type="text"
                  value={props.inputDataProps.inputData.workTask}
                  onChange={handleTask}
                  required
                  id="worktask"
                />
                <div className="invalid-feedback">Please enter a work task</div>
              </div>

              <div className="form-group col">
                <select
                  placeholder="Assessment of"
                  className="form-select form-control"
                  value={props.inputDataProps.inputData.assessmentOf}
                  onChange={handleAssessment}
                  id='assessmentOf'
                  required
                >
                  <option value="">Select an assessment</option>
                  <option value="Work/work task">Work/work task</option>
                  <option value="Employee load">Employee load</option>
                </select>
                <div className="invalid-feedback">Need to choose one</div>
              </div>
            </div>

            <div className="row">
              <div className="form-group col">
                <input
                  placeholder="Work station/Employee load"
                  maxLength={65}
                  required
                  className="form-control"
                  type="text"
                  value={props.inputDataProps.inputData.station}
                  onChange={handleWorkStation}
                />
                <div className="invalid-feedback">Please enter a work station</div>
              </div>

              <div className="form-group col">
                <input
                  placeholder="Department"
                  required
                  maxLength={65}
                  className="form-control"
                  type="text"
                  value={props.inputDataProps.inputData.department}
                  onChange={handleDepartment}
                />
                <div className="invalid-feedback">Please enter a department</div>
              </div>

              <div className="form-group col">
                <input
                  placeholder="Site"
                  required
                  className="form-control"
                  maxLength={65}
                  type="text"
                  value={props.inputDataProps.inputData.site}
                  onChange={handleSite}
                />
                <div className="invalid-feedback">Please enter a site</div>
              </div>
            </div>

            <div className="row">
              <div className="form-group col">
                <input
                  placeholder="Country"
                  required
                  maxLength={65}
                  className="form-control"
                  type="text"
                  value={props.inputDataProps.inputData.country}
                  onChange={handleCountry}
                />
                <div className="invalid-feedback">Please enter a country</div>
              </div>

              <div className="form-group col">
                <input
                  placeholder="Assessment orderd by"
                  required
                  maxLength={65}
                  className="form-control"
                  type="text"
                  value={props.inputDataProps.inputData.assessmentOrderBy}
                  onChange={handleAssessmentOrderBy}
                />
                <div className="invalid-feedback">Please enter a assessment orderd by</div>
              </div>

              <div className="form-group col">
                <input
                  placeholder="Position"
                  required
                  maxLength={65}
                  className="form-control"
                  type="text"
                  value={
                    props.inputDataProps.inputData.assessmentOrderByPosition
                  }
                  onChange={handleAssessmentOrderByPos}
                />
                <div className="invalid-feedback">Please enter a position</div>
              </div>
            </div>

            <div className="row">
              <div className="form-group col">
                <input
                  placeholder="Assessment completed by"
                  className="form-control"
                  type="text"
                  value={props.inputDataProps.inputData.assessmentCompletedBy}
                  onChange={handleAssessmentCompleted}
                />
              </div>

              <div className="form-group col">
                <input
                  placeholder="Position"
                  className="form-control"
                  type="text"
                  value={
                    props.inputDataProps.inputData.assessmentCompletedByPosition
                  }
                  onChange={handleAssessmentCompletedPos}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col">
                <input
                  placeholder="Company representative"
                  className="form-control"
                  type="text"
                  value={props.inputDataProps.inputData.companyRepresentatitve}
                  onChange={handleCompanyRepresentative}
                />
              </div>

              <div className="form-group col">
                <input
                  placeholder="Position"
                  className="form-control"
                  type="text"
                  value={
                    props.inputDataProps.inputData
                      .companyRepresentatitvePosition
                  }
                  onChange={handleCompanyRepresentativePos}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col">
                <input
                  placeholder="Safety/work environment personnel"
                  className="form-control"
                  type="text"
                  value={props.inputDataProps.inputData.safetyWork}
                  onChange={handleSafetyWork}
                />
              </div>

              <div className="form-group col">
                <input
                  placeholder="Position"
                  className="form-control"
                  type="text"
                  value={props.inputDataProps.inputData.safetyWorkPosition}
                  onChange={handleSafetyWorkPos}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col">
                <input
                  placeholder="Other"
                  className="form-control"
                  type="text"
                  value={props.inputDataProps.inputData.other}
                  onChange={handleOther}
                />
              </div>

              <div className="form-group col">
                <input
                  placeholder="Position"
                  className="form-control"
                  type="text"
                  value={props.inputDataProps.inputData.otherPosition}
                  onChange={handleOtherPos}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <input
                  placeholder="Other information"
                  className="form-control"
                  type="text"
                  value={props.inputDataProps.inputData.otherInformation}
                  onChange={handleOtherInfo}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, {
  setAssesmentCompletedBy,
  setAssesmentOf,
  setAssesmentOrderedBy,
  setCompanyRepresentative,
  setCountry,
  setDate,
  setDepartment,
  setOther,
  setOtherInformation,
  setPositionFive,
  setPositionFour,
  setPositionOne,
  setPositionThree,
  setPositionTwo,
  setSafetyPersonnel,
  setSite,
  setWork,
  setWorkstation,
})(InputForm);
