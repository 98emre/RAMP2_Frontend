import { React, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  setPhysicallyStrenuousWorkActions,
  setPhysicallyStrenuousWorkActionsId,
  setByWhom61,
  setDate61,
  setFollowUpDate61,
  setPlannedActions61,
  setReadyDate61,
} from "../../../../actions/actionPlanActions/physicallyStrenuousWorkPlanActions";

const mapStateToProps = (state) => ({
  physicallyStrenuousWorkActionsProps: state.physicallyStrenuousWorkActionsState,
  physicallyStrenousWorkProps: state.physicallyStrenuousWorkState
});

const PhysicallyStrenousWorkModal = (props) => {

  const SIZE = 65;
  const DATE_SIZE = 10;

  const [plannedActions61, setPlannedActions61] = useState(props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions.plannedActions61);
  const [byWhom61, setByWhom61] = useState(props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions.byWhom61);
  const [date61, setDate61] = useState(props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions.date61);
  const [readyDate61, setReadyDate61] = useState(props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions.readyDate61);
  const [followUpDate61, setFollowUpDate61] = useState(props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions.followUpDate61);

  useEffect(() => {
    setPlannedActions61(props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions.plannedActions61);
    setByWhom61(props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions.byWhom61);
    setDate61(props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions.date61);
    setReadyDate61(props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions.readyDate61);
    setFollowUpDate61(props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions.followUpDate61);
  }, [props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions])

  return (
    <>
      {/* FRÅGA 6.1---------------------------------------------------------------------------------------- */}
      <div
        className="modal fade"
        id="exampleModal61"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel61"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="exampleModalLabel61">
                6.1 Documented reports on physically strenuous tasks
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
                  id="61"
                  className="form-control"
                  readOnly
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  disabled={true}
                  value={props.physicallyStrenousWorkProps.physicallyStrenuousWork.q61_Comm}
                />
                <label htmlFor="61">Comment</label>
                <p style={{ "fontWeight": "bold" }}>Count:{props.physicallyStrenousWorkProps.physicallyStrenuousWork.q61_Comm.length}  / 65</p>
              </div>
              
              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  className="form-control"
                  maxLength={SIZE}
                  type="text"
                  id="61"
                  value={plannedActions61}
                  onChange={(e) => {
                    setPlannedActions61(e.target.value);
                  }}
                />
                <label htmlFor="61">Planned actions</label>
                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions61.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <textarea
                  style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                  type="text"
                  maxLength={SIZE}
                  className="form-control"
                  value={byWhom61}
                  onChange={(e) => {
                    setByWhom61(e.target.value);
                  }}
                />
                <label htmlFor="61">By whom</label>
                <p style={{ "fontWeight": "bold" }}>Count: {byWhom61.length} / 65</p>
              </div>

              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={date61}
                  onChange={(e) => {
                    setDate61(e.target.value);
                  }}
                ></input>
                <label htmlFor="61">Date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={readyDate61}
                  onChange={(e) => {
                    setReadyDate61(e.target.value);
                  }}
                ></input>
                <label htmlFor="61">Ready date</label>
              </div>
              <div className="form-floating text-dark">
                <input
                  type="date"
                  maxLength={DATE_SIZE}
                  className="form-control"
                  value={followUpDate61}
                  onChange={(e) => {
                    setFollowUpDate61(e.target.value);
                  }}
                ></input>
                <label htmlFor="61">Follow up date</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  setPlannedActions61(props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions.plannedActions61);
                  setFollowUpDate61(props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions.followUpDate61);
                  setReadyDate61(props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions.readyDate61);
                  setByWhom61(props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions.byWhom61);
                  setDate61(props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions.date61);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  props.setPlannedActions61(plannedActions61);
                  props.setFollowUpDate61(followUpDate61);
                  props.setReadyDate61(readyDate61);
                  props.setByWhom61(byWhom61);
                  props.setDate61(date61);
                }}>
                Add Action
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FRÅGA 6.1---------------------------------------------------------------------------------------- */}
    </>
  );
};

export default connect(mapStateToProps, {
  setPhysicallyStrenuousWorkActions,
  setPhysicallyStrenuousWorkActionsId,
  setByWhom61,
  setDate61,
  setFollowUpDate61,
  setPlannedActions61,
  setReadyDate61,
})(PhysicallyStrenousWorkModal);
