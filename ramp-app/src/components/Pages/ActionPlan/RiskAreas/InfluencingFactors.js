import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import React from "react";
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
    influencingFactorsProps: state.influencingFactorsState,
    InfluencingFactorsActionsProps: state.influencingFactorsActionsState,
});

const InfluencingFactors = (props, lightBg) => {
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
        <>
            <tr style={{ fontSize: '18px' }} className='bg-primary text-white'>
                <th scope='row'>5. Influencing factors</th>
            </tr>
            <tr style={{ fontSize: '15px' }} className='bg-dark text-white'
                hidden={!colorHandler(props.influencingFactorsProps.influencingFactors.q51b) && !colorHandler(props.influencingFactorsProps.influencingFactors.q51a)
                    && !colorHandler(props.influencingFactorsProps.influencingFactors.q51c) && !colorHandler(props.influencingFactorsProps.influencingFactors.q51d)
                    && !colorHandler(props.influencingFactorsProps.influencingFactors.q51e) && !colorHandler(props.influencingFactorsProps.influencingFactors.q51f)
                }>
                <th scope='row'>5.1 Influencing physical factors hand/arm</th>
            </tr>
            <tr style={{ fontSize: '14px' }} hidden={!colorHandler(props.influencingFactorsProps.influencingFactors.q51b)
                && !colorHandler(props.influencingFactorsProps.influencingFactors.q51a)}>
                <th scope='row'>a+b. Hand-arm vibrations</th>
                <td>
                    a.
                    <div
                        className="rectangle"
                        style={{
                            width: 75,
                            height: 50,
                            backgroundColor: colorHandler(props.influencingFactorsProps.influencingFactors.q51a),
                        }}
                    />
                    b.
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
                    <h3>{props.influencingFactorsProps.influencingFactors.q51a}</h3>
                    <br />
                    <br />
                    <br />
                    <h3>{props.influencingFactorsProps.influencingFactors.q51b}</h3>
                </td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.influencingFactorsProps.influencingFactors.q51a_Comm}
                    />

                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.influencingFactorsProps.influencingFactors.q51b_Comm}

                    />
                </td>

                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions51b}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.date51b}</td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom51b}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate51b}</td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate51b}</td>
                <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal51b">
                        Action Plan Details
                    </button>
                </td>
            </tr>

            <tr style={{ fontSize: '14px' }} hidden={!colorHandler(props.influencingFactorsProps.influencingFactors.q51c)}>
                <th scope='row'>c.Warm or cold objects are handled manually</th>
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
                <td><h3>{props.influencingFactorsProps.influencingFactors.q51c}</h3></td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.influencingFactorsProps.influencingFactors.q51c_Comm}
                    />
                </td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions51c}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.date51c}</td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom51c}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate51c}</td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate51c}</td>
                <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal51c">
                        Action Plan Details
                    </button>
                </td>
            </tr>
            <tr style={{ fontSize: '14px' }} hidden={!colorHandler(props.influencingFactorsProps.influencingFactors.q51d)}>
                <th scope='row'>d. The hand is used as an impact tool often or a long time</th>
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
                <td><h3>{props.influencingFactorsProps.influencingFactors.q51d}</h3></td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.influencingFactorsProps.influencingFactors.q51d_Comm}
                    />
                </td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions51d}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.date51d}</td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom51d}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate51d}</td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate51d}</td>
                <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal51d">
                        Action Plan Details
                    </button>
                </td>
            </tr>
            <tr style={{ fontSize: '14px' }} hidden={!colorHandler(props.influencingFactorsProps.influencingFactors.q51e)}>
                <th scope='row'>e. Holding hand tools weiging more than 2.3 kg for more that 30 minutes</th>
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
                <td><h3>{props.influencingFactorsProps.influencingFactors.q51e}</h3></td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.influencingFactorsProps.influencingFactors.q51e_Comm}
                    />
                </td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions51e}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.date51e}</td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom51e}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate51e}</td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate51e}</td>
                <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal51e">
                        Action Plan Details
                    </button>
                </td>
            </tr>
            <tr style={{ fontSize: '14px' }} hidden={!colorHandler(props.influencingFactorsProps.influencingFactors.q51f)}>
                <th scope='row'>f. Holding precision tools weighing more that 0.4 kg for more than 30 minutes</th>
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
                <td><h3>{props.influencingFactorsProps.influencingFactors.q51f}</h3></td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.influencingFactorsProps.influencingFactors.q51f_Comm}
                    />
                </td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions51f}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.date51f}</td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom51f}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate51f}</td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate51f}</td>
                <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal51f">
                        Action Plan Details
                    </button>
                </td>
            </tr>
            <tr style={{ fontSize: '15px' }} className='bg-dark text-white'
                hidden={!colorHandler(props.influencingFactorsProps.influencingFactors.q52a) && !colorHandler(props.influencingFactorsProps.influencingFactors.q52b)
                    && !colorHandler(props.influencingFactorsProps.influencingFactors.q52c) && !colorHandler(props.influencingFactorsProps.influencingFactors.q52d)
                    && !colorHandler(props.influencingFactorsProps.influencingFactors.q52e) && !colorHandler(props.influencingFactorsProps.influencingFactors.q52f)
                    && !colorHandler(props.influencingFactorsProps.influencingFactors.q52g) && !colorHandler(props.influencingFactorsProps.influencingFactors.q52h)
                }>
                <th scope='row'>5.2 Other physical factors</th>
            </tr>
            <tr style={{ fontSize: '14px' }}
                hidden={!colorHandler(props.influencingFactorsProps.influencingFactors.q52a) && !colorHandler(props.influencingFactorsProps.influencingFactors.q52b)}>
                <th scope='row'>a+b. Whole-body vibrations</th>
                <td>
                    a.
                    <div
                        className="rectangle"
                        style={{
                            width: 75,
                            height: 50,
                            backgroundColor: colorHandler(props.influencingFactorsProps.influencingFactors.q52a),
                        }}
                    />
                    b.
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
                    <div><h3>{props.influencingFactorsProps.influencingFactors.q52a}</h3></div>
                    <br />
                    <br />
                    <br />
                    <div><h3>{props.influencingFactorsProps.influencingFactors.q52b}</h3></div>
                </td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.influencingFactorsProps.influencingFactors.q52a_Comm}
                    />

                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.influencingFactorsProps.influencingFactors.q52b_Comm}

                    />
                </td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52b}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.date52b}</td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52b}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52b}</td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52b}</td>
                <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal52b">
                        Action Plan Details
                    </button>
                </td>
            </tr>
            <tr style={{ fontSize: '14px' }} hidden={!colorHandler(props.influencingFactorsProps.influencingFactors.q52c)}>
                <th scope='row'>c. The visual conditions are insufficient for the task</th>
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

                <td><h3>{props.influencingFactorsProps.influencingFactors.q52c}</h3></td>

                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.influencingFactorsProps.influencingFactors.q52c_Comm}
                    />
                </td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52c}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.date52c}</td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52c}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52c}</td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52c}</td>
                <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal52c">
                        Action Plan Details
                    </button>
                </td>
            </tr>
            <tr style={{ fontSize: '14px' }} hidden={!colorHandler(props.influencingFactorsProps.influencingFactors.q52d)}>
                <th scope='row'>d. Work in hot or cold temperatures or in draughty enviroments</th>
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
                <td><h3>{props.influencingFactorsProps.influencingFactors.q52d}</h3></td>

                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.influencingFactorsProps.influencingFactors.q52d_Comm}
                    />
                </td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52d}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.date52d}</td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52d}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52d}</td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52d}</td>
                <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal52d">
                        Action Plan Details
                    </button>
                </td>
            </tr>
            <tr style={{ fontSize: '14px' }} hidden={!colorHandler(props.influencingFactorsProps.influencingFactors.q52e)}>
                <th scope='row'>e. Standning or walking on a hard surface more than half of the work day</th>
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
                <td><h3>{props.influencingFactorsProps.influencingFactors.q52e}</h3></td>

                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.influencingFactorsProps.influencingFactors.q52e_Comm}
                    />
                </td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52e}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.date52e}</td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52e}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52e}</td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52e}</td>
                <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal52e">
                        Action Plan Details
                    </button>
                </td>
            </tr>
            <tr style={{ fontSize: '14px' }} hidden={!colorHandler(props.influencingFactorsProps.influencingFactors.q52f)}>
                <th scope='row'>f. Prolonged sedentary work without possibility to do the work standing up</th>
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
                <td><h3>{props.influencingFactorsProps.influencingFactors.q52f}</h3></td>

                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.influencingFactorsProps.influencingFactors.q52f_Comm}
                    />
                </td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52f}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.date52f}</td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52f}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52f}</td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52f}</td>
                <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal52f">
                        Action Plan Details
                    </button>
                </td>
            </tr>
            <tr style={{ fontSize: '14px' }} hidden={!colorHandler(props.influencingFactorsProps.influencingFactors.q52g)}>
                <th scope='row'>g. Prolonged standing work without possibility to do the work sitting down</th>
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

                <td><h3>{props.influencingFactorsProps.influencingFactors.q52g}</h3></td>

                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.influencingFactorsProps.influencingFactors.q52g_Comm}
                    />
                </td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52g}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.date52g}</td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52g}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52g}</td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52g}</td>
                <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal52g">
                        Action Plan Details
                    </button>
                </td>
            </tr>
            <tr style={{ fontSize: '14px' }} hidden={!colorHandler(props.influencingFactorsProps.influencingFactors.q52h)}>
                <th scope='row'>h. Kneeling/squatting more than 30 times or more than 30 minutes</th>
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
                <td><h3>{props.influencingFactorsProps.influencingFactors.q52h}</h3></td>

                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.influencingFactorsProps.influencingFactors.q52h_Comm}
                    />
                </td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions52h}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.date52h}</td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom52h}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate52h}</td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate52h}</td>
                <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal52h">
                        Action Plan Details
                    </button>
                </td>
            </tr>
            <tr style={{ fontSize: '15px' }} className='bg-dark text-white'
                hidden={!colorHandler(props.influencingFactorsProps.influencingFactors.q53a) && !colorHandler(props.influencingFactorsProps.influencingFactors.q53b)
                    && !colorHandler(props.influencingFactorsProps.influencingFactors.q53c) && !colorHandler(props.influencingFactorsProps.influencingFactors.q53d)
                }>
                <th scope='row'>5.3 Work organisational and psychosocial factors</th>
            </tr>
            <tr style={{ fontSize: '14px' }} hidden={!colorHandler(props.influencingFactorsProps.influencingFactors.q53a)}>
                <th scope='row'>a. No possibility to influence at what pace the work is performed</th>
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
                <td><h3>{props.influencingFactorsProps.influencingFactors.q53a}</h3></td>

                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.influencingFactorsProps.influencingFactors.q53a_Comm}
                    />
                </td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions53a}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.date53a}</td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom53a}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate53a}</td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate53a}</td>
                <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal53a">
                        Action Plan Details
                    </button>
                </td>
            </tr>
            <tr style={{ fontSize: '14px' }} hidden={!colorHandler(props.influencingFactorsProps.influencingFactors.q53b)}>
                <th scope='row'>b. No possibility to influence the work setting/how the work shall be carried out</th>
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
                <td><h3>{props.influencingFactorsProps.influencingFactors.q53b}</h3></td>

                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.influencingFactorsProps.influencingFactors.q53b_Comm}
                    />
                </td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions53b}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.date53b}</td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom53b}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate53b}</td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate53b}</td>
                <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal53b">
                        Action Plan Details
                    </button>
                </td>
            </tr>
            <tr style={{ fontSize: '14px' }} hidden={!colorHandler(props.influencingFactorsProps.influencingFactors.q53c)}>
                <th scope='row'>c. it is often difficult to keep up with the work tasks</th>
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
                <td><h3>{props.influencingFactorsProps.influencingFactors.q53c}</h3></td>

                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.influencingFactorsProps.influencingFactors.q53c_Comm}
                    />
                </td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions53c}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.date53c}</td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom53c}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate53c}</td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate53c}</td>
                <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal53c">
                        Action Plan Details
                    </button>
                </td>
            </tr>
            <tr style={{ fontSize: '14px' }} hidden={!colorHandler(props.influencingFactorsProps.influencingFactors.q53d)}>
                <th scope='row'>d.The employees often work rapidly in order to be able to take a longer break</th>
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
                <td><h3>{props.influencingFactorsProps.influencingFactors.q53d}</h3></td>

                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.influencingFactorsProps.influencingFactors.q53d_Comm}
                    />
                </td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.plannedActions53d}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.date53d}</td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.InfluencingFactorsActionsProps.influencingFactorsActions.byWhom53d}
                    />
                </td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.readyDate53d}</td>
                <td>{props.InfluencingFactorsActionsProps.influencingFactorsActions.followUpDate53d}</td>
                <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal53d">
                        Action Plan Details
                    </button>
                </td>
            </tr>
        </>
    )
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
