import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import React from "react";
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
    otherCommentProps: state.otherCommentState
});

const OtherComment = (props, lightBg) => {
    return (
        <>
            <tr style={{ fontSize: '18px' }} className='bg-primary text-white'>
                <th scope='row'>Other comments</th>
            </tr>
        </>
    )
};

export default connect(mapStateToProps)(OtherComment);
