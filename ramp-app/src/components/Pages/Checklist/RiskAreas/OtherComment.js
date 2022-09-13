import React from "react";
import { connect } from "react-redux";
import {
  setOtherComment,
  setId,
  setText,
} from "../../../../actions/riskAreaActions/otherCommentActions";
const mapStateToProps = (state) => ({
  otherCommentProps: state.otherCommentState,
  checklistProps: state.checklistState,
});

const OtherComment = (props) => {
  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingEight">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-otherComment"
            aria-expanded="false"
            aria-controls="flush-otherComment"
          >
            Other Comment
          </button>
        </h2>
        <div
          id="flush-otherComment"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingEight"
          data-bs-parent="#otherComment"
        >
          <div className="accordion-body bg-white">
            <fieldset disabled={props.checklistProps.completion}>
              <div className="card-body bg-white">
                <textarea
                  style={{
                    height: "300px",
                    resize: "none",
                    borderRadius: "1%",
                    border: "3px solid black",
                  }}
                  id="otherComment"
                  className="form-control"
                  name="otherComment"
                  placeholder="Other comments ..."
                  maxLength="2000"
                  value={props.otherCommentProps.otherComment.text}
                  onChange={(event) => {
                    props.setText(event.target.value);
                  }}
                />
                <p>{props.otherCommentProps.otherComment.text.length} / 2000</p>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default connect(mapStateToProps, {
  setOtherComment,
  setId,
  setText,
})(OtherComment);
