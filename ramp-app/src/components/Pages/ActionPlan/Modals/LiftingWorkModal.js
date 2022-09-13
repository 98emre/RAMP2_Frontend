import { React, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  setLiftingWorkActions,
  setLiftingWorkActionsId,
  setByWhom31,
  setByWhom32,
  setDate31,
  setDate32,
  setFollowUpDate31,
  setFollowUpDate32,
  setPlannedActions31,
  setPlannedActions32,
  setReadyDate31,
  setReadyDate32,
} from "../../../../actions/actionPlanActions/liftingWorkPlanActions";

const mapStateToProps = (state) => ({
  liftingWorkActionsProps: state.liftingWorkActionsState,
  liftingWorkProps: state.liftingWorkState,
});

const LiftingWorkModal = (props) => {
  const SIZE = 65;
  const DATE_SIZE = 10;

  //3.1
  const [plannedActions31, setPlannedActions31] = useState(props.liftingWorkActionsProps.liftingWorkActions.plannedActions31);
  const [byWhom31, setByWhom31] = useState(props.liftingWorkActionsProps.liftingWorkActions.byWhom31);
  const [date31, setDate31] = useState(props.liftingWorkActionsProps.liftingWorkActions.date31);
  const [readyDate31, setReadyDate31] = useState(props.liftingWorkActionsProps.liftingWorkActions.readyDate31);
  const [followUpDate31, setFollowUpDate31] = useState(props.liftingWorkActionsProps.liftingWorkActions.followUpDate31);
  //3.2
  const [plannedActions32, setPlannedActions32] = useState(props.liftingWorkActionsProps.liftingWorkActions.plannedActions32);
  const [byWhom32, setByWhom32] = useState(props.liftingWorkActionsProps.liftingWorkActions.byWhom32);
  const [date32, setDate32] = useState(props.liftingWorkActionsProps.liftingWorkActions.date32);
  const [readyDate32, setReadyDate32] = useState(props.liftingWorkActionsProps.liftingWorkActions.readyDate32);
  const [followUpDate32, setFollowUpDate32] = useState(props.liftingWorkActionsProps.liftingWorkActions.followUpDate32);

  useEffect(() => {
    setPlannedActions31(props.liftingWorkActionsProps.liftingWorkActions.plannedActions31);
    setByWhom31(props.liftingWorkActionsProps.liftingWorkActions.byWhom31);
    setDate31(props.liftingWorkActionsProps.liftingWorkActions.date31);
    setReadyDate31(props.liftingWorkActionsProps.liftingWorkActions.readyDate31);
    setFollowUpDate31(props.liftingWorkActionsProps.liftingWorkActions.followUpDate31);
    setPlannedActions32(props.liftingWorkActionsProps.liftingWorkActions.plannedActions32);
    setByWhom32(props.liftingWorkActionsProps.liftingWorkActions.byWhom32);
    setDate32(props.liftingWorkActionsProps.liftingWorkActions.date32);
    setReadyDate32(props.liftingWorkActionsProps.liftingWorkActions.readyDate32);
    setFollowUpDate32(props.liftingWorkActionsProps.liftingWorkActions.followUpDate32);
  }, [props.liftingWorkActionsProps.liftingWorkActions])

  return (
    <>
      {/* FRÅGA 3.1---------------------------------------------------------------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal31"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel31"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="exampleModalLabel31">
                3.1 Lifting work (average case)
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
                  id="31"
                  className="form-control"
                  readOnly
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  disabled={true}
                  value={props.liftingWorkProps.liftingWork.q31_averageComm}
                />
                <label htmlFor="31">Comment</label>
                <p style={{ "fontWeight": "bold" }}>Count: {props.liftingWorkProps.liftingWork.q31_averageComm.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  className="form-control"
                  maxLength={SIZE}
                  type="text"
                  id="31"
                  value={plannedActions31}
                  onChange={(e) => {
                    setPlannedActions31(e.target.value);
                  }}
                />
                <label htmlFor="31">Planned actions</label>
                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions31.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  maxLength={SIZE}
                  className="form-control"
                  value={byWhom31}
                  onChange={(e) => {
                    setByWhom31(e.target.value);
                  }}
                />
                <label htmlFor="31">By whom</label>
                <p style={{ "fontWeight": "bold" }}>Count: {byWhom31.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={date31}
                  onChange={(e) => {
                    setDate31(e.target.value);
                  }}
                ></input>
                <label htmlFor="31">Date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={readyDate31}
                  onChange={(e) => {
                    setReadyDate31(e.target.value);
                  }}
                ></input>
                <label htmlFor="31">Ready date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={followUpDate31}
                  onChange={(e) => {
                    setFollowUpDate31(e.target.value);
                  }}
                />
                <label htmlFor="31">Follow up date</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  setPlannedActions31(props.liftingWorkActionsProps.liftingWorkActions.plannedActions31);
                  setFollowUpDate31(props.liftingWorkActionsProps.liftingWorkActions.followUpDate31);
                  setReadyDate31(props.liftingWorkActionsProps.liftingWorkActions.readyDate31);
                  setByWhom31(props.liftingWorkActionsProps.liftingWorkActions.byWhom31);
                  setDate31(props.liftingWorkActionsProps.liftingWorkActions.date31);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  props.setPlannedActions31(plannedActions31);
                  props.setFollowUpDate31(followUpDate31);
                  props.setReadyDate31(readyDate31);
                  props.setByWhom31(byWhom31);
                  props.setDate31(date31);
                }}>
                Add Action
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FRÅGA 3.1---------------------------------------------------------------------------------------- */}

      {/* FRÅGA 3.2---------------------------------------------------------------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal32"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel32"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="exampleModalLabel32">
                3.2 Lifting work(worst case)
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
                  id="32"
                  className="form-control"
                  readOnly
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  disabled={true}
                  value={props.liftingWorkProps.liftingWork.q31_worstComm}
                />
                <label htmlFor="32">Comment</label>
                <p style={{ "fontWeight": "bold" }}>Count: {props.liftingWorkProps.liftingWork.q31_worstComm.length} / 65</p>
              </div>


              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  className="form-control"
                  maxLength={SIZE}
                  type="text"
                  id="32"
                  value={plannedActions32}
                  onChange={(e) => {
                    setPlannedActions32(e.target.value);
                  }}
                />
                <label htmlFor="32">Planned actions</label>
                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions32.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  className="form-control"
                  maxLength={SIZE}
                  value={byWhom32}
                  onChange={(e) => {
                    setByWhom32(e.target.value);
                  }}
                />
                <label htmlFor="32">By whom</label>
                <p style={{ "fontWeight": "bold" }}>Count: {byWhom32.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={date32}
                  onChange={(e) => {
                    setDate32(e.target.value);
                  }}
                ></input>
                <label htmlFor="32">Date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={readyDate32}
                  onChange={(e) => {
                    setReadyDate32(e.target.value);
                  }}
                ></input>
                <label htmlFor="32">Ready date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={followUpDate32}
                  onChange={(e) => {
                    setFollowUpDate32(e.target.value);
                  }}
                ></input>
                <label htmlFor="32">Follow up date</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  setPlannedActions32(props.liftingWorkActionsProps.liftingWorkActions.plannedActions32);
                  setFollowUpDate32(props.liftingWorkActionsProps.liftingWorkActions.followUpDate32);
                  setReadyDate32(props.liftingWorkActionsProps.liftingWorkActions.readyDate32);
                  setByWhom32(props.liftingWorkActionsProps.liftingWorkActions.byWhom32);
                  setDate32(props.liftingWorkActionsProps.liftingWorkActions.date32);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  props.setPlannedActions32(plannedActions32);
                  props.setFollowUpDate32(followUpDate32);
                  props.setReadyDate32(readyDate32);
                  props.setByWhom32(byWhom32);
                  props.setDate32(date32);
                }}>
                Add Action
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FRÅGA 3.2---------------------------------------------------------------------------------------- */}
    </>
  );
};

export default connect(mapStateToProps, {
  setLiftingWorkActions,
  setLiftingWorkActionsId,
  setByWhom31,
  setByWhom32,
  setDate31,
  setDate32,
  setFollowUpDate31,
  setFollowUpDate32,
  setPlannedActions31,
  setPlannedActions32,
  setReadyDate31,
  setReadyDate32,
})(LiftingWorkModal);
