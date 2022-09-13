import React, { useState } from 'react'
import { connect } from 'react-redux';
import { GetAllActionPlan } from "../../../actions/findAllActions/findAllActionPlanActions";

const mapStateToProps = (state) => ({
    findAllActionsProps: state.findAllActionPlanState,
    userProps: state.userState,
});

const FindAllActionPlan = (props) => {

    const [checked, setChecked] = useState(false);
    console.log("ss ", props.findAllActionsProps.allActionPlan.length);
    return (
        <div
            className="modal fade"
            id="FindAllActionPlan"
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
                            <h2 className="text-primary">Find all Action plans</h2>
                            <div className="col">
                                <div className="form-group col">
                                    <label className="badge text-dark">
                                        Click Get To Access Your Action Plan
                                    </label>
                                    <br />
                                    <br />
                                    <br />
                                    {checked && <table className='table table-striped table-dark'>
                                        <thead className='thead thead-dark'>
                                            <tr className='thead-dark'>
                                                <th scope='col' className='text-primary'>ID names</th>
                                                <th scope='col' className='text-primary'>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {props.findAllActionsProps.allActionPlan.length != 0 && props.findAllActionsProps.allActionPlan.map((list) => {
                                                return (
                                                    <tr key={list.id}>
                                                        <td>{list.id_name}</td>
                                                        <td>{list.date}</td>
                                                    </tr>
                                                );
                                            })}
                                            {props.findAllActionsProps.allActionPlan.length === 0 &&
                                                <tr>
                                                    <td>You have no action plans</td>
                                                    <td></td>
                                                </tr>
                                            }
                                        </tbody>
                                    </table>}


                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger "
                            data-bs-dismiss="modal"
                            onClick={() => {
                                setChecked(false);
                            }}
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            variant="primary"
                            onClick={(e) => {
                                e.preventDefault();
                                setChecked(true);
                                props.GetAllActionPlan(props.userProps.token, props.userProps.user.id);
                            }}
                        >
                            Get
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, { GetAllActionPlan })(FindAllActionPlan)