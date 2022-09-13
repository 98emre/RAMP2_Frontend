import { React, useState } from 'react'
import { connect } from "react-redux";
import {
    setInfluencingFactorsActions,
    setInfluencingFactorsActionsId,
    setByWhom51A,
    setByWhom51B,
    setByWhom51C,
    setByWhom51D,
    setByWhom51E,
    setByWhom51F,
    setByWhom52A,
    setByWhom52B,
    setByWhom52C,
    setByWhom52D,
    setByWhom52E,
    setByWhom52F,
    setByWhom52G,
    setByWhom52H,
    setByWhom53A,
    setByWhom53B,
    setByWhom53C,
    setByWhom53D,
    setDate51A,
    setDate51B,
    setDate51C,
    setDate51D,
    setDate51E,
    setDate51F,
    setDate52A,
    setDate52B,
    setDate52C,
    setDate52D,
    setDate52E,
    setDate52F,
    setDate52G,
    setDate52H,
    setDate53A,
    setDate53B,
    setDate53C,
    setDate53D,
    setFollowUpDate51A,
    setFollowUpDate51B,
    setFollowUpDate51C,
    setFollowUpDate51D,
    setFollowUpDate51E,
    setFollowUpDate51F,
    setFollowUpDate52A,
    setFollowUpDate52B,
    setFollowUpDate52C,
    setFollowUpDate52D,
    setFollowUpDate52E,
    setFollowUpDate52F,
    setFollowUpDate52H,
    setFollowUpDate52G,
    setFollowUpDate53A,
    setFollowUpDate53B,
    setFollowUpDate53C,
    setFollowUpDate53D,
    setPlannedActions51A,
    setPlannedActions51B,
    setPlannedActions51C,
    setPlannedActions51D,
    setPlannedActions51E,
    setPlannedActions51F,
    setPlannedActions52A,
    setPlannedActions52B,
    setPlannedActions52C,
    setPlannedActions52D,
    setPlannedActions52E,
    setPlannedActions52F,
    setPlannedActions52G,
    setPlannedActions52H,
    setPlannedActions53A,
    setPlannedActions53B,
    setPlannedActions53C,
    setPlannedActions53D,
    setReadyDate51A,
    setReadyDate51B,
    setReadyDate51C,
    setReadyDate51D,
    setReadyDate51E,
    setReadyDate51F,
    setReadyDate52A,
    setReadyDate52B,
    setReadyDate52C,
    setReadyDate52D,
    setReadyDate52E,
    setReadyDate52F,
    setReadyDate52G,
    setReadyDate52H,
    setReadyDate53A,
    setReadyDate53B,
    setReadyDate53C,
    setReadyDate53D,
} from "../../../../actions/actionPlanActions/influencingFactorsPlanActions";


const mapStateToProps = (state) => ({
    InfluencingFactorsActionsProps: state.influencingFactorsActionsState,
    influencingFactorsProps: state.influencingFactorsState,
});

