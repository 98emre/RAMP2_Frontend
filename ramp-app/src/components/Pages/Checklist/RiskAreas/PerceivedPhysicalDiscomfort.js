import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  setPhysicalDiscomfort,
  setID,
  setQ71,
  setQ71_Comm,
  setQ72A,
  setQ72A_Comm,
  setQ72B,
  setQ72B_Comm,
  setQ72C,
  setQ72C_Comm,
  setQ72D,
  setQ72D_Comm,
  setQ72E,
  setQ72E_Comm,
} from "../../../../actions/riskAreaActions/physicalDiscomfortActions";

const mapStateToProps = (state) => ({
  physicalDiscomfortProps: state.physicalDiscomfortState,
  checklistProps: state.checklistState,
});

const PerceivedPhysicalDiscomfort = (props) => {
  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingSeven">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-perceivedPhysicalDiscomfort"
            aria-expanded="false"
            aria-controls="flush-perceivedPhysicalDiscomfort"
          >
            7. Perceived Physical Discomfort
          </button>
        </h2>
        <div
          id="flush-perceivedPhysicalDiscomfort"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingSeven"
          data-bs-parent="#perceivedPhysicalDiscomfort"
        >
          <div className="accordion-body bg-white">
            <fieldset disabled={props.checklistProps.completion}>
              <div className="card-body bg-white table-responsive">
                <h4 style={{ fontWeight: "bold" }}>
                  7. Perceived Physical Discomfort
                </h4>

                <table className="table table-responsive">
                  <tbody>
                    <tr></tr>
                    <tr>
                      <td />
                      <td />
                      <td>
                        {" "}
                        <h5 style={{ fontWeight: "bold" }}>Comment</h5>{" "}
                      </td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr>
                      <th>
                        7.1 Are there parts of the work which lead to physical
                        discomfort during the work day?{" "}
                      </th>
                      <td>
                        <input
                          checked={
                            props.physicalDiscomfortProps.physicalDiscomfort
                              .q71 === "2"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q71a1"
                          id="q71a1"
                          value="option1"
                        />

                        <label
                          onClick={() => props.setQ71("2")}
                          className="btn btn-outline-warning"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>

                        <input
                          checked={
                            props.physicalDiscomfortProps.physicalDiscomfort
                              .q71 === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q71a1"
                          id="q71a2"
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
                            props.physicalDiscomfortProps.physicalDiscomfort
                              .q71 !== "2" &&
                            props.physicalDiscomfortProps.physicalDiscomfort
                              .q71 !== "0"
                          }
                          type="text"
                          maxLength={65}
                          value={
                            props.physicalDiscomfortProps.physicalDiscomfort
                              .q71_Comm
                          }
                          onChange={(e) => {
                            props.setQ71_Comm(e.target.value);
                          }}
                        />
                        <p>
                          Count:{" "}
                          {
                            props.physicalDiscomfortProps.physicalDiscomfort
                              .q71_Comm.length
                          }{" "}
                          / 65
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {props.physicalDiscomfortProps.physicalDiscomfort.q71 ===
                  "2" && (
                  <table className="table table-responsive">
                    <tbody>
                      <tr>
                        <th>
                          7.2 If "Yes" on question 7.1, which is the worst task?
                        </th>
                      </tr>
                    </tbody>

                    <tbody>
                      <tr>
                        <td>
                          <input
                            className="form-control"
                            style={{
                              resize: "none",
                              borderRadius: "2%",
                              border: "3px solid black",
                            }}
                            type="text"
                            maxLength={30}
                            placeholder="Person 1"
                            value={
                              props.physicalDiscomfortProps.physicalDiscomfort
                                .q72a
                            }
                            onChange={(e) => {
                              props.setQ72A(e.target.value);
                              if (
                                props.physicalDiscomfortProps.physicalDiscomfort.q72a.trim()
                                  .length === 0
                              ) {
                                props.setQ72A_Comm("");
                              }
                            }}
                          />
                          <p>
                            Count:{" "}
                            {
                              props.physicalDiscomfortProps.physicalDiscomfort
                                .q72a.length
                            }{" "}
                            / 30
                          </p>
                        </td>

                        <td>
                          <textarea
                            className="form-control"
                            style={{
                              resize: "none",
                              borderRadius: "2%",
                              width: "20rem",
                              height: "6rem",
                              border: "3px solid black",
                            }}
                            placeholder="Comment"
                            disabled={changeDisabledCommentA(props)}
                            type="text"
                            maxLength={65}
                            value={
                              props.physicalDiscomfortProps.physicalDiscomfort
                                .q72a_Comm
                            }
                            onChange={(e) => {
                              if (
                                props.physicalDiscomfortProps.physicalDiscomfort.q72a.trim()
                                  .length > 0
                              ) {
                                props.setQ72A_Comm(e.target.value);
                              }
                            }}
                          />
                          <p>
                            Count:{" "}
                            {
                              props.physicalDiscomfortProps.physicalDiscomfort
                                .q72a_Comm.length
                            }{" "}
                            / 65
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <input
                            className="form-control"
                            style={{
                              resize: "none",
                              borderRadius: "2%",
                              border: "3px solid black",
                            }}
                            type="text"
                            maxLength={30}
                            placeholder="Person 2"
                            value={
                              props.physicalDiscomfortProps.physicalDiscomfort
                                .q72b
                            }
                            onChange={(e) => {
                              props.setQ72B(e.target.value);
                              if (
                                props.physicalDiscomfortProps.physicalDiscomfort.q72b.trim()
                                  .length === 0
                              ) {
                                props.setQ72B_Comm("");
                              }
                            }}
                          />
                          <p>
                            Count:{" "}
                            {
                              props.physicalDiscomfortProps.physicalDiscomfort
                                .q72b.length
                            }{" "}
                            / 30
                          </p>
                        </td>
                        <td>
                          <textarea
                            className="form-control"
                            style={{
                              resize: "none",
                              borderRadius: "2%",
                              width: "20rem",
                              height: "6rem",
                              border: "3px solid black",
                            }}
                            placeholder="Comment"
                            disabled={changeDisabledCommentB(props)}
                            type="text"
                            maxLength={65}
                            value={
                              props.physicalDiscomfortProps.physicalDiscomfort
                                .q72b_Comm
                            }
                            onChange={(e) => {
                              if (
                                props.physicalDiscomfortProps.physicalDiscomfort.q72b.trim()
                                  .length > 0
                              ) {
                                props.setQ72B_Comm(e.target.value);
                              }
                            }}
                          />
                          <p>
                            Count:{" "}
                            {
                              props.physicalDiscomfortProps.physicalDiscomfort
                                .q72b_Comm.length
                            }{" "}
                            / 65
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <input
                            className="form-control"
                            style={{
                              resize: "none",
                              borderRadius: "2%",
                              border: "3px solid black",
                            }}
                            type="text"
                            maxLength={30}
                            placeholder="Person 3"
                            value={
                              props.physicalDiscomfortProps.physicalDiscomfort
                                .q72c
                            }
                            onChange={(e) => {
                              props.setQ72C(e.target.value);
                              if (
                                props.physicalDiscomfortProps.physicalDiscomfort.q72c.trim()
                                  .length === 0
                              ) {
                                props.setQ72C_Comm("");
                              }
                            }}
                          />
                          <p>
                            Count:{" "}
                            {
                              props.physicalDiscomfortProps.physicalDiscomfort
                                .q72c.length
                            }{" "}
                            / 30
                          </p>
                        </td>
                        <td>
                          <textarea
                            className="form-control"
                            style={{
                              resize: "none",
                              borderRadius: "2%",
                              width: "20rem",
                              height: "6rem",
                              border: "3px solid black",
                            }}
                            placeholder="Comment"
                            disabled={changeDisabledCommentC(props)}
                            type="text"
                            maxLength={65}
                            value={
                              props.physicalDiscomfortProps.physicalDiscomfort
                                .q72c_Comm
                            }
                            onChange={(e) => {
                              if (
                                props.physicalDiscomfortProps.physicalDiscomfort.q72c.trim()
                                  .length > 0
                              ) {
                                props.setQ72C_Comm(e.target.value);
                              }
                            }}
                          />
                          <p>
                            Count:{" "}
                            {
                              props.physicalDiscomfortProps.physicalDiscomfort
                                .q72c_Comm.length
                            }{" "}
                            / 65
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <input
                            className="form-control"
                            style={{
                              resize: "none",
                              borderRadius: "2%",
                              border: "3px solid black",
                            }}
                            type="text"
                            maxLength={30}
                            placeholder="Person 4"
                            value={
                              props.physicalDiscomfortProps.physicalDiscomfort
                                .q72d
                            }
                            onChange={(e) => {
                              props.setQ72D(e.target.value);
                              if (
                                props.physicalDiscomfortProps.physicalDiscomfort.q72d.trim()
                                  .length === 0
                              ) {
                                props.setQ72D_Comm("");
                              }
                            }}
                          />
                          <p>
                            Count:{" "}
                            {
                              props.physicalDiscomfortProps.physicalDiscomfort
                                .q72d.length
                            }{" "}
                            / 30
                          </p>
                        </td>
                        <td>
                          <textarea
                            className="form-control"
                            style={{
                              resize: "none",
                              borderRadius: "2%",
                              width: "20rem",
                              height: "6rem",
                              border: "3px solid black",
                            }}
                            placeholder="Comment"
                            disabled={changeDisabledCommentD(props)}
                            type="text"
                            maxLength={65}
                            value={
                              props.physicalDiscomfortProps.physicalDiscomfort
                                .q72d_Comm
                            }
                            onChange={(e) => {
                              if (
                                props.physicalDiscomfortProps.physicalDiscomfort.q72d.trim()
                                  .length > 0
                              ) {
                                props.setQ72D_Comm(e.target.value);
                              }
                            }}
                          />
                          <p>
                            Count:{" "}
                            {
                              props.physicalDiscomfortProps.physicalDiscomfort
                                .q72d_Comm.length
                            }{" "}
                            / 65
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <input
                            className="form-control"
                            style={{
                              resize: "none",
                              borderRadius: "2%",
                              border: "3px solid black",
                            }}
                            type="text"
                            maxLength={30}
                            placeholder="Person 5"
                            value={
                              props.physicalDiscomfortProps.physicalDiscomfort
                                .q72e
                            }
                            onChange={(e) => {
                              props.setQ72E(e.target.value);
                              if (
                                props.physicalDiscomfortProps.physicalDiscomfort.q72e.trim()
                                  .length === 0
                              ) {
                                props.setQ72E_Comm("");
                              }
                            }}
                          />
                          <p>
                            Count:{" "}
                            {
                              props.physicalDiscomfortProps.physicalDiscomfort
                                .q72e.length
                            }{" "}
                            / 30
                          </p>
                        </td>
                        <td>
                          <textarea
                            className="form-control"
                            style={{
                              resize: "none",
                              borderRadius: "2%",
                              width: "20rem",
                              height: "6rem",
                              border: "3px solid black",
                            }}
                            placeholder="Comment"
                            disabled={changeDisabledCommentE(props)}
                            maxLength={65}
                            value={
                              props.physicalDiscomfortProps.physicalDiscomfort
                                .q72e_Comm
                            }
                            onChange={(e) => {
                              props.setQ72E_Comm(e.target.value);
                              if (
                                props.physicalDiscomfortProps.physicalDiscomfort.q72e.trim()
                                  .length > 0
                              ) {
                                props.setQ72E_Comm(e.target.value);
                              }
                            }}
                          />
                          <p>
                            Count:{" "}
                            {
                              props.physicalDiscomfortProps.physicalDiscomfort
                                .q72e_Comm.length
                            }{" "}
                            / 65
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

const resetValues = (props) => {
  props.setQ71("0");
  props.setQ72A("");
  props.setQ72A_Comm("");
  props.setQ72B("");
  props.setQ72B_Comm("");
  props.setQ72C("");
  props.setQ72C_Comm("");
  props.setQ72D("");
  props.setQ72D_Comm("");
  props.setQ72E("");
  props.setQ72E_Comm("");
};

const changeDisabledCommentA = (props) => {
  if (
    props.physicalDiscomfortProps.physicalDiscomfort.q72a.trim().length === 0
  ) {
    return true;
  }

  return false;
};

const changeDisabledCommentB = (props) => {
  if (
    props.physicalDiscomfortProps.physicalDiscomfort.q72b.trim().length === 0
  ) {
    return true;
  }

  return false;
};

const changeDisabledCommentC = (props) => {
  if (
    props.physicalDiscomfortProps.physicalDiscomfort.q72c.trim().length === 0
  ) {
    return true;
  }

  return false;
};

const changeDisabledCommentD = (props) => {
  if (
    props.physicalDiscomfortProps.physicalDiscomfort.q72d.trim().length === 0
  ) {
    return true;
  }

  return false;
};

const changeDisabledCommentE = (props) => {
  if (
    props.physicalDiscomfortProps.physicalDiscomfort.q72e.trim().length === 0
  ) {
    return true;
  }

  return false;
};

export default connect(mapStateToProps, {
  setPhysicalDiscomfort,
  setID,
  setQ71,
  setQ71_Comm,
  setQ72A,
  setQ72A_Comm,
  setQ72B,
  setQ72B_Comm,
  setQ72C,
  setQ72C_Comm,
  setQ72D,
  setQ72D_Comm,
  setQ72E,
  setQ72E_Comm,
})(PerceivedPhysicalDiscomfort);
