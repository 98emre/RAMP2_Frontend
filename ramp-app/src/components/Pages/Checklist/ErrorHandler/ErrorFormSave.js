import React, { useEffect, useState } from 'react'

const ErrorFormSave = (props) => {
    const [cName, setCName] = useState("");
    const [hString, setHString] = useState("");
    const [bString, setBString] = useState("");

    useEffect(() => {
        if (props.check === true) {
            setCName("alert alert-danger alert-dismissible")
            setHString("Invalid")
            setBString("Could not save");
        }
        else if (props.check === false) {
            setCName("alert alert-success alert-dismissible")
            setHString("Success")
            setBString("Successfully saved data");
        }
    });
    

    return (
        <div className="container">
            <div id='test2' className={cName} style={{ "width": "400px", "marginTop": "25px" }}>
                
                <h3><strong>{hString}</strong></h3>
                {handlerIdName(props, bString)}
                
            </div>
        </div>
    )
}

const handlerIdName = (props, bString) => {
    return <p>- {bString}</p>
}

export default ErrorFormSave;