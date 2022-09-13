import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  postureActionsProps: state.postureActionsState,
  postureProps: state.postureState,
});

const Posture = (props) => {
  return (
    <>
      <tr style={{ fontSize: "18px" }} className="bg-primary text-white">
        <th scope="row">1. Postures</th>
      </tr>
      <tr style={{ fontSize: "14px" }} hidden={!handleColor(props, "11")}>
        <th scope="row">1.1 Posture of the head - forwards and to the side</th>
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
        <td><h3>{props.postureProps.posture.q11}</h3></td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureProps.posture.q11_Comm}
          />
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureActionsProps.postureActions.plannedActions11}
          />
        </td>
        <td>{props.postureActionsProps.postureActions.date11}</td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureActionsProps.postureActions.byWhom11}
          />
        </td>
        <td>{props.postureActionsProps.postureActions.readyDate11}</td>
        <td>{props.postureActionsProps.postureActions.followUpDate11}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
          >
            Action Plan Details
          </button>
        </td>
      </tr>
      <tr style={{ fontSize: "14px" }} hidden={!handleColor(props, "12")}>
        <th scope="row">1.2 Posture of the head - backwards</th>
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
        <td><h3>{props.postureProps.posture.q12}</h3></td>
        <td>
            <textarea
              style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
              type="text"
              readOnly
              disabled={true}
              value={props.postureProps.posture.q12_Comm}
            />
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureActionsProps.postureActions.plannedActions12}
          />
        </td>
        <td>{props.postureActionsProps.postureActions.date12}</td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureActionsProps.postureActions.byWhom12}
          />
        </td>
        <td>{props.postureActionsProps.postureActions.readyDate12}</td>
        <td>{props.postureActionsProps.postureActions.followUpDate12}</td>
        <td>
          <button
            type="button" className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
          >
            Action Plan Details
          </button>
        </td>
      </tr>

      <tr style={{ fontSize: "14px" }} hidden={!handleColor(props, "13")}>
        <th scope="row">1.3 Back posture - moderate bending</th>
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
        <td><h3>{props.postureProps.posture.q13}</h3></td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureProps.posture.q13_Comm}
          />
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureActionsProps.postureActions.plannedActions13}
          />
        </td>
        <td>{props.postureActionsProps.postureActions.date13}</td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureActionsProps.postureActions.byWhom13}
          />
        </td>
        <td>{props.postureActionsProps.postureActions.readyDate13}</td>
        <td>{props.postureActionsProps.postureActions.followUpDate13}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal3"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
          >
            Action Plan Details
          </button>
        </td>
      </tr>

      <tr style={{ fontSize: "14px" }} hidden={!handleColor(props, "14")}>
        <th scope="row">
          1.4 Back posture - considerable bending and twisting
        </th>
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
        <td><h3>{props.postureProps.posture.q14}</h3></td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureProps.posture.q14_Comm}
          />
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureActionsProps.postureActions.plannedActions14}
          />
        </td>
        <td>{props.postureActionsProps.postureActions.date14}</td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureActionsProps.postureActions.byWhom14}
          />
        </td>
        <td>{props.postureActionsProps.postureActions.readyDate14}</td>
        <td>{props.postureActionsProps.postureActions.followUpDate14}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal4"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
          >
            Action Plan Details
          </button>
        </td>
      </tr>
      <tr
        style={{ fontSize: "14px" }}
        hidden={!handleColor(props, "15a") && !handleColor(props, "15b")}
      >
        <th scope="row">
          1.5 Upper arm posture - hand in or above shoulder height*
        </th>
        <td>
          Left
          <div
            className="rectangle"
            style={{
              width: 75,
              height: 50,
              backgroundColor: handleColor(props, "15a"),
            }}
          />
          Right
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
          <div><h3>{props.postureProps.posture.q15a}</h3></div>
          <br />
          <br />
          <br />
          <div><h3>{props.postureProps.posture.q15b}</h3></div>
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureProps.posture.q15_Comm}
          />
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureActionsProps.postureActions.plannedActions15}
          />
        </td>
        <td>{props.postureActionsProps.postureActions.date15}</td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureActionsProps.postureActions.byWhom15}
          />
        </td>
        <td>{props.postureActionsProps.postureActions.readyDate15}</td>
        <td>{props.postureActionsProps.postureActions.followUpDate15}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal5"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
          >
            Action Plan Details
          </button>
        </td>
      </tr>
      <tr
        style={{ fontSize: "14px" }}
        hidden={!handleColor(props, "16a") && !handleColor(props, "16b")}
      >
        <th scope="row">
          1.6 Upper arm posture - hand in or outside the outer work area*
        </th>
        <td>
          Left
          <div
            className="rectangle"
            style={{
              width: 75,
              height: 50,
              backgroundColor: handleColor(props, "16a"),
            }}
          />
          Right
          <div
            className="rectangle"
            style={{
              width: 75,
              height: 50,
              backgroundColor: handleColor(props, "16b"),
            }}
          />
        </td>
        <td>
          <div><h3>{props.postureProps.posture.q16a}</h3></div>
          <br />
          <br />
          <br />
          <div><h3>{props.postureProps.posture.q16b}</h3></div>
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureProps.posture.q16_Comm}
          />
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureActionsProps.postureActions.plannedActions16}
          />
        </td>
        <td>{props.postureActionsProps.postureActions.date16}</td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureActionsProps.postureActions.byWhom16}
          />
        </td>
        <td>{props.postureActionsProps.postureActions.readyDate16}</td>
        <td>{props.postureActionsProps.postureActions.followUpDate16}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal6"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
          >
            Action Plan Details
          </button>
        </td>
      </tr>
      <tr
        style={{ fontSize: "14px" }}
        hidden={!handleColor(props, "17a") && !handleColor(props, "17b")}
      >
        <th scope="row">1.7 Wrist posture*</th>
        <td>
          Left
          <div
            className="rectangle"
            style={{
              width: 75,
              height: 50,
              backgroundColor: handleColor(props, "17a"),
            }}
          />
          Right
          <div
            className="rectangle"
            style={{
              width: 75,
              height: 50,
              backgroundColor: handleColor(props, "17b"),
            }}
          />
        </td>
        <td>
          <div><h3>{props.postureProps.posture.q17a}</h3></div>
          <br />
          <br />
          <br />
          <div><h3>{props.postureProps.posture.q17b}</h3></div>
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureProps.posture.q17_Comm}
          />
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureActionsProps.postureActions.plannedActions17}
          />
        </td>
        <td>{props.postureActionsProps.postureActions.date17}</td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureActionsProps.postureActions.byWhom17}
          />
        </td>
        <td>{props.postureActionsProps.postureActions.readyDate17}</td>
        <td>{props.postureActionsProps.postureActions.followUpDate17}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal7"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
          >
            Action Plan Details
          </button>
        </td>
      </tr>
      <tr style={{ fontSize: "14px" }} hidden={!handleColor(props, "18")}>
        <th scope="row">1.8 Leg and foot space and surface</th>
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
        <td><h3>{props.postureProps.posture.q18}</h3></td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureProps.posture.q18_Comm}
          />
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureActionsProps.postureActions.plannedActions18}
          />
        </td>
        <td>{props.postureActionsProps.postureActions.date18}</td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.postureActionsProps.postureActions.byWhom18}
          />
        </td>
        <td>{props.postureActionsProps.postureActions.readyDate18}</td>
        <td>{props.postureActionsProps.postureActions.followUpDate18}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal8"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
          >
            Action Plan Details
          </button>
        </td>
      </tr>
    </>
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
export default connect(mapStateToProps)(Posture);
