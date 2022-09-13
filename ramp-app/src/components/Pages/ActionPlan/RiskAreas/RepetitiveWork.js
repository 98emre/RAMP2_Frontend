import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  repetitiveWorkActionsProps: state.repetitiveWorkActionsState,
  repetitiveWorkProps: state.repetitiveWorkState,
});

const RepetitiveWork = (props) => {
  return (
    <>
      <tr style={{ fontSize: "18px" }} className="bg-primary text-white">
        <th scope="row">2. Work movements and repetitive work</th>
      </tr>
      <tr
        style={{ fontSize: "14px" }}
        hidden={!handleColor(props, "21a") && !handleColor(props, "21b")}
      >
        <th scope="row">2.1 Movements of the arm (upper and lower arm)</th>
        <td>
          Left
          <div
            className="rectangle"
            style={{
              width: 75,
              height: 50,
              backgroundColor: handleColor(props, "21a"),
            }}
          />
          Right
          <div
            className="rectangle"
            style={{
              width: 75,
              height: 50,
              backgroundColor: handleColor(props, "21b"),
            }}
          />
        </td>
        <td><h3>{props.repetitiveWorkProps.repetitiveWork.q21a}</h3>
          <br />
          <br />
          <br /><h3>{props.repetitiveWorkProps.repetitiveWork.q21b}</h3>
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.repetitiveWorkProps.repetitiveWork.q21_Comm}
          />
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.repetitiveWorkActionsProps.repetitiveWorkActions.plannedActions21}
          />
        </td>
        <td>{props.repetitiveWorkActionsProps.repetitiveWorkActions.date21}</td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.repetitiveWorkActionsProps.repetitiveWorkActions.byWhom21}
          />
        </td>
        <td>{props.repetitiveWorkActionsProps.repetitiveWorkActions.readyDate21}</td>
        <td>{props.repetitiveWorkActionsProps.repetitiveWorkActions.followUpDate21}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal21"
          >
            Action Plan Details
          </button>
        </td>
      </tr>
      <tr
        style={{ fontSize: "14px" }}
        hidden={!handleColor(props, "22a") && !handleColor(props, "22b")}
      >
        <th scope="row">2.2 Movements of the wrist</th>
        <td>
          Left
          <div
            className="rectangle"
            style={{
              width: 75,
              height: 50,
              backgroundColor: handleColor(props, "22a"),
            }}
          />
          Right
          <div
            className="rectangle"
            style={{
              width: 75,
              height: 50,
              backgroundColor: handleColor(props, "22b"),
            }}
          />
        </td>
        <td><h3>{props.repetitiveWorkProps.repetitiveWork.q22a}</h3>
          <br />
          <br />
          <br /><h3>{props.repetitiveWorkProps.repetitiveWork.q22b}</h3>
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.repetitiveWorkProps.repetitiveWork.q22_Comm}
          />
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.repetitiveWorkActionsProps.repetitiveWorkActions.plannedActions22}
          />
        </td>
        <td>{props.repetitiveWorkActionsProps.repetitiveWorkActions.date22}</td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.repetitiveWorkActionsProps.repetitiveWorkActions.byWhom22}
          />
        </td>
        <td>{props.repetitiveWorkActionsProps.repetitiveWorkActions.readyDate22}</td>
        <td>{props.repetitiveWorkActionsProps.repetitiveWorkActions.followUpDate22}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal22"
          >
            Action Plan Details
          </button>
        </td>
      </tr>
      <tr
        style={{ fontSize: "14px" }}
        hidden={!handleColor(props, "23a") && !handleColor(props, "23b")}
      >
        <th scope="row">2.3 Type of grip - frequency</th>
        <td>
          Left
          <div
            className="rectangle"
            style={{
              width: 75,
              height: 50,
              backgroundColor: handleColor(props, "23a"),
            }}
          />
          Right
          <div
            className="rectangle"
            style={{
              width: 75,
              height: 50,
              backgroundColor: handleColor(props, "23b"),
            }}
          />
        </td>
        <td><h3>{props.repetitiveWorkProps.repetitiveWork.q23a}</h3>
          <br />
          <br />
          <br /><h3>{props.repetitiveWorkProps.repetitiveWork.q23b}</h3>
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.repetitiveWorkProps.repetitiveWork.q23_Comm}
          />
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.repetitiveWorkActionsProps.repetitiveWorkActions.plannedActions23}
          />
        </td>
        <td>{props.repetitiveWorkActionsProps.repetitiveWorkActions.date23}</td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.repetitiveWorkActionsProps.repetitiveWorkActions.byWhom23}
          />
        </td>
        <td>{props.repetitiveWorkActionsProps.repetitiveWorkActions.readyDate23}</td>
        <td>{props.repetitiveWorkActionsProps.repetitiveWorkActions.followUpDate23}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal23"
          >
            Action Plan Details
          </button>
        </td>
      </tr>
      <tr style={{ fontSize: "14px" }} hidden={!handleColor(props, "24")}>
        <th scope="row">
          2.4 Shorter recovery/variation during work (mainly regarding the neck,
          the arms and the back)
        </th>
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
        <td><h3>{props.repetitiveWorkProps.repetitiveWork.q24}</h3></td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.repetitiveWorkProps.repetitiveWork.q24_Comm}
          />
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.repetitiveWorkActionsProps.repetitiveWorkActions.plannedActions24}
          />
        </td>
        <td>{props.repetitiveWorkActionsProps.repetitiveWorkActions.date24}</td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.repetitiveWorkActionsProps.repetitiveWorkActions.byWhom24}
          />
        </td>
        <td>{props.repetitiveWorkActionsProps.repetitiveWorkActions.readyDate24}</td>
        <td>{props.repetitiveWorkActionsProps.repetitiveWorkActions.followUpDate24}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            disabled={!handleColor(props, "24")}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal24"
          >
            Action Plan Details
          </button>
        </td>
      </tr>
      <tr style={{ fontSize: "14px" }} hidden={!handleColor(props, "25")}>
        <th scope="row">
          2.5 Longer recovery/variation during work (not breaks, e.g. task
          rotation that gives sufficient recovery)
        </th>
        <td>
          <div
            className="rectangle"
            style={{
              width: 75,
              height: 50,
              backgroundColor: handleColor(props, "25"),
              textAlign: "center",
            }}
          />
        </td>
        <td><h3>{props.repetitiveWorkProps.repetitiveWork.q25}</h3></td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.repetitiveWorkProps.repetitiveWork.q25_Comm}
          />
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.repetitiveWorkActionsProps.repetitiveWorkActions.plannedActions25}
          />
        </td>
        <td>{props.repetitiveWorkActionsProps.repetitiveWorkActions.date25}</td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.repetitiveWorkActionsProps.repetitiveWorkActions.byWhom25}
          />
        </td>
        <td>{props.repetitiveWorkActionsProps.repetitiveWorkActions.readyDate25}</td>
        <td>{props.repetitiveWorkActionsProps.repetitiveWorkActions.followUpDate25}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            disabled={!handleColor(props, "25")}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal25"
          >
            Action Plan Details
          </button>
        </td>
      </tr>
    </>
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
export default connect(mapStateToProps)(RepetitiveWork);
