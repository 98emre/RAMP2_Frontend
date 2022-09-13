import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  otherCommentProps: state.otherCommentState
});

const OtherComment = (props) => {
  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingEight">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-otherComment" aria-expanded="false" aria-controls="flush-otherComment">
            Other Comment
          </button>
        </h2>
        <div id="flush-otherComment" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#otherComment">
          <div className="accordion-body bg-white">
            <div className="card-body bg-white">
              <textarea
                className="form-control"
                style={{ "height": "300px", "resize": "none", "borderRadius": "1%", "border":"3px solid black" }}
                disabled={true}
                name="otherComment"
                id="otherComment"
                placeholder="No comment"
                value={props.otherCommentProps.otherComment.text}
                maxLength="2000"
              />
              <p style={{"fontWeight":"bold"}}>Count: {props.otherCommentProps.otherComment.text.length} / 2000</p>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default connect(mapStateToProps)(OtherComment);