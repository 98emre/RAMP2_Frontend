import { React, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  setPhysicalDiscomfortActions,
  setPhysicalDiscomfortActionsId,
  setByWhom71,
  setDate71,
  setFollowUpDate71,
  setPlannedActions71,
  setReadyDate71,
} from "../../../../actions/actionPlanActions/physicalDiscomfortPlanActions";

const mapStateToProps = (state) => ({
  physicalDiscomfortActionsProps: state.physicalDiscomfortActionsState,
  physicalDiscomfortProps: state.physicalDiscomfortState,
});

const PerceivedPhysicalDiscomfortModal = (props) => {

  const [plannedActions71, setPlannedActions71] = useState(props.physicalDiscomfortActionsProps.physicalDiscomfortActions.plannedActions71);
  const [byWhom71, setByWhom71] = useState(props.physicalDiscomfortActionsProps.physicalDiscomfortActions.byWhom71);
  const [date71, setDate71] = useState(props.physicalDiscomfortActionsProps.physicalDiscomfortActions.date71);
  const [readyDate71, setReadyDate71] = useState(props.physicalDiscomfortActionsProps.physicalDiscomfortActions.readyDate71);
  const [followUpDate71, setFollowUpDate71] = useState(props.physicalDiscomfortActionsProps.physicalDiscomfortActions.followUpDate71);

  useEffect(() => {
    setPlannedActions71(props.physicalDiscomfortActionsProps.physicalDiscomfortActions.plannedActions71);
    setByWhom71(props.physicalDiscomfortActionsProps.physicalDiscomfortActions.byWhom71);
    setDate71(props.physicalDiscomfortActionsProps.physicalDiscomfortActions.date71);
    setFollowUpDate71(props.physicalDiscomfortActionsProps.physicalDiscomfortActions.followUpDate71);
    setReadyDate71(props.physicalDiscomfortActionsProps.physicalDiscomfortActions.readyDate71);
  }, [props.physicalDiscomfortActionsProps.physicalDiscomfortActions])

  return (
    <>
      {/* FRÅGA 7.1---------------------------------------------------------------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal71"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel71"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="exampleModalLabel71">
                7.1 Perceived physical discomfort
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
                  id="71"
                  className="form-control"
                  readOnly
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  disabled={true}
                  value={props.physicalDiscomfortProps.physicalDiscomfort.q71_Comm}
                />
                <label htmlFor="71">Comment</label>
                <p style={{ "fontWeight": "bold" }}>Count:{props.physicalDiscomfortProps.physicalDiscomfort.q71_Comm.length}  / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  className="form-control"
                  placeholder="Leave a comment here"
                  type="text"
                  id="71"
                  value={plannedActions71}
                  onChange={(e) => {
                    setPlannedActions71(e.target.value);
                  }}
                />
                <label htmlFor="71">Planned actions</label>
                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions71.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  className="form-control"
                  value={byWhom71}
                  onChange={(e) => {
                    setByWhom71(e.target.value);
                  }}
                />
                <label htmlFor="71">By whom</label>
                <p style={{ "fontWeight": "bold" }}>Count: {byWhom71.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <input
                  type="date"
                  className="form-control"
                  value={date71}
                  onChange={(e) => {
                    setDate71(e.target.value);
                  }}
                ></input>
                <label htmlFor="71">Date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  className="form-control"
                  value={readyDate71}
                  onChange={(e) => {
                    setReadyDate71(e.target.value);
                  }}
                ></input>
                <label htmlFor="71">Ready date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  className="form-control"
                  value={followUpDate71}
                  onChange={(e) => {
                    setFollowUpDate71(e.target.value);
                  }}
                ></input>
                <label htmlFor="71">Follow up date</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  setPlannedActions71(props.physicalDiscomfortActionsProps.physicalDiscomfortActions.plannedActions71);
                  setFollowUpDate71(props.physicalDiscomfortActionsProps.physicalDiscomfortActions.followUpDate71);
                  setReadyDate71(props.physicalDiscomfortActionsProps.physicalDiscomfortActions.readyDate71);
                  setByWhom71(props.physicalDiscomfortActionsProps.physicalDiscomfortActions.byWhom71);
                  setDate71(props.physicalDiscomfortActionsProps.physicalDiscomfortActions.date71);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  props.setPlannedActions71(plannedActions71);
                  props.setFollowUpDate71(followUpDate71);
                  props.setReadyDate71(readyDate71);
                  props.setByWhom71(byWhom71);
                  props.setDate71(date71);
                }}>
                Add Action
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FRÅGA 7.1---------------------------------------------------------------------------------------- */}
    </>
  );
};

export default connect(mapStateToProps, {
  setPhysicalDiscomfortActions,
  setPhysicalDiscomfortActionsId,
  setByWhom71,
  setDate71,
  setFollowUpDate71,
  setPlannedActions71,
  setReadyDate71,
})(PerceivedPhysicalDiscomfortModal);
