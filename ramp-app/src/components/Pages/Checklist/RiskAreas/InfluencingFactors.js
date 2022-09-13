import React from "react";
import { connect } from "react-redux";
import {
  setQ51A,
  setQ51A_Comm,
  setQ51B,
  setQ51B_Comm,
  setQ51C,
  setQ51C_Comm,
  setQ51D,
  setQ51D_Comm,
  setQ51E,
  setQ51E_Comm,
  setQ51F,
  setQ51F_Comm,
  setQ52A,
  setQ52A_Comm,
  setQ52B,
  setQ52B_Comm,
  setQ52C,
  setQ52C_Comm,
  setQ52D,
  setQ52D_Comm,
  setQ52E,
  setQ52E_Comm,
  setQ52F,
  setQ52F_Comm,
  setQ52G,
  setQ52G_Comm,
  setQ52H,
  setQ52H_Comm,
  setQ53A,
  setQ53A_Comm,
  setQ53B,
  setQ53B_Comm,
  setQ53C,
  setQ53C_Comm,
  setQ53D,
  setQ53D_Comm,
} from "../../../../actions/riskAreaActions/influencingFactorsActions";
const mapStateToProps = (state) => ({
  influencingFactorsProps: state.influencingFactorsState,
  checklistProps: state.checklistState,
});

