import React from "react";
import { connect } from "react-redux";
import "../Checklist.css";
import {
  setQ21A,
  setQ21B,
  setQ21Comm,
  setQ22A,
  setQ22B,
  setQ22Comm,
  setQ23A,
  setQ23B,
  setQ23Comm,
  setQ24,
  setQ24Comm,
  setQ25,
  setQ25Comm,
} from "../../../../actions/riskAreaActions/repetitiveWorkActions";

const mapStateToProps = (state) => ({
  repetitiveWorkProps: state.repetitiveWorkState,
  checklistProps: state.checklistState,
});

const RepetitiveWork = (props) => {
  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-repetitiveWork"
            aria-expanded="false"
            aria-controls="flush-repetitiveWork"
          >
            2. Repetitive Work
          </button>
        </h2>
        <div
          id="flush-repetitiveWork"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#repetitiveWork"
        >
          <div className="accordion-body bg-white">
            <div className="card-body bg-white table-responsive">
              <fieldset disabled={props.checklistProps.completion}>
                <table className="table table-responsive">
                  <tbody>
                    <tr>
                      <td>
                        <h3 style={{ fontWeight: "bold" }}>
                          2. Work Movements And Repetitive Work
                        </h3>
                      </td>
                      <td>
                        <p style={{ fontWeight: "bold" }}>
                          {" "}
                          Fill in the corresponding score in the white box{" "}
                        </p>
                      </td>
                      <td>
                        <p style={{ fontWeight: "bold" }}>Score</p>
                      </td>
                      <td>
                        <p style={{ fontWeight: "bold" }}>Comment</p>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: 20 }}>
                        2.1 Movements of the arm (upper and lower arm)
                        <p style={{ fontSize: 14 }}>
                          How are the movements of the arm generally?
                        </p>
                        <img
                          width={"600px"}
                          src={require("../../Checklist/checklistPictures/q21.PNG")}
                        ></img>
                      </td>

                      <td>
                        <div style={{ paddingBottom: 20 }}>
                          <form className="was-validated">
                            <select
                              className="form-select"
                              aria-label="select example"
                              required
                              value={
                                props.repetitiveWorkProps.repetitiveWork.q21a
                              }
                              onChange={(e) => {
                                props.setQ21A(e.target.value);
                              }}
                            >
                              <option value="">Left</option>
                              <option value="0">0</option>
                              <option value="2">2</option>
                              <option value="5">5</option>
                            </select>
                            <div className="invalid-feedback">
                              Select a number
                            </div>
                          </form>
                        </div>
                        <div>
                          <form className="was-validated">
                            <select
                              className="form-select"
                              aria-label="select example"
                              required
                              value={
                                props.repetitiveWorkProps.repetitiveWork.q21b
                              }
                              onChange={(e) => {
                                props.setQ21B(e.target.value);
                              }}
                            >
                              <option value="">Right</option>
                              <option value="0">0</option>
                              <option value="2">2</option>
                              <option value="5">5</option>
                            </select>
                            <div className="invalid-feedback">
                              Select a number
                            </div>
                          </form>
                        </div>
                      </td>

                      <td>
                        <br />
                        <div
                          className="rectangle"
                          style={{
                            width: 75,
                            height: 50,
                            backgroundColor: handleColor(props, "21a"),
                          }}
                        />
                        <br />
                        <div>
                          <div
                            className="rectangle"
                            style={{
                              width: 75,
                              height: 50,
                              backgroundColor: handleColor(props, "21b"),
                            }}
                          />
                        </div>
                      </td>

                      <td>
                        <div>
                          <div>
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
                                !handleColor(props, "21a") &&
                                !handleColor(props, "21b")
                              }
                              type="text"
                              maxLength={65}
                              value={
                                props.repetitiveWorkProps.repetitiveWork
                                  .q21_Comm
                              }
                              onChange={(e) => {
                                props.setQ21Comm(e.target.value);
                              }}
                            />
                            <p>
                              Count:{" "}
                              {
                                props.repetitiveWorkProps.repetitiveWork
                                  .q21_Comm.length
                              }{" "}
                              / 65
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ fontSize: 20 }} width="700">
                        2.2 Movements of the wrist
                        <p style={{ fontSize: 14 }}>
                          Do similar movements of the wrist occur?
                        </p>
                        <img
                          width={"150px"}
                          src={require("../../Checklist/checklistPictures/q22.PNG")}
                        ></img>
                        <img
                          width={"500px"}
                          src={require("../../Checklist/checklistPictures/q22Options.PNG")}
                        ></img>
                      </td>

                      <td>
                        <div style={{ paddingBottom: 20 }}>
                          <form className="was-validated">
                            <select
                              className="form-select"
                              aria-label="select example"
                              required
                              value={
                                props.repetitiveWorkProps.repetitiveWork.q22a
                              }
                              onChange={(e) => {
                                props.setQ22A(e.target.value);
                              }}
                            >
                              <option value="">Left</option>
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="3">3</option>
                              <option value="5">5</option>
                            </select>
                            <div className="invalid-feedback">
                              Select a number
                            </div>
                          </form>
                        </div>
                        <div>
                          <form className="was-validated">
                            <select
                              className="form-select"
                              aria-label="select example"
                              required
                              value={
                                props.repetitiveWorkProps.repetitiveWork.q22b
                              }
                              onChange={(e) => {
                                props.setQ22B(e.target.value);
                              }}
                            >
                              <option value="">Right</option>
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="3">3</option>
                              <option value="5">5</option>
                            </select>
                            <div className="invalid-feedback">
                              Select a number
                            </div>
                          </form>
                        </div>
                      </td>
                      <td>
                        <br />
                        <div
                          className="rectangle"
                          style={{
                            width: 75,
                            height: 50,
                            backgroundColor: handleColor(props, "22a"),
                          }}
                        />
                        <br />
                        <div>
                          <div
                            className="rectangle"
                            style={{
                              width: 75,
                              height: 50,
                              backgroundColor: handleColor(props, "22b"),
                            }}
                          />
                        </div>
                      </td>

                      <td>
                        <div>
                          <div>
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
                                !handleColor(props, "22a") &&
                                !handleColor(props, "22b")
                              }
                              type="text"
                              maxLength={65}
                              value={
                                props.repetitiveWorkProps.repetitiveWork
                                  .q22_Comm
                              }
                              onChange={(e) => {
                                props.setQ22Comm(e.target.value);
                              }}
                            />
                            <p>
                              Count:{" "}
                              {
                                props.repetitiveWorkProps.repetitiveWork
                                  .q22_Comm.length
                              }{" "}
                              / 65
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ fontSize: 20 }} width="700">
                        2.3 Type of grip - frequency
                        <p style={{ fontSize: 14 }}>
                          Is overhand grip (palm facing downward), wide finger
                          grip or pinch grip used while lifting or holding
                          objects weighing 0.5 kg or more?
                        </p>
                        <img
                          width={"280px"}
                          src={require("../../Checklist/checklistPictures/q23.PNG")}
                        ></img>
                        <img
                          width={"400px"}
                          src={require("../../Checklist/checklistPictures/q23Options.PNG")}
                        ></img>
                      </td>
                      <td>
                        <div style={{ paddingBottom: 20 }}>
                          <form className="was-validated">
                            <select
                              className="form-select"
                              aria-label="select example"
                              required
                              value={
                                props.repetitiveWorkProps.repetitiveWork.q23a
                              }
                              onChange={(e) => {
                                props.setQ23A(e.target.value);
                              }}
                            >
                              <option value="">Left</option>
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="4">4</option>
                            </select>
                            <div className="invalid-feedback">
                              Select a number
                            </div>
                          </form>
                        </div>
                        <div>
                          <form className="was-validated">
                            <select
                              className="form-select"
                              aria-label="select example"
                              required
                              value={
                                props.repetitiveWorkProps.repetitiveWork.q23b
                              }
                              onChange={(e) => {
                                props.setQ23B(e.target.value);
                              }}
                            >
                              <option value="">Right</option>
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="4">4</option>
                            </select>
                            <div className="invalid-feedback">
                              Select a number
                            </div>
                          </form>
                        </div>
                      </td>

                      <td>
                        <br />
                        <div
                          className="rectangle"
                          style={{
                            width: 75,
                            height: 50,
                            backgroundColor: handleColor(props, "23a"),
                          }}
                        />
                        <br />
                        <div>
                          <div
                            className="rectangle"
                            style={{
                              width: 75,
                              height: 50,
                              backgroundColor: handleColor(props, "23b"),
                            }}
                          />
                        </div>
                      </td>

                      <td>
                        <div>
                          <div>
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
                                !handleColor(props, "23a") &&
                                !handleColor(props, "23b")
                              }
                              type="text"
                              maxLength={65}
                              value={
                                props.repetitiveWorkProps.repetitiveWork
                                  .q23_Comm
                              }
                              onChange={(e) => {
                                props.setQ23Comm(e.target.value);
                              }}
                            />
                            <p>
                              Count:{" "}
                              {
                                props.repetitiveWorkProps.repetitiveWork
                                  .q23_Comm.length
                              }{" "}
                              / 65
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ fontSize: 20 }} width="700">
                        2.4 Shorter recovery/variation during work (mainly
                        regarding the neck, the arms and the back)
                        <p style={{ fontSize: 14 }}>
                          Assessment of whether or not the work enables
                          sufficient variation or breaks so that muscle groups
                          under strain are given time to recover. The variation
                          or break has to be at least 5 seconds at a time to be
                          eligible. Approximately, how much of the working time
                          consists of such variations or breaks generally?
                        </p>
                        <img
                          src={require("../../Checklist/checklistPictures/q24.PNG")}
                        ></img>
                      </td>
                      <td>
                        {" "}
                        <div>
                          <div>
                            <form className="was-validated">
                              <select
                                className="form-select"
                                aria-label="select example"
                                required
                                value={
                                  props.repetitiveWorkProps.repetitiveWork.q24
                                }
                                onChange={(e) => {
                                  props.setQ24(e.target.value);
                                }}
                              >
                                <option value=""></option>
                                <option value="0">0</option>
                                <option value="4">4</option>
                                <option value="10">10</option>
                              </select>
                              <div className="invalid-feedback">
                                Select a number
                              </div>
                            </form>
                          </div>
                        </div>
                      </td>

                      <td>
                        <br />
                        <div
                          className="rectangle"
                          style={{
                            width: 75,
                            height: 50,
                            backgroundColor: handleColor(props, "24"),
                          }}
                        />
                      </td>

                      <td>
                        <label>
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
                            disabled={!handleColor(props, "24")}
                            type="text"
                            maxLength={65}
                            value={
                              props.repetitiveWorkProps.repetitiveWork.q24_Comm
                            }
                            onChange={(e) => {
                              props.setQ24Comm(e.target.value);
                            }}
                          />
                          <p>
                            Count:{" "}
                            {
                              props.repetitiveWorkProps.repetitiveWork.q24_Comm
                                .length
                            }{" "}
                            / 65
                          </p>
                        </label>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ fontSize: 20 }} width="700">
                        2.5 Longer recovery/variation during work (not breaks,
                        e.g. task rotation that gives sufficient recovery)
                        <p style={{ fontSize: 14 }}>
                          Assessment of whether or not the work enables
                          sufficient variation or breaks so that muscle groups
                          The variation or break has to be at least 5 seconds at
                          a time to be eligible. Approximately, how often does
                          such variation or breaks occur during the work
                          generally?
                        </p>
                        <img
                          src={require("../../Checklist/checklistPictures/q25.PNG")}
                        ></img>
                      </td>

                      <td>
                        {" "}
                        <div>
                          <div>
                            <form className="was-validated">
                              <select
                                className="form-select"
                                aria-label="select example"
                                required
                                value={
                                  props.repetitiveWorkProps.repetitiveWork.q25
                                }
                                onChange={(e) => {
                                  props.setQ25(e.target.value);
                                }}
                              >
                                <option value=""></option>
                                <option value="0">0</option>
                                <option value="3">3</option>
                                <option value="6">6</option>
                                <option value="10">10</option>
                              </select>
                              <div className="invalid-feedback">
                                Select a number
                              </div>
                            </form>
                          </div>
                        </div>
                      </td>

                      <td>
                        <br />
                        <div
                          className="rectangle"
                          style={{
                            width: 75,
                            height: 50,
                            backgroundColor: handleColor(props, "25"),
                          }}
                        />
                      </td>

                      <td>
                        <label>
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
                            disabled={!handleColor(props, "25")}
                            type="text"
                            maxLength={65}
                            value={
                              props.repetitiveWorkProps.repetitiveWork.q25_Comm
                            }
                            onChange={(e) => {
                              props.setQ25Comm(e.target.value);
                            }}
                          />
                          <p>
                            Count:{" "}
                            {
                              props.repetitiveWorkProps.repetitiveWork.q25_Comm
                                .length
                            }{" "}
                            / 65
                          </p>
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

