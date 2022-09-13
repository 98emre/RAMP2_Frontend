import React from "react";
import "../../../Button/Button.css";
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
} from "../../../../actions/riskAreaActions/inputDataActions";

const mapStateToProps = (state) => ({
  inputDataProps: state.inputDataState,
});

const InputDataValues = (props) => {
  return (
    <div className="container ">
      <div className="col">
        <div className="inputdata-form bg-dark">
          <div className="row" style={{ padding: "15px" }}>
            <div className="form-group col-md-4">
              <label className="badge">Date</label>
              <input
                maxLength={65}
                disabled
                placeholder={props.inputDataProps.inputData.date || "No data"}
                className="form-control"
                type="text"
              />
            </div>

            <div className="form-group col-md-4">
              <label className="badge">Work/work task</label>
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
              <label className="badge">Work station/Employee load</label>
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
          </div>
          <div className="row" style={{ padding: "15px" }}>
            <div className="form-group col-md-4">
              <label className="badge">Department</label>
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
              <label className="badge">Site</label>
              <input
                maxLength={65}
                disabled
                placeholder={props.inputDataProps.inputData.site || "No data"}
                className="form-control"
                type="text"
              />
            </div>
            <div className="form-group col-md-4">
              <label className="badge">Country</label>
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
