import React, { useState } from "react";
import { connect } from "react-redux";
import {
  setQ30,
  setQ31AverageComm,
  setQ31WorstComm,
  setQ31A,
  setQ31B,
  setQ32A,
  setQ32B,
  setQ33A,
  setQ33B,
  setQ34A,
  setQ34B,
  setQ35A,
  setQ35B,
  setQ36A,
  setQ36B,
  setQ37A,
  setQ37B,
} from "../../../../actions/riskAreaActions/liftingWorkActions";

const mapStateToProps = (state) => ({
  liftingWorkProps: state.liftingWorkState,
  checklistProps: state.checklistState,
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
              <fieldset disabled={props.checklistProps.completion}>
                <table className="table table-responsive">
                  <tbody>
                    <tr>
                      <td>
                        <h3 style={{ fontWeight: "bold" }}>3. Lifting Work</h3>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p style={{ fontWeight: "bold" }}>
                          3.0 Does lifting occur?
                        </p>
                      </td>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <input
                          checked={
                            props.liftingWorkProps.liftingWork.q30 === "1"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q30a"
                          id="q30a1"
                          value="option1"
                        />

                        <label
                          onClick={() => props.setQ30("1")}
                          className="btn btn-outline-warning"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>

                        <input
                          checked={
                            props.liftingWorkProps.liftingWork.q30 === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q30a"
                          id="q30a2"
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
                src={require("../../Checklist/checklistPictures/q30.PNG")}
                hidden={props.liftingWorkProps.liftingWork.q30 !== "1"}
              ></img>

              {props.liftingWorkProps.liftingWork.q30 === "1" && (
                <table className="table table-responsive">
                  <fieldset disabled={props.checklistProps.completion}>
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          style={{ width: "465px", fontSize: "25px" }}
                        >
                          Table 3: Calculation of Risk score
                        </th>
                        <th scope="col">Factor</th>
                        <th scope="col">Possible Worst Case</th>
                        <th scope="col">Average case comment</th>
                        <th scope="col">Worst case comment</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>3.1 Frequency-and-weight factor from Table 1.</td>
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
                            max="50"
                            maxLength={4}
                            value={props.liftingWorkProps.liftingWork.q31a}
                            onBlur={() => {
                              if (
                                parseInt(
                                  props.liftingWorkProps.liftingWork.q31a
                                ) > 50 ||
                                parseFloat(
                                  props.liftingWorkProps.liftingWork.q31a
                                ) > 50
                              ) {
                                props.setQ31A("0");
                              }
                            }}
                            onMouseLeave={() => {
                              if (
                                parseInt(
                                  props.liftingWorkProps.liftingWork.q31a
                                ) > 50 ||
                                parseFloat(
                                  props.liftingWorkProps.liftingWork.q31a
                                ) > 50
                              ) {
                                props.setQ31A("0");
                              }
                            }}
                            onChange={(e) => {
                              props.setQ31A(e.target.value);
                            }}
                          />
                        </td>

                        <td>
                          <input
                            className="form-control"
                            placeholder="Worst Case Factor"
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
                            max="50"
                            maxLength={4}
                            value={props.liftingWorkProps.liftingWork.q31b}
                            onBlur={() => {
                              if (
                                parseInt(
                                  props.liftingWorkProps.liftingWork.q31b
                                ) > 50 ||
                                parseFloat(
                                  props.liftingWorkProps.liftingWork.q31b
                                ) > 50
                              ) {
                                props.setQ31B("0");
                              }
                            }}
                            onMouseLeave={() => {
                              if (
                                parseInt(
                                  props.liftingWorkProps.liftingWork.q31b
                                ) > 50 ||
                                parseFloat(
                                  props.liftingWorkProps.liftingWork.q31b
                                ) > 50
                              ) {
                                props.setQ31B("0");
                              }
                            }}
                            onChange={(e) => {
                              props.setQ31B(e.target.value);
                            }}
                          />
                        </td>
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
                                props.liftingWorkProps.liftingWork.q31a
                              )
                            }
                            type="text"
                            maxLength={65}
                            value={
                              props.liftingWorkProps.liftingWork.q31_averageComm
                            }
                            onChange={(e) => {
                              props.setQ31AverageComm(e.target.value);
                            }}
                          />
                          <p>
                            Count:{" "}
                            {
                              props.liftingWorkProps.liftingWork.q31_averageComm
                                .length
                            }{" "}
                            / 65
                          </p>
                        </td>
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
                                props.liftingWorkProps.liftingWork.q31b
                              )
                            }
                            type="text"
                            maxLength={65}
                            value={
                              props.liftingWorkProps.liftingWork.q31_worstComm
                            }
                            onChange={(e) => {
                              props.setQ31WorstComm(e.target.value);
                            }}
                          />
                          <p>
                            Count:{" "}
                            {
                              props.liftingWorkProps.liftingWork.q31_worstComm
                                .length
                            }{" "}
                            / 65
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td>3.2 Lifting area factor from Table 2. </td>
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
                            max="50"
                            maxLength={4}
                            value={props.liftingWorkProps.liftingWork.q32a}
                            onBlur={() => {
                              if (
                                parseInt(
                                  props.liftingWorkProps.liftingWork.q32a
                                ) > 50 ||
                                parseFloat(
                                  props.liftingWorkProps.liftingWork.q32a
                                ) > 50
                              ) {
                                props.setQ31B("0");
                              }
                            }}
                            onMouseLeave={() => {
                              if (
                                parseInt(
                                  props.liftingWorkProps.liftingWork.q32a
                                ) > 50 ||
                                parseFloat(
                                  props.liftingWorkProps.liftingWork.q32a
                                ) > 50
                              ) {
                                props.setQ32A("0");
                              }
                            }}
                            onChange={(e) => {
                              props.setQ32A(e.target.value);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            className="form-control"
                            placeholder="Worst Case Factor"
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
                            max="50"
                            maxLength={4}
                            value={props.liftingWorkProps.liftingWork.q32b}
                            onBlur={() => {
                              if (
                                parseInt(
                                  props.liftingWorkProps.liftingWork.q32b
                                ) > 50 ||
                                parseFloat(
                                  props.liftingWorkProps.liftingWork.q32b
                                ) > 50
                              ) {
                                props.setQ32B("0");
                              }
                            }}
                            onMouseLeave={() => {
                              if (
                                parseInt(
                                  props.liftingWorkProps.liftingWork.q32b
                                ) > 50 ||
                                parseFloat(
                                  props.liftingWorkProps.liftingWork.q32b
                                ) > 50
                              ) {
                                props.setQ32B("0");
                              }
                            }}
                            onChange={(e) => {
                              props.setQ32B(e.target.value);
                            }}
                          />
                        </td>
                      </tr>

                      <tr></tr>
                      <tr>
                        <th>
                          Do the following factors occur in the majority of the
                          lifts?
                        </th>
                      </tr>
                      <tr>
                        <td>3.3 Lift with one hand.</td>
                        <td width={"160px"}>
                          <input
                            checked={
                              props.liftingWorkProps.liftingWork.q33a === "1.7"
                            }
                            readOnly
                            type="radio"
                            className="btn-check"
                            name="q33a"
                            id="q33a1"
                            value="option1"
                          />

                          <label
                            onClick={() => props.setQ33A("1.7")}
                            className="btn btn-outline-warning"
                            htmlFor="option1"
                          >
                            <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                          </label>

                          <input
                            checked={
                              props.liftingWorkProps.liftingWork.q33a === "1"
                            }
                            readOnly
                            type="radio"
                            className="btn-check"
                            name="q33a"
                            id="q33a2"
                            value="option2"
                          />
                          <label
                            onClick={() => props.setQ33A("1")}
                            className="btn btn-outline-success"
                            htmlFor="option2"
                          >
                            <h5 style={{ fontWeight: "bold" }}>No</h5>
                          </label>
                        </td>
                        <td width={"160px"}>
                          <input
                            checked={
                              props.liftingWorkProps.liftingWork.q33b === "1.7"
                            }
                            readOnly
                            type="radio"
                            className="btn-check"
                            name="q33b"
                            id="q33b1"
                            value="option1"
                          />

                          <label
                            onClick={() => props.setQ33B("1.7")}
                            className="btn btn-outline-warning"
                            htmlFor="option1"
                          >
                            <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                          </label>

                          <input
                            checked={
                              props.liftingWorkProps.liftingWork.q33b === "1"
                            }
                            readOnly
                            type="radio"
                            className="btn-check"
                            name="q33b"
                            id="q33b2"
                            value="option2"
                          />
                          <label
                            onClick={() => props.setQ33B("1")}
                            className="btn btn-outline-success"
                            htmlFor="option2"
                          >
                            <h5 style={{ fontWeight: "bold" }}>No</h5>
                          </label>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          3.4 Torso twisted more than 30° (see the figure to the
                          right above).
                        </td>
                        <td>
                          <div>
                            <input
                              checked={
                                props.liftingWorkProps.liftingWork.q34a ===
                                "1.3"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q34a"
                              id="q34a1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ34A("1.3")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.liftingWorkProps.liftingWork.q34a === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q34a"
                              id="q34a2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ34A("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </div>
                        </td>
                        <td>
                          <div>
                            <input
                              checked={
                                props.liftingWorkProps.liftingWork.q34b ===
                                "1.3"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q34b"
                              id="q34b1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ34B("1.3")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.liftingWorkProps.liftingWork.q34b === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q34b"
                              id="q34b2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ34B("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>3.5 Poor grip.</td>
                        <td>
                          <div>
                            <input
                              checked={
                                props.liftingWorkProps.liftingWork.q35a ===
                                "1.1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q35a"
                              id="q35a1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ35A("1.1")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.liftingWorkProps.liftingWork.q35a === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q35a"
                              id="q35a2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ35A("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </div>
                        </td>
                        <td>
                          <div>
                            <input
                              checked={
                                props.liftingWorkProps.liftingWork.q35b ===
                                "1.1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q35b"
                              id="q35b1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ35B("1.1")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.liftingWorkProps.liftingWork.q35b === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q35b"
                              id="q35b2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ35B("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>3.6 Hot environment 27-32º.</td>
                        <td>
                          <div>
                            <input
                              checked={
                                props.liftingWorkProps.liftingWork.q36a ===
                                "1.1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q36a"
                              id="q36a1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ36A("1.1")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.liftingWorkProps.liftingWork.q36a === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q36a"
                              id="q36a2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ36A("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </div>
                        </td>
                        <td>
                          <div>
                            <input
                              checked={
                                props.liftingWorkProps.liftingWork.q36b ===
                                "1.1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q36b"
                              id="q36b1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ36B("1.1")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.liftingWorkProps.liftingWork.q36b === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q36b"
                              id="q36b2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ36B("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>3.7 Two people lift the load.</td>
                        <td>
                          <input
                            checked={
                              props.liftingWorkProps.liftingWork.q37a === "0.6"
                            }
                            readOnly
                            type="radio"
                            className="btn-check"
                            name="q37a"
                            id="q37a1"
                            value="option1"
                          />

                          <label
                            onClick={() => props.setQ37A("0.6")}
                            className="btn btn-outline-warning"
                            htmlFor="option1"
                          >
                            <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                          </label>

                          <input
                            checked={
                              props.liftingWorkProps.liftingWork.q37a === "1"
                            }
                            readOnly
                            type="radio"
                            className="btn-check"
                            name="q37a"
                            id="q37a2"
                            value="option2"
                          />
                          <label
                            onClick={() => props.setQ37A("1")}
                            className="btn btn-outline-success"
                            htmlFor="option2"
                          >
                            <h5 style={{ fontWeight: "bold" }}>No</h5>
                          </label>
                        </td>
                        <td>
                          <div>
                            <input
                              checked={
                                props.liftingWorkProps.liftingWork.q37b ===
                                "0.6"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q37b"
                              id="q37b1"
                              value="option1"
                            />

                            <label
                              onClick={() => props.setQ37B("0.6")}
                              className="btn btn-outline-warning"
                              htmlFor="option1"
                            >
                              <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                            </label>

                            <input
                              checked={
                                props.liftingWorkProps.liftingWork.q37b === "1"
                              }
                              readOnly
                              type="radio"
                              className="btn-check"
                              name="q37b"
                              id="q37b2"
                              value="option2"
                            />
                            <label
                              onClick={() => props.setQ37B("1")}
                              className="btn btn-outline-success"
                              htmlFor="option2"
                            >
                              <h5 style={{ fontWeight: "bold" }}>No</h5>
                            </label>
                          </div>
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
                      </tr>
                      <tr>
                        <td>Risk score 1: {calculateScoreOne()} </td>
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
                          <img
                            style={{ paddingTop: 0 }}
                            src={require("../checklistPictures/liftingWorkScore.PNG")}
                          ></img>
                        </td>
                      </tr>

                      <tr>
                        <td>Risk score 2: {calculateScoreTwo()} </td>
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
                          <img
                            style={{ paddingTop: 0 }}
                            src={require("../../Checklist/checklistPictures/liftingWorkScore.PNG")}
                          ></img>
                        </td>
                      </tr>
                    </tbody>
                  </fieldset>
                </table>
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
  props.setQ30("0");
  props.setQ31AverageComm("");
  props.setQ31WorstComm("");
  props.setQ31A("");
  props.setQ31B("");
  props.setQ32A("");
  props.setQ32B("");
  props.setQ33A("0");
  props.setQ33B("0");
  props.setQ34A("0");
  props.setQ34B("0");
  props.setQ35A("0");
  props.setQ35B("0");
  props.setQ36A("0");
  props.setQ36B("0");
  props.setQ37A("0");
  props.setQ37B("0");
};

const checkIfAnswered = (ans) => {
  if (ans != "") {
    return true;
  }
};

export default connect(mapStateToProps, {
  setQ30,
  setQ31AverageComm,
  setQ31WorstComm,
  setQ31A,
  setQ31B,
  setQ32A,
  setQ32B,
  setQ33A,
  setQ33B,
  setQ34A,
  setQ34B,
  setQ35A,
  setQ35B,
  setQ36A,
  setQ36B,
  setQ37A,
  setQ37B,
})(LiftingWork);