const handleColor = (props, number) => {
  if (number == "25") {
    if (props.repetitiveWorkProps.repetitiveWork.q25 == "") {
      return "";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q25 >= 6) {
      return "red";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q25 == 3) {
      return "yellow";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q25 == 0) {
      return "green";
    }
  }

  if (number == "24") {
    if (props.repetitiveWorkProps.repetitiveWork.q24 == "") {
      return "";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q24 == 10) {
      return "red";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q24 == 4) {
      return "yellow";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q24 == 0) {
      return "green";
    }
  }

  if (number == "23a") {
    if (props.repetitiveWorkProps.repetitiveWork.q23a == "") {
      return "";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q23a == 4) {
      return "red";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q23a == 2) {
      return "yellow";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q23a <= 1) {
      return "green";
    }
  }
  if (number == "23b") {
    if (props.repetitiveWorkProps.repetitiveWork.q23b == "") {
      return "";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q23b == 4) {
      return "red";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q23b == 2) {
      return "yellow";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q23b <= 1) {
      return "green";
    }
  }

  if (number == "22a") {
    if (props.repetitiveWorkProps.repetitiveWork.q22a == "") {
      return "";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q22a == 5) {
      return "red";
    }
    if (
      props.repetitiveWorkProps.repetitiveWork.q22a >= 1 &&
      props.repetitiveWorkProps.repetitiveWork.q22a <= 3
    ) {
      return "yellow";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q22a == 0) {
      return "green";
    }
  }

  if (number == "22b") {
    if (props.repetitiveWorkProps.repetitiveWork.q22b == "") {
      return "";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q22b == 5) {
      return "red";
    }
    if (
      props.repetitiveWorkProps.repetitiveWork.q22b >= 1 &&
      props.repetitiveWorkProps.repetitiveWork.q22b <= 3
    ) {
      return "yellow";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q22b == 0) {
      return "green";
    }
  }

  if (number == "21a") {
    if (props.repetitiveWorkProps.repetitiveWork.q21a == "") {
      return "";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q21a == 5) {
      return "red";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q21a == 2) {
      return "yellow";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q21a == 0) {
      return "green";
    }
  }
  if (number == "21b") {
    if (props.repetitiveWorkProps.repetitiveWork.q21b == "") {
      return "";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q21b == 5) {
      return "red";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q21b == 2) {
      return "yellow";
    }
    if (props.repetitiveWorkProps.repetitiveWork.q21b == 0) {
      return "green";
    }
  }
};

export default connect(mapStateToProps, {
  setQ21A,
  setQ21B,
  setQ21Comm,
  setQ22A,
  setQ22B,
  setQ22Comm,
  setQ23A,
  setQ23B,
  setQ23Comm,
  setQ24,
  setQ24Comm,
  setQ25,
  setQ25Comm,
})(RepetitiveWork);
