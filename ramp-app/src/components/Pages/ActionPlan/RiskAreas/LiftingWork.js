import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  liftingWorkActionsProps: state.liftingWorkActionsState,
  liftingWorkProps: state.liftingWorkState,
});

const LiftingWork = (props, lightBg) => {
  var colorOne = "";
  var scoreOne = "";
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
    <>
      <tr style={{ fontSize: "18px" }} className="bg-primary text-white">
        <th scope="row">3. Lifting work</th>
      </tr>
      <tr style={{ fontSize: "14px" }} hidden={!calculateScoreOne()}>
        <th scope="row">3.1 Lifting work (average case)</th>
        <td hidden>{calculateScoreOne()}</td>
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
        <td><h3>{calculateScoreOne()}</h3></td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.liftingWorkProps.liftingWork.q31_averageComm}
          />
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.liftingWorkActionsProps.liftingWorkActions.plannedActions31}
          />
        </td>
        <td>{props.liftingWorkActionsProps.liftingWorkActions.date31}</td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.liftingWorkActionsProps.liftingWorkActions.byWhom31}
          />
        </td>
        <td>{props.liftingWorkActionsProps.liftingWorkActions.readyDate31}</td>
        <td>{props.liftingWorkActionsProps.liftingWorkActions.followUpDate31}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal31"
          >
            Action Plan Details
          </button>
        </td>
      </tr>
      <tr style={{ fontSize: "14px" }} hidden={!calculateScoreTwo()}>
        <th scope="row">3.2 Lifting work(worst case)</th>
        <td hidden>{calculateScoreTwo()}</td>
        <td>
          <div
            className="rectangle"
            style={{
              width: 76,
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
            value={props.liftingWorkProps.liftingWork.q31_worstComm}
          />
        </td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.liftingWorkActionsProps.liftingWorkActions.plannedActions32}
          />
        </td>
        <td>{props.liftingWorkActionsProps.liftingWorkActions.date32}</td>
        <td>
          <textarea
            style={{ "resize": "none", "width": "10rem", "height": "10rem", "border": "1px solid white", "background": "white", "fontWeight": "bold", "color": "black" }}
            type="text"
            readOnly
            disabled={true}
            value={props.liftingWorkActionsProps.liftingWorkActions.byWhom32}
          />
        </td>
        <td>{props.liftingWorkActionsProps.liftingWorkActions.readyDate32}</td>
        <td>{props.liftingWorkActionsProps.liftingWorkActions.followUpDate32}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal32"
          >
            Action Plan Details
          </button>
        </td>
      </tr>
    </>
  );
};

export default connect(mapStateToProps)(LiftingWork);
