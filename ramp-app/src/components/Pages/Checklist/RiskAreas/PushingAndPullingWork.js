import React from "react";
import { connect } from "react-redux";
import {
  setQ40,
  setQ41A,
  setQ41B,
  setQ41C,
  setQ41D,
  setQ42A,
  setQ42B,
  setQ42C,
  setQ42D,
  setQ43A,
  setQ43B,
  setQ43C,
  setQ43D,
  setQ44A,
  setQ44B,
  setQ44C,
  setQ44D,
  setQ45A,
  setQ45B,
  setQ45C,
  setQ45D,
  setQ46A,
  setQ46B,
  setQ46C,
  setQ46D,
  setQ47A,
  setQ47B,
  setQ47C,
  setQ47D,
  setQ48A,
  setQ48B,
  setQ48C,
  setQ48D,
  setQ49A,
  setQ49B,
  setQ49C,
  setQ49D,
  setQ41AverageComm,
  setQ41WorstComm,
} from "../../../../actions/riskAreaActions/pushingAndPullingActions";

const mapStateToProps = (state) => ({
  pushingAndPullingProps: state.pushingAndPullingState,
  checklistProps: state.checklistState,
});

const PushingAndPullingWork = (props) => {
  var colorOne = "";
  var colorTwo = "";
  var scoreOne = 0;
  var scoreTwo = 0;
  var scoreThree = 0;
  var scoreFour = 0;
  var isWorstCaseOneUsed = false;
  var isWorstCaseTwoUsed = false;

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

        scoreOne = pointOne;
        return pointOne.toFixed(2);
      }
    }
  };

  const calculateScoreTwo = () => {
    if (props.pushingAndPullingProps.pushingAndPulling.q40 === "1") {
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
        var pointTwo = 0;
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

        scoreTwo = pointTwo;
        return pointTwo.toFixed(2);
      }
    }
  };

  const calculateScoreThree = () => {
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

        scoreThree = pointThree;
        isWorstCaseOneUsed = true;
        return pointThree.toFixed(2);
      }
    }
  };

  const calculateScoreFour = () => {
    if (props.pushingAndPullingProps.pushingAndPulling.q40 === "1") {
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
        var pointFour = 0;
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

        scoreFour = pointFour;
        isWorstCaseTwoUsed = true;
        return pointFour.toFixed(2);
      }
    }
  };

  const calculateMasterScoreOne = () => {
    if (scoreOne > scoreTwo) {
      if (scoreOne > 5) {
        colorOne = "red";
      } else if (scoreOne < 5 && scoreOne > 3) {
        colorOne = "yellow";
      } else if (scoreOne < 3 && scoreOne > 0) {
        colorOne = "green";
      }
      colorTwo = colorOne;

      if (scoreOne != 0) {
        return scoreOne.toFixed(2);
      } else {
        return "";
      }
    } else {
      if (scoreTwo > 5) {
        colorOne = "red";
      } else if (scoreTwo < 5 && scoreTwo > 3) {
        colorOne = "yellow";
      } else if (scoreTwo < 3 && scoreTwo > 0) {
        colorOne = "green";
      }
      colorTwo = colorOne;

      if (scoreTwo != 0) {
        return scoreTwo.toFixed(2);
      } else {
        return "";
      }
    }
  };

  const calculateMasterScoreTwo = () => {
    if (
      (isWorstCaseOneUsed && scoreThree != 0) ||
      (isWorstCaseTwoUsed && scoreFour != 0)
    ) {
      if (scoreThree > scoreFour) {
        if (scoreThree > 5) {
          colorTwo = "red";
        } else if (scoreThree < 5 && scoreThree > 3) {
          colorTwo = "yellow";
        } else if (scoreThree < 3 && scoreThree > 0) {
          colorTwo = "green";
        }

        return scoreThree.toFixed(2);
      } else {
        if (scoreFour > 5) {
          colorTwo = "red";
        } else if (scoreFour < 5 && scoreFour > 3) {
          colorTwo = "yellow";
        } else if (scoreFour < 3 && scoreFour > 0) {
          colorTwo = "green";
        }
        return scoreFour.toFixed(2);
      }
    } else {
      if (scoreOne > scoreTwo) {
        if (scoreOne != 0) {
          return scoreOne.toFixed(2);
        } else {
          return "";
        }
      } else {
        if (scoreTwo != 0) {
          return scoreTwo.toFixed(2);
        } else {
          return "";
        }
      }
    }
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
              <fieldset disabled={props.checklistProps.completion}>
                <table className="table table-responsive">
                  <tbody>
                    <tr>
                      <td>
                        <h3 style={{ fontWeight: "bold" }}>
                          4. Pushing And Pulling Work
                        </h3>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p style={{ fontWeight: "bold" }}>
                          4.0 Does pushing and pulling work occur?
                        </p>
                      </td>
                      <td>
                        <input
                          checked={
                            props.pushingAndPullingProps.pushingAndPulling
                              .q40 === "1"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q40a"
                          id="q40a1"
                          value="option1"
                        />
                        <label
                          onClick={() => props.setQ40("1")}
                          className="btn btn-outline-warning"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>
                        <input
                          checked={
                            props.pushingAndPullingProps.pushingAndPulling
                              .q40 === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q40a"
                          id="q40a2"
                          value="option2"
                        />
                        <label
                          onClick={() => resetValues(props)}
                          className="btn btn-outline-success"
                          htmlFor="option2"
                        >
                          <h5 style={{ fontWeight: "bold" }}>No</h5>
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </fieldset>
              <img
                hidden={
                  props.pushingAndPullingProps.pushingAndPulling.q40 !== "1"
                }
                src={require("../../Checklist/checklistPictures/q401.png")}
              ></img>
              <img
                hidden={
                  props.pushingAndPullingProps.pushingAndPulling.q40 !== "1"
                }
                src={require("../../Checklist/checklistPictures/q402.png")}
              ></img>
              {props.pushingAndPullingProps.pushingAndPulling.q40 === "1" && (
                <>
                  <fieldset disabled={props.checklistProps.completion}>
                    <table className="table table-responsive">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            style={{ width: "350px", fontSize: "25px" }}
                          >
                            Table 6: Calculation
                          </th>
                          <th scope="col">Factor Initial Force</th>
                          <th scope="col">Factor Continuous Force</th>
                          <th scope="col">
                            If any, worst case Factor Initial Force
                          </th>
                          <th scope="col">
                            If any, worst case Factor Continuous Force
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            4.1 Frequency and force factor from Table 4, and, if
                            applicable, from Table 5.{" "}
                          </td>
                          <td>
                            <input
                              className="form-control"
                              placeholder="Factor"
                              onKeyPress={(event) => {
                                if (
                                  !/[+-]?([0-9]*[.])?[0-9]+/.test(event.key) &&
                                  !/([.])/.test(event.key)
                                ) {
                                  event.preventDefault();
                                }
                              }}
                              type="text"
                              min="0.6"
                              max="24"
                              maxLength={4}
                              value={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q41a
                              }
                              onBlur={() => {
                                if (
                                  parseInt(
                                    props.pushingAndPullingProps
                                      .pushingAndPulling.q41a
                                  ) > 24 ||
                                  parseFloat(
                                    props.pushingAndPullingProps
                                      .pushingAndPulling.q41a
                                  ) > 24
                                ) {
                                  props.setQ41A("0");
                                }
                              }}
                              onMouseLeave={() => {
                                if (
                                  parseInt(
                                    props.pushingAndPullingProps
                                      .pushingAndPulling.q41a
                                  ) > 24 ||
                                  parseFloat(
                                    props.pushingAndPullingProps
                                      .pushingAndPulling.q41a
                                  ) > 24
                                ) {
                                  props.setQ41A("0");
                                }
                              }}
                              onChange={(e) => {
                                props.setQ41A(e.target.value);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              placeholder="Factor"
                              onKeyPress={(event) => {
                                if (
                                  !/[+-]?([0-9]*[.])?[0-9]+/.test(event.key) &&
                                  !/([.])/.test(event.key)
                                ) {
                                  event.preventDefault();
                                }
                              }}
                              type="text"
                              min="0.6"
                              max="24"
                              maxLength={4}
                              value={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q41b
                              }
                              onBlur={() => {
                                if (
                                  parseInt(
                                    props.pushingAndPullingProps
                                      .pushingAndPulling.q41b
                                  ) > 130 ||
                                  parseFloat(
                                    props.pushingAndPullingProps
                                      .pushingAndPulling.q41b
                                  ) > 130
                                ) {
                                  props.setQ41B("0");
                                }
                              }}
                              onMouseLeave={() => {
                                if (
                                  parseInt(
                                    props.pushingAndPullingProps
                                      .pushingAndPulling.q41b
                                  ) > 130 ||
                                  parseFloat(
                                    props.pushingAndPullingProps
                                      .pushingAndPulling.q41b
                                  ) > 130
                                ) {
                                  props.setQ41B("0");
                                }
                              }}
                              onChange={(e) => {
                                props.setQ41B(e.target.value);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              placeholder="Factor"
                              onKeyPress={(event) => {
                                if (
                                  !/[+-]?([0-9]*[.])?[0-9]+/.test(event.key) &&
                                  !/([.])/.test(event.key)
                                ) {
                                  event.preventDefault();
                                }
                              }}
                              type="text"
                              min="0.6"
                              max="24"
                              maxLength={4}
                              value={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q41c
                              }
                              onBlur={() => {
                                if (
                                  parseInt(
                                    props.pushingAndPullingProps
                                      .pushingAndPulling.q41c
                                  ) > 24 ||
                                  parseFloat(
                                    props.pushingAndPullingProps
                                      .pushingAndPulling.q41c
                                  ) > 24
                                ) {
                                  props.setQ41C("0");
                                }
                              }}
                              onMouseLeave={() => {
                                if (
                                  parseInt(
                                    props.pushingAndPullingProps
                                      .pushingAndPulling.q41c
                                  ) > 24 ||
                                  parseFloat(
                                    props.pushingAndPullingProps
                                      .pushingAndPulling.q41c
                                  ) > 24
                                ) {
                                  props.setQ41C("0");
                                }
                              }}
                              onChange={(e) => {
                                props.setQ41C(e.target.value);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              placeholder="Factor"
                              onKeyPress={(event) => {
                                if (
                                  !/[+-]?([0-9]*[.])?[0-9]+/.test(event.key) &&
                                  !/([.])/.test(event.key)
                                ) {
                                  event.preventDefault();
                                }
                              }}
                              type="text"
                              min="0.6"
                              max="24"
                              maxLength={4}
                              value={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q41d
                              }
                              onBlur={() => {
                                if (
                                  parseInt(
                                    props.pushingAndPullingProps
                                      .pushingAndPulling.q41d
                                  ) > 130 ||
                                  parseFloat(
                                    props.pushingAndPullingProps
                                      .pushingAndPulling.q41d
                                  ) > 130
                                ) {
                                  props.setQ41D("0");
                                }
                              }}
                              onMouseLeave={() => {
                                if (
                                  parseInt(
                                    props.pushingAndPullingProps
                                      .pushingAndPulling.q41d
                                  ) > 130 ||
                                  parseFloat(
                                    props.pushingAndPullingProps
                                      .pushingAndPulling.q41d
                                  ) > 130
                                ) {
                                  props.setQ41D("0");
                                }
                              }}
                              onChange={(e) => {
                                props.setQ41D(e.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        <tr scope="row">
                          <th>Average Case comment:</th>
                          <td>
                            <textarea
                              className="form-control"
                              style={{
                                resize: "none",
                                borderRadius: "3%",
                                width: "10rem",
                                height: "10rem",
                                border: "3px solid black",
                              }}
                              placeholder="Comment"
                              disabled={
                                !checkIfAnswered(
                                  props.pushingAndPullingProps.pushingAndPulling
                                    .q41a
                                ) &&
                                !checkIfAnswered(
                                  props.pushingAndPullingProps.pushingAndPulling
                                    .q41b
                                )
                              }
                              type="text"
                              maxLength={65}
                              value={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q41_averageComm
                              }
                              onChange={(e) => {
                                props.setQ41AverageComm(e.target.value);
                              }}
                            />
                            <p>
                              Count:{" "}
                              {
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q41_averageComm.length
                              }{" "}
                              / 65
                            </p>
                          </td>
                        </tr>
                        <tr scope="row">
                          <th>Worst Case comment:</th>
                          <td>
                            <textarea
                              className="form-control"
                              style={{
                                resize: "none",
                                borderRadius: "3%",
                                width: "10rem",
                                height: "10rem",
                                border: "3px solid black",
                              }}
                              placeholder="Comment"
                              disabled={
                                !checkIfAnswered(
                                  props.pushingAndPullingProps.pushingAndPulling
                                    .q41c
                                ) &&
                                !checkIfAnswered(
                                  props.pushingAndPullingProps.pushingAndPulling
                                    .q41d
                                )
                              }
                              type="text"
                              maxLength={65}
                              value={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q41_worstComm
                              }
                              onChange={(e) => {
                                props.setQ41WorstComm(e.target.value);
                              }}
                            />
                            <p>
                              Count:{" "}
                              {
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q41_worstComm.length
                              }{" "}
                              / 65
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            Do the following factors occur in the majority of
                            the pushes and pulls?
                          </th>
                        </tr>
                      </tbody>

                      <tbody>
                        <tr>
                          <td>4.2 Pushing/pulling with one had.</td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q42a === "1.7"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q42a"
                              id="q42a1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ42A("1.7")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q42a === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q42a"
                              id="q42a2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ42A("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q42b === "1.7"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q42b"
                              id="q42b1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ42B("1.7")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q42b === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q42b"
                              id="q42b2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ42B("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q42c === "1.7"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q42c"
                              id="q42c1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ42C("1.7")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q42c === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q42c"
                              id="q42c2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ42C("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q42d === "1.7"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q42d"
                              id="q42d1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ42D("1.7")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q42d === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q42d"
                              id="q42d2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ42D("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                        </tr>

                        <tr>
                          <td>4.3 Pushing/pulling sideways.</td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q43a === "1.7"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q43a"
                              id="q43a1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ43A("1.7")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q43a === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q43a"
                              id="q43a2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ43A("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q43b === "1.7"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q43b"
                              id="q43b1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ43B("1.7")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q43b === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q43b"
                              id="q43b2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ43B("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q43c === "1.7"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q43c"
                              id="q43c1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ43C("1.7")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q43c === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q43c"
                              id="q43c2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ43C("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q43d === "1.7"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q43d"
                              id="q43d1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ43D("1.7")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q43d === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q43d"
                              id="q43d2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ43D("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            4.4 Gripping height: If the gripping height is below
                            knee height or above shoulder height, select
                            Knee/Shoulder; if the gripping height deviates
                            considerably from elbow height, select Elbow
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q44a === "2"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q44a"
                              id="q44a1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ44A("2")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>
                                Knee/Shoulder
                              </h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q44a === "1.2"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q44a"
                              id="q44a2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ44A("1.2")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Elbow</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q44b === "2"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q44b"
                              id="q44b1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ44B("2")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>
                                Knee/Shoulder
                              </h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q44b === "1.2"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q44b"
                              id="q44b2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ44B("1.2")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Elbow</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q44c === "2"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q44c"
                              id="q44c1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ44C("2")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>
                                Knee/Shoulder
                              </h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q44c === "1.2"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q44c"
                              id="q44c2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ44C("1.2")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Elbow</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q44d === "2"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q44d"
                              id="q44d1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ44D("2")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>
                                Knee/Shoulder
                              </h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q44d === "1.2"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q44d"
                              id="q44d2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ44D("1.2")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Elbow</h5>
                            </label>
                          </td>
                        </tr>
                        <br />
                        <tr>
                          <td>
                            4.5 Torso twisted more than 30° (see the figure to
                            the right above).
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q45a === "1.3"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q45a"
                              id="q45a1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ45A("1.3")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q45a === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q45a"
                              id="q45a2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ45A("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q45b === "1.3"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q45b"
                              id="q45b1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ45B("1.3")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q45b === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q45b"
                              id="q45b2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ45B("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q45c === "1.3"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q45c"
                              id="q45c1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ45C("1.3")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q45c === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q45c"
                              id="q45c2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ45C("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q45d === "1.3"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q45d"
                              id="q45d1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ45D("1.3")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q45d === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q45d"
                              id="q45d2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ45D("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                        </tr>

                        <tr>
                          <td>4.6 Poor grip.</td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q46a === "1.1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q46a"
                              id="q46a1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ46A("1.1")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q46a === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q46a"
                              id="q46a2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ46A("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q46b === "1.1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q46b"
                              id="q46b1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ46B("1.1")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q46b === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q46b"
                              id="q46b2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ46B("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q46c === "1.1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q46c"
                              id="q46c1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ46C("1.1")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q46c === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q46c"
                              id="q46c2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ46C("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q46d === "1.1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q46d"
                              id="q46d1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ46D("1.1")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q46d === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q46d"
                              id="q46d2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ46D("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                        </tr>

                        <tr>
                          <td>4.7 Hot environment 27-32°.</td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q47a === "1.1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q47a"
                              id="q47a1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ47A("1.1")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q47a === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q47a"
                              id="q47a2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ47A("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q47b === "1.1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q47b"
                              id="q47b1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ47B("1.1")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q47b === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q47b"
                              id="q47b2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ47B("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q47c === "1.1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q47c"
                              id="q47c1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ47C("1.1")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q47c === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q47c"
                              id="q47c2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ47C("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q47d === "1.1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q47d"
                              id="q47d1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ47D("1.1")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q47d === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q47d"
                              id="q47d2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ47D("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                        </tr>

                        <tr>
                          <td>4.8 Pushing/pulling work on slippery surface.</td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q48a === "1.7"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q48a"
                              id="q48a1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ48A("1.7")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q48a === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q48a"
                              id="q48a2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ48A("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q48b === "1.7"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q48b"
                              id="q48b1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ48B("1.7")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q48b === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q48b"
                              id="q48b2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ48B("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q48c === "1.7"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q48c"
                              id="q48c1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ48C("1.7")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q48c === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q48c"
                              id="q48c2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ48C("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q48d === "1.7"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q48d"
                              id="q48d1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ48D("1.7")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q48d === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q48d"
                              id="q48d2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ48D("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                        </tr>

                        <tr>
                          <td>4.9 Two people perform the pushing/pulling.</td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q49a === "0.6"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q49a"
                              id="q49a1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ49A("0.6")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q49a === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q49a"
                              id="q49a2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ49A("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q49b === "0.6"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q49b"
                              id="q49b1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ49B("0.6")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q49b === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q49b"
                              id="q49b2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ49B("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q49c === "0.6"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q49c"
                              id="q49c1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ49C("0.6")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q49c === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q49c"
                              id="q49c2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ49C("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                          <td>
                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q49d === "0.6"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q49d"
                              id="q49d1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ49D("0.6")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.pushingAndPullingProps.pushingAndPulling
                                  .q49d === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q49d"
                              id="q49d2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ49D("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </td>
                        </tr>
                      </tbody>
                      <br />
                      <tbody style={{ borderTop: "2px solid #0d6efd" }}>
                        <tr>
                          <td style={{ fontSize: "28px" }}>Risk Score</td>
                          <td style={{ paddingLeft: 50, fontSize: 25 }}>
                            {calculateScoreOne()}
                          </td>
                          <td style={{ paddingLeft: 50, fontSize: 25 }}>
                            {calculateScoreTwo()}
                          </td>
                          <td style={{ paddingLeft: 50, fontSize: 25 }}>
                            {calculateScoreThree()}
                          </td>
                          <td style={{ paddingLeft: 50, fontSize: 25 }}>
                            {calculateScoreFour()}
                          </td>
                        </tr>

                        <tr>
                          <td style={{ fontSize: "20px" }}>
                            Risk score 1: {calculateMasterScoreOne()}{" "}
                          </td>
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
                            {" "}
                            <img
                              style={{ paddingTop: 0 }}
                              src={require("../checklistPictures/liftingWorkScore.PNG")}
                            ></img>
                          </td>
                        </tr>

                        <tr>
                          <td style={{ fontSize: "20px" }}>
                            Risk score 2: {calculateMasterScoreTwo()}{" "}
                          </td>
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
                            {" "}
                            <img
                              style={{ paddingTop: 0 }}
                              src={require("../../Checklist/checklistPictures/liftingWorkScore.PNG")}
                            ></img>{" "}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </fieldset>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

const resetValues = (props) => {
  props.setQ40("0");
  props.setQ41A("0");
  props.setQ41B("0");
  props.setQ41C("0");
  props.setQ41D("0");
  props.setQ42A("0");
  props.setQ42B("0");
  props.setQ42C("0");
  props.setQ42D("0");
  props.setQ43A("0");
  props.setQ43B("0");
  props.setQ43C("0");
  props.setQ43D("0");
  props.setQ44A("0");
  props.setQ44B("0");
  props.setQ44C("0");
  props.setQ44D("0");
  props.setQ45A("0");
  props.setQ45B("0");
  props.setQ45C("0");
  props.setQ45D("0");
  props.setQ46A("0");
  props.setQ46B("0");
  props.setQ46C("0");
  props.setQ46D("0");
  props.setQ47A("0");
  props.setQ47B("0");
  props.setQ47C("0");
  props.setQ47D("0");
  props.setQ48A("0");
  props.setQ48B("0");
  props.setQ48C("0");
  props.setQ48D("0");
  props.setQ49A("0");
  props.setQ49B("0");
  props.setQ49C("0");
  props.setQ49D("0");
};

const checkIfAnswered = (ans) => {
  if (ans != "") {
    return true;
  }
};

export default connect(mapStateToProps, {
  setQ40,
  setQ41A,
  setQ41B,
  setQ41C,
  setQ41D,
  setQ42A,
  setQ42B,
  setQ42C,
  setQ42D,
  setQ43A,
  setQ43B,
  setQ43C,
  setQ43D,
  setQ44A,
  setQ44B,
  setQ44C,
  setQ44D,
  setQ45A,
  setQ45B,
  setQ45C,
  setQ45D,
  setQ46A,
  setQ46B,
  setQ46C,
  setQ46D,
  setQ47A,
  setQ47B,
  setQ47C,
  setQ47D,
  setQ48A,
  setQ48B,
  setQ48C,
  setQ48D,
  setQ49A,
  setQ49B,
  setQ49C,
  setQ49D,
  setQ41AverageComm,
  setQ41WorstComm,
})(PushingAndPullingWork);
