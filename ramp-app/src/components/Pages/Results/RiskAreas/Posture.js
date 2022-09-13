import { React, useEffect } from "react";
import { connect } from "react-redux";
import "../Result.css";

const mapStateToProps = (state) => ({
  postureProps: state.postureState,
});

const array = [
  "11",
  "12",
  "13",
  "14",
  "15a",
  "15b",
  "16a",
  "16b",
  "17a",
  "17b",
  "18",
];

const Posture = (props) => {
  const zero = 0;
  return (
    <div className="accordion" id="posture">
      <br />
      <div className="accordion-item">
        <h2 className="accordion-header" id="posture-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#posture-collapseOne"
            aria-expanded="false"
            aria-controls="posture-collapseOne"
          >
            1. Posture
          </button>
        </h2>
        <div
          id="posture-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="posture-headingOne"
          data-bs-parent="#posture"
        >
          <div className="accordion-body bg-white">
            <div className="card-body bg-white">
              <table className="table table-responsive">
                <tbody>
                  <tr>
                    <td>
                      <h3 style={{ fontWeight: "bold" }}>1. Posture</h3>
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

                <tbody>
                  <tr>
                    <th style={{ fontSize: 20, color: "#1954A6" }} width="700">
                      1.1 Posture of the head - forwards and to the side
                      <p style={{ fontSize: 14 }} className="text-dark">
                        Does a clear bending of the head forwards or to the
                        side, or twisting to the side occur, as shown in the
                        figures, or more?
                      </p>
                    </th>

                    <td>
                      <label className="badge text-dark score">
                        {props.postureProps.posture.q11}
                      </label>
                    </td>

                    <td>
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
                      <label className="badge text-dark">
                        <textarea
                          className="form-control"
                          readOnly
                          style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                          placeholder="No comment"
                          disabled={true}
                          type="text"
                          maxLength={65}
                          value={props.postureProps.posture.q11_Comm}
                        />
                      </label>
                      <p> Count: {props.postureProps.posture.q11_Comm.length} / 65</p>
                    </td>
                  </tr>

                  <tr>
                    <th style={{ fontSize: 20, color: "#1954A6" }} width="700">
                      1.2 Posture of the head - backwards
                      <p style={{ fontSize: 14 }} className="text-dark">
                        Does bending of the head backwards occur, as shown in
                        the figures, or more?
                      </p>
                    </th>

                    <td>
                      <label className="badge text-dark score">
                        {props.postureProps.posture.q12}
                      </label>
                    </td>

                    <td>
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
                      <label className="badge text-dark">
                        <textarea
                          className="form-control"
                          readOnly
                          style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                          placeholder="No comment"
                          disabled={true}
                          type="text"
                          maxLength={65}
                          value={props.postureProps.posture.q12_Comm}
                        />
                      </label>
                      <p> Count: {props.postureProps.posture.q12_Comm.length} / 65</p>
                    </td>
                  </tr>

                  <tr>
                    <th style={{ fontSize: 20, color: "#1954A6" }} width="700">
                      1.3 Back posture - moderate bending
                      <p style={{ fontSize: 14 }} className="text-dark">
                        Does moderate bending of the upper body forwards or to
                        the side occur, as shown in the figures, or more?
                      </p>
                    </th>

                    <td>
                      <label className="badge text-dark score">
                        {props.postureProps.posture.q13}
                      </label>
                    </td>

                    <td>
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
                      <label className="badge text-dark">
                        <textarea
                          className="form-control"
                          readOnly
                          style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                          placeholder="No comment"
                          disabled={true}
                          type="text"
                          maxLength={65}
                          value={props.postureProps.posture.q13_Comm}
                        />
                      </label>
                      <p> Count: {props.postureProps.posture.q13_Comm.length} / 65</p>
                    </td>
                  </tr>

                  <tr>
                    <th style={{ fontSize: 20, color: "#1954A6" }} width="700">
                      1.4 Back posture - considerable bending and twisting
                      <p style={{ fontSize: 14 }} className="text-dark">
                        Does considerable bending of the upper body forwards or
                        to the side,twisting or bending backwards occur, as
                        shown in the figures, or more?
                      </p>
                    </th>

                    <td>
                      <label className="badge text-dark score">
                        {props.postureProps.posture.q14}
                      </label>
                    </td>

                    <td>
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
                      <label className="badge text-dark">
                        <textarea
                          className="form-control"
                          style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                          readOnly
                          placeholder="No comment"
                          disabled={true}
                          type="text"
                          maxLength={65}
                          value={props.postureProps.posture.q14_Comm}
                        />
                      </label>
                      <p> Count: {props.postureProps.posture.q14_Comm.length} / 65</p>
                    </td>
                  </tr>

                  <tr>
                    <th style={{ fontSize: 20, color: "#1954A6" }} width="700">
                      1.5 Upper arm posture - hand in or outside the outer work
                      area
                      <p style={{ fontSize: 14 }} className="text-dark">
                        Is work performed with the hand at or above shoulder
                        height? (about 130- 150 cm)
                      </p>
                    </th>

                    <td>
                      <label className="badge text-dark score">
                        Left: {props.postureProps.posture.q15a}
                      </label>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <label className="badge text-dark score">
                        Right: {props.postureProps.posture.q15b}
                      </label>
                    </td>
                    <td>
                      <div
                        hidden={!handleColor(props, "15a")}
                        className="rectangle"
                        style={{
                          width: 75,
                          height: 50,
                          backgroundColor: handleColor(props, "15a"),
                        }}
                      ></div>
                      <br />
                      <br/>
                      <br/>
                      <div
                        hidden={!handleColor(props, "15b")}
                        className="rectangle"
                        style={{
                          width: 75,
                          height: 50,
                          backgroundColor: handleColor(props, "15b"),
                        }}
                      >
                      </div>
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
                          value={props.postureProps.posture.q15_Comm}
                        />
                      </label>
                      <p> Count: {props.postureProps.posture.q15_Comm.length} / 65</p>
                    </td>
                  </tr>

                  <tr>
                    <th style={{ fontSize: 20, color: "#1954A6" }} width="700">
                      1.6 Upper arm posture - hand in or outside the outer work
                      area
                      <p style={{ fontSize: 14 }} className="text-dark">
                        Is work performed with the hand in the outer work area?
                        If the hand is outside the outer work area (white area),
                        multiply the time-points for that time by 1.5
                      </p>
                    </th>

                    <td>
                      <label className="badge text-dark score">
                        Left: {props.postureProps.posture.q16a}
                      </label>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <label className="badge text-dark score">
                        Right: {props.postureProps.posture.q16b}
                      </label>
                    </td>

                    <td>
                      <div
                        hidden={!handleColor(props, "16a")}
                        className="rectangle"
                        style={{
                          width: 75,
                          height: 50,
                          backgroundColor: handleColor(props, "16a"),
                        }}
                      >
                      </div>
                      <br />
                      <br/>
                      <br/>
                      <div
                        hidden={!handleColor(props, "16b")}
                        className="rectangle"
                        style={{
                          width: 75,
                          height: 50,
                          backgroundColor: handleColor(props, "16b"),
                        }}
                      >
                      </div>
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
                          value={props.postureProps.posture.q16_Comm}
                        />
                      </label>
                      <p> Count: {props.postureProps.posture.q16_Comm.length} / 65</p>
                    </td>
                  </tr>

                  <tr>
                    <th style={{ fontSize: 20, color: "#1954A6" }} width="700">
                      1.7 Wrist posture
                      <p style={{ fontSize: 14 }} className="text-dark">
                        Is work performed with clearly bent wrist as shown in
                        the figures, or more?
                      </p>
                    </th>

                    <td>
                      <label className="badge text-dark score">
                        Left: {props.postureProps.posture.q17a}
                      </label>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <label className="badge text-dark score">
                        Right: {props.postureProps.posture.q17b}
                      </label>
                    </td>

                    <td>
                      <div
                        hidden={!handleColor(props, "17a")}
                        className="rectangle"
                        style={{
                          width: 75,
                          height: 50,
                          backgroundColor: handleColor(props, "17a"),
                        }}
                      ></div>
                      <br />
                      <br/>
                      <br/>
                      <div
                        hidden={!handleColor(props, "17b")}
                        className="rectangle"
                        style={{
                          width: 75,
                          height: 50,
                          backgroundColor: handleColor(props, "17b"),
                        }}
                      >
                        {" "}
                      </div>
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
                          value={props.postureProps.posture.q17_Comm}
                        />
                      </label>
                      <p> Count: {props.postureProps.posture.q17_Comm.length} / 65</p>
                    </td>
                  </tr>

                  <tr>
                    <th style={{ fontSize: 20, color: "#1954A6" }} width="700">
                      1.8 Leg and foot space and surface
                      <p style={{ fontSize: 14 }} className="text-dark">
                        Is there a lack of space for the legs or for the feet,
                        or is the surface unstable or sloping
                      </p>
                    </th>

                    <td>
                      <label className="badge text-dark score">
                        {props.postureProps.posture.q18}
                      </label>
                    </td>

                    <td>
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
                      <label className="badge text-dark">
                        <textarea
                          className="form-control"
                          style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                          readOnly
                          placeholder="No comment"
                          disabled={true}
                          type="text"
                          maxLength={65}
                          value={props.postureProps.posture.q18_Comm}
                        />
                      </label>
                      <p> Count: {props.postureProps.posture.q18_Comm.length} / 65</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br />
      {useEffect(() => {
        handleCounter(props, zero, zero, zero);
      }, [])}
    </div>
  );
};

