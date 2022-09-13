import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    summaryProps: state.summaryState
})

const Summary = (props) => {
    return (
        <div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingNine">
                    <button
                        className="accordion-button collapsed"
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-result"
                        aria-expanded="false"
                        aria-controls="flush-result">
                        Results Summary
                    </button>
                </h2>
                <div
                    id="flush-result"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingNine"
                    data-bs-parent="#result">
                    <div className="accordion-body bg-white">
                        <div className="card-body bg-white">
                            <table className="table table-responsive">
                                <tbody>
                                    <tr>
                                        <td><h3 style={{ "fontWeight": "bold" }}>Results Summary</h3></td>
                                    </tr>
                                    <tr>
                                        <th>Total Risk Score</th>
                                        <th className="score">{getAllTotal(props)}</th>
                                    </tr>

                                    <tr>
                                        <th>Number Of Red Assessments (high risk)</th>
                                        <th className="score" style={{ "background": "red" }}>{getAllRed(props)}</th>
                                    </tr>

                                    <tr>
                                        <th>Number Of Yellow Assessments (risk)</th>
                                        <th className="score" style={{ "background": "yellow" }}>{getAllYellow(props)}</th>
                                    </tr>

                                    <tr>
                                        <th>Number Of Green Assessments (low risk)</th>
                                        <th className="score" style={{ "background": "green" }}>{getAllGreen(props)}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
};

const getAllTotal = (props) => {
    return (
        parseFloat(props.aTotal) +
        parseFloat(props.aTotal2) +
        parseFloat(props.aTotal3) +
        parseFloat(props.aTotal4) +
        parseFloat(props.aTotal5) +
        parseFloat(props.aTotal6) +
        parseFloat(props.aTotal7)
    )
}

const getAllRed = (props) => {
    return (
        parseFloat(props.aRed) +
        parseFloat(props.aRed2) +
        parseFloat(props.aRed3) +
        parseFloat(props.aRed4) +
        parseFloat(props.aRed5) +
        parseFloat(props.aRed6) +
        parseFloat(props.aRed7)
    )
}

const getAllYellow = (props) => {
    return (
        parseFloat(props.aYellow) +
        parseFloat(props.aYellow2) +
        parseFloat(props.aYellow3) +
        parseFloat(props.aYellow4) +
        parseFloat(props.aYellow5) +
        parseFloat(props.aYellow6) +
        parseFloat(props.aYellow7)
    )
}

const getAllGreen = (props) => {
    return (
        parseFloat(props.aGreen) +
        parseFloat(props.aGreen2) +
        parseFloat(props.aGreen3) +
        parseFloat(props.aGreen4) +
        parseFloat(props.aGreen5) +
        parseFloat(props.aGreen6) +
        parseFloat(props.aGreen7)
    )
}

export default connect(mapStateToProps)(Summary);