const InfluencingFactorsModal = (props) => {

    const SIZE = 65;
    const DATE_SIZE = 10;

    //5.1a+b
    const [plannedActions51b, setPlannedActions51b] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions51b);
    const [followUpDate51b, setFollowUpDate51b] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate51b);
    const [readyDate51b, setReadyDate51b] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate51b);
    const [byWhom51b, setByWhom51b] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom51b);
    const [date51b, setDate51b] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.date51b);
    //5.1c
    const [plannedActions51c, setPlannedActions51c] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions51c);
    const [followUpDate51c, setFollowUpDate51c] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate51c);
    const [readyDate51c, setReadyDate51c] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate51c);
    const [byWhom51c, setByWhom51c] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom51c);
    const [date51c, setDate51c] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.date51c);
    //5.1d
    const [plannedActions51d, setPlannedActions51d] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions51d);
    const [followUpDate51d, setFollowUpDate51d] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate51d);
    const [readyDate51d, setReadyDate51d] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate51d);
    const [byWhom51d, setByWhom51d] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom51d);
    const [date51d, setDate51d] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.date51d);
    //5.1e
    const [plannedActions51e, setPlannedActions51e] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions51e);
    const [followUpDate51e, setFollowUpDate51e] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate51e);
    const [readyDate51e, setReadyDate51e] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate51e);
    const [byWhom51e, setByWhom51e] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom51e);
    const [date51e, setDate51e] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.date51e);
    //5.1f
    const [plannedActions51f, setPlannedActions51f] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions51f);
    const [followUpDate51f, setFollowUpDate51f] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate51f);
    const [readyDate51f, setReadyDate51f] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate51f);
    const [byWhom51f, setByWhom51f] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom51f);
    const [date51f, setDate51f] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.date51f);
    //5.2a+b
    const [plannedActions52b, setPlannedActions52b] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52b);
    const [followUpDate52b, setFollowUpDate52b] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52b);
    const [readyDate52b, setReadyDate52b] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52b);
    const [byWhom52b, setByWhom52b] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52b);
    const [date52b, setDate52b] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.date52b);
    //5.2c
    const [plannedActions52c, setPlannedActions52c] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52c);
    const [followUpDate52c, setFollowUpDate52c] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52c);
    const [readyDate52c, setReadyDate52c] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52c);
    const [byWhom52c, setByWhom52c] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52c);
    const [date52c, setDate52c] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.date52c);
    //5.2d
    const [plannedActions52d, setPlannedActions52d] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52d);
    const [followUpDate52d, setFollowUpDate52d] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52d);
    const [readyDate52d, setReadyDate52d] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52d);
    const [byWhom52d, setByWhom52d] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52d);
    const [date52d, setDate52d] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.date52d);
    //5.2e
    const [plannedActions52e, setPlannedActions52e] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52e);
    const [followUpDate52e, setFollowUpDate52e] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52e);
    const [readyDate52e, setReadyDate52e] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52e);
    const [byWhom52e, setByWhom52e] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52e);
    const [date52e, setDate52e] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.date52e);
    //5.2f
    const [plannedActions52f, setPlannedActions52f] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52f);
    const [followUpDate52f, setFollowUpDate52f] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52f);
    const [readyDate52f, setReadyDate52f] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52f);
    const [byWhom52f, setByWhom52f] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52f);
    const [date52f, setDate52f] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.date52f);
    //5.2g
    const [plannedActions52g, setPlannedActions52g] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52g);
    const [followUpDate52g, setFollowUpDate52g] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52g);
    const [readyDate52g, setReadyDate52g] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52g);
    const [byWhom52g, setByWhom52g] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52g);
    const [date52g, setDate52g] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.date52g);
    //5.2h
    const [plannedActions52h, setPlannedActions52h] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52h);
    const [followUpDate52h, setFollowUpDate52h] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52h);
    const [readyDate52h, setReadyDate52h] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52h);
    const [byWhom52h, setByWhom52h] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52h);
    const [date52h, setDate52h] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.date52h);
    //5.3a
    const [plannedActions53a, setPlannedActions53a] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions53a);
    const [followUpDate53a, setFollowUpDate53a] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate53a);
    const [readyDate53a, setReadyDate53a] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate53a);
    const [byWhom53a, setByWhom53a] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom53a);
    const [date53a, setDate53a] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.date53a);
    //5.3b
    const [plannedActions53b, setPlannedActions53b] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions53b);
    const [followUpDate53b, setFollowUpDate53b] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate53b);
    const [readyDate53b, setReadyDate53b] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate53b);
    const [byWhom53b, setByWhom53b] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom53b);
    const [date53b, setDate53b] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.date53b);
    //5.3c
    const [plannedActions53c, setPlannedActions53c] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions53c);
    const [followUpDate53c, setFollowUpDate53c] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate53c);
    const [readyDate53c, setReadyDate53c] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate53c);
    const [byWhom53c, setByWhom53c] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom53c);
    const [date53c, setDate53c] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.date53c);
    //5.3d
    const [plannedActions53d, setPlannedActions53d] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions53d);
    const [followUpDate53d, setFollowUpDate53d] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate53d);
    const [readyDate53d, setReadyDate53d] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate53d);
    const [byWhom53d, setByWhom53d] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom53d);
    const [date53d, setDate53d] = useState(props.InfluencingFactorsActionsProps.influencingFactorsActions.date53d);

    useState(() => {
        // ------------------------------- 5.1b - 5.1f -------------------------------------------------------
        setPlannedActions51b(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions51b);
        setFollowUpDate51b(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate51b);
        setReadyDate51b(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate51b);
        setByWhom51b(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom51b);
        setDate51b(props.InfluencingFactorsActionsProps.influencingFactorsActions.date51b);
        setPlannedActions51c(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions51c);
        setFollowUpDate51c(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate51c);
        setReadyDate51c(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate51c);
        setByWhom51c(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom51c);
        setDate51c(props.InfluencingFactorsActionsProps.influencingFactorsActions.date51c);
        setPlannedActions51d(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions51d);
        setFollowUpDate51d(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate51d);
        setReadyDate51d(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate51d);
        setByWhom51d(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom51d);
        setDate51d(props.InfluencingFactorsActionsProps.influencingFactorsActions.date51d);
        setPlannedActions51e(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions51e);
        setFollowUpDate51e(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate51e);
        setReadyDate51e(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate51e);
        setByWhom51e(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom51e);
        setDate51e(props.InfluencingFactorsActionsProps.influencingFactorsActions.date51e);
        setPlannedActions51f(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions51f);
        setFollowUpDate51f(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate51f);
        setReadyDate51f(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate51f);
        setByWhom51f(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom51f);
        setDate51f(props.InfluencingFactorsActionsProps.influencingFactorsActions.date51f);

        // ------------------------------- 5.2b - 5.2h -------------------------------------------------------
        setPlannedActions52b(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52b);
        setFollowUpDate52b(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52b);
        setReadyDate52b(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52b);
        setByWhom52b(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52b);
        setDate52b(props.InfluencingFactorsActionsProps.influencingFactorsActions.date52b);
        setPlannedActions52c(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52c);
        setFollowUpDate52c(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52c);
        setReadyDate52c(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52c);
        setByWhom52c(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52c);
        setDate52c(props.InfluencingFactorsActionsProps.influencingFactorsActions.date52c);
        setPlannedActions52d(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52d);
        setFollowUpDate52d(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52d);
        setReadyDate52d(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52d);
        setByWhom52d(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52d);
        setDate52d(props.InfluencingFactorsActionsProps.influencingFactorsActions.date52d);
        setPlannedActions52e(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52e);
        setFollowUpDate52e(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52e);
        setReadyDate52e(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52e);
        setByWhom52e(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52e);
        setDate52e(props.InfluencingFactorsActionsProps.influencingFactorsActions.date52e);
        setPlannedActions52f(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52f);
        setFollowUpDate52f(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52f);
        setReadyDate52f(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52f);
        setByWhom52f(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52f);
        setDate52f(props.InfluencingFactorsActionsProps.influencingFactorsActions.date52f);
        setPlannedActions52g(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52g);
        setFollowUpDate52g(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52g);
        setReadyDate52g(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52g);
        setByWhom52g(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52g);
        setDate52g(props.InfluencingFactorsActionsProps.influencingFactorsActions.date52g);
        setPlannedActions52h(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52h);
        setFollowUpDate52h(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52h);
        setReadyDate52h(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52h);
        setByWhom52h(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52h);
        setDate52h(props.InfluencingFactorsActionsProps.influencingFactorsActions.date52h);

        // ------------------------------- 5.3a - 5.3d -------------------------------------------------------
        setPlannedActions53a(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions53a);
        setFollowUpDate53a(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate53a);
        setReadyDate53a(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate53a);
        setByWhom53a(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom53a);
        setDate53a(props.InfluencingFactorsActionsProps.influencingFactorsActions.date53a);
        setPlannedActions53b(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions53b);
        setFollowUpDate53b(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate53b);
        setReadyDate53b(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate53b);
        setByWhom53b(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom53b);
        setDate53b(props.InfluencingFactorsActionsProps.influencingFactorsActions.date53b);
        setPlannedActions53c(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions53c);
        setFollowUpDate53c(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate53c);
        setReadyDate53c(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate53c);
        setByWhom53c(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom53c);
        setDate53c(props.InfluencingFactorsActionsProps.influencingFactorsActions.date53c);
        setPlannedActions53d(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions53d);
        setFollowUpDate53d(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate53d);
        setReadyDate53d(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate53d);
        setByWhom53d(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom53d);
        setDate53d(props.InfluencingFactorsActionsProps.influencingFactorsActions.date53d);

    }, [props.InfluencingFactorsActionsProps.influencingFactorsActions])


    return (
        <>
            {/* FRÅGA 51A&B---------------------------------------------------------------------------------------- */}
            <div
                className="modal fade"
                id="exampleModal51b"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel51b"
                aria-hidden="true"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
            >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title" id="exampleModalLabel51b">
                                a+b. Hand-arm vibrations
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
                                    id="51a"
                                    className="form-control"
                                    readOnly
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    disabled={true}
                                    value={props.influencingFactorsProps.influencingFactors.q51a_Comm}
                                />
                                <label htmlFor="51a">Comment 51a</label>
                                <p style={{ "fontWeight": "bold" }}>Count:{props.influencingFactorsProps.influencingFactors.q51a_Comm.length}  / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    id="51b"
                                    className="form-control"
                                    readOnly
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    disabled={true}
                                    value={props.influencingFactorsProps.influencingFactors.q51b_Comm}
                                />
                                <label htmlFor="51a">Comment 51b</label>
                                <p style={{ "fontWeight": "bold" }}>Count:{props.influencingFactorsProps.influencingFactors.q51b_Comm.length}  / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    className="form-control"
                                    maxLength={SIZE}
                                    type="text"
                                    id="51b"
                                    value={plannedActions51b}
                                    onChange={(e) => {
                                        setPlannedActions51b(e.target.value);
                                    }}
                                />
                                <label htmlFor="51b">Planned actions</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions51b.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    maxLength={SIZE}
                                    className="form-control"
                                    value={byWhom51b}
                                    onChange={(e) => {
                                        setByWhom51b(e.target.value);
                                    }}
                                />
                                <label htmlFor="51b">By whom</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {byWhom51b.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    maxLength={DATE_SIZE}
                                    className="form-control"
                                    value={date51b}
                                    onChange={(e) => {
                                        setDate51b(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="51b">Date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    maxLength={DATE_SIZE}
                                    className="form-control"
                                    value={readyDate51b}
                                    onChange={(e) => {
                                        setReadyDate51b(e.target.value);
                                    }}

                                ></input>
                                <label htmlFor="51b">Ready date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    maxLength={DATE_SIZE}
                                    className="form-control"
                                    value={followUpDate51b}
                                    onChange={(e) => {
                                        setFollowUpDate51b(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="51b">Follow up date</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setPlannedActions51b(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions51b);
                                    setFollowUpDate51b(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate51b);
                                    setReadyDate51b(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate51b);
                                    setByWhom51b(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom51b);
                                    setDate51b(props.InfluencingFactorsActionsProps.influencingFactorsActions.date51b);
                                }}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    props.setPlannedActions51B(plannedActions51b);
                                    props.setFollowUpDate51B(followUpDate51b);
                                    props.setReadyDate51B(readyDate51b);
                                    props.setByWhom51B(byWhom51b);
                                    props.setDate51B(date51b);
                                }}>
                                Add Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* FRÅGA 51B&A---------------------------------------------------------------------------------------- */}

            {/* FRÅGA 51C---------------------------------------------------------------------------------------- */}
            <div
                className="modal fade"
                id="exampleModal51c"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel51c"
                aria-hidden="true"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
            >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title" id="exampleModalLabel51c">
                                c.Warm or cold objects are handled manually
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
                                    id="51c"
                                    className="form-control"
                                    readOnly
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    disabled={true}
                                    value={props.influencingFactorsProps.influencingFactors.q51c_Comm}
                                />
                                <label htmlFor="51c">Comment</label>
                                <p style={{ "fontWeight": "bold" }}>Count:{props.influencingFactorsProps.influencingFactors.q51c_Comm.length}  / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    className="form-control"
                                    maxLength={SIZE}
                                    type="text"
                                    id="51c"
                                    value={plannedActions51c}
                                    onChange={(e) => {
                                        setPlannedActions51c(e.target.value);
                                    }}
                                />
                                <label htmlFor="51c">Planned actions</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions51c.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    className="form-control"
                                    maxLength={SIZE}
                                    value={byWhom51c}
                                    onChange={(e) => {
                                        setByWhom51c(e.target.value);
                                    }}
                                />
                                <label htmlFor="51c">By whom</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {byWhom51c.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={date51c}
                                    onChange={(e) => {
                                        setDate51c(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="51c">Date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={readyDate51c}
                                    onChange={(e) => {
                                        setReadyDate51c(e.target.value);
                                    }}

                                ></input>
                                <label htmlFor="51c">Ready date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={followUpDate51c}
                                    onChange={(e) => {
                                        setFollowUpDate51c(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="51c">Follow up date</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setPlannedActions51c(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions51c);
                                    setFollowUpDate51c(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate51c);
                                    setReadyDate51c(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate51c);
                                    setByWhom51c(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom51c);
                                    setDate51c(props.InfluencingFactorsActionsProps.influencingFactorsActions.date51c);
                                }}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    props.setPlannedActions51C(plannedActions51c);
                                    props.setFollowUpDate51C(followUpDate51c);
                                    props.setReadyDate51C(readyDate51c);
                                    props.setByWhom51C(byWhom51c);
                                    props.setDate51C(date51c);
                                }}>
                                Add Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* FRÅGA 51C---------------------------------------------------------------------------------------- */}


            {/* FRÅGA 51D---------------------------------------------------------------------------------------- */}
            <div
                className="modal fade"
                id="exampleModal51d"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel51d"
                aria-hidden="true"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
            >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title" id="exampleModalLabel51d">
                                d. The hand is used as an impact tool often or a long time
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
                                    id="51d"
                                    className="form-control"
                                    readOnly
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    disabled={true}
                                    value={props.influencingFactorsProps.influencingFactors.q51d_Comm}
                                />
                                <label htmlFor="51d">Comment</label>
                                <p style={{ "fontWeight": "bold" }}>Count:{props.influencingFactorsProps.influencingFactors.q51d_Comm.length}  / 65</p>
                            </div>
                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    className="form-control"
                                    maxLength={SIZE}
                                    type="text"
                                    id="51d"
                                    value={plannedActions51d}
                                    onChange={(e) => {
                                        setPlannedActions51d(e.target.value);
                                    }}
                                />
                                <label htmlFor="51d">Planned actions</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions51d.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    className="form-control"
                                    maxLength={SIZE}
                                    value={byWhom51d}
                                    onChange={(e) => {
                                        setByWhom51d(e.target.value);
                                    }}
                                />
                                <label htmlFor="51d">By whom</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {byWhom51d.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={date51d}
                                    onChange={(e) => {
                                        setDate51d(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="51d">Date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={readyDate51d}
                                    onChange={(e) => {
                                        setReadyDate51d(e.target.value);
                                    }}

                                ></input>
                                <label htmlFor="51d">Ready date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={followUpDate51d}
                                    onChange={(e) => {
                                        setFollowUpDate51d(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="51d">Follow up date</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setPlannedActions51d(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions51d);
                                    setFollowUpDate51d(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate51d);
                                    setReadyDate51d(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate51d);
                                    setByWhom51d(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom51d);
                                    setDate51d(props.InfluencingFactorsActionsProps.influencingFactorsActions.date51d);
                                }}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    props.setPlannedActions51D(plannedActions51d);
                                    props.setFollowUpDate51D(followUpDate51d);
                                    props.setReadyDate51D(readyDate51d);
                                    props.setByWhom51D(byWhom51d);
                                    props.setDate51D(date51d);
                                }}>
                                Add Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* FRÅGA 51D---------------------------------------------------------------------------------------- */}

            {/* FRÅGA 51E---------------------------------------------------------------------------------------- */}
            <div
                className="modal fade"
                id="exampleModal51e"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel51e"
                aria-hidden="true"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
            >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title" id="exampleModalLabel51e">
                                e. Holding hand tools weiging more than 2.3 kg for more that 30 minutes
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
                                    id="51e"
                                    className="form-control"
                                    readOnly
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    disabled={true}
                                    value={props.influencingFactorsProps.influencingFactors.q51e_Comm}
                                />
                                <label htmlFor="51e">Comment</label>
                                <p style={{ "fontWeight": "bold" }}>Count:{props.influencingFactorsProps.influencingFactors.q51e_Comm.length}  / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    className="form-control"
                                    type="text"
                                    maxLength={SIZE}
                                    id="51e"
                                    value={plannedActions51e}
                                    onChange={(e) => {
                                        setPlannedActions51e(e.target.value);
                                    }}
                                />
                                <label htmlFor="51e">Planned actions</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions51e.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    className="form-control"
                                    value={byWhom51e}
                                    maxLength={SIZE}
                                    onChange={(e) => {
                                        setByWhom51e(e.target.value);
                                    }}
                                />
                                <label htmlFor="51e">By whom</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {byWhom51e.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    value={date51e}
                                    maxLength={DATE_SIZE}
                                    onChange={(e) => {
                                        setDate51e(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="51e">Date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={readyDate51e}
                                    onChange={(e) => {
                                        setReadyDate51e(e.target.value);
                                    }}

                                ></input>
                                <label htmlFor="51e">Ready date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={followUpDate51e}
                                    onChange={(e) => {
                                        setFollowUpDate51e(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="51e">Follow up date</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setPlannedActions51e(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions51e);
                                    setFollowUpDate51e(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate51e);
                                    setReadyDate51e(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate51e);
                                    setByWhom51e(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom51e);
                                    setDate51e(props.InfluencingFactorsActionsProps.influencingFactorsActions.date51e);
                                }}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    props.setPlannedActions51E(plannedActions51e);
                                    props.setFollowUpDate51E(followUpDate51e);
                                    props.setReadyDate51E(readyDate51e);
                                    props.setByWhom51E(byWhom51e);
                                    props.setDate51E(date51e);
                                }}>
                                Add Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* FRÅGA 51E---------------------------------------------------------------------------------------- */}


            {/* FRÅGA 51F---------------------------------------------------------------------------------------- */}
            <div
                className="modal fade"
                id="exampleModal51f"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel51f"
                aria-hidden="true"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
            >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title" id="exampleModalLabel51f">
                                f. Holding precision tools weighing more that 0.4 kg for more than 30 minutes
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
                                    id="51f"
                                    className="form-control"
                                    readOnly
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    disabled={true}
                                    value={props.influencingFactorsProps.influencingFactors.q51f_Comm}
                                />
                                <label htmlFor="51f">Comment</label>
                                <p style={{ "fontWeight": "bold" }}>Count:{props.influencingFactorsProps.influencingFactors.q51f_Comm.length}  / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    className="form-control"
                                    type="text"
                                    maxLength={SIZE}
                                    id="51f"
                                    value={plannedActions51f}
                                    onChange={(e) => {
                                        setPlannedActions51f(e.target.value);
                                    }}
                                />
                                <label htmlFor="51f">Planned actions</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions51f.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    className="form-control"
                                    maxLength={SIZE}
                                    value={byWhom51f}
                                    onChange={(e) => {
                                        setByWhom51f(e.target.value);
                                    }}
                                />
                                <label htmlFor="51f">By whom</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {byWhom51f.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    value={date51f}
                                    onChange={(e) => {
                                        setDate51f(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="51f">Date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={readyDate51f}
                                    onChange={(e) => {
                                        setReadyDate51f(e.target.value);
                                    }}

                                ></input>
                                <label htmlFor="51f">Ready date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={followUpDate51f}
                                    onChange={(e) => {
                                        setFollowUpDate51f(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="51f">Follow up date</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setPlannedActions51f(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions51f);
                                    setFollowUpDate51f(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate51f);
                                    setReadyDate51f(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate51f);
                                    setByWhom51f(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom51f);
                                    setDate51f(props.InfluencingFactorsActionsProps.influencingFactorsActions.date51f);
                                }}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    props.setPlannedActions51F(plannedActions51f);
                                    props.setFollowUpDate51F(followUpDate51f);
                                    props.setReadyDate51F(readyDate51f);
                                    props.setByWhom51F(byWhom51f);
                                    props.setDate51F(date51f);
                                }}>
                                Add Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* FRÅGA 51F---------------------------------------------------------------------------------------- */}


            {/* FRÅGA 52B&A---------------------------------------------------------------------------------------- */}
            <div
                className="modal fade"
                id="exampleModal52b"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel52b"
                aria-hidden="true"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
            >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title" id="exampleModalLabel52b">
                                a+b. Whole-body vibrations
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
                                    id="52a"
                                    className="form-control"
                                    readOnly
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    disabled={true}
                                    value={props.influencingFactorsProps.influencingFactors.q52a_Comm}
                                />
                                <label htmlFor="52a">Comment 52a</label>
                                <p style={{ "fontWeight": "bold" }}>Count:{props.influencingFactorsProps.influencingFactors.q52a_Comm.length}  / 65</p>

                                <div className="form-floating text-dark">
                                    <textarea
                                        id="52b"
                                        className="form-control"
                                        readOnly
                                        style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                        type="text"
                                        disabled={true}
                                        value={props.influencingFactorsProps.influencingFactors.q52b_Comm}
                                    />
                                    <label htmlFor="52b">Comment 52b</label>
                                    <p style={{ "fontWeight": "bold" }}>Count:{props.influencingFactorsProps.influencingFactors.q52b_Comm.length}  / 65</p>
                                </div>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    className="form-control"
                                    maxLength={SIZE}
                                    type="text"
                                    id="52b"
                                    value={plannedActions52b}
                                    onChange={(e) => {
                                        setPlannedActions52b(e.target.value);
                                    }}
                                />
                                <label htmlFor="52b">Planned actions</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions52b.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    className="form-control"
                                    maxLength={SIZE}
                                    value={byWhom52b}
                                    onChange={(e) => {
                                        setByWhom52b(e.target.value);
                                    }}
                                />
                                <label htmlFor="52b">By whom</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {byWhom52b.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={date52b}
                                    onChange={(e) => {
                                        setDate52b(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="52b">Date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={readyDate52b}
                                    onChange={(e) => {
                                        setReadyDate52b(e.target.value);
                                    }}

                                ></input>
                                <label htmlFor="52b">Ready date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    value={followUpDate52b}
                                    maxLength={DATE_SIZE}
                                    onChange={(e) => {
                                        setFollowUpDate52b(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="52b">Follow up date</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setPlannedActions52b(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52b);
                                    setFollowUpDate52b(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52b);
                                    setReadyDate52b(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52b);
                                    setByWhom52b(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52b);
                                    setDate52b(props.InfluencingFactorsActionsProps.influencingFactorsActions.date52b);
                                }}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    props.setPlannedActions52B(plannedActions52b);
                                    props.setFollowUpDate52B(followUpDate52b);
                                    props.setReadyDate52B(readyDate52b);
                                    props.setByWhom52B(byWhom52b);
                                    props.setDate52B(date52b);
                                }}>
                                Add Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* FRÅGA 52B&A---------------------------------------------------------------------------------------- */}


            {/* FRÅGA 52C---------------------------------------------------------------------------------------- */}
            <div
                className="modal fade"
                id="exampleModal52c"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel52c"
                aria-hidden="true"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
            >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title" id="exampleModalLabel52c">
                                c. The visual conditions are insufficient for the task
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
                                    id="52c"
                                    className="form-control"
                                    readOnly
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    disabled={true}
                                    value={props.influencingFactorsProps.influencingFactors.q52c_Comm}
                                />
                                <label htmlFor="52c">Comment</label>
                                <p style={{ "fontWeight": "bold" }}>Count:{props.influencingFactorsProps.influencingFactors.q52c_Comm.length}  / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    className="form-control"
                                    maxLength={SIZE}
                                    type="text"
                                    id="52c"
                                    value={plannedActions52c}
                                    onChange={(e) => {
                                        setPlannedActions52c(e.target.value);
                                    }}
                                />
                                <label htmlFor="52c">Planned actions</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions52c.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    className="form-control"
                                    maxLength={SIZE}
                                    value={byWhom52c}
                                    onChange={(e) => {
                                        setByWhom52c(e.target.value);
                                    }}
                                />
                                <label htmlFor="52c">By whom</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {byWhom52c.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={date52c}
                                    onChange={(e) => {
                                        setDate52c(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="52c">Date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={readyDate52c}
                                    onChange={(e) => {
                                        setReadyDate52c(e.target.value);
                                    }}

                                ></input>
                                <label htmlFor="52c">Ready date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={followUpDate52c}
                                    onChange={(e) => {
                                        setFollowUpDate52c(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="52c">Follow up date</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setPlannedActions52c(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52c);
                                    setFollowUpDate52c(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52c);
                                    setReadyDate52c(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52c);
                                    setByWhom52c(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52c);
                                    setDate52c(props.InfluencingFactorsActionsProps.influencingFactorsActions.date52c);
                                }}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    props.setPlannedActions52C(plannedActions52c);
                                    props.setFollowUpDate52C(followUpDate52c);
                                    props.setReadyDate52C(readyDate52c);
                                    props.setByWhom52C(byWhom52c);
                                    props.setDate52C(date52c);
                                }}>
                                Add Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* FRÅGA 52C---------------------------------------------------------------------------------------- */}


            {/* FRÅGA 52D---------------------------------------------------------------------------------------- */}
            <div
                className="modal fade"
                id="exampleModal52d"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel52d"
                aria-hidden="true"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
            >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title" id="exampleModalLabel52d">
                                d. Work in hot or cold temperatures or in draughty enviroments
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
                                    id="52d"
                                    className="form-control"
                                    readOnly
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    disabled={true}
                                    value={props.influencingFactorsProps.influencingFactors.q52d_Comm}
                                />
                                <label htmlFor="52d">Comment</label>
                                <p style={{ "fontWeight": "bold" }}>Count:{props.influencingFactorsProps.influencingFactors.q52d_Comm.length}  / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    className="form-control"
                                    type="text"
                                    id="52d"
                                    maxLength={SIZE}
                                    value={plannedActions52d}
                                    onChange={(e) => {
                                        setPlannedActions52d(e.target.value);
                                    }}
                                />
                                <label htmlFor="52d">Planned actions</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions52d.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    className="form-control"
                                    maxLength={SIZE}
                                    value={byWhom52d}
                                    onChange={(e) => {
                                        setByWhom52d(e.target.value);
                                    }}
                                />
                                <label htmlFor="52d">By whom</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {byWhom52d.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={date52d}
                                    onChange={(e) => {
                                        setDate52d(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="52d">Date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={readyDate52d}
                                    onChange={(e) => {
                                        setReadyDate52d(e.target.value);
                                    }}

                                ></input>
                                <label htmlFor="52d">Ready date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={followUpDate52d}
                                    onChange={(e) => {
                                        setFollowUpDate52d(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="52d">Follow up date</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setPlannedActions52d(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52d);
                                    setFollowUpDate52d(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52d);
                                    setReadyDate52d(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52d);
                                    setByWhom52d(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52d);
                                    setDate52d(props.InfluencingFactorsActionsProps.influencingFactorsActions.date52d);
                                }}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    props.setPlannedActions52D(plannedActions52d);
                                    props.setFollowUpDate52D(followUpDate52d);
                                    props.setReadyDate52D(readyDate52d);
                                    props.setByWhom52D(byWhom52d);
                                    props.setDate52D(date52d);
                                }}>
                                Add Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* FRÅGA 52D---------------------------------------------------------------------------------------- */}

            {/* FRÅGA 52E---------------------------------------------------------------------------------------- */}
            <div
                className="modal fade"
                id="exampleModal52e"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel52e"
                aria-hidden="true"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
            >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title" id="exampleModalLabel52e">
                                e. Standning or walking on a hard surface more than half of the work day
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
                                    id="52e"
                                    className="form-control"
                                    readOnly
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    disabled={true}
                                    value={props.influencingFactorsProps.influencingFactors.q52e_Comm}
                                />
                                <label htmlFor="52e">Comment</label>
                                <p style={{ "fontWeight": "bold" }}>Count:{props.influencingFactorsProps.influencingFactors.q52e_Comm.length}  / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    className="form-control"
                                    maxLength={SIZE}
                                    type="text"
                                    id="52e"
                                    value={plannedActions52e}
                                    onChange={(e) => {
                                        setPlannedActions52e(e.target.value);
                                    }}
                                />
                                <label htmlFor="52e">Planned actions</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions52e.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    className="form-control"
                                    value={byWhom52e}
                                    maxLength={SIZE}
                                    onChange={(e) => {
                                        setByWhom52e(e.target.value);
                                    }}
                                />
                                <label htmlFor="52e">By whom</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {byWhom52e.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={date52e}
                                    onChange={(e) => {
                                        setDate52e(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="52e">Date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={readyDate52e}
                                    onChange={(e) => {
                                        setReadyDate52e(e.target.value);
                                    }}

                                ></input>
                                <label htmlFor="52e">Ready date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={followUpDate52e}
                                    onChange={(e) => {
                                        setFollowUpDate52e(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="52e">Follow up date</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setPlannedActions52e(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52e);
                                    setFollowUpDate52e(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52e);
                                    setReadyDate52e(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52e);
                                    setByWhom52e(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52e);
                                    setDate52e(props.InfluencingFactorsActionsProps.influencingFactorsActions.date52e);
                                }}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    props.setPlannedActions52E(plannedActions52e);
                                    props.setFollowUpDate52E(followUpDate52e);
                                    props.setReadyDate52E(readyDate52e);
                                    props.setByWhom52E(byWhom52e);
                                    props.setDate52E(date52e);
                                }}>
                                Add Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* FRÅGA 52E---------------------------------------------------------------------------------------- */}

            {/* FRÅGA 52F---------------------------------------------------------------------------------------- */}
            <div
                className="modal fade"
                id="exampleModal52f"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel52f"
                aria-hidden="true"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
            >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title" id="exampleModalLabel52f">
                                f. Prolonged sedentary work without possibility to do the work standing up
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
                                    id="52f"
                                    className="form-control"
                                    readOnly
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    disabled={true}
                                    value={props.influencingFactorsProps.influencingFactors.q52f_Comm}
                                />
                                <label htmlFor="52f">Comment</label>
                                <p style={{ "fontWeight": "bold" }}>Count:{props.influencingFactorsProps.influencingFactors.q52f_Comm.length}  / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    className="form-control"
                                    maxLength={SIZE}
                                    type="text"
                                    id="52f"
                                    value={plannedActions52f}
                                    onChange={(e) => {
                                        setPlannedActions52f(e.target.value);
                                    }}
                                />
                                <label htmlFor="52f">Planned actions</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions52f.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    className="form-control"
                                    value={byWhom52f}
                                    maxLength={SIZE}
                                    onChange={(e) => {
                                        setByWhom52f(e.target.value);
                                    }}
                                />
                                <label htmlFor="52f">By whom</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {byWhom52f.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    value={date52f}
                                    maxLength={DATE_SIZE}
                                    onChange={(e) => {
                                        setDate52f(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="52f">Date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    value={readyDate52f}
                                    maxLength={DATE_SIZE}
                                    onChange={(e) => {
                                        setReadyDate52f(e.target.value);
                                    }}

                                ></input>
                                <label htmlFor="52f">Ready date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    value={followUpDate52f}
                                    maxLength={DATE_SIZE}
                                    onChange={(e) => {
                                        setFollowUpDate52f(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="52f">Follow up date</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setPlannedActions52f(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52f);
                                    setFollowUpDate52f(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52f);
                                    setReadyDate52f(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52f);
                                    setByWhom52f(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52f);
                                    setDate52f(props.InfluencingFactorsActionsProps.influencingFactorsActions.date52f);
                                }}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    props.setPlannedActions52F(plannedActions52f);
                                    props.setFollowUpDate52F(followUpDate52f);
                                    props.setReadyDate52F(readyDate52f);
                                    props.setByWhom52F(byWhom52f);
                                    props.setDate52F(date52f);
                                }}>
                                Add Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* FRÅGA 52F---------------------------------------------------------------------------------------- */}

            {/* FRÅGA 52G---------------------------------------------------------------------------------------- */}
            <div
                className="modal fade"
                id="exampleModal52g"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel52g"
                aria-hidden="true"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
            >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title" id="exampleModalLabel52g">
                                g. Prolonged standing work without possibility to do the work sitting down
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
                                    id="52g"
                                    className="form-control"
                                    readOnly
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    disabled={true}
                                    value={props.influencingFactorsProps.influencingFactors.q52g_Comm}
                                />
                                <label htmlFor="52g">Comment</label>
                                <p style={{ "fontWeight": "bold" }}>Count:{props.influencingFactorsProps.influencingFactors.q52g_Comm.length}  / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    className="form-control"
                                    type="text"
                                    id="52g"
                                    maxLength={SIZE}
                                    value={plannedActions52g}
                                    onChange={(e) => {
                                        setPlannedActions52g(e.target.value);
                                    }}
                                />
                                <label htmlFor="52g">Planned actions</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions52g.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    className="form-control"
                                    value={byWhom52g}
                                    maxLength={SIZE}
                                    onChange={(e) => {
                                        setByWhom52g(e.target.value);
                                    }}
                                />
                                <label htmlFor="52g">By whom</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {byWhom52g.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={date52g}
                                    onChange={(e) => {
                                        setDate52g(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="52g">Date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    maxLength={DATE_SIZE}
                                    className="form-control"
                                    value={readyDate52g}
                                    onChange={(e) => {
                                        setReadyDate52g(e.target.value);
                                    }}

                                ></input>
                                <label htmlFor="52g">Ready date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={followUpDate52g}
                                    onChange={(e) => {
                                        setFollowUpDate52g(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="52g">Follow up date</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setPlannedActions52g(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52g);
                                    setFollowUpDate52g(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52g);
                                    setReadyDate52g(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52g);
                                    setByWhom52g(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52g);
                                    setDate52g(props.InfluencingFactorsActionsProps.influencingFactorsActions.date52g);
                                }}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    props.setPlannedActions52G(plannedActions52g);
                                    props.setFollowUpDate52G(followUpDate52g);
                                    props.setReadyDate52G(readyDate52g);
                                    props.setByWhom52G(byWhom52g);
                                    props.setDate52G(date52g);
                                }}>
                                Add Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* FRÅGA 52G---------------------------------------------------------------------------------------- */}

            {/* FRÅGA 52H---------------------------------------------------------------------------------------- */}
            <div
                className="modal fade"
                id="exampleModal52h"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel52h"
                aria-hidden="true"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
            >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title" id="exampleModalLabel52h">
                                h. Kneeling/squatting more than 30 times or more than 30 minutes
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
                                    id="52h"
                                    className="form-control"
                                    readOnly
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    disabled={true}
                                    value={props.influencingFactorsProps.influencingFactors.q52h_Comm}
                                />
                                <label htmlFor="52h">Comment</label>
                                <p style={{ "fontWeight": "bold" }}>Count:{props.influencingFactorsProps.influencingFactors.q52h_Comm.length}  / 65</p>
                            </div>
                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    className="form-control"
                                    maxLength={SIZE}
                                    type="text"
                                    id="52h"
                                    value={plannedActions52h}
                                    onChange={(e) => {
                                        setPlannedActions52h(e.target.value);
                                    }}
                                />
                                <label htmlFor="52h">Planned actions</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions52h.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    className="form-control"
                                    value={byWhom52h}
                                    maxLength={SIZE}
                                    onChange={(e) => {
                                        setByWhom52h(e.target.value);
                                    }}
                                />
                                <label htmlFor="52h">By whom</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {byWhom52h.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={date52h}
                                    onChange={(e) => {
                                        setDate52h(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="52h">Date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={readyDate52h}
                                    onChange={(e) => {
                                        setReadyDate52h(e.target.value);
                                    }}

                                ></input>
                                <label htmlFor="52h">Ready date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={followUpDate52h}
                                    onChange={(e) => {
                                        setFollowUpDate52h(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="52h">Follow up date</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setPlannedActions52h(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52h);
                                    setFollowUpDate52h(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52h);
                                    setReadyDate52h(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52h);
                                    setByWhom52h(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52h);
                                    setDate52h(props.InfluencingFactorsActionsProps.influencingFactorsActions.date52h);
                                }}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    props.setPlannedActions52H(plannedActions52h);
                                    props.setFollowUpDate52H(followUpDate52h);
                                    props.setReadyDate52H(readyDate52h);
                                    props.setByWhom52H(byWhom52h);
                                    props.setDate52H(date52h);
                                }}>
                                Add Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* FRÅGA 52H---------------------------------------------------------------------------------------- */}

            {/* FRÅGA 53A---------------------------------------------------------------------------------------- */}
            <div
                className="modal fade"
                id="exampleModal53a"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel53a"
                aria-hidden="true"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
            >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title" id="exampleModalLabel53a">
                                a. No possibility to influence at what pace the work is performed
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
                                    id="53a"
                                    className="form-control"
                                    readOnly
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    disabled={true}
                                    value={props.influencingFactorsProps.influencingFactors.q53a_Comm}
                                />
                                <label htmlFor="53a">Comment</label>
                                <p style={{ "fontWeight": "bold" }}>Count:{props.influencingFactorsProps.influencingFactors.q53a_Comm.length}  / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    className="form-control"
                                    maxLength={SIZE}
                                    type="text"
                                    id="53a"
                                    value={plannedActions53a}
                                    onChange={(e) => {
                                        setPlannedActions53a(e.target.value);
                                    }}
                                />
                                <label htmlFor="53a">Planned actions</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions53a.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    className="form-control"
                                    maxLength={SIZE}
                                    value={byWhom53a}
                                    onChange={(e) => {
                                        setByWhom53a(e.target.value);
                                    }}
                                />
                                <label htmlFor="53a">By whom</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {byWhom53a.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={date53a}
                                    onChange={(e) => {
                                        setDate53a(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="53a">Date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={readyDate53a}
                                    onChange={(e) => {
                                        setReadyDate53a(e.target.value);
                                    }}

                                ></input>
                                <label htmlFor="53a">Ready date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={followUpDate53a}
                                    onChange={(e) => {
                                        setFollowUpDate53a(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="53a">Follow up date</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setPlannedActions53a(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions53a);
                                    setFollowUpDate53a(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate53a);
                                    setReadyDate53a(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate53a);
                                    setByWhom53a(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom53a);
                                    setDate53a(props.InfluencingFactorsActionsProps.influencingFactorsActions.date53a);
                                }}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    props.setPlannedActions53A(plannedActions53a);
                                    props.setFollowUpDate53A(followUpDate53a);
                                    props.setReadyDate53A(readyDate53a);
                                    props.setByWhom53A(byWhom53a);
                                    props.setDate53A(date53a);
                                }}>
                                Add Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* FRÅGA 53A---------------------------------------------------------------------------------------- */}


            {/* FRÅGA 53B---------------------------------------------------------------------------------------- */}
            <div
                className="modal fade"
                id="exampleModal53b"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel53b"
                aria-hidden="true"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
            >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title" id="exampleModalLabel53b">
                                b. No possibility to influence the work setting/how the work shall be carried out
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
                                    id="53b"
                                    className="form-control"
                                    readOnly
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    disabled={true}
                                    value={props.influencingFactorsProps.influencingFactors.q53b_Comm}
                                />
                                <label htmlFor="53b">Comment</label>
                                <p style={{ "fontWeight": "bold" }}>Count:{props.influencingFactorsProps.influencingFactors.q53b_Comm.length}  / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    className="form-control"
                                    maxLength={SIZE}
                                    type="text"
                                    id="53b"
                                    value={plannedActions53b}
                                    onChange={(e) => {
                                        setPlannedActions53b(e.target.value);
                                    }}
                                />
                                <label htmlFor="53b">Planned actions</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions53b.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    className="form-control"
                                    value={byWhom53b}
                                    maxLength={SIZE}
                                    onChange={(e) => {
                                        setByWhom53b(e.target.value);
                                    }}
                                />
                                <label htmlFor="53b">By whom</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {byWhom53b.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={date53b}
                                    onChange={(e) => {
                                        setDate53b(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="53b">Date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={readyDate53b}
                                    onChange={(e) => {
                                        setReadyDate53b(e.target.value);
                                    }}

                                ></input>
                                <label htmlFor="53b">Ready date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={followUpDate53b}
                                    onChange={(e) => {
                                        setFollowUpDate53b(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="53b">Follow up date</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setPlannedActions53b(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions53b);
                                    setFollowUpDate53b(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate53b);
                                    setReadyDate53b(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate53b);
                                    setByWhom53b(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom53b);
                                    setDate53b(props.InfluencingFactorsActionsProps.influencingFactorsActions.date53b);
                                }}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    props.setPlannedActions53B(plannedActions53b);
                                    props.setFollowUpDate53B(followUpDate53b);
                                    props.setReadyDate53B(readyDate53b);
                                    props.setByWhom53B(byWhom53b);
                                    props.setDate53B(date53b);
                                }}>
                                Add Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* FRÅGA 53B---------------------------------------------------------------------------------------- */}

            {/* FRÅGA 53C---------------------------------------------------------------------------------------- */}
            <div
                className="modal fade"
                id="exampleModal53c"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel53c"
                aria-hidden="true"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
            >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title" id="exampleModalLabel53c">
                                c. it is often difficult to keep up with the work tasks
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
                                    id="53c"
                                    className="form-control"
                                    readOnly
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    disabled={true}
                                    value={props.influencingFactorsProps.influencingFactors.q53c_Comm}
                                />
                                <label htmlFor="53c">Comment</label>
                                <p style={{ "fontWeight": "bold" }}>Count:{props.influencingFactorsProps.influencingFactors.q53c_Comm.length}  / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    className="form-control"
                                    maxLength={SIZE}
                                    type="text"
                                    id="53c"
                                    value={plannedActions53c}
                                    onChange={(e) => {
                                        setPlannedActions53c(e.target.value);
                                    }}
                                />
                                <label htmlFor="53c">Planned actions</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions53c.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    className="form-control"
                                    maxLength={SIZE}
                                    value={byWhom53c}
                                    onChange={(e) => {
                                        setByWhom53c(e.target.value);
                                    }}
                                />
                                <label htmlFor="53c">By whom</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {byWhom53c.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={date53c}
                                    onChange={(e) => {
                                        setDate53c(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="53c">Date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={readyDate53c}
                                    onChange={(e) => {
                                        setReadyDate53c(e.target.value);
                                    }}

                                ></input>
                                <label htmlFor="53c">Ready date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={followUpDate53c}
                                    onChange={(e) => {
                                        setFollowUpDate53c(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="53c">Follow up date</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setPlannedActions53c(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions53c);
                                    setFollowUpDate53c(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate53c);
                                    setReadyDate53c(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate53c);
                                    setByWhom53c(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom53c);
                                    setDate53c(props.InfluencingFactorsActionsProps.influencingFactorsActions.date53c);
                                }}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    props.setPlannedActions53C(plannedActions53c);
                                    props.setFollowUpDate53C(followUpDate53c);
                                    props.setReadyDate53C(readyDate53c);
                                    props.setByWhom53C(byWhom53c);
                                    props.setDate53C(date53c);
                                }}>
                                Add Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* FRÅGA 53C---------------------------------------------------------------------------------------- */}

            {/* FRÅGA 53D---------------------------------------------------------------------------------------- */}
            <div
                className="modal fade"
                id="exampleModal53d"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel53d"
                aria-hidden="true"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
            >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title" id="exampleModalLabel53d">
                                d.The employees often work rapidly in order to be able to take a longer break
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
                                    id="53d"
                                    className="form-control"
                                    readOnly
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    disabled={true}
                                    value={props.influencingFactorsProps.influencingFactors.q53d_Comm}
                                />
                                <label htmlFor="53d">Comment</label>
                                <p style={{ "fontWeight": "bold" }}>Count:{props.influencingFactorsProps.influencingFactors.q53d_Comm.length}  / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    className="form-control"
                                    maxLength={SIZE}
                                    type="text"
                                    id="53d"
                                    value={plannedActions53d}
                                    onChange={(e) => {
                                        setPlannedActions53d(e.target.value);
                                    }}
                                />
                                <label htmlFor="53d">Planned actions</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {plannedActions53d.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <textarea
                                    style={{ "height": "5rem", "resize": "none", "borderRadius": "3%" }}
                                    type="text"
                                    maxLength={SIZE}
                                    className="form-control"
                                    value={byWhom53d}
                                    onChange={(e) => {
                                        setByWhom53d(e.target.value);
                                    }}
                                />
                                <label htmlFor="53d">By whom</label>
                                <p style={{ "fontWeight": "bold" }}>Count: {byWhom53d.length} / 65</p>
                            </div>

                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={date53d}
                                    onChange={(e) => {
                                        setDate53d(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="53d">Date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={readyDate53d}
                                    onChange={(e) => {
                                        setReadyDate53d(e.target.value);
                                    }}

                                ></input>
                                <label htmlFor="53d">Ready date</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input
                                    type="date"
                                    className="form-control"
                                    maxLength={DATE_SIZE}
                                    value={followUpDate53d}
                                    onChange={(e) => {
                                        setFollowUpDate53d(e.target.value);
                                    }}
                                ></input>
                                <label htmlFor="53d">Follow up date</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setPlannedActions53d(props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions53d);
                                    setFollowUpDate53d(props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate53d);
                                    setReadyDate53d(props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate53d);
                                    setByWhom53d(props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom53d);
                                    setDate53d(props.InfluencingFactorsActionsProps.influencingFactorsActions.date53d);
                                }}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    props.setPlannedActions53D(plannedActions53d);
                                    props.setFollowUpDate53D(followUpDate53d);
                                    props.setReadyDate53D(readyDate53d);
                                    props.setByWhom53D(byWhom53d);
                                    props.setDate53D(date53d);
                                }}>
                                Add Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* FRÅGA 53D---------------------------------------------------------------------------------------- */}
        </>
    )
}

export default connect(mapStateToProps, {
    setInfluencingFactorsActions,
    setInfluencingFactorsActionsId,
    setByWhom51A,
    setByWhom51B,
    setByWhom51C,
    setByWhom51D,
    setByWhom51E,
    setByWhom51F,
    setByWhom52A,
    setByWhom52B,
    setByWhom52C,
    setByWhom52D,
    setByWhom52E,
    setByWhom52F,
    setByWhom52G,
    setByWhom52H,
    setByWhom53A,
    setByWhom53B,
    setByWhom53C,
    setByWhom53D,
    setDate51A,
    setDate51B,
    setDate51C,
    setDate51D,
    setDate51E,
    setDate51F,
    setDate52A,
    setDate52B,
    setDate52C,
    setDate52D,
    setDate52E,
    setDate52F,
    setDate52G,
    setDate52H,
    setDate53A,
    setDate53B,
    setDate53C,
    setDate53D,
    setFollowUpDate51A,
    setFollowUpDate51B,
    setFollowUpDate51C,
    setFollowUpDate51D,
    setFollowUpDate51E,
    setFollowUpDate51F,
    setFollowUpDate52A,
    setFollowUpDate52B,
    setFollowUpDate52C,
    setFollowUpDate52D,
    setFollowUpDate52E,
    setFollowUpDate52F,
    setFollowUpDate52H,
    setFollowUpDate52G,
    setFollowUpDate53A,
    setFollowUpDate53B,
    setFollowUpDate53C,
    setFollowUpDate53D,
    setPlannedActions51A,
    setPlannedActions51B,
    setPlannedActions51C,
    setPlannedActions51D,
    setPlannedActions51E,
    setPlannedActions51F,
    setPlannedActions52A,
    setPlannedActions52B,
    setPlannedActions52C,
    setPlannedActions52D,
    setPlannedActions52E,
    setPlannedActions52F,
    setPlannedActions52G,
    setPlannedActions52H,
    setPlannedActions53A,
    setPlannedActions53B,
    setPlannedActions53C,
    setPlannedActions53D,
    setReadyDate51A,
    setReadyDate51B,
    setReadyDate51C,
    setReadyDate51D,
    setReadyDate51E,
    setReadyDate51F,
    setReadyDate52A,
    setReadyDate52B,
    setReadyDate52C,
    setReadyDate52D,
    setReadyDate52E,
    setReadyDate52F,
    setReadyDate52G,
    setReadyDate52H,
    setReadyDate53A,
    setReadyDate53B,
    setReadyDate53C,
    setReadyDate53D,
})(InfluencingFactorsModal)