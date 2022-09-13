import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import "../Result.css";
const mapStateToProps = (state) => ({
    influencingFactorsProps: state.influencingFactorsState,
});

const array = ["51a", "51b", "51c", "51d", "51e", "51f", "52a", "52b", "52c", "52d", "52e", "52f", "52g", "52h", "53a", "53b", "53c", "53d"];

const InfluencingFactors = (props) => {
    const zero = 0;
    const handleCounter = (red, yellow, green) => {
        let total = 0;
        array.map((q) => (
            colorHandler(getNumber(props, q)) == "red" ? red = red + 1 : '',
            colorHandler(getNumber(props, q)) == "yellow" ? yellow = yellow + 1 : '',
            colorHandler(getNumber(props, q)) == "green" ? green = green + 1 : '',
            getNumber(props, q) != "none" ? total = total + parseFloat(getNumber(props, q)) : ''
        ))
        props.setRed(red);
        props.setYellow(yellow);
        props.setGreen(green);
        props.setTotal(total);
    }


    const colorHandler = (number) => {
        if (number == 4) {
            return "red";
        }

        if (number == 2) {
            return "yellow";
        }

        if (number == 0) {
            return "green";
        }
    }

    return (
        <div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-influencingFactors" aria-expanded="false" aria-controls="flush-influencingFactors">
                        5. Influencing Factors
                    </button>
                </h2>
                <div id="flush-influencingFactors" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#influencingFactors">
                    <div className="accordion-body bg-white">
                        <div className="card-body bg-white">

                            <table className="table table-responsive">
                                <tbody>
                                    <tr>
                                        <td><h3 style={{ "fontWeight": "bold" }}>5. Influencing Factors</h3></td>
                                        <td><h4 style={{ "fontWeight": "bold" }}>Score</h4></td>
                                        <td><h4 style={{ "fontWeight": "bold" }}> Assessment</h4></td>
                                        <td><h4 style={{ "fontWeight": "bold" }}>User Comment</h4></td>
                                    </tr>
                                    <tr style={{ fontSize: '20px' }}>
                                        <th style={{ fontSize: 20, color: '#1954A6' }}>5.1 Influencing physical factors hand/arm - do the following occur? The times refer to "per work day".</th>
                                    </tr>
                                </tbody>

                                <tbody>
                                    <tr>
                                        <td>a. The employee is exposed to hand-arm vibrations more than 20 minutes (10 for strongly vib)</td>
                                        <td>
                                            <label className="badge text-dark score">
                                                {props.influencingFactorsProps.influencingFactors.q51a}
                                            </label>
                                        </td>
                                        <td>
                                            <div
                                                className="rectangle"
                                                style={{
                                                    width: 75,
                                                    height: 50,
                                                    backgroundColor: colorHandler(props.influencingFactorsProps.influencingFactors.q51a),
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <label className="badge text-dark">
                                                <textarea
                                                    className="form-control"
                                                    style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                                                    readOnly
                                                    placeholder="No comment"
                                                    disabled={true}
                                                    type="text"
                                                    maxLength={65}
                                                    value={props.influencingFactorsProps.influencingFactors.q51a_Comm}
                                                />
                                            </label>
                                            <p>Count: {props.influencingFactorsProps.influencingFactors.q51a_Comm.length} / 65</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>b. The employee is exposed to hand-arm vibrations more than 90 minutes (60 for strongly vib).</td>
                                        <td>
                                            <label className="badge text-dark score">
                                                {props.influencingFactorsProps.influencingFactors.q51b}
                                            </label>
                                        </td>
                                        <td>
                                            <div
                                                className="rectangle"
                                                style={{
                                                    width: 75,
                                                    height: 50,
                                                    backgroundColor: colorHandler(props.influencingFactorsProps.influencingFactors.q51b),
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <label className="badge text-dark">
                                                <textarea
                                                    className="form-control"
                                                    style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                                                    readOnly
                                                    placeholder="No comment"
                                                    disabled={true}
                                                    type="text"
                                                    maxLength={65}
                                                    value={props.influencingFactorsProps.influencingFactors.q51b_Comm}
                                                />
                                            </label>
                                            <p>Count: {props.influencingFactorsProps.influencingFactors.q51b_Comm.length} / 65</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>c. Warm or cold objects are handled manually</td>
                                        <td>
                                            <label className="badge text-dark score">
                                                {props.influencingFactorsProps.influencingFactors.q51c}
                                            </label>
                                        </td>
                                        <td>
                                            <div
                                                className="rectangle"
                                                style={{
                                                    width: 75,
                                                    height: 50,
                                                    backgroundColor: colorHandler(props.influencingFactorsProps.influencingFactors.q51c),
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <label className="badge text-dark">
                                                <textarea
                                                    className="form-control"
                                                    style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                                                    readOnly
                                                    placeholder="No comment"
                                                    disabled={true}
                                                    type="text"
                                                    maxLength={65}
                                                    value={props.influencingFactorsProps.influencingFactors.q51c_Comm}
                                                />
                                            </label>
                                            <p>Count: {props.influencingFactorsProps.influencingFactors.q51c_Comm.length} / 65</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>d. The hand is used as an impact tool often or a long time</td>
                                        <td>
                                            <label className="badge text-dark score">
                                                {props.influencingFactorsProps.influencingFactors.q51d}
                                            </label>
                                        </td>
                                        <td>
                                            <div
                                                className="rectangle"
                                                style={{
                                                    width: 75,
                                                    height: 50,
                                                    backgroundColor: colorHandler(props.influencingFactorsProps.influencingFactors.q51d),
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <label className="badge text-dark">
                                                <textarea
                                                    className="form-control"
                                                    style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                                                    readOnly
                                                    placeholder="No comment"
                                                    disabled={true}
                                                    type="text"
                                                    maxLength={65}
                                                    value={props.influencingFactorsProps.influencingFactors.q51d_Comm}
                                                />
                                            </label>
                                            <p>Count: {props.influencingFactorsProps.influencingFactors.q51d_Comm.length} / 65</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>e. Holding hand tools weighing more than 2.3 kg for more than 30 minutes</td>
                                        <td>
                                            <label className="badge text-dark score">
                                                {props.influencingFactorsProps.influencingFactors.q51e}
                                            </label>
                                        </td>
                                        <td>
                                            <div
                                                className="rectangle"
                                                style={{
                                                    width: 75,
                                                    height: 50,
                                                    backgroundColor: colorHandler(props.influencingFactorsProps.influencingFactors.q51e),
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <label className="badge text-dark">
                                                <textarea
                                                    className="form-control"
                                                    style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                                                    readOnly
                                                    placeholder="No comment"
                                                    disabled={true}
                                                    type="text"
                                                    maxLength={65}
                                                    value={props.influencingFactorsProps.influencingFactors.q51e_Comm}
                                                />
                                            </label>
                                            <p>Count: {props.influencingFactorsProps.influencingFactors.q51e_Comm.length} / 65</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>f.  Holding precision tools weighing more than 0.4 kg for more than 30 minutes</td>
                                        <td>
                                            <label className="badge text-dark score">
                                                {props.influencingFactorsProps.influencingFactors.q51f}
                                            </label>
                                        </td>
                                        <td>
                                            <div
                                                className="rectangle"
                                                style={{
                                                    width: 75,
                                                    height: 50,
                                                    backgroundColor: colorHandler(props.influencingFactorsProps.influencingFactors.q51f),
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <label className="badge text-dark">
                                                <textarea
                                                    className="form-control"
                                                    style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                                                    readOnly
                                                    placeholder="No comment"
                                                    disabled={true}
                                                    type="text"
                                                    maxLength={65}
                                                    value={props.influencingFactorsProps.influencingFactors.q51f_Comm}
                                                />
                                            </label>
                                            <p>Count: {props.influencingFactorsProps.influencingFactors.q51f_Comm.length} / 65</p>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr></tr>
                                    <tr style={{ fontSize: '20px' }}>
                                        <th style={{ fontSize: 20, color: '#1954A6' }}>5.2 Other physical factors - do the following occur? The times refer to "per work day".</th>
                                    </tr>
                                    <tr>
                                        <td>a. The employee is exposed to whole-body vibrations more than 1 hour.</td>
                                        <td>
                                            <label className="badge text-dark score">
                                                {props.influencingFactorsProps.influencingFactors.q52a}
                                            </label>
                                        </td>
                                        <td>
                                            <div
                                                className="rectangle"
                                                style={{
                                                    width: 75,
                                                    height: 50,
                                                    backgroundColor: colorHandler(props.influencingFactorsProps.influencingFactors.q52a),
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <label className="badge text-dark">
                                                <textarea
                                                    className="form-control"
                                                    style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                                                    readOnly
                                                    placeholder="No comment"
                                                    disabled={true}
                                                    type="text"
                                                    maxLength={65}
                                                    value={props.influencingFactorsProps.influencingFactors.q52a_Comm}
                                                />
                                            </label>
                                            <p>Count: {props.influencingFactorsProps.influencingFactors.q52a_Comm.length} / 65</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>b. The employee is exposed to whole-body vibrations more than 6 hours.</td>
                                        <td>
                                            <label className="badge text-dark score">
                                                {props.influencingFactorsProps.influencingFactors.q52b}
                                            </label>
                                        </td>
                                        <td>
                                            <div
                                                className="rectangle"
                                                style={{
                                                    width: 75,
                                                    height: 50,
                                                    backgroundColor: colorHandler(props.influencingFactorsProps.influencingFactors.q52b),
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <label className="badge text-dark">
                                                <textarea
                                                    className="form-control"
                                                    style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                                                    readOnly
                                                    placeholder="No comment"
                                                    disabled={true}
                                                    type="text"
                                                    maxLength={65}
                                                    value={props.influencingFactorsProps.influencingFactors.q52b_Comm}
                                                />
                                            </label>
                                            <p>Count: {props.influencingFactorsProps.influencingFactors.q52b_Comm.length} / 65</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>c. The visual conditions are insufficient for the task</td>
                                        <td>
                                            <label className="badge text-dark score">
                                                {props.influencingFactorsProps.influencingFactors.q52c}
                                            </label>
                                        </td>
                                        <td>
                                            <div
                                                className="rectangle"
                                                style={{
                                                    width: 75,
                                                    height: 50,
                                                    backgroundColor: colorHandler(props.influencingFactorsProps.influencingFactors.q52c),
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <label className="badge text-dark">
                                                <textarea
                                                    className="form-control"
                                                    style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                                                    readOnly
                                                    placeholder="No comment"
                                                    disabled={true}
                                                    type="text"
                                                    maxLength={65}
                                                    value={props.influencingFactorsProps.influencingFactors.q52c_Comm}
                                                />
                                            </label>
                                            <p>Count: {props.influencingFactorsProps.influencingFactors.q52c_Comm.length} / 65</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>d. Work in hot or cold temperatures or in draughty environments</td>
                                        <td>
                                            <label className="badge text-dark score">
                                                {props.influencingFactorsProps.influencingFactors.q52d}
                                            </label>
                                        </td>
                                        <td>
                                            <div
                                                className="rectangle"
                                                style={{
                                                    width: 75,
                                                    height: 50,
                                                    backgroundColor: colorHandler(props.influencingFactorsProps.influencingFactors.q52d),
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <label className="badge text-dark">
                                                <textarea
                                                    className="form-control"
                                                    style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                                                    readOnly
                                                    placeholder="No comment"
                                                    disabled={true}
                                                    type="text"
                                                    maxLength={65}
                                                    value={props.influencingFactorsProps.influencingFactors.q52d_Comm}
                                                />
                                            </label>
                                            <p>Count: {props.influencingFactorsProps.influencingFactors.q52d_Comm.length} / 65</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>e. Standing or walking on a hard surface more than half of the work day</td>
                                        <td>
                                            <label className="badge text-dark score">
                                                {props.influencingFactorsProps.influencingFactors.q52e}
                                            </label>
                                        </td>
                                        <td>
                                            <div
                                                className="rectangle"
                                                style={{
                                                    width: 75,
                                                    height: 50,
                                                    backgroundColor: colorHandler(props.influencingFactorsProps.influencingFactors.q52e),
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <label className="badge text-dark">
                                                <textarea
                                                    className="form-control"
                                                    style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                                                    readOnly
                                                    placeholder="No comment"
                                                    disabled={true}
                                                    type="text"
                                                    maxLength={65}
                                                    value={props.influencingFactorsProps.influencingFactors.q52e_Comm}
                                                />
                                            </label>
                                            <p>Count: {props.influencingFactorsProps.influencingFactors.q52e_Comm.length} / 65</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>f. Prolonged sedentary work without possibility to do the work standing up</td>
                                        <td>
                                            <label className="badge text-dark score">
                                                {props.influencingFactorsProps.influencingFactors.q52f}
                                            </label>
                                        </td>
                                        <td>
                                            <div
                                                className="rectangle"
                                                style={{
                                                    width: 75,
                                                    height: 50,
                                                    backgroundColor: colorHandler(props.influencingFactorsProps.influencingFactors.q52f),
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <label className="badge text-dark">
                                                <textarea
                                                    className="form-control"
                                                    style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                                                    readOnly
                                                    placeholder="No comment"
                                                    disabled={true}
                                                    type="text"
                                                    maxLength={65}
                                                    value={props.influencingFactorsProps.influencingFactors.q52f_Comm}
                                                />
                                            </label>
                                            <p>Count: {props.influencingFactorsProps.influencingFactors.q52f_Comm.length} / 65</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>g. Prolonged standing work without possibility to do the work sitting down</td>
                                        <td>
                                            <label className="badge text-dark score">
                                                {props.influencingFactorsProps.influencingFactors.q52g}
                                            </label>
                                        </td>
                                        <td>
                                            <div
                                                className="rectangle"
                                                style={{
                                                    width: 75,
                                                    height: 50,
                                                    backgroundColor: colorHandler(props.influencingFactorsProps.influencingFactors.q52g),
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <label className="badge text-dark">
                                                <textarea
                                                    className="form-control"
                                                    style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                                                    readOnly
                                                    placeholder="No comment"
                                                    disabled={true}
                                                    type="text"
                                                    maxLength={65}
                                                    value={props.influencingFactorsProps.influencingFactors.q52g_Comm}
                                                />
                                            </label>
                                            <p>Count: {props.influencingFactorsProps.influencingFactors.q52g_Comm.length} / 65</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>h. Kneeling/squatting more than 30 times or more than 30 minutes</td>
                                        <td>
                                            <label className="badge text-dark score">
                                                {props.influencingFactorsProps.influencingFactors.q52h}
                                            </label>
                                        </td>
                                        <td>
                                            <div
                                                className="rectangle"
                                                style={{
                                                    width: 75,
                                                    height: 50,
                                                    backgroundColor: colorHandler(props.influencingFactorsProps.influencingFactors.q52h),
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <label className="badge text-dark">
                                                <textarea
                                                    className="form-control"
                                                    style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                                                    readOnly
                                                    placeholder="No comment"
                                                    disabled={true}
                                                    type="text"
                                                    maxLength={65}
                                                    value={props.influencingFactorsProps.influencingFactors.q52h_Comm}
                                                />
                                            </label>
                                            <p>Count: {props.influencingFactorsProps.influencingFactors.q52h_Comm.length} / 65</p>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr></tr>
                                    <tr style={{ fontSize: '20px' }}>
                                        <th style={{ fontSize: 20, color: '#1954A6' }}>5.3 Work organisational and psychosocial factors - do the following occur?</th>
                                    </tr>

                                    <tr>
                                        <td>a. There is no possibility to influence at what pace the work is performed</td>
                                        <td>
                                            <label className="badge text-dark score">
                                                {props.influencingFactorsProps.influencingFactors.q53a}
                                            </label>
                                        </td>
                                        <td>
                                            <div
                                                className="rectangle"
                                                style={{
                                                    width: 75,
                                                    height: 50,
                                                    backgroundColor: colorHandler(props.influencingFactorsProps.influencingFactors.q53a),
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <label className="badge text-dark">
                                                <textarea
                                                    className="form-control"
                                                    style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                                                    readOnly
                                                    placeholder="No comment"
                                                    disabled={true}
                                                    type="text"
                                                    maxLength={65}
                                                    value={props.influencingFactorsProps.influencingFactors.q53a_Comm}
                                                />
                                            </label>
                                            <p>Count: {props.influencingFactorsProps.influencingFactors.q53a_Comm.length} / 65</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>b. There is no possibility to influence the work setting or how the work shall be carried out</td>
                                        <td>
                                            <label className="badge text-dark score">
                                                {props.influencingFactorsProps.influencingFactors.q53b}
                                            </label>
                                        </td>
                                        <td>
                                            <div
                                                className="rectangle"
                                                style={{
                                                    width: 75,
                                                    height: 50,
                                                    backgroundColor: colorHandler(props.influencingFactorsProps.influencingFactors.q53b),
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <label className="badge text-dark">
                                                <textarea
                                                    className="form-control"
                                                    style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                                                    readOnly
                                                    placeholder="No comment"
                                                    disabled={true}
                                                    type="text"
                                                    maxLength={65}
                                                    value={props.influencingFactorsProps.influencingFactors.q53b_Comm}
                                                />
                                            </label>
                                            <p>Count: {props.influencingFactorsProps.influencingFactors.q53b_Comm.length} / 65</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>c.  It is often difficult to keep up with the work tasks</td>
                                        <td>
                                            <label className="badge text-dark score">
                                                {props.influencingFactorsProps.influencingFactors.q53c}
                                            </label>
                                        </td>
                                        <td>
                                            <div
                                                className="rectangle"
                                                style={{
                                                    width: 75,
                                                    height: 50,
                                                    backgroundColor: colorHandler(props.influencingFactorsProps.influencingFactors.q53c),
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <label className="badge text-dark">
                                                <textarea
                                                    className="form-control"
                                                    style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                                                    readOnly
                                                    placeholder="No comment"
                                                    disabled={true}
                                                    type="text"
                                                    maxLength={65}
                                                    value={props.influencingFactorsProps.influencingFactors.q53c_Comm}
                                                />
                                            </label>
                                            <p>Count: {props.influencingFactorsProps.influencingFactors.q53c_Comm.length} / 65</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>d. The employees often work rapidly in order to be able to take a longer break</td>
                                        <td>
                                            <label className="badge text-dark score">
                                                {props.influencingFactorsProps.influencingFactors.q53d}
                                            </label>
                                        </td>
                                        <td>
                                            <div
                                                className="rectangle"
                                                style={{
                                                    width: 75,
                                                    height: 50,
                                                    backgroundColor: colorHandler(props.influencingFactorsProps.influencingFactors.q53d),
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <label className="badge text-dark">
                                                <textarea
                                                    className="form-control"
                                                    style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                                                    readOnly
                                                    placeholder="No comment"
                                                    disabled={true}
                                                    type="text"
                                                    maxLength={65}
                                                    value={props.influencingFactorsProps.influencingFactors.q53d_Comm}
                                                />
                                            </label>
                                            <p>Count: {props.influencingFactorsProps.influencingFactors.q53d_Comm.length} / 65</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            {
                useEffect(() => {
                    handleCounter(zero, zero, zero)
                }, [])
            }
        </div>
    );
};

const getNumber = (props, number) => {
    if (number == "51a") {
        return props.influencingFactorsProps.influencingFactors.q51a
    }
    else if (number == "51b") {
        return props.influencingFactorsProps.influencingFactors.q51b
    }
    else if (number == "51c") {
        return props.influencingFactorsProps.influencingFactors.q51c
    }
    else if (number == "51d") {
        return props.influencingFactorsProps.influencingFactors.q51d
    }
    else if (number == "51e") {
        return props.influencingFactorsProps.influencingFactors.q51e
    }
    else if (number == "51f") {
        return props.influencingFactorsProps.influencingFactors.q51f
    }
    else if (number == "52a") {
        return props.influencingFactorsProps.influencingFactors.q52a
    }
    else if (number == "52b") {
        return props.influencingFactorsProps.influencingFactors.q52b
    }
    else if (number == "52c") {
        return props.influencingFactorsProps.influencingFactors.q52c
    }
    else if (number == "52d") {
        return props.influencingFactorsProps.influencingFactors.q52d
    }
    else if (number == "52e") {
        return props.influencingFactorsProps.influencingFactors.q52e
    }
    else if (number == "52f") {
        return props.influencingFactorsProps.influencingFactors.q52f
    }
    else if (number == "52g") {
        return props.influencingFactorsProps.influencingFactors.q52g
    }
    else if (number == "52h") {
        return props.influencingFactorsProps.influencingFactors.q52h
    }
    else if (number == "53a") {
        return props.influencingFactorsProps.influencingFactors.q53a
    }
    else if (number == "53b") {
        return props.influencingFactorsProps.influencingFactors.q53b
    }
    else if (number == "53c") {
        return props.influencingFactorsProps.influencingFactors.q53c
    }
    else if (number == "53d") {
        return props.influencingFactorsProps.influencingFactors.q53d
    }
}

export default connect(mapStateToProps)(InfluencingFactors);