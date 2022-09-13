import { React } from 'react'
import { connect } from 'react-redux';
import ErrorFormNameDoesntExist from "../Checklist/ErrorHandler/ErrorFormNameDoesntExist";

import {
    setId,
    setChecklistName,
    GetChecklistById,
    setChecklistFetchError,
} from "../../../actions/riskAreaActions/checklistActions";

import { setInputData } from "../../../actions/riskAreaActions/inputDataActions";
import { setPosture } from "../../../actions/riskAreaActions/postureActions";
import { setRepetitiveWork } from "../../../actions/riskAreaActions/repetitiveWorkActions";
import { setInfluencingFactors } from "../../../actions/riskAreaActions/influencingFactorsActions";
import { setPhysicallyStrenuousWork } from "../../../actions/riskAreaActions/physicallyStrenuousWorkActions";
import { setPhysicalDiscomfort } from "../../../actions/riskAreaActions/physicalDiscomfortActions";
import { setLiftingWork } from "../../../actions/riskAreaActions/liftingWorkActions";
import { setPushingAndPulling } from "../../../actions/riskAreaActions/pushingAndPullingActions";
import { setOtherComment } from "../../../actions/riskAreaActions/otherCommentActions";

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


const FindOldAssessmetSaveNew = (props) => {
    return (
        <div>
            <div
                className="modal fade"
                id="FetchNewFromOldAssessment"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                role="dialog"
                data-backdrop="static"
                data-keyboard="false"
            >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form
                                className="was-validated"
                                style={{ textAlign: "center" }}
                                noValidate
                            >
                                <h2 className="text-primary">Create new with start from old assessment</h2>
                                <div className="col">
                                    <div className="form-group col">
                                        <label className="badge text-dark">
                                            Assessment name
                                        </label>
                                        <input
                                            maxLength={65}
                                            placeholder="Enter a name"
                                            type="getName"
                                            className="form-control"
                                            required
                                            id="getName"
                                            value={props.checklistProps.id_name}
                                            onChange={(e) => {
                                                props.setChecklistName(e.target.value);
                                                props.setStatusIdName2(false);
                                            }}
                                        />
                                        <br />
                                    </div>
                                </div>
                            </form>
                            <div id="error2">
                                {props.statusIdName2 && (
                                    <ErrorFormNameDoesntExist
                                        status={props.erroHandlerIdName2}
                                        check={props.errorProps.error_name}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger "
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={(e) => {
                                    e.preventDefault();
                                    //should reset first maybe?
                                    props.GetChecklistById(
                                        props.checklistProps.id_name,
                                        props.userProps.user.id,
                                        props.userProps.token
                                    );
                                    props.setStatusIdName2(true);
                                    if (props.errorProps.error_name === false) {
                                        props.SetChoicePressed(true);
                                        props.SetPressed(true);
                                    }
                                }}
                            >
                                Get
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

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
})(FindOldAssessmetSaveNew);