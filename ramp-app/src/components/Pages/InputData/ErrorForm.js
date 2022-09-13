import React from "react";

const ErrorForm = (props) => {
    return (
        <div className="modal">
            <header className="header">
                <h2>{props.title}</h2>
            </header>

            <div className="content">
                <p>{props.message}</p>
            </div>
            
            <footer className="action">
                <button className="button" onClick={props.onConfirm}><p>Okay</p></button>
            </footer>
        </div>
    );
};

export default ErrorForm;