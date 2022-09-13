import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";

const mapStateToProps = (state) => ({
    physicalDiscomfortProps: state.physicalDiscomfortState,
})


const PerceivedPhysicalDiscomfort = (props) => {
    const zero = 0;
    return (
        <div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingSeven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-perceivedPhysicalDiscomfort" aria-expanded="false" aria-controls="flush-perceivedPhysicalDiscomfort">
                        7. Perceived Physical Discomfort
                    </button>
                </h2>
                <div id="flush-perceivedPhysicalDiscomfort" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#perceivedPhysicalDiscomfort">
                    <div className="accordion-body bg-white">
                        <div className="card-body bg-white">
                            <table className="table table-responsive">
                                <tbody>
                                    <tr>
                                        <td><h3 style={{ "fontWeight": "bold" }}>7. Perceived Physical Discomfort</h3></td>
                                        <td><h4 style={{ "fontWeight": "bold" }}>Score</h4></td>
                                        <td><h4 style={{ "fontWeight": "bold" }}> Assessment</h4></td>
                                        <td><h4 style={{ "fontWeight": "bold" }}>User Comment</h4></td>
                                    </tr>
                                    <tr>
                                        <th style={{ fontSize: 20, color: '#1954A6' }}>7.1 Are there parts of the work which lead to physical discomfort during the work day? </th>
                                        <td >
                                            <label className="badge text-dark score">
                                                {props.physicalDiscomfortProps.physicalDiscomfort.q71}
                                            </label>
                                        </td>
                                        <td>
                                            <div
                                                className="rectangle"
                                                style={{
                                                    width: 75,
                                                    height: 50,
                                                    backgroundColor: colorHandler(props)
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
                                                    value={props.physicalDiscomfortProps.physicalDiscomfort.q71_Comm}
                                                />
                                            </label>
                                            <p>Count: {props.physicalDiscomfortProps.physicalDiscomfort.q71_Comm.length} / 65</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            {props.physicalDiscomfortProps.physicalDiscomfort.q71 === "2" &&
                                <table className="table table-responsive">
                                    <tbody>

                                        <tr>
                                            <th>7.2  If "Yes" on question 7.1, which is the worst task?</th>

                                        </tr>
                                        <tr>
                                            <th><h5 style={{fontWeight:'bold'}}>Person</h5></th>
                                            <th><h5 style={{fontWeight:'bold'}}>Comment</h5></th>
                                        </tr>
                                    </tbody>

                                    <tbody>
                                        {props.physicalDiscomfortProps.physicalDiscomfort.q72a.trim().length > 0 &&
                                            <tr>
                                                <td>
                                                    <h4>{props.physicalDiscomfortProps.physicalDiscomfort.q72a}</h4>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <p>Count: {props.physicalDiscomfortProps.physicalDiscomfort.q72a.length} / 30</p>
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
                                                            value={props.physicalDiscomfortProps.physicalDiscomfort.q72a_Comm}
                                                        />
                                                    </label>
                                                    <p>Count: {props.physicalDiscomfortProps.physicalDiscomfort.q72a_Comm.length} / 65</p>
                                                </td>
                                            </tr>}

                                        {props.physicalDiscomfortProps.physicalDiscomfort.q72b.trim().length > 0 &&
                                            <tr>
                                                <td>
                                                    <h4>{props.physicalDiscomfortProps.physicalDiscomfort.q72b}</h4>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <p>Count: {props.physicalDiscomfortProps.physicalDiscomfort.q72b.length} / 30</p>
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
                                                            value={props.physicalDiscomfortProps.physicalDiscomfort.q72b_Comm}
                                                        />
                                                    </label>
                                                    <p>Count: {props.physicalDiscomfortProps.physicalDiscomfort.q72b_Comm.length} / 65</p>
                                                </td>
                                            </tr>}

                                        {props.physicalDiscomfortProps.physicalDiscomfort.q72c.trim().length > 0 &&
                                            <tr>
                                                <td>
                                                    <h4>{props.physicalDiscomfortProps.physicalDiscomfort.q72c}</h4>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <p>Count: {props.physicalDiscomfortProps.physicalDiscomfort.q72c.length} / 30</p>
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
                                                            value={props.physicalDiscomfortProps.physicalDiscomfort.q72c_Comm}
                                                        />
                                                    </label>
                                                    <p>Count: {props.physicalDiscomfortProps.physicalDiscomfort.q72c_Comm.length} / 65</p>
                                                </td>
                                            </tr>}

                                        {props.physicalDiscomfortProps.physicalDiscomfort.q72d.trim().length > 0 &&
                                            <tr>
                                                <td>
                                                    <h4>{props.physicalDiscomfortProps.physicalDiscomfort.q72d}</h4>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <p>Count: {props.physicalDiscomfortProps.physicalDiscomfort.q72d.length} / 30</p>
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
                                                            value={props.physicalDiscomfortProps.physicalDiscomfort.q72d_Comm}
                                                        />
                                                    </label>
                                                    <p>Count: {props.physicalDiscomfortProps.physicalDiscomfort.q72d_Comm.length} / 65</p>
                                                </td>
                                            </tr>}

                                        {props.physicalDiscomfortProps.physicalDiscomfort.q72e.trim().length > 0 &&
                                            <tr>
                                                <td>
                                                    <h4>{props.physicalDiscomfortProps.physicalDiscomfort.q72e}</h4>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <p>Count: {props.physicalDiscomfortProps.physicalDiscomfort.q72e.length} / 30</p>
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
                                                            value={props.physicalDiscomfortProps.physicalDiscomfort.q72e_Comm}
                                                        />
                                                    </label>
                                                    <p>Count: {props.physicalDiscomfortProps.physicalDiscomfort.q72e_Comm.length} / 65</p>
                                                </td>
                                            </tr>}
                                    </tbody>
                                </table>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <br />
            {
                useEffect(() => {
                    handleCounter(props, zero, zero, zero)
                }, [])
            }
        </div>
    );
};

const handleCounter = (props, red, yellow, green) => {
    let total = 0;
    if (colorHandler(props) == "yellow") {
        yellow = yellow + 1;
        total = 2;
    }
    else if (colorHandler(props) == "green") {
        green = green + 1;
        total = 0;
    }
    props.setRed(red);
    props.setYellow(yellow);
    props.setGreen(green);
    props.setTotal(total);
}

const colorHandler = (props) => {
    if (props.physicalDiscomfortProps.physicalDiscomfort.q71 === "2") {
        return "yellow";
    }

    if (props.physicalDiscomfortProps.physicalDiscomfort.q71 === "0") {
        return "green";
    }
}

export default connect(mapStateToProps)(PerceivedPhysicalDiscomfort);