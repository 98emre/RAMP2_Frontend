import React from "react";
import "../../Button/Button.css";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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

const InputDataValues = (props) => {
  return (
    <div className="container">
      <div className="col">
        <div className="inputdata-form bg-white">
          <div className="row" style={{ padding: "15px" }}>
            <div className="form-group col-md-4">
              <label className="badge text-dark">Date</label>
              <input
                maxLength={65}
                disabled
                placeholder={props.inputDataProps.inputData.date || "No data"}
                className="form-control"
                type="text"
              />
            </div>

            <div className="form-group col-md-4">
              <label className="badge text-dark">Work/work task</label>
              <input
                maxLength={65}
                disabled
                placeholder={
                  props.inputDataProps.inputData.workTask || "No data"
                }
                className="form-control"
                type="text"
              />
            </div>

            <div className="form-group col-md-4">
              <label className="badge text-dark">Assessment of</label>
              <input
                maxLength={65}
                disabled
                placeholder={
                  props.inputDataProps.inputData.assessmentOf || "No data"
                }
                className="form-control"
                type="text"
              />
            </div>
          </div>
          <div className="row" style={{ padding: "15px" }}>
            <div className="form-group col-md-4">
              <label className="badge text-dark">Work station/Employee load</label>
              <input
                maxLength={65}
                disabled
                placeholder={
                  props.inputDataProps.inputData.station || "No data"
                }
                className="form-control"
                type="text"
              />
            </div>

            <div className="form-group col-md-4">
              <label className="badge text-dark">Department</label>
              <input
                maxLength={65}
                disabled
                placeholder={
                  props.inputDataProps.inputData.department || "No data"
                }
                className="form-control"
                type="text"
              />
            </div>

            <div className="form-group col-md-4">
              <label className="badge text-dark">Site</label>
              <input
                maxLength={65}
                disabled
                placeholder={props.inputDataProps.inputData.site || "No data"}
                className="form-control"
                type="text"
              />
            </div>
          </div>

          <div className="row" style={{ padding: "15px" }}>
            <div className="form-group col-md-4">
              <label className="badge text-dark">Country</label>
              <input
                maxLength={65}
                disabled
                placeholder={
                  props.inputDataProps.inputData.country || "No data"
                }
                className="form-control"
                type="text"
              />
            </div>

            <div className="form-group col-md-4">
              <label className="badge text-dark">Assessment orderd by</label>
              <input
                maxLength={65}
                disabled
                placeholder={
                  props.inputDataProps.inputData.assessmentOrderBy || "No data"
                }
                className="form-control"
                type="text"
              />
            </div>

            <div className="form-group col-md-4">
              <label className="badge text-dark">Position</label>
              <input
                maxLength={65}
                disabled
                placeholder={
                  props.inputDataProps.inputData.assessmentOrderByPosition ||
                  "No data"
                }
                className="form-control"
                type="text"
              />
            </div>
          </div>

          <div className="row" style={{ padding: "15px" }}>
            <div className="form-group col-md-6">
              <label className="badge text-dark">Assessment completed by</label>
              <input
                maxLength={65}
                disabled
                placeholder={
                  props.inputDataProps.inputData.assessmentCompletedBy ||
                  "No data"
                }
                className="form-control"
                type="text"
              />
            </div>

            <div className="form-group col-md-6">
              <label className="badge text-dark">Position</label>
              <input
                maxLength={65}
                disabled
                placeholder={
                  props.inputDataProps.inputData
                    .assessmentCompletedByPosition || "No data"
                }
                className="form-control"
                type="text"
              />
            </div>
          </div>

          <div className="row" style={{ padding: "15px" }}>
            <div className="form-group col-md-6">
              <label className="badge text-dark">Company representative</label>
              <input
                maxLength={65}
                disabled
                placeholder={
                  props.inputDataProps.inputData.companyRepresentatitve ||
                  "No data"
                }
                className="form-control"
                type="text"
              />
            </div>

            <div className="form-group col-md-6">
              <label className="badge text-dark">Position</label>
              <input
                maxLength={65}
                disabled
                placeholder={
                  props.inputDataProps.inputData
                    .companyRepresentatitvePosition || "No data"
                }
                className="form-control"
                type="text"
              />
            </div>
          </div>

          <div className="row" style={{ padding: "15px" }}>
            <div className="form-group col-md-6">
              <label className="badge text-dark">Safety/work environment personnel</label>
              <input
                maxLength={65}
                disabled
                placeholder={
                  props.inputDataProps.inputData.safetyWork || "No data"
                }
                className="form-control"
                type="text"
              />
            </div>

            <div className="form-group col-md-6">
              <label className="badge text-dark">Position</label>
              <input
                maxLength={65}
                disabled
                placeholder={
                  props.inputDataProps.inputData.safetyWorkPosition || "No data"
                }
                className="form-control"
                type="text"
              />
            </div>
          </div>

          <div className="row" style={{ padding: "15px" }}>
            <div className="form-group col-md-6">
              <label className="badge text-dark">Other</label>
              <input
                maxLength={65}
                disabled
                placeholder={props.inputDataProps.inputData.other || "No data"}
                className="form-control"
                type="text"
              />
            </div>

            <div className="form-group col-md-6">
              <label className="badge text-dark">Position</label>
              <input
                maxLength={65}
                disabled
                placeholder={
                  props.inputDataProps.inputData.otherPosition || "No data"
                }
                className="form-control"
                type="text"
              />
            </div>
          </div>

          <div className="form-group col-md-12">
            <label className="badge text-dark">Other information</label>
            <input
              maxLength={65}
              disabled
              placeholder={
                props.inputDataProps.inputData.otherInformation || "No data"
              }
              className="form-control"
              type="text"
            />
          </div>
        </div>
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
})(InputDataValues);
