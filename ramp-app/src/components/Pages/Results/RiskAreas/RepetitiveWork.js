import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";

const mapStateToProps = (state) => ({
  repetitiveWorkProps: state.repetitiveWorkState,
});

const array = ["21a", "21b", "22a", "22b", "23a", "23b", "24", "25"];

const RepetitiveWork = (props) => {
  const zero = 0;
  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            2. Repetitive Work
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#repetitiveWork"
        >
          <div className="accordion-body bg-white">
            <div className="card-body bg-white">
              <table className="table table-responsive">
                <tbody>
                  <tr>
                    <td>
                      <h3 style={{ fontWeight: "bold" }}>
                        2. Work Movements And Repetitive Work
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

                <tbody>
                  <tr>
                    <th style={{ fontSize: 20, color: "#1954A6" }} width="700">
                      2.1 Movements of the arm (upper and lower arm)
                      <p style={{ fontSize: 14 }} className="text-dark">
                        How are the movements of the arm generally?
                      </p>
                    </th>
                    <td>
                      <label className="badge text-dark score">
                        Left: {props.repetitiveWorkProps.repetitiveWork.q21a}
                      </label>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <label className="badge text-dark score">
                        Right: {props.repetitiveWorkProps.repetitiveWork.q21b}
                      </label>
                    </td>
                    <td>
                      <div
                        hidden={!handleColor(props, "21a")}
                        className="rectangle"
                        style={{
                          width: 75,
                          height: 50,
                          backgroundColor: handleColor(props, "21a"),
                        }}
                      >
                      </div>
                      <br />
                      <br />
                      <br />
                      <div
                        hidden={!handleColor(props, "21b")}
                        className="rectangle"
                        style={{
                          width: 75,
                          height: 50,
                          backgroundColor: handleColor(props, "21b"),
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
                          value={props.repetitiveWorkProps.repetitiveWork.q21_Comm}
                        />
                      </label>
                      <p>Count: {props.repetitiveWorkProps.repetitiveWork.q21_Comm.length} / 65</p>
                    </td>
                  </tr>

                  <tr>
                    <th style={{ fontSize: 20, color: "#1954A6" }} width="700">
                      2.2 Movements of the wrist
                      <p style={{ fontSize: 14 }} className="text-dark">
                        Do similar movements of the wrist occur?
                      </p>
                    </th>

                    <td>
                      <label className="badge text-dark score">
                        Left: {props.repetitiveWorkProps.repetitiveWork.q22a}
                      </label>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <label className="badge text-dark score">
                        Right: {props.repetitiveWorkProps.repetitiveWork.q22b}
                      </label>
                    </td>
                    <td>
                      <div
                        hidden={!handleColor(props, "22a")}
                        className="rectangle"
                        style={{
                          width: 75,
                          height: 50,
                          backgroundColor: handleColor(props, "22a"),
                        }}
                      >
                      </div>
                      <br />
                      <br />
                      <br />
                      <div
                        hidden={!handleColor(props, "22b")}
                        className="rectangle"
                        style={{
                          width: 75,
                          height: 50,
                          backgroundColor: handleColor(props, "22b"),
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
                          value={props.repetitiveWorkProps.repetitiveWork.q22_Comm}
                        />
                      </label>
                      <p>Count: {props.repetitiveWorkProps.repetitiveWork.q22_Comm.length} / 65</p>
                    </td>
                  </tr>

                  <tr>
                    <th style={{ fontSize: 20, color: "#1954A6" }} width="700">
                      2.3 Type of grip - frequency
                      <p style={{ fontSize: 14 }} className="text-dark">
                        Is overhand grip (palm facing downward), wide finger
                        grip or pinch grip used while lifting or holding objects
                        weighing 0.5 kg or more?
                      </p>
                    </th>

                    <td>
                      <label className="badge text-dark score">
                        Left: {props.repetitiveWorkProps.repetitiveWork.q23a}
                      </label>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <label className="badge text-dark score">
                        Right: {props.repetitiveWorkProps.repetitiveWork.q23b}
                      </label>
                    </td>
                    <td>
                      <div
                        hidden={!handleColor(props, "23a")}
                        className="rectangle"
                        style={{
                          width: 75,
                          height: 50,
                          backgroundColor: handleColor(props, "23a"),
                        }}
                      >
                      </div>
                      <br />
                      <br />
                      <br />
                      <div
                        hidden={!handleColor(props, "23b")}
                        className="rectangle"
                        style={{
                          width: 75,
                          height: 50,
                          backgroundColor: handleColor(props, "23b"),
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
                          value={props.repetitiveWorkProps.repetitiveWork.q23_Comm}
                        />
                      </label>
                      <p>Count: {props.repetitiveWorkProps.repetitiveWork.q23_Comm.length} / 65</p>
                    </td>
                  </tr>
                  <tr>
                    <th style={{ fontSize: 20, color: "#1954A6" }} width="700">
                      2.4 Shorter recovery/variation during work (mainly
                      regarding the neck, the arms and the back)
                      <p style={{ fontSize: 14 }} className="text-dark">
                        Assessment of whether or not the work enables sufficient
                        variation or breaks so that muscle groups under strain
                        are given time to recover. The variation or break has to
                        be at least 5 seconds at a time to be eligible.
                        Approximately, how much of the working time consists of
                        such variations or breaks generally?
                      </p>
                    </th>

                    <td>
                      <label className="badge text-dark score">
                        {props.repetitiveWorkProps.repetitiveWork.q24}
                      </label>
                    </td>

                    <td>
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
                      <label className="badge text-dark">
                        <textarea
                          className="form-control"
                          style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                          readOnly
                          placeholder="No comment"
                          disabled={true}
                          type="text"
                          maxLength={65}
                          value={props.repetitiveWorkProps.repetitiveWork.q24_Comm}
                        />
                      </label>
                      <p>Count: {props.repetitiveWorkProps.repetitiveWork.q24_Comm.length} / 65</p>

                    </td>
                  </tr>

                  <tr>
                    <th style={{ fontSize: 20, color: "#1954A6" }} width="700">
                      2.5 Longer recovery/variation during work (not breaks,
                      e.g. task rotation that gives sufficient recovery)
                      <p style={{ fontSize: 14 }} className="text-dark">
                        Assessment of whether or not the work enables sufficient
                        variation or breaks so that muscle groups The variation
                        or break has to be at least 5 seconds at a time to be
                        eligible. Approximately, how often does such variation
                        or breaks occur during the work generally?
                      </p>
                    </th>

                    <td>
                      <label className="badge text-dark score">
                        {props.repetitiveWorkProps.repetitiveWork.q25}
                      </label>
                    </td>

                    <td>
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
                      <label className="badge text-dark">
                        <textarea
                          className="form-control"
                          style={{ "resize": "none", "borderRadius": "3%", "width": "10rem", "height": "10rem", "border": "3px solid black" }}
                          readOnly
                          placeholder="No comment"
                          disabled={true}
                          type="text"
                          maxLength={65}
                          value={props.repetitiveWorkProps.repetitiveWork.q25_Comm}
                        />
                      </label>
                      <p>Count: {props.repetitiveWorkProps.repetitiveWork.q25_Comm.length} / 65</p>
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
  if (
    props.repetitiveWorkProps.repetitiveWork.q21a != "none" &&
    props.repetitiveWorkProps.repetitiveWork.q21b == "none"
  ) {
    total = total + parseFloat(props.repetitiveWorkProps.repetitiveWork.q21a);
  } else if (
    props.repetitiveWorkProps.repetitiveWork.q21a == "none" &&
    props.repetitiveWorkProps.repetitiveWork.q21b != "none"
  ) {
    total = total + parseFloat(props.repetitiveWorkProps.repetitiveWork.q21b);
  } else if (
    props.repetitiveWorkProps.repetitiveWork.q21a != "none" &&
    props.repetitiveWorkProps.repetitiveWork.q21b != "none"
  ) {
    if (
      parseFloat(props.repetitiveWorkProps.repetitiveWork.q21a) >=
      parseFloat(props.repetitiveWorkProps.repetitiveWork.q21b)
    ) {
      total = total + parseFloat(props.repetitiveWorkProps.repetitiveWork.q21a);
    } else {
      total = total + parseFloat(props.repetitiveWorkProps.repetitiveWork.q21b);
    }
  }
  if (
    props.repetitiveWorkProps.repetitiveWork.q22a != "none" &&
    props.repetitiveWorkProps.repetitiveWork.q22b == "none"
  ) {
    total = total + parseFloat(props.repetitiveWorkProps.repetitiveWork.q22a);
  } else if (
    props.repetitiveWorkProps.repetitiveWork.q22a == "none" &&
    props.repetitiveWorkProps.repetitiveWork.q22b != "none"
  ) {
    total = total + parseFloat(props.repetitiveWorkProps.repetitiveWork.q22b);
  } else if (
    props.repetitiveWorkProps.repetitiveWork.q22a != "none" &&
    props.repetitiveWorkProps.repetitiveWork.q22b != "none"
  ) {
    if (
      parseFloat(props.repetitiveWorkProps.repetitiveWork.q22a) >=
      parseFloat(props.repetitiveWorkProps.repetitiveWork.q22b)
    ) {
      total = total + parseFloat(props.repetitiveWorkProps.repetitiveWork.q22a);
    } else {
      total = total + parseFloat(props.repetitiveWorkProps.repetitiveWork.q22b);
    }
  }
  if (
    props.repetitiveWorkProps.repetitiveWork.q23a != "none" &&
    props.repetitiveWorkProps.repetitiveWork.q23b == "none"
  ) {
    total = total + parseFloat(props.repetitiveWorkProps.repetitiveWork.q23a);
  } else if (
    props.repetitiveWorkProps.repetitiveWork.q23a == "none" &&
    props.repetitiveWorkProps.repetitiveWork.q23b != "none"
  ) {
    total = total + parseFloat(props.repetitiveWorkProps.repetitiveWork.q23b);
  } else if (
    props.repetitiveWorkProps.repetitiveWork.q23a != "none" &&
    props.repetitiveWorkProps.repetitiveWork.q23b != "none"
  ) {
    if (
      parseFloat(props.repetitiveWorkProps.repetitiveWork.q23a) >=
      parseFloat(props.repetitiveWorkProps.repetitiveWork.q23b)
    ) {
      total = total + parseFloat(props.repetitiveWorkProps.repetitiveWork.q23a);
    } else {
      total = total + parseFloat(props.repetitiveWorkProps.repetitiveWork.q23b);
    }
  }
  if (props.repetitiveWorkProps.repetitiveWork.q24 != "none") {
    total = total + parseFloat(props.repetitiveWorkProps.repetitiveWork.q24);
  }
  if (props.repetitiveWorkProps.repetitiveWork.q25 != "none") {
    total = total + parseFloat(props.repetitiveWorkProps.repetitiveWork.q25);
  }
  return total;
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

export default connect(mapStateToProps)(RepetitiveWork);
