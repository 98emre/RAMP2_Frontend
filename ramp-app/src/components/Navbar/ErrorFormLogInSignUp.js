import React from 'react'

const ErrorFormLogInSignUp = (props) => {
    return (
        <div className="container">
            <div className="alert alert-danger alert-dismissible" style={{ "width": "330px", "marginTop": "25px" }}>
                <h4><strong>{props.type} attempt failed</strong></h4>
                {handlerIdName(props)}
                {handlerPassword(props)}
                {handlerPasswordConfirmed(props)}
            </div>
        </div>
    )
}

const handlerIdName = (props) => {
    if (props.idName !== undefined) {
        if (props.idName !== null) {
            if (props.idName.trim().length === 0) {
                return <p>- Email can't be empty</p>
            }
        }
    }
}

const handlerPassword = (props) => {
    if (props.formpassword !== undefined) {
        if (props.formpassword !== null) {
            if (props.formpassword.trim().length === 0) {
                return <p>- Password can't be empty</p>
            }
        }
    }
}

const handlerPasswordConfirmed = (props) => {
    if (props.formpasswordConfirmed !== undefined) {
        if (props.formpasswordConfirmed !== null) {
            if (props.formpasswordConfirmed.trim().length === 0) {
                return <p>- Confirm password can't be empty</p>
            } else {
                return <p>- Confirm password doesn't match</p>
            }
        }
    }
}

export default ErrorFormLogInSignUp;