import React from 'react'

const ErrorFormIdName = (props) => {
    return (
        <div className="container">
            <div className="alert alert-danger alert-dismissible" style={{ "width": "400px", "marginTop": "25px" }}>
                <h3><strong>Invalid</strong></h3>
                {handlerIdName(props)}
                
            </div>
        </div>
    )
}

const handlerIdName = (props) => {
    if (props.idName.trim().length === 0) {
        return <p>- Assessment name can't be empty</p>
    }
}

export default ErrorFormIdName;