const InfluencingFactors = (props) => {
  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingFive">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-influencingFactors"
            aria-expanded="false"
            aria-controls="flush-influencingFactors"
          >
            5. Influencing Factors
          </button>
        </h2>
        <div
          id="flush-influencingFactors"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFive"
          data-bs-parent="#influencingFactors"
        >
          <div className="accordion-body bg-white">
            <div className="card-body bg-white table-responsive">
              <fieldset disabled={props.checklistProps.completion}>
                <table className="table table-responsive">
                  <tbody>
                    <tr>
                      <td>
                        <h3 style={{ fontWeight: "bold" }}>
                          5. Influencing Factors
                        </h3>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p style={{ fontWeight: "bold" }}>
                          5.1 Influencing physical factors hand/arm - do the
                          following occur? The times refer to "per work day".
                        </p>
                      </td>
                      <td />
                      <td />
                      <td>
                        <h5 style={{ fontWeight: "bold" }}>Comment</h5>
                      </td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr>
                      <td>
                        a. The employee is exposed to hand-arm vibrations more
                        than 20 minutes <br /> (10 for strongly vib)
                      </td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q51a === "2"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q51a1"
                          id="q51a2"
                          value="option2"
                        />
                        <label
                          onClick={() => props.setQ51A("2")}
                          className="btn btn-outline-warning"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>
                      </td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q51a === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q51a11"
                          id="q51a22"
                          value="option2"
                        />
                        <label
                          onClick={() => props.setQ51A("0")}
                          className="btn btn-outline-success"
                          htmlFor="option2"
                        >
                          <h5 style={{ fontWeight: "bold" }}>No</h5>
                        </label>
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
                            props.influencingFactorsProps.influencingFactors
                              .q51a !== "2" &&
                            props.influencingFactorsProps.influencingFactors
                              .q51a !== "0"
                          }
                          type="text"
                          maxLength={65}
                          value={
                            props.influencingFactorsProps.influencingFactors
                              .q51a_Comm
                          }
                          onChange={(e) => {
                            props.setQ51A_Comm(e.target.value);
                          }}
                        />
                        <p>
                          Count:{" "}
                          {
                            props.influencingFactorsProps.influencingFactors
                              .q51a_Comm.length
                          }{" "}
                          / 65
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        b. The employee is exposed to hand-arm vibrations more
                        than 90 minutes <br />
                        (60 for strongly vib).
                      </td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q51b === "4"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q51b1"
                          id="q51b2"
                          value="option2"
                        />
                        <label
                          onClick={() => props.setQ51B("4")}
                          className="btn btn-outline-danger"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>
                      </td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q51b === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q51b11"
                          id="q51b22"
                          value="option2"
                        />
                        <label
                          onClick={() => props.setQ51B("0")}
                          className="btn btn-outline-success"
                          htmlFor="option2"
                        >
                          <h5 style={{ fontWeight: "bold" }}>No</h5>
                        </label>
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
                            props.influencingFactorsProps.influencingFactors
                              .q51b !== "4" &&
                            props.influencingFactorsProps.influencingFactors
                              .q51b !== "0"
                          }
                          type="text"
                          maxLength={65}
                          value={
                            props.influencingFactorsProps.influencingFactors
                              .q51b_Comm
                          }
                          onChange={(e) => {
                            props.setQ51B_Comm(e.target.value);
                          }}
                        />
                        <p>
                          Count:{" "}
                          {
                            props.influencingFactorsProps.influencingFactors
                              .q51b_Comm.length
                          }{" "}
                          / 65
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>c. Warm or cold objects are handled manually</td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q51c === "2"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q51c1"
                          id="q51c2"
                          value="option1"
                        />
                        <label
                          onClick={() => props.setQ51C("2")}
                          className="btn btn-outline-warning"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>
                      </td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q51c === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q51c11"
                          id="q51c22"
                          value="option2"
                        />
                        <label
                          onClick={() => props.setQ51C("0")}
                          className="btn btn-outline-success"
                          htmlFor="option2"
                        >
                          <h5 style={{ fontWeight: "bold" }}>No</h5>
                        </label>
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
                            props.influencingFactorsProps.influencingFactors
                              .q51c !== "2" &&
                            props.influencingFactorsProps.influencingFactors
                              .q51c !== "0"
                          }
                          type="text"
                          maxLength={65}
                          value={
                            props.influencingFactorsProps.influencingFactors
                              .q51c_Comm
                          }
                          onChange={(e) => {
                            props.setQ51C_Comm(e.target.value);
                          }}
                        />
                        <p>
                          Count:{" "}
                          {
                            props.influencingFactorsProps.influencingFactors
                              .q51c_Comm.length
                          }{" "}
                          / 65
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        d. The hand is used as an impact tool often or a long
                        time
                      </td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q51d === "2"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q51d1"
                          id="q51d2"
                          value="option1"
                        />
                        <label
                          onClick={() => props.setQ51D("2")}
                          className="btn btn-outline-warning"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>
                      </td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q51d === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q51d11"
                          id="q51d22"
                          value="option2"
                        />
                        <label
                          onClick={() => props.setQ51D("0")}
                          className="btn btn-outline-success"
                          htmlFor="option2"
                        >
                          <h5 style={{ fontWeight: "bold" }}>No</h5>
                        </label>
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
                            props.influencingFactorsProps.influencingFactors
                              .q51d !== "2" &&
                            props.influencingFactorsProps.influencingFactors
                              .q51d !== "0"
                          }
                          type="text"
                          maxLength={65}
                          value={
                            props.influencingFactorsProps.influencingFactors
                              .q51d_Comm
                          }
                          onChange={(e) => {
                            props.setQ51D_Comm(e.target.value);
                          }}
                        />
                        <p>
                          Count:{" "}
                          {
                            props.influencingFactorsProps.influencingFactors
                              .q51d_Comm.length
                          }{" "}
                          / 65
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        e. Holding hand tools weighing more than 2.3 kg for more
                        than 30 minutes
                      </td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q51e === "2"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q51e1"
                          id="q51e2"
                          value="option1"
                        />
                        <label
                          onClick={() => props.setQ51E("2")}
                          className="btn btn-outline-warning"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>
                      </td>

                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q51e === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q51e11"
                          id="q51e22"
                          value="option2"
                        />
                        <label
                          onClick={() => props.setQ51E("0")}
                          className="btn btn-outline-success"
                          htmlFor="option2"
                        >
                          <h5 style={{ fontWeight: "bold" }}>No</h5>
                        </label>
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
                            props.influencingFactorsProps.influencingFactors
                              .q51e !== "2" &&
                            props.influencingFactorsProps.influencingFactors
                              .q51e !== "0"
                          }
                          type="text"
                          maxLength={65}
                          value={
                            props.influencingFactorsProps.influencingFactors
                              .q51e_Comm
                          }
                          onChange={(e) => {
                            props.setQ51E_Comm(e.target.value);
                          }}
                        />
                        <p>
                          Count:{" "}
                          {
                            props.influencingFactorsProps.influencingFactors
                              .q51e_Comm.length
                          }{" "}
                          / 65
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        f. Holding precision tools weighing more than 0.4 kg for
                        more than 30 minutes
                      </td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q51f === "2"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q51f1"
                          id="q51f2"
                          value="option1"
                        />
                        <label
                          onClick={() => props.setQ51F("2")}
                          className="btn btn-outline-warning"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>
                      </td>

                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q51f === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q51f11"
                          id="q51f22"
                          value="option2"
                        />
                        <label
                          onClick={() => props.setQ51F("0")}
                          className="btn btn-outline-success"
                          htmlFor="option2"
                        >
                          <h5 style={{ fontWeight: "bold" }}>No</h5>
                        </label>
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
                            props.influencingFactorsProps.influencingFactors
                              .q51f !== "2" &&
                            props.influencingFactorsProps.influencingFactors
                              .q51f !== "0"
                          }
                          type="text"
                          maxLength={65}
                          value={
                            props.influencingFactorsProps.influencingFactors
                              .q51f_Comm
                          }
                          onChange={(e) => {
                            props.setQ51F_Comm(e.target.value);
                          }}
                        />
                        <p>
                          Count:{" "}
                          {
                            props.influencingFactorsProps.influencingFactors
                              .q51f_Comm.length
                          }{" "}
                          / 65
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table className="table table-responsive">
                  <tbody>
                    <tr></tr>
                    <tr>
                      <td>
                        <p style={{ fontWeight: "bold" }}>
                          5.2 Other physical factors - do the following occur?
                          The times refer to "per work day".
                        </p>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>
                        a. The employee is exposed to whole-body vibrations more
                        than 1 hour.
                      </td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q52a === "2"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q52a1"
                          id="q52a2"
                          value="option1"
                        />
                        <label
                          onClick={() => props.setQ52A("2")}
                          className="btn btn-outline-warning"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>
                      </td>

                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q52a === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q52a11"
                          id="q52a22"
                          value="option2"
                        />
                        <label
                          onClick={() => props.setQ52A("0")}
                          className="btn btn-outline-success"
                          htmlFor="option2"
                        >
                          <h5 style={{ fontWeight: "bold" }}>No</h5>
                        </label>
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
                            props.influencingFactorsProps.influencingFactors
                              .q52a !== "2" &&
                            props.influencingFactorsProps.influencingFactors
                              .q52a !== "0"
                          }
                          type="text"
                          maxLength={65}
                          value={
                            props.influencingFactorsProps.influencingFactors
                              .q52a_Comm
                          }
                          onChange={(e) => {
                            props.setQ52A_Comm(e.target.value);
                          }}
                        />
                        <p>
                          Count:{" "}
                          {
                            props.influencingFactorsProps.influencingFactors
                              .q52a_Comm.length
                          }{" "}
                          / 65
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        b. The employee is exposed to whole-body vibrations more
                        than 6 hours.
                      </td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q52b === "4"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q52b1"
                          id="q52b2"
                          value="option1"
                        />
                        <label
                          onClick={() => props.setQ52B("4")}
                          className="btn btn-outline-danger"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>
                      </td>

                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q52b === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q52b11"
                          id="q52b22"
                          value="option2"
                        />
                        <label
                          onClick={() => props.setQ52B("0")}
                          className="btn btn-outline-success"
                          htmlFor="option2"
                        >
                          <h5 style={{ fontWeight: "bold" }}>No</h5>
                        </label>
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
                            props.influencingFactorsProps.influencingFactors
                              .q52b !== "4" &&
                            props.influencingFactorsProps.influencingFactors
                              .q52b !== "0"
                          }
                          type="text"
                          maxLength={65}
                          value={
                            props.influencingFactorsProps.influencingFactors
                              .q52b_Comm
                          }
                          onChange={(e) => {
                            props.setQ52B_Comm(e.target.value);
                          }}
                        />
                        <p>
                          Count:{" "}
                          {
                            props.influencingFactorsProps.influencingFactors
                              .q52b_Comm.length
                          }{" "}
                          / 65
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        c. The visual conditions are insufficient for the task
                      </td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q52c === "2"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q52c1"
                          id="q52c2"
                          value="option1"
                        />
                        <label
                          onClick={() => props.setQ52C("2")}
                          className="btn btn-outline-warning"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>
                      </td>

                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q52c === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q52c11"
                          id="q52c22"
                          value="option2"
                        />
                        <label
                          onClick={() => props.setQ52C("0")}
                          className="btn btn-outline-success"
                          htmlFor="option2"
                        >
                          <h5 style={{ fontWeight: "bold" }}>No</h5>
                        </label>
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
                            props.influencingFactorsProps.influencingFactors
                              .q52c !== "2" &&
                            props.influencingFactorsProps.influencingFactors
                              .q52c !== "0"
                          }
                          type="text"
                          maxLength={65}
                          value={
                            props.influencingFactorsProps.influencingFactors
                              .q52c_Comm
                          }
                          onChange={(e) => {
                            props.setQ52C_Comm(e.target.value);
                          }}
                        />
                        <p>
                          Count:{" "}
                          {
                            props.influencingFactorsProps.influencingFactors
                              .q52c_Comm.length
                          }{" "}
                          / 65
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        d. Work in hot or cold temperatures or in draughty
                        environments
                      </td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q52d === "2"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q52d1"
                          id="q52d2"
                          value="option1"
                        />
                        <label
                          onClick={() => props.setQ52D("2")}
                          className="btn btn-outline-warning"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>
                      </td>

                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q52d === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q52d11"
                          id="q52d22"
                          value="option2"
                        />
                        <label
                          onClick={() => props.setQ52D("0")}
                          className="btn btn-outline-success"
                          htmlFor="option2"
                        >
                          <h5 style={{ fontWeight: "bold" }}>No</h5>
                        </label>
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
                            props.influencingFactorsProps.influencingFactors
                              .q52d !== "2" &&
                            props.influencingFactorsProps.influencingFactors
                              .q52d !== "0"
                          }
                          type="text"
                          maxLength={65}
                          value={
                            props.influencingFactorsProps.influencingFactors
                              .q52d_Comm
                          }
                          onChange={(e) => {
                            props.setQ52D_Comm(e.target.value);
                          }}
                        />
                        <p>
                          Count:{" "}
                          {
                            props.influencingFactorsProps.influencingFactors
                              .q52d_Comm.length
                          }{" "}
                          / 65
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        e. Standing or walking on a hard surface more than half
                        of the work day
                      </td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q52e === "2"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q52e1"
                          id="q52e2"
                          value="option1"
                        />
                        <label
                          onClick={() => props.setQ52E("2")}
                          className="btn btn-outline-warning"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>
                      </td>

                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q52e === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q52e11"
                          id="q52e22"
                          value="option2"
                        />
                        <label
                          onClick={() => props.setQ52E("0")}
                          className="btn btn-outline-success"
                          htmlFor="option2"
                        >
                          <h5 style={{ fontWeight: "bold" }}>No</h5>
                        </label>
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
                            props.influencingFactorsProps.influencingFactors
                              .q52e !== "2" &&
                            props.influencingFactorsProps.influencingFactors
                              .q52e !== "0"
                          }
                          type="text"
                          maxLength={65}
                          value={
                            props.influencingFactorsProps.influencingFactors
                              .q52e_Comm
                          }
                          onChange={(e) => {
                            props.setQ52E_Comm(e.target.value);
                          }}
                        />
                        <p>
                          Count:{" "}
                          {
                            props.influencingFactorsProps.influencingFactors
                              .q52e_Comm.length
                          }{" "}
                          / 65
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        f. Prolonged sedentary work without possibility to do
                        the work standing up
                      </td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q52f === "2"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q52f1"
                          id="q52f2"
                          value="option1"
                        />
                        <label
                          onClick={() => props.setQ52F("2")}
                          className="btn btn-outline-warning"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>
                      </td>

                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q52f === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q52f11"
                          id="q52f22"
                          value="option2"
                        />
                        <label
                          onClick={() => props.setQ52F("0")}
                          className="btn btn-outline-success"
                          htmlFor="option2"
                        >
                          <h5 style={{ fontWeight: "bold" }}>No</h5>
                        </label>
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
                            props.influencingFactorsProps.influencingFactors
                              .q52f !== "2" &&
                            props.influencingFactorsProps.influencingFactors
                              .q52f !== "0"
                          }
                          type="text"
                          maxLength={65}
                          value={
                            props.influencingFactorsProps.influencingFactors
                              .q52f_Comm
                          }
                          onChange={(e) => {
                            props.setQ52F_Comm(e.target.value);
                          }}
                        />
                        <p>
                          Count:{" "}
                          {
                            props.influencingFactorsProps.influencingFactors
                              .q52f_Comm.length
                          }{" "}
                          / 65
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        g. Prolonged standing work without possibility to do the
                        work sitting down
                      </td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q52g === "2"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q52g1"
                          id="q52g2"
                          value="option1"
                        />
                        <label
                          onClick={() => props.setQ52G("2")}
                          className="btn btn-outline-warning"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>
                      </td>

                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q52g === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q52g11"
                          id="q52g22"
                          value="option2"
                        />
                        <label
                          onClick={() => props.setQ52G("0")}
                          className="btn btn-outline-success"
                          htmlFor="option2"
                        >
                          <h5 style={{ fontWeight: "bold" }}>No</h5>
                        </label>
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
                            props.influencingFactorsProps.influencingFactors
                              .q52g !== "2" &&
                            props.influencingFactorsProps.influencingFactors
                              .q52g !== "0"
                          }
                          type="text"
                          maxLength={65}
                          value={
                            props.influencingFactorsProps.influencingFactors
                              .q52g_Comm
                          }
                          onChange={(e) => {
                            props.setQ52G_Comm(e.target.value);
                          }}
                        />
                        <p>
                          Count:{" "}
                          {
                            props.influencingFactorsProps.influencingFactors
                              .q52g_Comm.length
                          }{" "}
                          / 65
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        h. Kneeling/squatting more than 30 times or more than 30
                        minutes
                      </td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q52h === "2"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q52h1"
                          id="q52h2"
                          value="option1"
                        />
                        <label
                          onClick={() => props.setQ52H("2")}
                          className="btn btn-outline-warning"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>
                      </td>

                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q52h === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q52h11"
                          id="q52h22"
                          value="option2"
                        />
                        <label
                          onClick={() => props.setQ52H("0")}
                          className="btn btn-outline-success"
                          htmlFor="option2"
                        >
                          <h5 style={{ fontWeight: "bold" }}>No</h5>
                        </label>
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
                            props.influencingFactorsProps.influencingFactors
                              .q52h !== "2" &&
                            props.influencingFactorsProps.influencingFactors
                              .q52h !== "0"
                          }
                          type="text"
                          maxLength={65}
                          value={
                            props.influencingFactorsProps.influencingFactors
                              .q52h_Comm
                          }
                          onChange={(e) => {
                            props.setQ52H_Comm(e.target.value);
                          }}
                        />
                        <p>
                          Count:{" "}
                          {
                            props.influencingFactorsProps.influencingFactors
                              .q52h_Comm.length
                          }{" "}
                          / 65
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table className="table table-responsive">
                  <tbody>
                    <tr>
                      <td>
                        <p style={{ fontWeight: "bold" }}>
                          5.3 Work organisational and psychosocial factors - do
                          the following occur?
                        </p>
                      </td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr>
                      <td>
                        a. There is no possibility to influence at what pace the
                        work is performed
                      </td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q53a === "2"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q53a1"
                          id="q53a2"
                          value="option1"
                        />
                        <label
                          onClick={() => props.setQ53A("2")}
                          className="btn btn-outline-warning"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>
                      </td>

                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q53a === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q53a11"
                          id="q53a22"
                          value="option2"
                        />
                        <label
                          onClick={() => props.setQ53A("0")}
                          className="btn btn-outline-success"
                          htmlFor="option2"
                        >
                          <h5 style={{ fontWeight: "bold" }}>No</h5>
                        </label>
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
                            props.influencingFactorsProps.influencingFactors
                              .q53a !== "2" &&
                            props.influencingFactorsProps.influencingFactors
                              .q53a !== "0"
                          }
                          type="text"
                          maxLength={65}
                          value={
                            props.influencingFactorsProps.influencingFactors
                              .q53a_Comm
                          }
                          onChange={(e) => {
                            props.setQ53A_Comm(e.target.value);
                          }}
                        />
                        <p>
                          Count:{" "}
                          {
                            props.influencingFactorsProps.influencingFactors
                              .q53a_Comm.length
                          }{" "}
                          / 65
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        b. There is no possibility to influence the work setting
                        or how the work shall be carried out
                      </td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q53b === "2"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q53b1"
                          id="q53b2"
                          value="option1"
                        />
                        <label
                          onClick={() => props.setQ53B("2")}
                          className="btn btn-outline-warning"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>
                      </td>

                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q53b === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q53b11"
                          id="q53b22"
                          value="option2"
                        />
                        <label
                          onClick={() => props.setQ53B("0")}
                          className="btn btn-outline-success"
                          htmlFor="option2"
                        >
                          <h5 style={{ fontWeight: "bold" }}>No</h5>
                        </label>
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
                            props.influencingFactorsProps.influencingFactors
                              .q53b !== "2" &&
                            props.influencingFactorsProps.influencingFactors
                              .q53b !== "0"
                          }
                          type="text"
                          maxLength={65}
                          value={
                            props.influencingFactorsProps.influencingFactors
                              .q53b_Comm
                          }
                          onChange={(e) => {
                            props.setQ53B_Comm(e.target.value);
                          }}
                        />
                        <p>
                          Count:{" "}
                          {
                            props.influencingFactorsProps.influencingFactors
                              .q53b_Comm.length
                          }{" "}
                          / 65
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        c. It is often difficult to keep up with the work tasks
                      </td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q53c === "2"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q53c1"
                          id="q53c2"
                          value="option1"
                        />
                        <label
                          onClick={() => props.setQ53C("2")}
                          className="btn btn-outline-warning"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>
                      </td>

                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q53c === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q53c11"
                          id="q53c22"
                          value="option2"
                        />
                        <label
                          onClick={() => props.setQ53C("0")}
                          className="btn btn-outline-success"
                          htmlFor="option2"
                        >
                          <h5 style={{ fontWeight: "bold" }}>No</h5>
                        </label>
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
                            props.influencingFactorsProps.influencingFactors
                              .q53c !== "2" &&
                            props.influencingFactorsProps.influencingFactors
                              .q53c !== "0"
                          }
                          type="text"
                          maxLength={65}
                          value={
                            props.influencingFactorsProps.influencingFactors
                              .q53c_Comm
                          }
                          onChange={(e) => {
                            props.setQ53C_Comm(e.target.value);
                          }}
                        />
                        <p>
                          Count:{" "}
                          {
                            props.influencingFactorsProps.influencingFactors
                              .q53c_Comm.length
                          }{" "}
                          / 65
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        d. The employees often work rapidly in order to be able
                        to take a longer break
                      </td>
                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q53d === "2"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q53d1"
                          id="q53d2"
                          value="option1"
                        />
                        <label
                          onClick={() => props.setQ53D("2")}
                          className="btn btn-outline-warning"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>
                      </td>

                      <td>
                        <input
                          checked={
                            props.influencingFactorsProps.influencingFactors
                              .q53d === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q53d11"
                          id="q53d22"
                          value="option2"
                        />
                        <label
                          onClick={() => props.setQ53D("0")}
                          className="btn btn-outline-success"
                          htmlFor="option2"
                        >
                          <h5 style={{ fontWeight: "bold" }}>No</h5>
                        </label>
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
                            props.influencingFactorsProps.influencingFactors
                              .q53d !== "2" &&
                            props.influencingFactorsProps.influencingFactors
                              .q53d !== "0"
                          }
                          type="text"
                          maxLength={65}
                          value={
                            props.influencingFactorsProps.influencingFactors
                              .q53d_Comm
                          }
                          onChange={(e) => {
                            props.setQ53D_Comm(e.target.value);
                          }}
                        />
                        <p>
                          Count:{" "}
                          {
                            props.influencingFactorsProps.influencingFactors
                              .q53d_Comm.length
                          }{" "}
                          / 65
                        </p>
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

export default connect(mapStateToProps, {
  setQ51A,
  setQ51A_Comm,
  setQ51B,
  setQ51B_Comm,
  setQ51C,
  setQ51C_Comm,
  setQ51D,
  setQ51D_Comm,
  setQ51E,
  setQ51E_Comm,
  setQ51F,
  setQ51F_Comm,
  setQ52A,
  setQ52A_Comm,
  setQ52B,
  setQ52B_Comm,
  setQ52C,
  setQ52C_Comm,
  setQ52D,
  setQ52D_Comm,
  setQ52E,
  setQ52E_Comm,
  setQ52F,
  setQ52F_Comm,
  setQ52G,
  setQ52G_Comm,
  setQ52H,
  setQ52H_Comm,
  setQ53A,
  setQ53A_Comm,
  setQ53B,
  setQ53B_Comm,
  setQ53C,
  setQ53C_Comm,
  setQ53D,
  setQ53D_Comm,
})(InfluencingFactors);
