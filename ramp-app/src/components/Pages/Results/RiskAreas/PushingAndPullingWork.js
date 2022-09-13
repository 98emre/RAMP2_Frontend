import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";

const mapStateToProps = (state) => ({
  pushingAndPullingProps: state.pushingAndPullingState,
});

const PushingAndPullingWork = (props) => {
  var colorOne = "";
  var colorTwo = "";
  var scoreOne = 0;

  const calculateScoreOne = () => {
    if (props.pushingAndPullingProps.pushingAndPulling.q40 === "1") {
      if (
        props.pushingAndPullingProps.pushingAndPulling.q41a != "" &&
        props.pushingAndPullingProps.pushingAndPulling.q42a != "" &&
        props.pushingAndPullingProps.pushingAndPulling.q43a != "" &&
        props.pushingAndPullingProps.pushingAndPulling.q44a != "" &&
        props.pushingAndPullingProps.pushingAndPulling.q45a != "" &&
        props.pushingAndPullingProps.pushingAndPulling.q46a != "" &&
        props.pushingAndPullingProps.pushingAndPulling.q47a != "" &&
        props.pushingAndPullingProps.pushingAndPulling.q48a != "" &&
        props.pushingAndPullingProps.pushingAndPulling.q49a != ""
      ) {
        var pointOne = 0;
        var pointTwo = 0;
        pointOne =
          +props.pushingAndPullingProps.pushingAndPulling.q41a *
          props.pushingAndPullingProps.pushingAndPulling.q42a *
          props.pushingAndPullingProps.pushingAndPulling.q43a *
          props.pushingAndPullingProps.pushingAndPulling.q44a *
          props.pushingAndPullingProps.pushingAndPulling.q45a *
          props.pushingAndPullingProps.pushingAndPulling.q46a *
          props.pushingAndPullingProps.pushingAndPulling.q47a *
          props.pushingAndPullingProps.pushingAndPulling.q48a *
          props.pushingAndPullingProps.pushingAndPulling.q49a;

        if (
          props.pushingAndPullingProps.pushingAndPulling.q41b != "" &&
          props.pushingAndPullingProps.pushingAndPulling.q42b != "" &&
          props.pushingAndPullingProps.pushingAndPulling.q43b != "" &&
          props.pushingAndPullingProps.pushingAndPulling.q44b != "" &&
          props.pushingAndPullingProps.pushingAndPulling.q45b != "" &&
          props.pushingAndPullingProps.pushingAndPulling.q46b != "" &&
          props.pushingAndPullingProps.pushingAndPulling.q47b != "" &&
          props.pushingAndPullingProps.pushingAndPulling.q48b != "" &&
          props.pushingAndPullingProps.pushingAndPulling.q49b != ""
        ) {
          pointTwo =
            +props.pushingAndPullingProps.pushingAndPulling.q41b *
            props.pushingAndPullingProps.pushingAndPulling.q42b *
            props.pushingAndPullingProps.pushingAndPulling.q43b *
            props.pushingAndPullingProps.pushingAndPulling.q44b *
            props.pushingAndPullingProps.pushingAndPulling.q45b *
            props.pushingAndPullingProps.pushingAndPulling.q46b *
            props.pushingAndPullingProps.pushingAndPulling.q47b *
            props.pushingAndPullingProps.pushingAndPulling.q48b *
            props.pushingAndPullingProps.pushingAndPulling.q49b;
        }

        if (pointOne > pointTwo) {
          if (pointOne > 5) {
            colorOne = "red";
          } else if (pointOne < 5 && pointOne > 3) {
            colorOne = "yellow";
          } else if (pointOne < 3 && pointOne > 0) {
            colorOne = "green";
          }
          scoreOne = pointOne.toFixed(2);
          return pointOne.toFixed(2);
        } else {
          if (pointTwo > 5) {
            colorOne = "red";
          } else if (pointTwo < 5 && pointTwo > 3) {
            colorOne = "yellow";
          } else if (pointTwo < 3 && pointTwo > 0) {
            colorOne = "green";
          }
          scoreOne = pointTwo.toFixed(2);
          return pointTwo.toFixed(2);
        }
      }
    }
  };

  const calculateScoreTwo = () => {
    if (props.pushingAndPullingProps.pushingAndPulling.q40 === "1") {
      if (
        props.pushingAndPullingProps.pushingAndPulling.q41c != "" &&
        props.pushingAndPullingProps.pushingAndPulling.q42c != "" &&
        props.pushingAndPullingProps.pushingAndPulling.q43c != "" &&
        props.pushingAndPullingProps.pushingAndPulling.q44c != "" &&
        props.pushingAndPullingProps.pushingAndPulling.q45c != "" &&
        props.pushingAndPullingProps.pushingAndPulling.q46c != "" &&
        props.pushingAndPullingProps.pushingAndPulling.q47c != "" &&
        props.pushingAndPullingProps.pushingAndPulling.q48c != "" &&
        props.pushingAndPullingProps.pushingAndPulling.q49c != ""
      ) {
        var pointThree = 0;
        var pointFour = 0;

        pointThree =
          +props.pushingAndPullingProps.pushingAndPulling.q41c *
          props.pushingAndPullingProps.pushingAndPulling.q42c *
          props.pushingAndPullingProps.pushingAndPulling.q43c *
          props.pushingAndPullingProps.pushingAndPulling.q44c *
          props.pushingAndPullingProps.pushingAndPulling.q45c *
          props.pushingAndPullingProps.pushingAndPulling.q46c *
          props.pushingAndPullingProps.pushingAndPulling.q47c *
          props.pushingAndPullingProps.pushingAndPulling.q48c *
          props.pushingAndPullingProps.pushingAndPulling.q49c;

        if (
          props.pushingAndPullingProps.pushingAndPulling.q41d != "" &&
          props.pushingAndPullingProps.pushingAndPulling.q42d != "" &&
          props.pushingAndPullingProps.pushingAndPulling.q43d != "" &&
          props.pushingAndPullingProps.pushingAndPulling.q44d != "" &&
          props.pushingAndPullingProps.pushingAndPulling.q45d != "" &&
          props.pushingAndPullingProps.pushingAndPulling.q46d != "" &&
          props.pushingAndPullingProps.pushingAndPulling.q47d != "" &&
          props.pushingAndPullingProps.pushingAndPulling.q48d != "" &&
          props.pushingAndPullingProps.pushingAndPulling.q49d != ""
        ) {
          pointFour =
            +props.pushingAndPullingProps.pushingAndPulling.q41d *
            props.pushingAndPullingProps.pushingAndPulling.q42d *
            props.pushingAndPullingProps.pushingAndPulling.q43d *
            props.pushingAndPullingProps.pushingAndPulling.q44d *
            props.pushingAndPullingProps.pushingAndPulling.q45d *
            props.pushingAndPullingProps.pushingAndPulling.q46d *
            props.pushingAndPullingProps.pushingAndPulling.q47d *
            props.pushingAndPullingProps.pushingAndPulling.q48d *
            props.pushingAndPullingProps.pushingAndPulling.q49d;
        }

        if (pointThree > pointFour) {
          if (pointThree > 5) {
            colorTwo = "red";
          } else if (pointThree < 5 && pointThree > 3) {
            colorTwo = "yellow";
          } else if (pointThree < 3 && pointThree > 0) {
            colorTwo = "green";
          }

          return pointThree.toFixed(2);
        } else {
          if (pointFour > 5) {
            colorTwo = "red";
          } else if (pointFour < 5 && pointFour > 3) {
            colorTwo = "yellow";
          } else if (pointFour < 3 && pointFour > 0) {
            colorTwo = "green";
          }
          return pointFour.toFixed(2);
        }
      } else {
        if (scoreOne != 0) {
          colorTwo = colorOne;
          return parseFloat(scoreOne).toFixed(2);
        } else {
          return "";
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
    if (props.pushingAndPullingProps.pushingAndPulling.q40 === "1") {
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
    } else if (props.pushingAndPullingProps.pushingAndPulling.q40 === "0") {
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
        <h2 className="accordion-header" id="pushingAndPulling">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-pushingAndPulling"
            aria-expanded="false"
            aria-controls="flush-pushingAndPulling"
          >
            4. Pushing And Pulling Work
          </button>
        </h2>
        <div
          id="flush-pushingAndPulling"
          className="accordion-collapse collapse"
          aria-labelledby="pushingAndPulling"
          data-bs-parent="#pushingAndPulling"
        >
          <div className="accordion-body bg-white">
            <div className="card-body bg-white">
              <table className="table table-responsive">
                <tbody>
                  <tr>
                    <td>
                      <h3 style={{ fontWeight: "bold" }}>
                        4. Pushing And Pulling Work
                      </h3>
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

                {props.pushingAndPullingProps.pushingAndPulling.q40 === "0" && <tbody>
                  <tr>
                    <th style={{ fontSize: 20, color: '#1954A6' }}>4.0 Does pushing and pulling work occur?</th>
                    <td >
                      <label className="badge text-dark score"> {props.pushingAndPullingProps.pushingAndPulling.q40}</label>
                    </td>
                    <td style={{ "background": "green" }}></td>
                    <td>No Need For Comment</td>
                  </tr>
                </tbody>}

                {props.pushingAndPullingProps.pushingAndPulling.q40 !== "0" && <tbody>
                  <tr>
                    <th style={{ fontSize: 20, color: "#1954A6" }}>
                      4.1 Pushing and pulling work (average case){" "}
                    </th>
                    <td>{calculateScoreOne()}</td>
                    <td>
                      {" "}
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
                      <textarea
                        className="form-control"
                        style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                        readOnly
                        placeholder="Comment"
                        disabled={true}
                        type="text"
                        maxLength={65}
                        value={
                          props.pushingAndPullingProps.pushingAndPulling
                            .q41_averageComm
                        }
                      />
                      <p>Count: {props.pushingAndPullingProps.pushingAndPulling.q41_averageComm.length} / 65</p>
                    </td>
                  </tr>
                  <tr>
                    <th style={{ fontSize: 20, color: "#1954A6" }}>
                      4.2 Pushing and pulling work (worst case)
                    </th>
                    <td>{calculateScoreTwo()}</td>
                    <td>
                      {" "}
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
                      <textarea
                        className="form-control"
                        style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                        readOnly
                        placeholder="Comment"
                        disabled={true}
                        type="text"
                        maxLength={65}
                        value={
                          props.pushingAndPullingProps.pushingAndPulling
                            .q41_worstComm
                        }
                      />
                      <p>Count: {props.pushingAndPullingProps.pushingAndPulling.q41_worstComm.length} / 65</p>
                    </td>
                  </tr>
                </tbody>}
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

export default connect(mapStateToProps, {})(PushingAndPullingWork);
