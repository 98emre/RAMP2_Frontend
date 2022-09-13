import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import InputData from '../InputData/InputData';
import React from "react";
import { connect } from "react-redux"
import Posture from '../RiskAreas/Posture';
import RepetitiveWork from '../RiskAreas/RepetitiveWork';
import LiftingWork from '../RiskAreas/LiftingWork';
import PushingAndPullingWork from '../RiskAreas/PushingAndPullingWork';
import InfluencingFactors from '../RiskAreas/InfluencingFactors';
import PhysicallyStrenousWork from '../RiskAreas/PhysicallyStrenousWork';
import PerceivedPhysicalDiscomfort from '../RiskAreas/PerceivedPhysicalDiscomfort';

import PostureModal from '../Modals/PostureModal';
import RepetitiveWorkModal from '../Modals/RepetitiveWorkModal';
import LiftingWorkModal from '../Modals/LiftingWorkModal';
import PushingAndPullingWorkModal from '../Modals/PushingAndPullingWorkModal';
import InfluencingFactorsModal from '../Modals/InfluencingFactorsModal';
import PhysicallyStrenousWorkModal from '../Modals/PhysicallyStrenousWorkModal';
import PerceivedPhysicalDiscomfortModal from '../Modals/PerceivedPhysicalDiscomfortModal';
import OtherComment from "../RiskAreas/OtherComment"
import ScrollButton from "../../../ScrollButton/ScrollButton"
import SavemodalActionPlan from "../Modals/SaveModalActionPlan"
const mapStateToProps = (state) => ({
    postureProps: state.postureState,
    otherCommentProps: state.otherCommentState
});

const SectionsActionPlanTable = (props, lightBg) => {
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'} >
                <div className='container'>
                    <div className="row">
                        <div className='col'> <InputData /> </div>
                    </div>
                    <br />
                    <div className='row'>
                        <table className='table table-responsive'>
                            <thead>
                                <tr style={{ fontSize: '18px' }} className='bg-dark text-white'>
                                    <th scope="col">Risk factor</th>
                                    <th scope="col">Assessment</th>
                                    <th scope="col">Score</th>
                                    <th scope="col">User comments</th>
                                    <th scope="col">Planned actions</th>
                                    <th scope="col">When</th>
                                    <th scope="col">By whom</th>
                                    <th scope="col">Ready (Date)</th>
                                    <th scope="col">Follow-Up</th>
                                    <th scope="col"> </th>

                                </tr>
                            </thead>
                            <tbody>
                                <Posture />
                                <RepetitiveWork />
                                <LiftingWork />
                                <PushingAndPullingWork />
                                <InfluencingFactors />
                                <PhysicallyStrenousWork />
                                <PerceivedPhysicalDiscomfort />
                                <OtherComment />
                            </tbody>
                        </table>
                        <th>
                            <textarea
                                hidden={!props.otherCommentProps.otherComment.text}
                                className="form-control"
                                readOnly
                                style={{ height: "200px", "resize": "none", "borderRadius": "1.5%", "background": "white", "border": "1px solid black" }}
                                disabled={true}
                                type="text"
                                value={props.otherCommentProps.otherComment.text}
                            />
                            <p>Count: {props.otherCommentProps.otherComment.text.length} / 2000</p>
                        </th>
                    </div>
                    <PostureModal />
                    <RepetitiveWorkModal />
                    <LiftingWorkModal />
                    <PushingAndPullingWorkModal />
                    <InfluencingFactorsModal />
                    <PhysicallyStrenousWorkModal />
                    <PerceivedPhysicalDiscomfortModal />
                    <ScrollButton />
                    <button id="btn_fixed" type="button" className="button btnSave btn-primary" data-bs-dismiss="modal" data-bs-toggle='modal' data-bs-target="#ActionPlanSave" >
                        Save
                    </button>
                    <SavemodalActionPlan />
                </div>
            </div>
        </>
    )
};
export default connect(mapStateToProps)(SectionsActionPlanTable);
