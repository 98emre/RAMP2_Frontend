import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import React from "react";
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
    physicalDiscomfortActionsProps: state.physicalDiscomfortActionsState,
    physicalDiscomfortProps: state.physicalDiscomfortState,
});

const PerceivedPhysicalDiscomfort = (props, lightBg) => {
    return (
        <>
            <tr style={{ fontSize: '18px' }} className='bg-primary text-white'>
                <th scope='row'>7. Perceived physical discomfort</th>
            </tr>
            <tr style={{ fontSize: '14px' }} hidden={!colorHandler(props)}>
                <th scope='row'>7.1 Perceived physical discomfort</th>
                <td>
                    <div
                        className="rectangle"
                        style={{
                            width: 75,
                            height: 50,
                            backgroundColor: colorHandler(props),
                        }}
                    />
                </td>
                <td><h3>{props.physicalDiscomfortProps.physicalDiscomfort.q71}</h3></td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.physicalDiscomfortProps.physicalDiscomfort.q71_Comm}
                    />
                </td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.physicalDiscomfortActionsProps.physicalDiscomfortActions.plannedActions71}
                    />
                </td>
                <td>{props.physicalDiscomfortActionsProps.physicalDiscomfortActions.date71}</td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.physicalDiscomfortActionsProps.physicalDiscomfortActions.byWhom71}
                    />
                </td>
                <td>{props.physicalDiscomfortActionsProps.physicalDiscomfortActions.readyDate71}</td>
                <td>{props.physicalDiscomfortActionsProps.physicalDiscomfortActions.followUpDate71}</td>
                <td>
                    <button type="button" disabled={!colorHandler(props)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal71">
                        Action Plan Details
                    </button>
                </td>
            </tr>
        </>
    )
};
const colorHandler = (props) => {
    if (props.physicalDiscomfortProps.physicalDiscomfort.q71 === "2") {
        return "yellow";
    }

    if (props.physicalDiscomfortProps.physicalDiscomfort.q71 === "0") {
        return "green";
    }
}

export default connect(mapStateToProps)(PerceivedPhysicalDiscomfort);