const handleCounter = (props, red, yellow, green) => {
  array.map(
    (q) => (
      handleColor(props, q) == "red" ? (red = red + 1) : "",
      handleColor(props, q) == "yellow" ? (yellow = yellow + 1) : "",
      handleColor(props, q) == "green" ? (green = green + 1) : ""
    )
  );
  props.setRed(red);
  props.setYellow(yellow);
  props.setGreen(green);
  props.setTotal(totalScore(props));
};

const totalScore = (props) => {
  let total = 0;
  if (props.postureProps.posture.q11 != "none") {
    total = total + parseFloat(props.postureProps.posture.q11);
  }
  if (props.postureProps.posture.q12 != "none") {
    total = total + parseFloat(props.postureProps.posture.q12);
  }
  if (props.postureProps.posture.q13 != "none") {
    total = total + parseFloat(props.postureProps.posture.q13);
  }
  if (props.postureProps.posture.q14 != "none") {
    total = total + parseFloat(props.postureProps.posture.q14);
  }
  if (
    props.postureProps.posture.q15a != "none" &&
    props.postureProps.posture.q15b == "none"
  ) {
    total = total + parseFloat(props.postureProps.posture.q15a);
  } else if (
    props.postureProps.posture.q15a == "none" &&
    props.postureProps.posture.q15b != "none"
  ) {
    total = total + parseFloat(props.postureProps.posture.q15b);
  } else if (
    props.postureProps.posture.q15a != "none" &&
    props.postureProps.posture.q15b != "none"
  ) {
    if (
      parseFloat(props.postureProps.posture.q15a) >=
      parseFloat(props.postureProps.posture.q15b)
    ) {
      total = total + parseFloat(props.postureProps.posture.q15a);
    } else {
      total = total + parseFloat(props.postureProps.posture.q15b);
    }
  }
  if (
    props.postureProps.posture.q16a != "none" &&
    props.postureProps.posture.q16b == "none"
  ) {
    total = total + parseFloat(props.postureProps.posture.q16a);
  } else if (
    props.postureProps.posture.q16a == "none" &&
    props.postureProps.posture.q16b != "none"
  ) {
    total = total + parseFloat(props.postureProps.posture.q16b);
  } else if (
    props.postureProps.posture.q16a != "none" &&
    props.postureProps.posture.q16b != "none"
  ) {
    if (
      parseFloat(props.postureProps.posture.q16a) >=
      parseFloat(props.postureProps.posture.q16b)
    ) {
      total = total + parseFloat(props.postureProps.posture.q16a);
    } else {
      total = total + parseFloat(props.postureProps.posture.q16b);
    }
  }
  if (
    props.postureProps.posture.q17a != "none" &&
    props.postureProps.posture.q17b == "none"
  ) {
    total = total + parseFloat(props.postureProps.posture.q17a);
  } else if (
    props.postureProps.posture.q17a == "none" &&
    props.postureProps.posture.q17b != "none"
  ) {
    total = total + parseFloat(props.postureProps.posture.q17b);
  } else if (
    props.postureProps.posture.q17a != "none" &&
    props.postureProps.posture.q17b != "none"
  ) {
    if (
      parseFloat(props.postureProps.posture.q17a) >=
      parseFloat(props.postureProps.posture.q17b)
    ) {
      total = total + parseFloat(props.postureProps.posture.q17a);
    } else {
      total = total + parseFloat(props.postureProps.posture.q17b);
    }
  }
  return total;
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

export default connect(mapStateToProps)(Posture);
