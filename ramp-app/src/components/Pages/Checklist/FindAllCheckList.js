import React, { useState } from 'react'
import { connect } from 'react-redux';
import { GetAllCheckList } from "../../../actions/findAllActions/findAllCheckListActions";

const mapStateToProps = (state) => ({
    findAllCheckListProps: state.findAllCheckListState,
    userProps: state.userState,
}); 

const FindAllCheckList = (props) => {

    const [checked, setChecked] = useState(false);

    return (
        <div
            className="modal fade"
            id="FindAllList"
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
                            <h2 className="text-primary">Check out all your checklists</h2>
                            <div className="col">
                                <div className="form-group col">
                                    <label className="badge text-dark">
                                        Click Get To Access Your Checklist
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
                                            {props.findAllCheckListProps.allCheckList.map((list) => {
                                                return (
                                                    <tr key={list.id}>
                                                        <td>{list.id_name}</td>
                                                        <td>{list.inputData.date}</td>
                                                    </tr>
                                                );
                                            })}
                                            {props.findAllCheckListProps.allCheckList.length === 0 &&
                                                <tr>
                                                    <td>You have no checklists</td>
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
                            onClick={(e) => {
                                e.preventDefault();
                                props.GetAllCheckList(props.userProps.token, props.userProps.user.id);
                                setChecked(true);
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

export default connect(mapStateToProps, { GetAllCheckList })(FindAllCheckList)