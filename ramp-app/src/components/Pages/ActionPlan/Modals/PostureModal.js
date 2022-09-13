import { React, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  setPostureAction,
  setPostureActionId,
  setByWhom11,
  setByWhom12,
  setByWhom13,
  setByWhom14,
  setByWhom15,
  setByWhom16,
  setByWhom17,
  setByWhom18,
  setDate11,
  setDate12,
  setDate13,
  setDate14,
  setDate15,
  setDate16,
  setDate17,
  setDate18,
  setFollowUpDate11,
  setFollowUpDate12,
  setFollowUpDate13,
  setFollowUpDate14,
  setFollowUpDate15,
  setFollowUpDate16,
  setFollowUpDate17,
  setFollowUpDate18,
  setPlannedActions11,
  setPlannedActions12,
  setPlannedActions13,
  setPlannedActions14,
  setPlannedActions15,
  setPlannedActions16,
  setPlannedActions17,
  setPlannedActions18,
  setReadyDate11,
  setReadyDate12,
  setReadyDate13,
  setReadyDate14,
  setReadyDate15,
  setReadyDate16,
  setReadyDate17,
  setReadyDate18,
} from "../../../../actions/actionPlanActions/posturePlanActions";

const mapStateToProps = (state) => ({
  postureActionsProps: state.postureActionsState,
  postureProps: state.postureState,
  actionPlanProps: state.actionPlanState,
});

