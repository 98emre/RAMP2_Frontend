import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";

const mapStateToProps = (state) => ({
  liftingWorkProps: state.liftingWorkState,
});

const LiftingWork = (props) => {
  var colorOne = "";
  var scoreTwo = "";
  var colorTwo = "";

  const calculateScoreOne = () => {
    if (props.liftingWorkProps.liftingWork.q30 === "1") {
      if (
        props.liftingWorkProps.liftingWork.q31a != "" &&
        props.liftingWorkProps.liftingWork.q32a != "" &&
        props.liftingWorkProps.liftingWork.q33a != "" &&
        props.liftingWorkProps.liftingWork.q34a != "" &&
        props.liftingWorkProps.liftingWork.q35a != "" &&
        props.liftingWorkProps.liftingWork.q36a != "" &&
        props.liftingWorkProps.liftingWork.q37a != ""
      ) {
        var pointOne = 0;
        pointOne =
          +props.liftingWorkProps.liftingWork.q31a *
          props.liftingWorkProps.liftingWork.q32a *
          props.liftingWorkProps.liftingWork.q33a *
          props.liftingWorkProps.liftingWork.q34a *
          props.liftingWorkProps.liftingWork.q35a *
          props.liftingWorkProps.liftingWork.q36a *
          props.liftingWorkProps.liftingWork.q37a;

        if (pointOne > 5) {
          colorOne = "red";
        } else if (pointOne < 5 && pointOne > 3) {
          colorOne = "yellow";
        } else if (pointOne < 3) {
          colorOne = "green";
        }
        scoreTwo = pointOne;
        colorTwo = colorOne;
        return pointOne.toFixed(2);
      }
    }
  };

  const calculateScoreTwo = () => {
    if (props.liftingWorkProps.liftingWork.q30 === "1") {
      if (
        props.liftingWorkProps.liftingWork.q31b != "" &&
        props.liftingWorkProps.liftingWork.q32b != "" &&
        props.liftingWorkProps.liftingWork.q33b != "" &&
        props.liftingWorkProps.liftingWork.q34b != "" &&
        props.liftingWorkProps.liftingWork.q35b != "" &&
        props.liftingWorkProps.liftingWork.q36b != "" &&
        props.liftingWorkProps.liftingWork.q37b != ""
      ) {
        var pointTwo = 0;
        pointTwo =
          +props.liftingWorkProps.liftingWork.q31b *
          props.liftingWorkProps.liftingWork.q32b *
          props.liftingWorkProps.liftingWork.q33b *
          props.liftingWorkProps.liftingWork.q34b *
          props.liftingWorkProps.liftingWork.q35b *
          props.liftingWorkProps.liftingWork.q36b *
          props.liftingWorkProps.liftingWork.q37b;

        if (pointTwo > 5) {
          colorTwo = "red";
        } else if (pointTwo < 5 && pointTwo > 3) {
          colorTwo = "yellow";
        } else if (pointTwo < 3) {
          colorTwo = "green";
        }

        return pointTwo.toFixed(2);
      } else {
        if (scoreTwo != "") {
          return parseFloat(scoreTwo).toFixed(2);
        }
      }
    }
  };

  const handleCounter = () => {
    var score1 = calculateScoreOne();
    var score2 = calculateScoreTwo();
    let red = 0;
    let yellow = 0;
    let green = 0;
    let total = 0;
    if (props.liftingWorkProps.liftingWork.q30 === "1") {
      if (colorOne == "red") {
        red = red + 1;
      } else if (colorOne == "yellow") {
        yellow = yellow + 1;
      } else if (colorOne == "green") {
        green = green + 1;
      }
      if (colorOne == "red" || colorOne == "yellow" || colorOne == "green") {
        total = total + parseFloat(score1);
      }

      if (colorTwo == "red") {
        red = red + 1;
      } else if (colorTwo == "yellow") {
        yellow = yellow + 1;
      } else if (colorTwo == "green") {
        green = green + 1;
      }
      if (colorTwo == "red" || colorTwo == "yellow" || colorTwo == "green") {
        total = total + parseFloat(score2);
      }
    } else if (props.liftingWorkProps.liftingWork.q30 === "0") {
      green = green + 1;
    }

    props.setRed(red);
    props.setYellow(yellow);
    props.setGreen(green);
    props.setTotal(total);
  };

  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="liftingWork">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-liftingWork"
            aria-expanded="false"
            aria-controls="flush-liftingWork"
          >
            3. Lifting Work
          </button>
        </h2>
        <div
          id="flush-liftingWork"
          className="accordion-collapse collapse"
          aria-labelledby="liftingWork"
          data-bs-parent="#liftingWork"
        >
          <div className="accordion-body bg-white">
            <div className="card-body bg-white">
              <table className="table table-responsive">
                <tbody>
                  <tr>
                    <td>
                      <h3 style={{ fontWeight: "bold" }}>3. Lifting Work</h3>
                    </td>
                    <td>
                      <h4 style={{ fontWeight: "bold" }}>Score</h4>
                    </td>
                    <td>
                      <h4 style={{ fontWeight: "bold" }}> Assessment</h4>
                    </td>
                    <td>
                      <h4 style={{ fontWeight: "bold" }}>User Comment</h4>
                    </td>
                  </tr>
                </tbody>

                {props.liftingWorkProps.liftingWork.q30 === "0" && (
                  <tbody>
                    <tr>
                      <th style={{ fontSize: 20, color: "#1954A6" }}>
                        3.0 Does lifting occur?
                      </th>
                      <td>
                        <label className="badge text-dark score">
                          {" "}
                          {props.liftingWorkProps.liftingWork.q30}
                        </label>
                      </td>
                      <td style={{ background: "green" }}></td>
                      <td>No Need For Comment</td>
                    </tr>
                  </tbody>
                )}

                {props.liftingWorkProps.liftingWork.q30 !== "0" && (
                  <tbody>
                    <tr>
                      <th style={{ fontSize: 20, color: "#1954A6" }}>
                        3.1 Lifting work (average case)
                      </th>
                      <td>
                        <label className="badge text-dark score">
                          {calculateScoreOne() || "0.00"}
                        </label>
                      </td>
                      <td>
                        <div
                          className="rectangle"
                          style={{
                            width: 75,
                            height: 50,
                            backgroundColor: colorOne,
                          }}
                        />
                      </td>
                      <td>
                        <label className="badge text-dark">
                          <textarea
                            className="form-control"
                            style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                            readOnly
                            placeholder="No comment"
                            disabled={true}
                            type="text"
                            maxLength={65}
                            value={props.liftingWorkProps.liftingWork.q31_averageComm}
                          />
                        </label>
                        <p>Count: {props.liftingWorkProps.liftingWork.q31_averageComm.length} / 65</p>
                      </td>
                    </tr>
                    <tr>
                      <th style={{ fontSize: 20, color: "#1954A6" }}>
                        3.2 Lifting work (worst case)
                      </th>
                      <td>
                        <label className="badge text-dark score">
                          {calculateScoreTwo() || "0.00"}
                        </label>
                      </td>
                      <td>
                        <div
                          className="rectangle"
                          style={{
                            width: 75,
                            height: 50,
                            backgroundColor: colorTwo,
                          }}
                        />
                      </td>
                      <td>
                        <label className="badge text-dark">
                          <textarea
                            className="form-control"
                            style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                            readOnly
                            placeholder="No comment"
                            disabled={true}
                            type="text"
                            maxLength={65}
                            value={props.liftingWorkProps.liftingWork.q31_worstComm}
                          />
                        </label>
                        <p>Count: {props.liftingWorkProps.liftingWork.q31_worstComm.length} / 65</p>
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
      <br />
      {useEffect(() => {
        handleCounter();
      }, [])}
    </div>
  );
};

export default connect(mapStateToProps, {})(LiftingWork);
