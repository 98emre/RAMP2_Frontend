import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";

const mapStateToProps = (state) => ({
    physicallyStrenousWorkProps: state.physicallyStrenuousWorkState
});


const PhysicallyStrenousWork = (props) => {
    const zero = 0;
    return (
        <div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-physicallyStrenousWork" aria-expanded="false" aria-controls="flush-physicallyStrenousWork">
                        6. Physically Strenous Work
                    </button>
                </h2>
                <div id="flush-physicallyStrenousWork" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#physicallyStrenousWork">
                    <div className="accordion-body bg-white">
                        <div className="card-body bg-white">
                            <table className="table table-responsive">
                                <tbody>
                                    <tr>
                                        <td><h3 style={{ "fontWeight": "bold" }}>6. Reports On Physically Strenous Work</h3></td>
                                        <td><h4 style={{ "fontWeight": "bold" }}>Score</h4></td>
                                        <td><h4 style={{ "fontWeight": "bold" }}> Assessment</h4></td>
                                        <td><h4 style={{ "fontWeight": "bold" }}>User Comment</h4></td>
                                    </tr>
                                </tbody>

                                <tbody>
                                    <tr>
                                        <th style={{ fontSize: 20, color: '#1954A6' }}>6.1 Do documented reports exist on physically strenuous tasks when carrying out the work task?</th>
                                        <td >
                                            <label className="badge text-dark score">
                                                {props.physicallyStrenousWorkProps.physicallyStrenuousWork.q61}
                                            </label>
                                        </td>
                                        <td >
                                            <div
                                                className="rectangle"
                                                style={{
                                                    width: 75,
                                                    height: 50,
                                                    backgroundColor:colorHandler(props)
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
                                                    value={props.physicallyStrenousWorkProps.physicallyStrenuousWork.q61_Comm}
                                                />
                                            </label>
                                            <p>Count: {props.physicallyStrenousWorkProps.physicallyStrenuousWork.q61_Comm.length} / 65</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            {props.physicallyStrenousWorkProps.physicallyStrenuousWork.q61 === "2" && <table className="table table-responsive">
                                <tbody>
                                    <tr>
                                        <th>6.2   If "Yes" on 6.1 , what type of work  that has led to this (mark with an "x")? If "No", go to 7.</th>
                                        <td><p style={{ "fontWeight": "bold" }}>Status</p></td>
                                        <td><p style={{ "fontWeight": "bold" }}>User Comment</p></td>
                                    </tr>

                                </tbody>

                                <tbody>
                                    <tr></tr>
                                    {props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62a === "1" &&
                                        <tr>
                                            <td><h5 style={{fontWeight:'bold'}}>Lifting</h5></td>
                                            <td>
                                                <input
                                                    style={{ "height": "30px", "width": "30px" }}
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="q62a"
                                                    id="q62a"
                                                    checked disabled
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
                                                        value={props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62a_Comm}
                                                    />
                                                </label>
                                                <p>Count: {props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62a_Comm.length} / 65</p>
                                            </td>
                                        </tr>
                                    }

                                    {props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62b === "1" &&
                                        <tr>
                                            <td><h5 style={{fontWeight:'bold'}}>Holding/Carrying</h5></td>
                                            <td>
                                                <input
                                                    style={{ "height": "30px", "width": "30px" }}
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="q62b"
                                                    id="q62b"
                                                    checked disabled
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
                                                        value={props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62b_Comm}
                                                    />
                                                </label>
                                                <p>Count: {props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62b_Comm.length} / 65</p>
                                            </td>
                                        </tr>
                                    }
                                    {props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62c === "1" &&
                                        <tr>
                                            <td><h5 style={{fontWeight:'bold'}}>Pushing/Pulling</h5></td>
                                            <td>
                                                <input
                                                    style={{ "height": "30px", "width": "30px" }}
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="q62c"
                                                    id="q62c"
                                                    checked disabled
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
                                                        value={props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62c_Comm}
                                                    />
                                                </label>
                                                <p>Count: {props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62c_Comm.length} / 65</p>
                                            </td>                                        </tr>
                                    }

                                    {props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62d === "1" &&

                                        <tr>
                                            <td><h5 style={{fontWeight:'bold'}}>Pushing With Hand Or Fingers</h5></td>
                                            <td>
                                                <input
                                                    style={{ "height": "30px", "width": "30px" }}
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="q62d"
                                                    id="q62d"
                                                    checked disabled
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
                                                        value={props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62d_Comm}
                                                    />
                                                </label>
                                                <p>Count: {props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62d_Comm.length} / 65</p>
                                            </td>
                                        </tr>
                                    }

                                    {props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62e === "1" &&

                                        <tr>
                                            <td><h5 style={{fontWeight:'bold'}}>Other:(If Any, Please Replease This Text)</h5></td>
                                            <td>
                                                <input
                                                    style={{ "height": "30px", "width": "30px" }}
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="q62e"
                                                    id="q62e"
                                                    checked disabled
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
                                                        value={props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62e_Comm}
                                                    />
                                                </label>
                                                <p>Count: {props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62e_Comm.length} / 65</p>
                                            </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>}
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
        </div >
    );
};
const handleCounter = (props, red, yellow, green) => {
    let total = 0;
    if (colorHandler(props) == "yellow") {
        yellow = yellow + 1;
        total = 2;
    }
    else if ((colorHandler(props) == "green")) {
        green = green + 1;
        total = 0;
    }
    props.setRed(red);
    props.setYellow(yellow);
    props.setGreen(green);
    props.setTotal(total);
}

const colorHandler = (props) => {
    if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q61 == "2") {
        return "yellow";
    }

    if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q61 == "0") {
        return "green";
    }
}

export default connect(mapStateToProps)(PhysicallyStrenousWork);