//1.1
const PostureModal = (props) => {

  const SIZE = 65;
  const DATE_SIZE = 10;

  const [plannedActions, setPlannedActions] = useState(props.postureActionsProps.postureActions.plannedActions11);
  const [byWhom, setByWhom] = useState(
    props.postureActionsProps.postureActions.byWhom11
  );
  const [date, setDate] = useState(
    props.postureActionsProps.postureActions.date11
  );
  const [readyDate, setReadyDate] = useState(
    props.postureActionsProps.postureActions.readyDate11
  );
  const [followUpDate, setFollowUpDate] = useState(
    props.postureActionsProps.postureActions.followUpDate11
  );
  //1.2
  const [plannedActions12, setPlannedActions12] = useState(
    props.postureActionsProps.postureActions.plannedActions12
  );
  const [byWhom12, setByWhom12] = useState(
    props.postureActionsProps.postureActions.byWhom12
  );
  const [date12, setDate12] = useState(
    props.postureActionsProps.postureActions.date12
  );
  const [readyDate12, setReadyDate12] = useState(
    props.postureActionsProps.postureActions.readyDate12
  );
  const [followUpDate12, setFollowUpDate12] = useState(
    props.postureActionsProps.postureActions.followUpDate12
  );
  //1.3
  const [plannedActions13, setPlannedActions13] = useState(
    props.postureActionsProps.postureActions.plannedActions13
  );
  const [byWhom13, setByWhom13] = useState(
    props.postureActionsProps.postureActions.byWhom13
  );
  const [date13, setDate13] = useState(
    props.postureActionsProps.postureActions.date13
  );
  const [readyDate13, setReadyDate13] = useState(
    props.postureActionsProps.postureActions.readyDate13
  );
  const [followUpDate13, setFollowUpDate13] = useState(
    props.postureActionsProps.postureActions.followUpDate13
  );
  //1.4
  const [plannedActions14, setPlannedActions14] = useState(
    props.postureActionsProps.postureActions.plannedActions14
  );
  const [byWhom14, setByWhom14] = useState(
    props.postureActionsProps.postureActions.byWhom14
  );
  const [date14, setDate14] = useState(
    props.postureActionsProps.postureActions.date14
  );
  const [readyDate14, setReadyDate14] = useState(
    props.postureActionsProps.postureActions.readyDate14
  );
  const [followUpDate14, setFollowUpDate14] = useState(
    props.postureActionsProps.postureActions.followUpDate14
  );
  //1.5
  const [plannedActions15, setPlannedActions15] = useState(
    props.postureActionsProps.postureActions.plannedActions15
  );
  const [byWhom15, setByWhom15] = useState(
    props.postureActionsProps.postureActions.byWhom15
  );
  const [date15, setDate15] = useState(
    props.postureActionsProps.postureActions.date15
  );
  const [readyDate15, setReadyDate15] = useState(
    props.postureActionsProps.postureActions.readyDate15
  );
  const [followUpDate15, setFollowUpDate15] = useState(
    props.postureActionsProps.postureActions.followUpDate15
  );
  //1.6
  const [plannedActions16, setPlannedActions16] = useState(
    props.postureActionsProps.postureActions.plannedActions16
  );
  const [byWhom16, setByWhom16] = useState(
    props.postureActionsProps.postureActions.byWhom16
  );
  const [date16, setDate16] = useState(
    props.postureActionsProps.postureActions.date16
  );
  const [readyDate16, setReadyDate16] = useState(
    props.postureActionsProps.postureActions.readyDate16
  );
  const [followUpDate16, setFollowUpDate16] = useState(
    props.postureActionsProps.postureActions.followUpDate16
  );
  //1.7
  const [plannedActions17, setPlannedActions17] = useState(
    props.postureActionsProps.postureActions.plannedActions17
  );
  const [byWhom17, setByWhom17] = useState(
    props.postureActionsProps.postureActions.byWhom17
  );
  const [date17, setDate17] = useState(
    props.postureActionsProps.postureActions.date17
  );
  const [readyDate17, setReadyDate17] = useState(
    props.postureActionsProps.postureActions.readyDate17
  );
  const [followUpDate17, setFollowUpDate17] = useState(
    props.postureActionsProps.postureActions.followUpDate17
  );
  //1.8
  const [plannedActions18, setPlannedActions18] = useState(
    props.postureActionsProps.postureActions.plannedActions18
  );
  const [byWhom18, setByWhom18] = useState(
    props.postureActionsProps.postureActions.byWhom18
  );
  const [date18, setDate18] = useState(
    props.postureActionsProps.postureActions.date18
  );
  const [readyDate18, setReadyDate18] = useState(
    props.postureActionsProps.postureActions.readyDate18
  );
  const [followUpDate18, setFollowUpDate18] = useState(
    props.postureActionsProps.postureActions.followUpDate18
  );
  useEffect(() => {
    setPlannedActions(props.postureActionsProps.postureActions.plannedActions11)
    setByWhom(props.postureActionsProps.postureActions.byWhom11);
    setDate(props.postureActionsProps.postureActions.date11);
    setReadyDate(props.postureActionsProps.postureActions.readyDate11);
    setFollowUpDate(props.postureActionsProps.postureActions.followUpDate11);
    setPlannedActions12(props.postureActionsProps.postureActions.plannedActions12)
    setByWhom12(props.postureActionsProps.postureActions.byWhom12);
    setDate12(props.postureActionsProps.postureActions.date12);
    setReadyDate12(props.postureActionsProps.postureActions.readyDate12);
    setFollowUpDate12(props.postureActionsProps.postureActions.followUpDate12);
    setPlannedActions13(props.postureActionsProps.postureActions.plannedActions13)
    setByWhom13(props.postureActionsProps.postureActions.byWhom13);
    setDate13(props.postureActionsProps.postureActions.date13);
    setReadyDate13(props.postureActionsProps.postureActions.readyDate13);
    setFollowUpDate13(props.postureActionsProps.postureActions.followUpDate13);
    setPlannedActions14(props.postureActionsProps.postureActions.plannedActions14)
    setByWhom14(props.postureActionsProps.postureActions.byWhom14);
    setDate14(props.postureActionsProps.postureActions.date14);
    setReadyDate14(props.postureActionsProps.postureActions.readyDate14);
    setFollowUpDate14(props.postureActionsProps.postureActions.followUpDate14);
    setPlannedActions15(props.postureActionsProps.postureActions.plannedActions15)
    setByWhom15(props.postureActionsProps.postureActions.byWhom15);
    setDate15(props.postureActionsProps.postureActions.date15);
    setReadyDate15(props.postureActionsProps.postureActions.readyDate15);
    setFollowUpDate15(props.postureActionsProps.postureActions.followUpDate15);
    setPlannedActions16(props.postureActionsProps.postureActions.plannedActions16)
    setByWhom16(props.postureActionsProps.postureActions.byWhom16);
    setDate16(props.postureActionsProps.postureActions.date16);
    setReadyDate16(props.postureActionsProps.postureActions.readyDate16);
    setFollowUpDate16(props.postureActionsProps.postureActions.followUpDate16);
    setPlannedActions17(props.postureActionsProps.postureActions.plannedActions17)
    setByWhom17(props.postureActionsProps.postureActions.byWhom17);
    setDate17(props.postureActionsProps.postureActions.date17);
    setReadyDate17(props.postureActionsProps.postureActions.readyDate17);
    setFollowUpDate17(props.postureActionsProps.postureActions.followUpDate17);
    setPlannedActions18(props.postureActionsProps.postureActions.plannedActions18)
    setByWhom18(props.postureActionsProps.postureActions.byWhom18);
    setDate18(props.postureActionsProps.postureActions.date18);
    setReadyDate18(props.postureActionsProps.postureActions.readyDate18);
    setFollowUpDate18(props.postureActionsProps.postureActions.followUpDate18);

  }, [props.postureActionsProps.postureActions])

  return (
    <>
      {/* FRÅGA 1.1---------------------------------------------------------------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        role="dialog"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="exampleModalLabel">
                1.1 Posture of the head - forwards and to the side
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
                  id="11"
                  className="form-control"
                  readOnly
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  disabled={true}
                  value={props.postureProps.posture.q11_Comm}
                />
                <label htmlFor="11">Comment</label>
                <p style={{ "fontWeight": "bold" }}>Count: {props.postureProps.posture.q11_Comm.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  id="11"
                  className="form-control"
                  maxLength={SIZE}
                  value={plannedActions}
                  onChange={(e) => {
                    setPlannedActions(e.target.value);
                  }}
                />
                <label htmlFor="11">Planned actions</label>
                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  maxLength={SIZE}
                  className="form-control"
                  value={byWhom}
                  onChange={(e) => {
                    setByWhom(e.target.value);
                  }}
                />
                <label htmlFor="11">By whom</label>
                <p style={{ "fontWeight": "bold" }}>Count: {byWhom.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
                <label htmlFor="11">Date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={readyDate}
                  onChange={(e) => {
                    setReadyDate(e.target.value);
                  }}
                ></input>
                <label htmlFor="11">Ready date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={followUpDate}
                  onChange={(e) => {
                    setFollowUpDate(e.target.value);
                  }}
                ></input>
                <label htmlFor="11">Follow up date</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  setPlannedActions(
                    props.postureActionsProps.postureActions.plannedActions11
                  );
                  setByWhom(props.postureActionsProps.postureActions.byWhom11);
                  setDate(props.postureActionsProps.postureActions.date11);
                  setReadyDate(
                    props.postureActionsProps.postureActions.readyDate11
                  );
                  setFollowUpDate(
                    props.postureActionsProps.postureActions.followUpDate11
                  );
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  props.setPlannedActions11(plannedActions);
                  props.setByWhom11(byWhom);
                  props.setDate11(date);
                  props.setReadyDate11(readyDate);
                  props.setFollowUpDate11(followUpDate);
                }}
              >
                Add action
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* FRÅGA 1.1---------------------------------------------------------------------------------------- */}

      {/* FRÅGA 1.2---------------------------------------------------------------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="exampleModalLabel2">
                1.2 Posture of the head - backwards
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
                  id="12"
                  className="form-control"
                  readOnly
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  disabled={true}
                  value={props.postureProps.posture.q12_Comm}
                />
                <label htmlFor="12">Comment</label>
                <p style={{ "fontWeight": "bold" }}>Count: {props.postureProps.posture.q12_Comm.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  className="form-control"
                  type="text"
                  id="12"
                  maxLength={SIZE}
                  value={plannedActions12}
                  onChange={(e) => {
                    setPlannedActions12(e.target.value);
                  }}
                />
                <label htmlFor="12">Planned actions</label>
                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions12.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  maxLength={SIZE}
                  type="text"
                  className="form-control"
                  value={byWhom12}
                  onChange={(e) => {
                    setByWhom12(e.target.value);
                  }}
                />
                <label htmlFor="12">By whom</label>
                <p style={{ "fontWeight": "bold" }}>Count: {byWhom12.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <input
                  maxLength={DATE_SIZE}
                  type="date"
                  className="form-control"
                  value={date12}
                  onChange={(e) => {
                    setDate12(e.target.value);
                  }}
                ></input>
                <label htmlFor="12">Date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={readyDate12}
                  onChange={(e) => {
                    setReadyDate12(e.target.value);
                  }}
                ></input>
                <label htmlFor="12">Ready date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={followUpDate12}
                  onChange={(e) => {
                    setFollowUpDate12(e.target.value);
                  }}
                ></input>
                <label htmlFor="12">Follow up date</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  setPlannedActions12(
                    props.postureActionsProps.postureActions.plannedActions12
                  );
                  setByWhom12(
                    props.postureActionsProps.postureActions.byWhom12
                  );
                  setDate12(props.postureActionsProps.postureActions.date12);
                  setReadyDate12(
                    props.postureActionsProps.postureActions.readyDate12
                  );
                  setFollowUpDate12(
                    props.postureActionsProps.postureActions.followUpDate12
                  );
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  props.setPlannedActions12(plannedActions12);
                  props.setByWhom12(byWhom12);
                  props.setDate12(date12);
                  props.setReadyDate12(readyDate12);
                  props.setFollowUpDate12(followUpDate12);
                }}
              >
                Add action
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FRÅGA 1.2---------------------------------------------------------------------------------------- */}

      {/* FRÅGA 1.3---------------------------------------------------------------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal3"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel3"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="exampleModalLabel3">
                1.3 Back posture - moderate bending
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
                  id="13"
                  className="form-control"
                  readOnly
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  disabled={true}
                  value={props.postureProps.posture.q13_Comm}
                />
                <label htmlFor="13">Comment</label>
                <p style={{ "fontWeight": "bold" }}>Count: {props.postureProps.posture.q13_Comm.length} / 65</p>
              </div>


              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  className="form-control"
                  maxLength={SIZE}
                  type="text"
                  id="13"
                  value={plannedActions13}
                  onChange={(e) => {
                    setPlannedActions13(e.target.value);
                  }}
                />
                <label htmlFor="13">Planned actions</label>
                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions13.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  maxLength={SIZE}
                  className="form-control"
                  value={byWhom13}
                  onChange={(e) => {
                    setByWhom13(e.target.value);
                  }}
                />
                <label htmlFor="13">By whom</label>
                <p style={{ "fontWeight": "bold" }}>Count: {byWhom13.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <input
                  maxLength={DATE_SIZE}
                  type="date"
                  className="form-control"
                  value={date13}
                  onChange={(e) => {
                    setDate13(e.target.value);
                  }}
                ></input>
                <label htmlFor="13">Date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={readyDate13}
                  onChange={(e) => {
                    setReadyDate13(e.target.value);
                  }}
                ></input>
                <label htmlFor="13">Ready date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={followUpDate13}
                  onChange={(e) => {
                    setFollowUpDate13(e.target.value);
                  }}
                ></input>
                <label htmlFor="13">Follow up date</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  setPlannedActions13(props.postureActionsProps.postureActions.plannedActions13);
                  setByWhom13(props.postureActionsProps.postureActions.byWhom13);
                  setDate13(props.postureActionsProps.postureActions.date13);
                  setReadyDate13(props.postureActionsProps.postureActions.readyDate13);
                  setFollowUpDate13(props.postureActionsProps.postureActions.followUpDate13);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  props.setPlannedActions13(plannedActions13);
                  props.setByWhom13(byWhom13);
                  props.setDate13(date13);
                  props.setReadyDate13(readyDate13);
                  props.setFollowUpDate13(followUpDate13);
                }}
              >
                Add action
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FRÅGA 1.3---------------------------------------------------------------------------------------- */}

      {/* FRÅGA 1.4---------------------------------------------------------------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal4"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel4"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"

      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="exampleModalLabel4">
                1.4 Back posture - considerable bending and twisting
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
                  id="14"
                  className="form-control"
                  readOnly
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  disabled={true}
                  value={props.postureProps.posture.q14_Comm}
                />
                <label htmlFor="14">Comment</label>
                <p style={{ "fontWeight": "bold" }}>Count: {props.postureProps.posture.q14_Comm.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  className="form-control"
                  maxLength={SIZE}
                  type="text"
                  id="14"
                  value={plannedActions14}
                  onChange={(e) => {
                    setPlannedActions14(e.target.value);
                  }}
                />
                <label htmlFor="14">Planned actions</label>
                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions14.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  maxLength={SIZE}
                  className="form-control"
                  value={byWhom14}
                  onChange={(e) => {
                    setByWhom14(e.target.value);
                  }}
                />
                <label htmlFor="14">By whom</label>
                <p style={{ "fontWeight": "bold" }}>Count: {byWhom14.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={date14}
                  onChange={(e) => {
                    setDate14(e.target.value);
                  }}
                ></input>
                <label htmlFor="14">Date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={readyDate14}
                  onChange={(e) => {
                    setReadyDate14(e.target.value);
                  }}
                ></input>
                <label htmlFor="14">Ready date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={followUpDate14}
                  onChange={(e) => {
                    setFollowUpDate14(e.target.value);
                  }}
                ></input>
                <label htmlFor="14">Follow up date</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  setPlannedActions14(
                    props.postureActionsProps.postureActions.plannedActions14
                  );
                  setFollowUpDate14(
                    props.postureActionsProps.postureActions.followUpDate14
                  );
                  setReadyDate14(
                    props.postureActionsProps.postureActions.readyDate14
                  );
                  setByWhom14(
                    props.postureActionsProps.postureActions.byWhom14
                  );
                  setDate14(props.postureActionsProps.postureActions.date14);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  props.setPlannedActions14(plannedActions14);
                  props.setFollowUpDate14(followUpDate14);
                  props.setReadyDate14(readyDate14);
                  props.setByWhom14(byWhom14);
                  props.setDate14(date14);
                }}
              >
                Add action
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FRÅGA 1.4---------------------------------------------------------------------------------------- */}

      {/* FRÅGA 1.5---------------------------------------------------------------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal5"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel5"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="exampleModalLabel5">
                1.5 Upper arm posture - hand in or above shoulder height*
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
                  id="15"
                  className="form-control"
                  readOnly
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  disabled={true}
                  value={props.postureProps.posture.q15_Comm}
                />
                <label htmlFor="15">Comment</label>
                <p style={{ "fontWeight": "bold" }}>Count: {props.postureProps.posture.q15_Comm.length} / 65</p>
              </div>


              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  className="form-control"
                  maxLength={SIZE}
                  type="text"
                  id="15"
                  value={plannedActions15}
                  onChange={(e) => {
                    setPlannedActions15(e.target.value);
                  }}
                />
                <label htmlFor="15">Planned actions</label>
                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions15.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  maxLength={SIZE}
                  className="form-control"
                  value={byWhom15}
                  onChange={(e) => {
                    setByWhom15(e.target.value);
                  }}
                />
                <label htmlFor="15">By whom</label>
                <p style={{ "fontWeight": "bold" }}>Count: {byWhom15.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={date15}
                  onChange={(e) => {
                    setDate15(e.target.value);
                  }}
                ></input>
                <label htmlFor="15">Date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={readyDate15}
                  onChange={(e) => {
                    setReadyDate15(e.target.value);
                  }}
                ></input>
                <label htmlFor="15">Ready date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={followUpDate15}
                  onChange={(e) => {
                    setFollowUpDate15(e.target.value);
                  }}
                ></input>
                <label htmlFor="15">Follow up date</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  setPlannedActions15(
                    props.postureActionsProps.postureActions.plannedActions15
                  );
                  setFollowUpDate15(
                    props.postureActionsProps.postureActions.followUpDate15
                  );
                  setReadyDate15(
                    props.postureActionsProps.postureActions.readyDate15
                  );
                  setByWhom15(
                    props.postureActionsProps.postureActions.byWhom15
                  );
                  setDate15(props.postureActionsProps.postureActions.date15);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  props.setPlannedActions15(plannedActions15);
                  props.setFollowUpDate15(followUpDate15);
                  props.setReadyDate15(readyDate15);
                  props.setByWhom15(byWhom15);
                  props.setDate15(date15);
                }}
              >
                Add Action
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FRÅGA 1.5---------------------------------------------------------------------------------------- */}

      {/* FRÅGA 1.6---------------------------------------------------------------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal6"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel6"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="exampleModalLabel6">
                1.6 Upper arm posture - hand in or outside the outer work area*
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
                  id="16"
                  className="form-control"
                  readOnly
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  disabled={true}
                  value={props.postureProps.posture.q16_Comm}
                />
                <label htmlFor="16">Comment</label>
                <p style={{ "fontWeight": "bold" }}>Count: {props.postureProps.posture.q16_Comm.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  maxLength={SIZE}
                  className="form-control"
                  type="text"
                  id="16"
                  value={plannedActions16}
                  onChange={(e) => {
                    setPlannedActions16(e.target.value);
                  }}
                />
                <label htmlFor="16">Planned actions</label>
                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions16.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  maxLength={SIZE}
                  className="form-control"
                  value={byWhom16}
                  onChange={(e) => {
                    setByWhom16(e.target.value);
                  }}
                />
                <label htmlFor="16">By whom</label>
                <p style={{ "fontWeight": "bold" }}>Count: {byWhom16.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={date16}
                  onChange={(e) => {
                    setDate16(e.target.value);
                  }}
                ></input>
                <label htmlFor="16">Date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={readyDate16}
                  onChange={(e) => {
                    setReadyDate16(e.target.value);
                  }}
                ></input>
                <label htmlFor="16">Ready date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={followUpDate16}
                  onChange={(e) => {
                    setFollowUpDate16(e.target.value);
                  }}
                ></input>
                <label htmlFor="16">Follow up date</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  setPlannedActions16(
                    props.postureActionsProps.postureActions.plannedActions16
                  );
                  setFollowUpDate16(
                    props.postureActionsProps.postureActions.followUpDate16
                  );
                  setReadyDate16(
                    props.postureActionsProps.postureActions.readyDate16
                  );
                  setByWhom16(
                    props.postureActionsProps.postureActions.byWhom16
                  );
                  setDate16(props.postureActionsProps.postureActions.date16);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  props.setPlannedActions16(plannedActions16);
                  props.setFollowUpDate16(followUpDate16);
                  props.setReadyDate16(readyDate16);
                  props.setByWhom16(byWhom16);
                  props.setDate16(date16);
                }}
              >
                Add Action
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FRÅGA 1.6---------------------------------------------------------------------------------------- */}

      {/* FRÅGA 1.7---------------------------------------------------------------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal7"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel7"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="exampleModalLabel7">
                1.7 Wrist posture*
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
                  id="17"
                  className="form-control"
                  readOnly
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  disabled={true}
                  value={props.postureProps.posture.q17_Comm}
                />
                <label htmlFor="17">Comment</label>
                <p style={{ "fontWeight": "bold" }}>Count: {props.postureProps.posture.q17_Comm.length} / 65</p>
              </div>


              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  className="form-control"
                  maxLength={SIZE}
                  type="text"
                  id="17"
                  value={plannedActions17}
                  onChange={(e) => {
                    setPlannedActions17(e.target.value);
                  }}
                />
                <label htmlFor="17">Planned actions</label>
                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions17.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  className="form-control"
                  maxLength={SIZE}
                  value={byWhom17}
                  onChange={(e) => {
                    setByWhom17(e.target.value);
                  }}
                />
                <label htmlFor="17">By whom</label>
                <p style={{ "fontWeight": "bold" }}>Count: {byWhom17.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={date17}
                  onChange={(e) => {
                    setDate17(e.target.value);
                  }}
                ></input>
                <label htmlFor="17">Date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={readyDate17}
                  onChange={(e) => {
                    setReadyDate17(e.target.value);
                  }}
                ></input>
                <label htmlFor="17">Ready date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={followUpDate17}
                  onChange={(e) => {
                    setFollowUpDate17(e.target.value);
                  }}
                ></input>
                <label htmlFor="17">Follow up date</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  setPlannedActions17(
                    props.postureActionsProps.postureActions.plannedActions17
                  );
                  setFollowUpDate17(
                    props.postureActionsProps.postureActions.followUpDate17
                  );
                  setReadyDate17(
                    props.postureActionsProps.postureActions.readyDate17
                  );
                  setByWhom17(
                    props.postureActionsProps.postureActions.byWhom17
                  );
                  setDate17(props.postureActionsProps.postureActions.date17);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  props.setPlannedActions17(plannedActions17);
                  props.setFollowUpDate17(followUpDate17);
                  props.setReadyDate17(readyDate17);
                  props.setByWhom17(byWhom17);
                  props.setDate17(date17);
                }}
              >
                Add Action
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FRÅGA 1.7---------------------------------------------------------------------------------------- */}

      {/* FRÅGA 1.8---------------------------------------------------------------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal8"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel8"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="exampleModalLabel8">
                1.8 Leg and foot space and surface
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
                  id="11"
                  className="form-control"
                  readOnly
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  disabled={true}
                  value={props.postureProps.posture.q18_Comm}
                />
                <label htmlFor="11">Comment</label>
                <p style={{ "fontWeight": "bold" }}>Count: {props.postureProps.posture.q18_Comm.length} / 65</p>
              </div>


              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  className="form-control"
                  maxLength={SIZE}
                  type="text"
                  id="18"
                  value={plannedActions18}
                  onChange={(e) => {
                    setPlannedActions18(e.target.value);
                  }}
                />
                <label htmlFor="18">Planned actions</label>
                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions18.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  maxLength={SIZE}
                  className="form-control"
                  value={byWhom18}
                  onChange={(e) => {
                    setByWhom18(e.target.value);
                  }}
                />
                <label htmlFor="18">By whom</label>
                <p style={{ "fontWeight": "bold" }}>Count: {byWhom18.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={date18}
                  onChange={(e) => {
                    setDate18(e.target.value);
                  }}
                ></input>
                <label htmlFor="18">Date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={readyDate18}
                  onChange={(e) => {
                    setReadyDate18(e.target.value);
                  }}
                ></input>
                <label htmlFor="18">Ready date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={followUpDate18}
                  onChange={(e) => {
                    setFollowUpDate18(e.target.value);
                  }}
                ></input>
                <label htmlFor="18">Follow up date</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  setPlannedActions18(
                    props.postureActionsProps.postureActions.plannedActions18
                  );
                  setFollowUpDate18(
                    props.postureActionsProps.postureActions.followUpDate18
                  );
                  setReadyDate18(
                    props.postureActionsProps.postureActions.readyDate18
                  );
                  setByWhom18(
                    props.postureActionsProps.postureActions.byWhom18
                  );
                  setDate18(props.postureActionsProps.postureActions.date18);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  props.setPlannedActions18(plannedActions18);
                  props.setFollowUpDate18(followUpDate18);
                  props.setReadyDate18(readyDate18);
                  props.setByWhom18(byWhom18);
                  props.setDate18(date18);
                }}
              >
                Add Action
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FRÅGA 1.8---------------------------------------------------------------------------------------*/}
    </>
  );
};

export default connect(mapStateToProps, {
  setPostureAction,
  setPostureActionId,
  setByWhom11,
  setByWhom12,
  setByWhom13,
  setByWhom14,
  setByWhom15,
  setByWhom16,
  setByWhom17,
  setByWhom18,
  setDate11,
  setDate12,
  setDate13,
  setDate14,
  setDate15,
  setDate16,
  setDate17,
  setDate18,
  setFollowUpDate11,
  setFollowUpDate12,
  setFollowUpDate13,
  setFollowUpDate14,
  setFollowUpDate15,
  setFollowUpDate16,
  setFollowUpDate17,
  setFollowUpDate18,
  setPlannedActions11,
  setPlannedActions12,
  setPlannedActions13,
  setPlannedActions14,
  setPlannedActions15,
  setPlannedActions16,
  setPlannedActions17,
  setPlannedActions18,
  setReadyDate11,
  setReadyDate12,
  setReadyDate13,
  setReadyDate14,
  setReadyDate15,
  setReadyDate16,
  setReadyDate17,
  setReadyDate18,
})(PostureModal);
