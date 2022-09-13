import { React, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  setRepetitiveWorkActions,
  setRepetitiveWorkActionsId,
  setByWhom21,
  setByWhom22,
  setByWhom23,
  setByWhom24,
  setByWhom25,
  setDate21,
  setDate22,
  setDate23,
  setDate24,
  setDate25,
  setFollowUpDate21,
  setFollowUpDate22,
  setFollowUpDate23,
  setFollowUpDate24,
  setFollowUpDate25,
  setPlannedActions21,
  setPlannedActions22,
  setPlannedActions23,
  setPlannedActions24,
  setPlannedActions25,
  setReadyDate21,
  setReadyDate22,
  setReadyDate23,
  setReadyDate24,
  setReadyDate25,
} from "../../../../actions/actionPlanActions/repetitiveWorkPlanAction";

const mapStateToProps = (state) => ({
  repetitiveWorkActionsProps: state.repetitiveWorkActionsState,
  repetitiveWorkProps: state.repetitiveWorkState,
});

const RepetitiveWorkModal = (props) => {

  const SIZE = 65;
  const DATE_SIZE = 10;

  //2.1
  const [plannedActions21, setPlannedActions21] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.plannedActions21);
  const [byWhom21, setByWhom21] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.byWhom21);
  const [date21, setDate21] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.date21);
  const [readyDate21, setReadyDate21] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.readyDate21);
  const [followUpDate21, setFollowUpDate21] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.followUpDate21);
  //2.2
  const [plannedActions22, setPlannedActions22] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.plannedActions22);
  const [byWhom22, setByWhom22] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.byWhom22);
  const [date22, setDate22] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.date22);
  const [readyDate22, setReadyDate22] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.readyDate22);
  const [followUpDate22, setFollowUpDate22] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.followUpDate22);
  //2.3
  const [plannedActions23, setPlannedActions23] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.plannedActions23);
  const [byWhom23, setByWhom23] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.byWhom23);
  const [date23, setDate23] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.date23);
  const [readyDate23, setReadyDate23] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.readyDate23);
  const [followUpDate23, setFollowUpDate23] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.followUpDate23);
  //2.4
  const [plannedActions24, setPlannedActions24] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.plannedActions24);
  const [byWhom24, setByWhom24] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.byWhom24);
  const [date24, setDate24] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.date24);
  const [readyDate24, setReadyDate24] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.readyDate24);
  const [followUpDate24, setFollowUpDate24] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.followUpDate24);
  //2.5
  const [plannedActions25, setPlannedActions25] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.plannedActions25);
  const [byWhom25, setByWhom25] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.byWhom25);
  const [date25, setDate25] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.date25);
  const [readyDate25, setReadyDate25] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.readyDate25);
  const [followUpDate25, setFollowUpDate25] = useState(props.repetitiveWorkActionsProps.repetitiveWorkActions.followUpDate25);

  useEffect(() => {
    setPlannedActions21(props.repetitiveWorkActionsProps.repetitiveWorkActions.plannedActions21);
    setFollowUpDate21(props.repetitiveWorkActionsProps.repetitiveWorkActions.followUpDate21);
    setReadyDate21(props.repetitiveWorkActionsProps.repetitiveWorkActions.readyDate21);
    setByWhom21(props.repetitiveWorkActionsProps.repetitiveWorkActions.byWhom21);
    setDate21(props.repetitiveWorkActionsProps.repetitiveWorkActions.date21);
    setPlannedActions22(props.repetitiveWorkActionsProps.repetitiveWorkActions.plannedActions22);
    setFollowUpDate22(props.repetitiveWorkActionsProps.repetitiveWorkActions.followUpDate22);
    setReadyDate22(props.repetitiveWorkActionsProps.repetitiveWorkActions.readyDate22);
    setByWhom22(props.repetitiveWorkActionsProps.repetitiveWorkActions.byWhom22);
    setDate22(props.repetitiveWorkActionsProps.repetitiveWorkActions.date22);
    setPlannedActions23(props.repetitiveWorkActionsProps.repetitiveWorkActions.plannedActions23);
    setFollowUpDate23(props.repetitiveWorkActionsProps.repetitiveWorkActions.followUpDate23);
    setReadyDate23(props.repetitiveWorkActionsProps.repetitiveWorkActions.readyDate23);
    setByWhom23(props.repetitiveWorkActionsProps.repetitiveWorkActions.byWhom23);
    setDate23(props.repetitiveWorkActionsProps.repetitiveWorkActions.date23);
    setPlannedActions24(props.repetitiveWorkActionsProps.repetitiveWorkActions.plannedActions24);
    setFollowUpDate24(props.repetitiveWorkActionsProps.repetitiveWorkActions.followUpDate24);
    setReadyDate24(props.repetitiveWorkActionsProps.repetitiveWorkActions.readyDate24);
    setByWhom24(props.repetitiveWorkActionsProps.repetitiveWorkActions.byWhom24);
    setDate24(props.repetitiveWorkActionsProps.repetitiveWorkActions.date24);
    setPlannedActions25(props.repetitiveWorkActionsProps.repetitiveWorkActions.plannedActions25);
    setFollowUpDate25(props.repetitiveWorkActionsProps.repetitiveWorkActions.followUpDate25);
    setReadyDate25(props.repetitiveWorkActionsProps.repetitiveWorkActions.readyDate25);
    setByWhom25(props.repetitiveWorkActionsProps.repetitiveWorkActions.byWhom25);
    setDate25(props.repetitiveWorkActionsProps.repetitiveWorkActions.date25);

  }, [props.repetitiveWorkActionsProps.repetitiveWorkActions])

  return (
    <>
      {/* FRÅGA 2.1---------------------------------------------------------------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal21"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel21"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="exampleModalLabel21">
                2.1 Movements of the arm (upper and lower arm)
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
                  id="21"
                  className="form-control"
                  readOnly
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  disabled={true}
                  value={props.repetitiveWorkProps.repetitiveWork.q21_Comm}
                />
                <label htmlFor="21">Comment</label>
                <p style={{ "fontWeight": "bold" }}>Count: {props.repetitiveWorkProps.repetitiveWork.q21_Comm.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  className="form-control"
                  maxLength={SIZE}
                  type="text"
                  id="21"
                  value={plannedActions21}
                  onChange={(e) => {
                    setPlannedActions21(e.target.value);
                  }}
                />
                <label htmlFor="21">Planned actions</label>
                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions21.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  className="form-control"
                  maxLength={SIZE}
                  value={byWhom21}
                  onChange={(e) => {
                    setByWhom21(e.target.value);
                  }}
                />
                <label htmlFor="21">By whom</label>
                <p style={{ "fontWeight": "bold" }}>Count: {byWhom21.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={date21}
                  onChange={(e) => {
                    setDate21(e.target.value);
                  }}
                ></input>
                <label htmlFor="21">Date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={readyDate21}
                  onChange={(e) => {
                    setReadyDate21(e.target.value);
                  }}
                ></input>
                <label htmlFor="21">Ready date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={followUpDate21}
                  onChange={(e) => {
                    setFollowUpDate21(e.target.value);
                  }}
                ></input>
                <label htmlFor="21">Follow up date</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  setPlannedActions21(props.repetitiveWorkActionsProps.repetitiveWorkActions.plannedActions21);
                  setFollowUpDate21(props.repetitiveWorkActionsProps.repetitiveWorkActions.followUpDate21);
                  setReadyDate21(props.repetitiveWorkActionsProps.repetitiveWorkActions.readyDate21);
                  setByWhom21(props.repetitiveWorkActionsProps.repetitiveWorkActions.byWhom21);
                  setDate21(props.repetitiveWorkActionsProps.repetitiveWorkActions.date21);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  props.setPlannedActions21(plannedActions21);
                  props.setFollowUpDate21(followUpDate21);
                  props.setReadyDate21(readyDate21);
                  props.setByWhom21(byWhom21);
                  props.setDate21(date21);
                }}>
                Add Action
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FRÅGA 2.1---------------------------------------------------------------------------------------- */}

      {/* FRÅGA 2.2---------------------------------------------------------------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal22"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel22"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="exampleModalLabel22">
                2.2 Movements of the wrist
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
                  id="22"
                  className="form-control"
                  readOnly
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  disabled={true}
                  value={props.repetitiveWorkProps.repetitiveWork.q22_Comm}
                />
                <label htmlFor="22">Comment</label>
                <p style={{ "fontWeight": "bold" }}>Count: {props.repetitiveWorkProps.repetitiveWork.q22_Comm.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  className="form-control"
                  maxLength={SIZE}
                  type="text"
                  id="22"
                  value={plannedActions22}
                  onChange={(e) => {
                    setPlannedActions22(e.target.value);
                  }}
                />
                <label htmlFor="22">Planned actions</label>
                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions22.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  className="form-control"
                  value={byWhom22}
                  maxLength={SIZE}
                  onChange={(e) => {
                    setByWhom22(e.target.value);
                  }}
                />
                <label htmlFor="22">By whom</label>
                <p style={{ "fontWeight": "bold" }}>Count: {byWhom22.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={date22}
                  onChange={(e) => {
                    setDate22(e.target.value);
                  }}
                ></input>
                <label htmlFor="22">Date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={readyDate22}
                  onChange={(e) => {
                    setReadyDate22(e.target.value);
                  }}
                ></input>
                <label htmlFor="22">Ready date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={followUpDate22}
                  onChange={(e) => {
                    setFollowUpDate22(e.target.value);
                  }}
                ></input>
                <label htmlFor="22">Follow up date</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  setPlannedActions22(props.repetitiveWorkActionsProps.repetitiveWorkActions.plannedActions22);
                  setFollowUpDate22(props.repetitiveWorkActionsProps.repetitiveWorkActions.followUpDate22);
                  setReadyDate22(props.repetitiveWorkActionsProps.repetitiveWorkActions.readyDate22);
                  setByWhom22(props.repetitiveWorkActionsProps.repetitiveWorkActions.byWhom22);
                  setDate22(props.repetitiveWorkActionsProps.repetitiveWorkActions.date22);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  props.setPlannedActions22(plannedActions22);
                  props.setFollowUpDate22(followUpDate22);
                  props.setReadyDate22(readyDate22);
                  props.setByWhom22(byWhom22);
                  props.setDate22(date22);
                }}>
                Add Action
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FRÅGA 2.2---------------------------------------------------------------------------------------- */}

      {/* FRÅGA 2.3---------------------------------------------------------------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal23"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel23"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="exampleModalLabel23">
                2.3 Type of grip - frequency
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
                  id="23"
                  className="form-control"
                  readOnly
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  disabled={true}
                  value={props.repetitiveWorkProps.repetitiveWork.q23_Comm}
                />
                <label htmlFor="23">Comment</label>
                <p style={{ "fontWeight": "bold" }}>Count: {props.repetitiveWorkProps.repetitiveWork.q23_Comm.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  className="form-control"
                  maxLength={SIZE}
                  type="text"
                  id="23"
                  value={plannedActions23}
                  onChange={(e) => {
                    setPlannedActions23(e.target.value);
                  }}
                />
                <label htmlFor="23">Planned actions</label>
                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions23.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  maxLength={SIZE}
                  className="form-control"
                  value={byWhom23}
                  onChange={(e) => {
                    setByWhom23(e.target.value);
                  }}
                />
                <label htmlFor="23">By whom</label>
                <p style={{ "fontWeight": "bold" }}>Count: {byWhom23.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={date23}
                  onChange={(e) => {
                    setDate23(e.target.value);
                  }}
                ></input>
                <label htmlFor="23">Date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={readyDate23}
                  onChange={(e) => {
                    setReadyDate23(e.target.value);
                  }}
                ></input>
                <label htmlFor="23">Ready date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={followUpDate23}
                  onChange={(e) => {
                    setFollowUpDate23(e.target.value);
                  }}
                ></input>
                <label htmlFor="23">Follow up date</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  setPlannedActions23(props.repetitiveWorkActionsProps.repetitiveWorkActions.plannedActions23);
                  setFollowUpDate23(props.repetitiveWorkActionsProps.repetitiveWorkActions.followUpDate23);
                  setReadyDate23(props.repetitiveWorkActionsProps.repetitiveWorkActions.readyDate23);
                  setByWhom23(props.repetitiveWorkActionsProps.repetitiveWorkActions.byWhom23);
                  setDate23(props.repetitiveWorkActionsProps.repetitiveWorkActions.date23);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  props.setPlannedActions23(plannedActions23);
                  props.setFollowUpDate23(followUpDate23);
                  props.setReadyDate23(readyDate23);
                  props.setByWhom23(byWhom23);
                  props.setDate23(date23);
                }}>
                Add Action
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FRÅGA 2.3---------------------------------------------------------------------------------------- */}

      {/* FRÅGA 2.4---------------------------------------------------------------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal24"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel24"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="exampleModalLabel24">
                2.4 Shorter recovery/variation during work
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
                  id="24"
                  className="form-control"
                  readOnly
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  disabled={true}
                  value={props.repetitiveWorkProps.repetitiveWork.q24_Comm}
                />
                <label htmlFor="24">Comment</label>
                <p style={{ "fontWeight": "bold" }}>Count: {props.repetitiveWorkProps.repetitiveWork.q24_Comm.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  className="form-control"
                  maxLength={SIZE}
                  type="text"
                  id="24"
                  value={plannedActions24}
                  onChange={(e) => {
                    setPlannedActions24(e.target.value);
                  }}
                />
                <label htmlFor="24">Planned actions</label>
                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions24.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  maxLength={SIZE}
                  className="form-control"
                  value={byWhom24}
                  onChange={(e) => {
                    setByWhom24(e.target.value);
                  }}
                />
                <label htmlFor="24">By whom</label>
                <p style={{ "fontWeight": "bold" }}>Count: {byWhom24.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={date24}
                  onChange={(e) => {
                    setDate24(e.target.value);
                  }}
                ></input>
                <label htmlFor="24">Date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={readyDate24}
                  onChange={(e) => {
                    setReadyDate24(e.target.value);
                  }}
                ></input>
                <label htmlFor="24">Ready date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={followUpDate24}
                  onChange={(e) => {
                    setFollowUpDate24(e.target.value);
                  }}
                ></input>
                <label htmlFor="24">Follow up date</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  setPlannedActions24(props.repetitiveWorkActionsProps.repetitiveWorkActions.plannedActions24);
                  setFollowUpDate24(props.repetitiveWorkActionsProps.repetitiveWorkActions.followUpDate24);
                  setReadyDate24(props.repetitiveWorkActionsProps.repetitiveWorkActions.readyDate24);
                  setByWhom24(props.repetitiveWorkActionsProps.repetitiveWorkActions.byWhom24);
                  setDate24(props.repetitiveWorkActionsProps.repetitiveWorkActions.date24);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  props.setPlannedActions24(plannedActions24);
                  props.setFollowUpDate24(followUpDate24);
                  props.setReadyDate24(readyDate24);
                  props.setByWhom24(byWhom24);
                  props.setDate24(date24);
                }}>
                Add Action
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FRÅGA 2.4---------------------------------------------------------------------------------------- */}

      {/* FRÅGA 2.5---------------------------------------------------------------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal25"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel25"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="exampleModalLabel25">
                2.5 Longer recovery/variation during work
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
                  id="25"
                  className="form-control"
                  readOnly
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  disabled={true}
                  value={props.repetitiveWorkProps.repetitiveWork.q25_Comm}
                />
                <label htmlFor="25">Comment</label>
                <p style={{ "fontWeight": "bold" }}>Count: {props.repetitiveWorkProps.repetitiveWork.q25_Comm.length} / 65</p>
              </div>


              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  className="form-control"
                  type="text"
                  maxLength={SIZE}
                  id="25"
                  value={plannedActions25}
                  onChange={(e) => {
                    setPlannedActions25(e.target.value);
                  }}
                />
                <label htmlFor="25">Planned actions</label>
                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions25.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  maxLength={SIZE}
                  className="form-control"
                  value={byWhom25}
                  onChange={(e) => {
                    setByWhom25(e.target.value);
                  }}
                />
                <label htmlFor="25">By whom</label>
                <p style={{ "fontWeight": "bold" }}>Count: {byWhom25.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={date25}
                  onChange={(e) => {
                    setDate25(e.target.value);
                  }}
                ></input>
                <label htmlFor="25">Date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={readyDate25}
                  onChange={(e) => {
                    setReadyDate25(e.target.value);
                  }}
                ></input>
                <label htmlFor="25">Ready date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={followUpDate25}
                  onChange={(e) => {
                    setFollowUpDate25(e.target.value);
                  }}
                ></input>
                <label htmlFor="25">Follow up date</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  setPlannedActions25(props.repetitiveWorkActionsProps.repetitiveWorkActions.plannedActions25);
                  setFollowUpDate25(props.repetitiveWorkActionsProps.repetitiveWorkActions.followUpDate25);
                  setReadyDate25(props.repetitiveWorkActionsProps.repetitiveWorkActions.readyDate25);
                  setByWhom25(props.repetitiveWorkActionsProps.repetitiveWorkActions.byWhom25);
                  setDate25(props.repetitiveWorkActionsProps.repetitiveWorkActions.date25);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  props.setPlannedActions25(plannedActions25);
                  props.setFollowUpDate25(followUpDate25);
                  props.setReadyDate25(readyDate25);
                  props.setByWhom25(byWhom25);
                  props.setDate25(date25);
                }}>
                Add Action
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FRÅGA 2.5---------------------------------------------------------------------------------------- */}
    </>
  );
};

export default connect(mapStateToProps, {
  setRepetitiveWorkActions,
  setRepetitiveWorkActionsId,
  setByWhom21,
  setByWhom22,
  setByWhom23,
  setByWhom24,
  setByWhom25,
  setDate21,
  setDate22,
  setDate23,
  setDate24,
  setDate25,
  setFollowUpDate21,
  setFollowUpDate22,
  setFollowUpDate23,
  setFollowUpDate24,
  setFollowUpDate25,
  setPlannedActions21,
  setPlannedActions22,
  setPlannedActions23,
  setPlannedActions24,
  setPlannedActions25,
  setReadyDate21,
  setReadyDate22,
  setReadyDate23,
  setReadyDate24,
  setReadyDate25,
})(RepetitiveWorkModal);
