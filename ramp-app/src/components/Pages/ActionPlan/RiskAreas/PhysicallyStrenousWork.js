import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import React from "react";
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
    physicallyStrenuousWorkActionsProps: state.physicallyStrenuousWorkActionsState,
    physicallyStrenousWorkProps: state.physicallyStrenuousWorkState
});

const PhysicallyStrenousWork = (props, lightBg) => {
    return (
        <>
            <tr style={{ fontSize: '18px' }} className='bg-primary text-white'>
                <th scope='row'>6. Reports on physically strenuous work</th>
            </tr>
            <tr style={{ fontSize: '14px' }} hidden={!colorHandler(props)}>
                <th scope='row'>6.1 Documented reports on physically strenuous tasks</th>
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
                <td><h3>{props.physicallyStrenousWorkProps.physicallyStrenuousWork.q61}</h3></td>
                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.physicallyStrenousWorkProps.physicallyStrenuousWork.q61_Comm}
                    />
                </td>

                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions.plannedActions61}
                    />
                </td>

                <td>{props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions.date61}</td>

                <td>
                    <textarea
                        style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
                        type="text"
                        readOnly
                        disabled={true}
                        value={props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions.byWhom61}
                    />
                </td>

                <td>{props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions.readyDate61}</td>
                <td>{props.physicallyStrenuousWorkActionsProps.physicallyStrenuousWorkActions.followUpDate61}</td>
                <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal61">
                        Action Plan Details
                    </button>
                </td>
            </tr>
        </>
    )
};
const colorHandler = (props) => {
    if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q61 == 2) {
        return "yellow";
    }

    if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q61 == 0) {
        return "green";
    }
}
export default connect(mapStateToProps)(PhysicallyStrenousWork);
