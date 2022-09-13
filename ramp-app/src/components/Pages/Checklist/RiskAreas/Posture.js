import { React } from "react";
import { connect } from "react-redux";
import "../Checklist.css";
import {
  setQ11,
  setQ11Comm,
  setQ12,
  setQ12Comm,
  setQ13,
  setQ13Comm,
  setQ14,
  setQ14Comm,
  setQ15A,
  setQ15B,
  setQ15Comm,
  setQ16A,
  setQ16B,
  setQ16Comm,
  setQ17A,
  setQ17B,
  setQ17Comm,
  setQ18,
  setQ18Comm,
} from "../../../../actions/riskAreaActions/postureActions";

const mapStateToProps = (state) => ({
  postureProps: state.postureState,
  checklistProps: state.checklistState,
});

const Posture = (props) => {
  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-posture"
            aria-expanded="false"
            aria-controls="flush-posture"
          >
            1. Posture
          </button>
        </h2>
        <div
          id="flush-posture"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#posture"
        >
          <div className="accordion-body bg-white">
            <div className="card-body bg-white table-responsive">
              <fieldset disabled={props.checklistProps.completion}>
                <table className="table table-responsive">
                  <tbody>
                    <tr>
                      <td>
                        <h3 style={{ fontWeight: "bold" }}>1. Posture</h3>
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
                  </tbody>

                  <tbody>
                    <tr>
                      <td style={{ fontSize: 20 }} width="700">
                        1.1 Posture of the head - forwards and to the side
                        <p style={{ fontSize: 14 }}>
                          Does a clear bending of the head forwards or to the
                          side,or twisting to the side occur, as shown in the
                          figures, or more?
                        </p>
                        <img
                          src={require("../../Checklist/checklistPictures/q11.PNG")}
                        ></img>
                        <img
                          src={require("../../Checklist/checklistPictures/q11Options.PNG")}
                        ></img>
                      </td>

                      <td>
                        <form className="was-validated">
                          <select
                            disabled={props.checklistProps.completion === 1}
                            className="form-select"
                            required
                            aria-label="select example"
                            value={props.postureProps.posture.q11}
                            onChange={(e) => {
                              props.setQ11(e.target.value);
                            }}
                          >
                            <option value=""></option>
                            <option value="0">0</option>
                            <option value="0.5">0.5</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="7">7</option>
                          </select>
                          <div className="invalid-feedback">
                            Select A Number
                          </div>
                        </form>
                      </td>
                      <td>
                        <br />
                        <div
                          className="rectangle"
                          style={{
                            width: 75,
                            height: 50,
                            backgroundColor: handleColor(props, "11"),
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
                          disabled={!handleColor(props, "11")}
                          type="text"
                          maxLength={65}
                          value={props.postureProps.posture.q11_Comm}
                          onChange={(e) => {
                            props.setQ11Comm(e.target.value);
                          }}
                        ></textarea>
                        <p>
                          Count: {props.postureProps.posture.q11_Comm.length} /
                          65
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: 20 }}>
                        1.2 Posture of the head - backwards
                        <p style={{ fontSize: 14 }}>
                          Does bending of the head backwards occur, as shown in
                          the figures, or more?
                        </p>
                        <img
                          src={require("../../Checklist/checklistPictures/q12.PNG")}
                        ></img>
                      </td>

                      <td>
                        <form className="was-validated">
                          <select
                            className="form-select"
                            required
                            aria-label="select example"
                            value={props.postureProps.posture.q12}
                            onChange={(e) => {
                              props.setQ12(e.target.value);
                            }}
                          >
                            <option value=""></option>
                            <option value="0">0</option>
                            <option value="1.5">1.5</option>
                            <option value="3">3</option>
                            <option value="6">6</option>
                            <option value="10">10</option>
                          </select>
                          <div className="invalid-feedback">
                            Select A Number
                          </div>
                        </form>
                      </td>
                      <td>
                        <br />
                        <div
                          className="rectangle"
                          style={{
                            width: 75,
                            height: 50,
                            backgroundColor: handleColor(props, "12"),
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
                            disabled={!handleColor(props, "12")}
                            type="text"
                            maxLength={65}
                            value={props.postureProps.posture.q12_Comm}
                            onChange={(e) => {
                              props.setQ12Comm(e.target.value);
                            }}
                          />
                          <p>
                            Count: {props.postureProps.posture.q12_Comm.length}{" "}
                            / 65
                          </p>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: 20 }}>
                        1.3 Back posture - moderate bending
                        <p style={{ fontSize: 14 }}>
                          Does moderate bending of the upper body forwards or to
                          the side occur,as shown in the figures, or more?
                        </p>
                        <img
                          src={require("../../Checklist/checklistPictures/q13.PNG")}
                        ></img>
                      </td>

                      <td>
                        <form className="was-validated">
                          <select
                            className="form-select"
                            required
                            aria-label="select example"
                            value={props.postureProps.posture.q13}
                            onChange={(e) => {
                              props.setQ13(e.target.value);
                            }}
                          >
                            <option value=""></option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="7">7</option>
                          </select>
                          <div className="invalid-feedback">
                            Select A Number
                          </div>
                        </form>
                      </td>

                      <td>
                        <br />
                        <div
                          className="rectangle"
                          style={{
                            width: 75,
                            height: 50,
                            backgroundColor: handleColor(props, "13"),
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
                            disabled={!handleColor(props, "13")}
                            type="text"
                            maxLength={65}
                            value={props.postureProps.posture.q13_Comm}
                            onChange={(e) => {
                              props.setQ13Comm(e.target.value);
                            }}
                          ></textarea>
                          <p>
                            Count: {props.postureProps.posture.q13_Comm.length}{" "}
                            / 65
                          </p>
                        </label>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ fontSize: 20 }} width="700">
                        1.4 Back posture - considerable bending and twisting
                        <p style={{ fontSize: 14 }}>
                          Does considerable bending of the upper body forwards
                          or to the side,twisting or bending backwards occur, as
                          shown in the figures, or more?
                        </p>
                        <img
                          width={"360px"}
                          src={require("../../Checklist/checklistPictures/q14.PNG")}
                        ></img>
                        <img
                          width={"320px"}
                          src={require("../../Checklist/checklistPictures/q14Options.PNG")}
                        ></img>
                      </td>
                      <td>
                        <form className="was-validated">
                          <select
                            className="form-select"
                            required
                            aria-label="select example"
                            value={props.postureProps.posture.q14}
                            onChange={(e) => {
                              props.setQ14(e.target.value);
                            }}
                          >
                            <option value=""></option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="7">7</option>
                            <option value="10">10</option>
                          </select>
                          <div className="invalid-feedback">
                            Select A Number
                          </div>
                        </form>
                      </td>
                      <td>
                        <br />
                        <div
                          className="rectangle"
                          style={{
                            width: 75,
                            height: 50,
                            backgroundColor: handleColor(props, "14"),
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
                            disabled={!handleColor(props, "14")}
                            type="text"
                            maxLength={65}
                            value={props.postureProps.posture.q14_Comm}
                            onChange={(e) => {
                              props.setQ14Comm(e.target.value);
                            }}
                          ></textarea>
                          <p>
                            Count: {props.postureProps.posture.q14_Comm.length}{" "}
                            / 65
                          </p>
                        </label>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ fontSize: 20 }}>
                        1.5 Upper arm posture - hand in or outside the outer
                        work area
                        <p style={{ fontSize: 14 }}>
                          Is work performed with the hand at or above shoulder
                          height? (about 130- 150 cm)
                        </p>
                        <img
                          src={require("../../Checklist/checklistPictures/q15.PNG")}
                        ></img>
                      </td>

                      <td>
                        <div style={{ paddingBottom: 20 }}>
                          <form className="was-validated">
                            <select
                              className="form-select"
                              required
                              aria-label="select example"
                              value={props.postureProps.posture.q15a}
                              onChange={(e) => {
                                props.setQ15A(e.target.value);
                              }}
                            >
                              <option value="">Left</option>
                              <option value="0">0 </option>
                              <option value="1">1 </option>
                              <option value="2">2 </option>
                              <option value="3">3 </option>
                              <option value="5">5 </option>
                              <option value="7">7 </option>
                              <option value="10">10 </option>
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
                              required
                              aria-label="select example"
                              value={props.postureProps.posture.q15b}
                              onChange={(e) => {
                                props.setQ15B(e.target.value);
                              }}
                            >
                              <option value="">Right</option>
                              <option value="0">0 </option>
                              <option value="1">1 </option>
                              <option value="2">2 </option>
                              <option value="3">3 </option>
                              <option value="5">5 </option>
                              <option value="7">7 </option>
                              <option value="10">10 </option>
                            </select>
                            <div className="invalid-feedback">
                              Select A Number
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
                            backgroundColor: handleColor(props, "15a"),
                          }}
                        />
                        <br />

                        <div
                          className="rectangle"
                          style={{
                            width: 75,
                            height: 50,
                            backgroundColor: handleColor(props, "15b"),
                          }}
                        />
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
                                !handleColor(props, "15a") &&
                                !handleColor(props, "15b")
                              }
                              type="text"
                              maxLength={65}
                              value={props.postureProps.posture.q15_Comm}
                              onChange={(e) => {
                                props.setQ15Comm(e.target.value);
                              }}
                            ></textarea>
                            <p>
                              Count:{" "}
                              {props.postureProps.posture.q15_Comm.length} / 65
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ fontSize: 20 }} width="700">
                        1.6 Upper arm posture - hand in or outside the outer
                        work area
                        <p style={{ fontSize: 14 }}>
                          Is work performed with the hand in the outer work
                          area? If the hand is outside the outer work area
                          (white area), multiply the time-points for that time
                          by 1.5
                        </p>
                        <img
                          width={"300px"}
                          src={require("../../Checklist/checklistPictures/q16.PNG")}
                        ></img>
                        <img
                          src={require("../../Checklist/checklistPictures/q16Options.PNG")}
                        ></img>
                      </td>

                      <td>
                        <div style={{ paddingBottom: 20 }}>
                          <form className="was-validated">
                            <select
                              className="form-select"
                              required
                              aria-label="select example"
                              value={props.postureProps.posture.q16a}
                              onChange={(e) => {
                                props.setQ16A(e.target.value);
                              }}
                            >
                              <option value="">Left</option>
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="5">5</option>
                              <option value="7">7</option>
                              <option value="10">10</option>
                            </select>
                            <div className="invalid-feedback">
                              Select A Number
                            </div>
                          </form>
                        </div>

                        <div>
                          <form className="was-validated">
                            <select
                              className="form-select"
                              required
                              aria-label="select example"
                              value={props.postureProps.posture.q16b}
                              onChange={(e) => {
                                props.setQ16B(e.target.value);
                              }}
                            >
                              <option value="">Right</option>
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="5">5</option>
                              <option value="7">7</option>
                              <option value="10">10</option>
                            </select>
                            <div className="invalid-feedback">
                              Select A Number
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
                            backgroundColor: handleColor(props, "16a"),
                          }}
                        />
                        <br />
                        <div>
                          <div
                            className="rectangle"
                            style={{
                              width: 75,
                              height: 50,
                              backgroundColor: handleColor(props, "16b"),
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
                                !handleColor(props, "16a") &&
                                !handleColor(props, "16b")
                              }
                              type="text"
                              maxLength={65}
                              value={props.postureProps.posture.q16_Comm}
                              onChange={(e) => {
                                props.setQ16Comm(e.target.value);
                              }}
                            ></textarea>
                            <p>
                              Count:{" "}
                              {props.postureProps.posture.q16_Comm.length} / 65
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ fontSize: 20 }}>
                        1.7 Wrist posture
                        <p style={{ fontSize: 14 }}>
                          Is work performed with clearly bent wrist as shown in
                          the figures, or more?
                        </p>
                        <img
                          width={"290px"}
                          src={require("../../Checklist/checklistPictures/q17.PNG")}
                        ></img>
                        <img
                          src={require("../../Checklist/checklistPictures/q17Options.PNG")}
                        ></img>
                      </td>

                      <td>
                        <div style={{ paddingBottom: 20 }}>
                          <form className="was-validated">
                            <select
                              className="form-select"
                              required
                              aria-label="select example"
                              value={props.postureProps.posture.q17a}
                              onChange={(e) => {
                                props.setQ17A(e.target.value);
                              }}
                            >
                              <option value="">Left</option>
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="5">5</option>
                              <option value="7">7</option>
                            </select>
                            <div className="invalid-feedback">
                              Select A Number
                            </div>
                          </form>
                        </div>
                        <div>
                          <form className="was-validated">
                            <select
                              className="form-select"
                              required
                              aria-label="select example"
                              value={props.postureProps.posture.q17b}
                              onChange={(e) => {
                                props.setQ17B(e.target.value);
                              }}
                            >
                              <option value="">Right</option>
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="5">5</option>
                              <option value="7">7</option>
                            </select>
                            <div className="invalid-feedback">
                              Select A Number
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
                            backgroundColor: handleColor(props, "17a"),
                          }}
                        />
                        <br />
                        <div>
                          <div
                            className="rectangle"
                            style={{
                              width: 75,
                              height: 50,
                              backgroundColor: handleColor(props, "17b"),
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
                                !handleColor(props, "17a") &&
                                !handleColor(props, "17b")
                              }
                              type="text"
                              maxLength={65}
                              value={props.postureProps.posture.q17_Comm}
                              onChange={(e) => {
                                props.setQ17Comm(e.target.value);
                              }}
                            ></textarea>
                            <p>
                              Count:{" "}
                              {props.postureProps.posture.q17_Comm.length} / 65
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ fontSize: 20 }}>
                        1.8 Leg and foot space and surface
                        <p style={{ fontSize: 14 }}>
                          Is there a lack of space for the legs or for the feet,
                          or is the surface unstable or sloping
                        </p>
                        <img
                          src={require("../../Checklist/checklistPictures/q18.PNG")}
                        ></img>
                      </td>

                      <td>
                        <form className="was-validated">
                          <select
                            className="form-select"
                            required
                            aria-label="select example"
                            value={props.postureProps.posture.q18}
                            onChange={(e) => {
                              props.setQ18(e.target.value);
                            }}
                          >
                            <option value=""></option>
                            <option value="0">0</option>
                            <option value="0.5">0.5</option>
                            <option value="1">1</option>
                            <option value="1.5">1.5</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                          <div className="invalid-feedback">
                            Select A Number
                          </div>
                        </form>
                      </td>

                      <td>
                        <br />
                        <div
                          className="rectangle"
                          style={{
                            width: 75,
                            height: 50,
                            backgroundColor: handleColor(props, "18"),
                          }}
                        />
                      </td>

                      <td>
                        <label>
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
                              disabled={!handleColor(props, "18")}
                              type="text"
                              maxLength={65}
                              value={props.postureProps.posture.q18_Comm}
                              onChange={(e) => {
                                props.setQ18Comm(e.target.value);
                              }}
                            />
                            <p>
                              Count:{" "}
                              {props.postureProps.posture.q18_Comm.length} / 65
                            </p>
                          </div>
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
  if (number == "18") {
    if (props.postureProps.posture.q18 == "") {
      return "";
    }
    if (props.postureProps.posture.q18 == 3) {
      return "red";
    }
    if (
      props.postureProps.posture.q18 <= 2 &&
      props.postureProps.posture.q18 >= 1
    ) {
      return "yellow";
    }
    if (props.postureProps.posture.q18 < 1) {
      return "green";
    }
  }

  if (number == "17a") {
    if (props.postureProps.posture.q17a == "") {
      return "";
    }
    if (props.postureProps.posture.q17a >= 3) {
      return "red";
    }
    if (props.postureProps.posture.q17a == 2) {
      return "yellow";
    }
    if (props.postureProps.posture.q17a <= 1) {
      return "green";
    }
  }
  if (number == "17b") {
    if (props.postureProps.posture.q17b == "") {
      return "";
    }
    if (props.postureProps.posture.q17b >= 3) {
      return "red";
    }
    if (props.postureProps.posture.q17b == 2) {
      return "yellow";
    }
    if (props.postureProps.posture.q17b <= 1) {
      return "green";
    }
  }

  if (number == "16a") {
    if (props.postureProps.posture.q16a == "") {
      return "";
    }
    if (props.postureProps.posture.q16a >= 3) {
      return "red";
    }
    if (props.postureProps.posture.q16a == 2) {
      return "yellow";
    }
    if (props.postureProps.posture.q16a <= 1) {
      return "green";
    }
  }

  if (number == "16b") {
    if (props.postureProps.posture.q16b == "") {
      return "";
    }
    if (props.postureProps.posture.q16b >= 3) {
      return "red";
    }
    if (props.postureProps.posture.q16b == 2) {
      return "yellow";
    }
    if (props.postureProps.posture.q16b <= 1) {
      return "green";
    }
  }

  if (number == "15a") {
    if (props.postureProps.posture.q15a == "") {
      return "";
    }
    if (props.postureProps.posture.q15a >= 3) {
      return "red";
    }
    if (props.postureProps.posture.q15a == 2) {
      return "yellow";
    }
    if (props.postureProps.posture.q15a <= 1) {
      return "green";
    }
  }

  if (number == "15b") {
    if (props.postureProps.posture.q15b == "") {
      return "";
    }
    if (props.postureProps.posture.q15b >= 3) {
      return "red";
    }
    if (props.postureProps.posture.q15b == 2) {
      return "yellow";
    }
    if (props.postureProps.posture.q15b <= 1) {
      return "green";
    }
  }
  if (number == "14") {
    if (props.postureProps.posture.q14 == "") {
      return "";
    }
    if (props.postureProps.posture.q14 >= 3) {
      return "red";
    }
    if (props.postureProps.posture.q14 == 2) {
      return "yellow";
    }
    if (props.postureProps.posture.q14 <= 1) {
      return "green";
    }
  }
  if (number == "13") {
    if (props.postureProps.posture.q13 == "") {
      return "";
    }
    if (props.postureProps.posture.q13 >= 3) {
      return "red";
    }
    if (props.postureProps.posture.q13 == 2) {
      return "yellow";
    }
    if (props.postureProps.posture.q13 <= 1) {
      return "green";
    }
  }
  if (number == "12") {
    if (props.postureProps.posture.q12 == "") {
      return "";
    }
    if (props.postureProps.posture.q12 >= 3) {
      return "red";
    }
    if (props.postureProps.posture.q12 == 1.5) {
      return "yellow";
    }
    if (props.postureProps.posture.q12 <= 1) {
      return "green";
    }
  }
  if (number == "11") {
    if (props.postureProps.posture.q11 == "") {
      return "";
    }
    if (props.postureProps.posture.q11 >= 3) {
      return "red";
    }
    if (props.postureProps.posture.q11 == 2) {
      return "yellow";
    }
    if (props.postureProps.posture.q11 <= 1) {
      return "green";
    }
  }
};

export default connect(mapStateToProps, {
  setQ11,
  setQ11Comm,
  setQ12,
  setQ12Comm,
  setQ13,
  setQ13Comm,
  setQ14,
  setQ14Comm,
  setQ15A,
  setQ15B,
  setQ15Comm,
  setQ16A,
  setQ16B,
  setQ16Comm,
  setQ17A,
  setQ17B,
  setQ17Comm,
  setQ18,
  setQ18Comm,
})(Posture);
