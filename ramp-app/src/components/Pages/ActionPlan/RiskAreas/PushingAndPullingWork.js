import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  pushingAndPullingWorkActionsProps: state.pushingAndPullingWorkActionsState,
  pushingAndPullingProps: state.pushingAndPullingState,
});

const PushingAndPullingWork = (props, lightBg) => {
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
        colorTwo = colorOne;

        if (parseFloat(scoreOne) != 0) {
          if (scoreOne != 0) {
            return parseFloat(scoreOne).toFixed(2);
          } else {
            return "";
          }
        }
      }
    }
  };

  return (
    <>
      <tr style={{ fontSize: "18px" }} className="bg-primary text-white">
        <th scope="row">4. Pushing and pulling work</th>
      </tr>
      <tr style={{ fontSize: "14px" }} hidden={!calculateScoreOne()}>
        <th scope="row">4.1 Pushing and pulling work (average case)</th>
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
        <td><h3>{calculateScoreOne()}</h3></td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.pushingAndPullingProps.pushingAndPulling.q41_averageComm}
          />
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.plannedActions41}
          />
        </td>

        <td>{props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.date41}</td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.byWhom41}
          />
        </td>
        <td>{props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.readyDate41}</td>
        <td>{props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.followUpDate41}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal41"
          >
            Action Plan Details
          </button>
        </td>
      </tr>
      <tr style={{ fontSize: "14px" }} hidden={!calculateScoreTwo()}>
        <th scope="row">4.2 Pushing and pulling work (worst case)</th>
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
        <td><h3>{calculateScoreTwo()}</h3></td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.pushingAndPullingProps.pushingAndPulling.q41_worstComm}
          />
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.plannedActions42}
          />
        </td>
        <td>{props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.date42}</td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.byWhom42}
          />
        </td>
        <td>{props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.readyDate42}</td>
        <td>{props.pushingAndPullingWorkActionsProps.pushingAndPullingActions.followUpDate42}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal42"
          >
            Action Plan Details
          </button>
        </td>
      </tr>
    </>
  );
};

export default connect(mapStateToProps)(PushingAndPullingWork);
