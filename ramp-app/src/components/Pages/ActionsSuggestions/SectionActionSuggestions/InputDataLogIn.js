import React from 'react'
import InputData from '../../ActionPlan/InputData/InputData';
import { connect } from "react-redux";
import {
    setUsername,
    setPassword,
    getCredentials,
} from "../../../../actions/UserActions/userActions";

const mapStateToProps = (state) => ({
    userProps: state.userState,
});

function InputDataLogIn(props) {
    return (
        <div className='col-12' hidden={!props.userProps.user.id}> <InputData /> </div>
    )
}
export default connect(mapStateToProps, {
    setUsername,
    setPassword,
    getCredentials,
})(InputDataLogIn);