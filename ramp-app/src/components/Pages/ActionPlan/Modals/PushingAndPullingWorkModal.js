import { React, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  setPushingAndPullingWorkActions,
  setPushingAndPullingWorkActionsId,
  setByWhom41,
  setByWhom42,
  setDate41,
  setDate42,
  setFollowUpDate41,
  setFollowUpDate42,
  setPlannedActions41,
  setPlannedActions42,
  setReadyDate41,
  setReadyDate42,
} from "../../../../actions/actionPlanActions/pushingAndPullingWorkPlanActions";

const mapStateToProps = (state) => ({
  pushingAndPullingWorkActionsProps: state.pushingAndPullingWorkActionsState,
  pushingAndPullingProps: state.pushingAndPullingState,
});

const PushingAndPullingWorkModal = (props) => {

  const SIZE = 65;
  const DATE_SIZE = 10;
  //4.1
  const [plannedActions41, setPlannedActions41] = useState(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.plannedActions41);
  const [byWhom41, setByWhom41] = useState(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.byWhom41);
  const [date41, setDate41] = useState(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.date41);
  const [readyDate41, setReadyDate41] = useState(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.readyDate41);
  const [followUpDate41, setFollowUpDate41] = useState(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.followUpDate41);
  //4.2
  const [plannedActions42, setPlannedActions42] = useState(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.plannedActions42);
  const [byWhom42, setByWhom42] = useState(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.byWhom42);
  const [date42, setDate42] = useState(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.date42);
  const [readyDate42, setReadyDate42] = useState(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.readyDate42);
  const [followUpDate42, setFollowUpDate42] = useState(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.followUpDate42);

  useEffect(() => {
    setPlannedActions41(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.plannedActions41);
    setByWhom41(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.byWhom41);
    setDate41(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.date41);
    setReadyDate41(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.readyDate41);
    setFollowUpDate41(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.followUpDate41);
    setPlannedActions42(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.plannedActions42);
    setByWhom42(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.byWhom42);
    setDate42(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.date42);
    setReadyDate42(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.readyDate42);
    setFollowUpDate42(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.followUpDate42);
  }, [props.pushingAndPullingWorkActionsProps.pushingAndPullingActions])

  return (
    <>
      {/* FRÅGA 4.1---------------------------------------------------------------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal41"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel41"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="exampleModalLabel41">
                4.1 Pushing and pulling work (average case)
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-floating text-dark">
                <textarea
                  id="41"
                  className="form-control"
                  readOnly
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  disabled={true}
                  value={props.pushingAndPullingProps.pushingAndPulling.q41_averageComm}
                />
                <label htmlFor="41">Comment</label>
                <p style={{ "fontWeight": "bold" }}>Count:{props.pushingAndPullingProps.pushingAndPulling.q41_averageComm.length}  / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  maxLength={SIZE}
                  className="form-control"
                  type="text"
                  id="41"
                  value={plannedActions41}
                  onChange={(e) => {
                    setPlannedActions41(e.target.value);
                  }}
                />
                <label htmlFor="41">Planned actions</label>
                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions41.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  maxLength={SIZE}
                  className="form-control"
                  value={byWhom41}
                  onChange={(e) => {
                    setByWhom41(e.target.value);
                  }}
                />
                <label htmlFor="41">By whom</label>
                <p style={{ "fontWeight": "bold" }}>Count: {byWhom41.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={date41}
                  onChange={(e) => {
                    setDate41(e.target.value);
                  }}
                ></input>
                <label htmlFor="41">Date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  className="form-control"
                  maxLength={DATE_SIZE}
                  value={readyDate41}
                  onChange={(e) => {
                    setReadyDate41(e.target.value);
                  }}
                ></input>
                <label htmlFor="41">Ready date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={followUpDate41}
                  onChange={(e) => {
                    setFollowUpDate41(e.target.value);
                  }}
                ></input>
                <label htmlFor="41">Follow up date</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  setPlannedActions41(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.plannedActions41);
                  setFollowUpDate41(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.followUpDate41);
                  setReadyDate41(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.readyDate41);
                  setByWhom41(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.byWhom41);
                  setDate41(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.date41);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  props.setPlannedActions41(plannedActions41);
                  props.setFollowUpDate41(followUpDate41);
                  props.setReadyDate41(readyDate41);
                  props.setByWhom41(byWhom41);
                  props.setDate41(date41);
                }}>
                Add Action
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FRÅGA 4.1---------------------------------------------------------------------------------------- */}

      {/* FRÅGA 4.2---------------------------------------------------------------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal42"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel42"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="exampleModalLabel42">
                4.2 Pushing and pulling work (worst case)
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <div className="form-floating text-dark">
                <textarea
                  id="42"
                  className="form-control"
                  readOnly
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  disabled={true}
                  value={props.pushingAndPullingProps.pushingAndPulling.q41_worstComm}
                />
                <label htmlFor="42">Comment</label>
                <p style={{ "fontWeight": "bold" }}>Count:{props.pushingAndPullingProps.pushingAndPulling.q41_worstComm.length}  / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  maxLength={SIZE}
                  className="form-control"
                  type="text"
                  id="42"
                  value={plannedActions42}
                  onChange={(e) => {
                    setPlannedActions42(e.target.value);
                  }}
                />
                <label htmlFor="42">Planned actions</label>
                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions42.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  maxLength={SIZE}
                  type="text"
                  className="form-control"
                  value={byWhom42}
                  onChange={(e) => {
                    setByWhom42(e.target.value);
                  }}
                />
                <label htmlFor="42">By whom</label>
                <p style={{ "fontWeight": "bold" }}>Count: {byWhom42.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={date42}
                  onChange={(e) => {
                    setDate42(e.target.value);
                  }}
                ></input>
                <label htmlFor="42">Date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={readyDate42}
                  onChange={(e) => {
                    setReadyDate42(e.target.value);
                  }}
                ></input>
                <label htmlFor="42">Ready date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={followUpDate42}
                  onChange={(e) => {
                    setFollowUpDate42(e.target.value);
                  }}
                ></input>
                <label htmlFor="42">Follow up date</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  setPlannedActions42(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.plannedActions42);
                  setFollowUpDate42(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.followUpDate42);
                  setReadyDate42(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.readyDate42);
                  setByWhom42(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.byWhom42);
                  setDate42(props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.date42);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  props.setPlannedActions42(plannedActions42);
                  props.setFollowUpDate42(followUpDate42);
                  props.setReadyDate42(readyDate42);
                  props.setByWhom42(byWhom42);
                  props.setDate42(date42);
                }}>
                Add Action
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FRÅGA 4.2---------------------------------------------------------------------------------------- */}
    </>
  );
};

export default connect(mapStateToProps, {
  setPushingAndPullingWorkActions,
  setPushingAndPullingWorkActionsId,
  setByWhom41,
  setByWhom42,
  setDate41,
  setDate42,
  setFollowUpDate41,
  setFollowUpDate42,
  setPlannedActions41,
  setPlannedActions42,
  setReadyDate41,
  setReadyDate42,
})(PushingAndPullingWorkModal);
