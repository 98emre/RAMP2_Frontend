import React from "react";
import { connect } from "react-redux";
import {
  setQ61,
  setQ61_Comm,
  setQ62A,
  setQ62A_Comm,
  setQ62B,
  setQ62B_Comm,
  setQ62C,
  setQ62C_Comm,
  setQ62D,
  setQ62D_Comm,
  setQ62E,
  setQ62E_Comm,
} from "../../../../actions/riskAreaActions/physicallyStrenuousWorkActions";

const mapStateToProps = (state) => ({
  physicallyStrenousWorkProps: state.physicallyStrenuousWorkState,
  checklistProps: state.checklistState,
});

const PhysicallyStrenousWork = (props) => {
  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingSix">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-physicallyStrenousWork"
            aria-expanded="false"
            aria-controls="flush-physicallyStrenousWork"
          >
            6. Physically Strenous Work
          </button>
        </h2>
        <div
          id="flush-physicallyStrenousWork"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingSix"
          data-bs-parent="#physicallyStrenousWork"
        >
          <div className="accordion-body bg-white">
            <fieldset disabled={props.checklistProps.completion}>
              <div className="card-body bg-white table-responsive">
                <h4 style={{ fontWeight: "bold" }}>
                  6.Reports On Physically Strenuous Work{" "}
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
                      <th style={{ fontSize: 20, color: "#1954A6" }}>
                        6.1 Do documented reports exist on physically strenuous
                        <br></br>
                        tasks when carrying out the work task?
                      </th>
                      <td>
                        <input
                          checked={
                            props.physicallyStrenousWorkProps
                              .physicallyStrenuousWork.q61 === "2"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q61a1"
                          id="q61a1"
                          value="option1"
                        />

                        <label
                          onClick={() => {
                            if (
                              props.physicallyStrenousWorkProps
                                .physicallyStrenuousWork.q61 != "2"
                            ) {
                              props.setQ62A("0");
                              props.setQ62A_Comm("");
                              props.setQ62B("0");
                              props.setQ62B_Comm("");
                              props.setQ62C("0");
                              props.setQ62C_Comm("");
                              props.setQ62D("0");
                              props.setQ62D_Comm("");
                              props.setQ62E("0");
                              props.setQ62E_Comm("");
                            }
                            props.setQ61("2");
                          }}
                          className="btn btn-outline-warning"
                          htmlFor="option1"
                        >
                          <h5 style={{ fontWeight: "bold" }}>Yes</h5>
                        </label>

                        <input
                          checked={
                            props.physicallyStrenousWorkProps
                              .physicallyStrenuousWork.q61 === "0"
                          }
                          readOnly
                          type="radio"
                          className="btn-check"
                          name="q61a11"
                          id="q61a22"
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
                            props.physicallyStrenousWorkProps
                              .physicallyStrenuousWork.q61 != "2" &&
                            props.physicallyStrenousWorkProps
                              .physicallyStrenuousWork.q61 != "0"
                          }
                          type="text"
                          maxLength={65}
                          value={
                            props.physicallyStrenousWorkProps
                              .physicallyStrenuousWork.q61_Comm
                          }
                          onChange={(e) => {
                            props.setQ61_Comm(e.target.value);
                          }}
                        />
                        <p>
                          Count:{" "}
                          {
                            props.physicallyStrenousWorkProps
                              .physicallyStrenuousWork.q61_Comm.length
                          }{" "}
                          / 65
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {props.physicallyStrenousWorkProps.physicallyStrenuousWork
                  .q61 === "2" && (
                  <table className="table table-responsive">
                    <tbody>
                      <tr>
                        <th>
                          6.2 If "Yes" on 6.1 , what type of work that has led
                          to this (mark with an "x")? If "No", go to 7.
                        </th>
                        <td>
                          {" "}
                          <h5 style={{ fontWeight: "bold" }}>Check Box</h5>{" "}
                        </td>
                        <td>
                          {" "}
                          <h5 style={{ fontWeight: "bold" }}>Comment</h5>{" "}
                        </td>
                      </tr>
                    </tbody>

                    <tbody>
                      <tr>
                        <td>
                          <h5 style={{ fontWeight: "bold" }}>Lifting</h5>
                        </td>
                        <td>
                          <input
                            checked={
                              props.physicallyStrenousWorkProps
                                .physicallyStrenuousWork.q62a === "1"
                            }
                            readOnly
                            onClick={() => {
                              changeCheckBoxA(props);
                            }}
                            style={{ height: "30px", width: "30px" }}
                            name="q62a.s"
                            type="checkbox"
                            id="q62a.s"
                            className="form-check-input"
                            value="true"
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
                            disabled={changeDisabledCommentA(props)}
                            type="text"
                            maxLength={65}
                            value={
                              props.physicallyStrenousWorkProps
                                .physicallyStrenuousWork.q62a_Comm
                            }
                            onChange={(e) => {
                              props.setQ62A_Comm(e.target.value);
                            }}
                          />
                          <p>
                            Count:{" "}
                            {
                              props.physicallyStrenousWorkProps
                                .physicallyStrenuousWork.q62a_Comm.length
                            }{" "}
                            / 65
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <h5 style={{ fontWeight: "bold" }}>
                            Holding/Carrying
                          </h5>
                        </td>
                        <td>
                          <input
                            checked={
                              props.physicallyStrenousWorkProps
                                .physicallyStrenuousWork.q62b === "1"
                            }
                            readOnly
                            onClick={() => {
                              changeCheckBoxB(props);
                            }}
                            style={{ height: "30px", width: "30px" }}
                            name="q62b.s"
                            type="checkbox"
                            id="q62b.s"
                            className="form-check-input"
                            value="true"
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
                            disabled={changeDisabledCommentB(props)}
                            type="text"
                            maxLength={65}
                            value={
                              props.physicallyStrenousWorkProps
                                .physicallyStrenuousWork.q62b_Comm
                            }
                            onChange={(e) => {
                              props.setQ62B_Comm(e.target.value);
                            }}
                          />
                          <p>
                            Count:{" "}
                            {
                              props.physicallyStrenousWorkProps
                                .physicallyStrenuousWork.q62b_Comm.length
                            }{" "}
                            / 65
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <h5 style={{ fontWeight: "bold" }}>
                            Pushing/Pulling
                          </h5>
                        </td>
                        <td>
                          <input
                            checked={
                              props.physicallyStrenousWorkProps
                                .physicallyStrenuousWork.q62c === "1"
                            }
                            readOnly
                            onClick={() => {
                              changeCheckBoxC(props);
                            }}
                            style={{ height: "30px", width: "30px" }}
                            name="q62c.s"
                            type="checkbox"
                            id="s62c.s"
                            className="form-check-input"
                            value="true"
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
                            disabled={changeDisabledCommentC(props)}
                            type="text"
                            maxLength={65}
                            value={
                              props.physicallyStrenousWorkProps
                                .physicallyStrenuousWork.q62c_Comm
                            }
                            onChange={(e) => {
                              props.setQ62C_Comm(e.target.value);
                            }}
                          />
                          <p>
                            Count:{" "}
                            {
                              props.physicallyStrenousWorkProps
                                .physicallyStrenuousWork.q62c_Comm.length
                            }{" "}
                            / 65
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <h5 style={{ fontWeight: "bold" }}>
                            Pushing With Hand Or Fingers
                          </h5>
                        </td>
                        <td>
                          <input
                            checked={
                              props.physicallyStrenousWorkProps
                                .physicallyStrenuousWork.q62d === "1"
                            }
                            readOnly
                            onClick={() => {
                              changeCheckBoxD(props);
                            }}
                            style={{ height: "30px", width: "30px" }}
                            name="q62d.s"
                            type="checkbox"
                            id="q62d.s"
                            className="form-check-input"
                            value="true"
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
                            disabled={changeDisabledCommentD(props)}
                            type="text"
                            maxLength={65}
                            value={
                              props.physicallyStrenousWorkProps
                                .physicallyStrenuousWork.q62d_Comm
                            }
                            onChange={(e) => {
                              props.setQ62D_Comm(e.target.value);
                            }}
                          />
                          <p>
                            Count:{" "}
                            {
                              props.physicallyStrenousWorkProps
                                .physicallyStrenuousWork.q62d_Comm.length
                            }{" "}
                            / 65
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <h5 style={{ fontWeight: "bold" }}>
                            Other:(If Any, Please Replease This Text)
                          </h5>
                        </td>
                        <td>
                          <input
                            checked={
                              props.physicallyStrenousWorkProps
                                .physicallyStrenuousWork.q62e === "1"
                            }
                            readOnly
                            onClick={() => {
                              changeCheckBoxE(props);
                            }}
                            style={{ height: "30px", width: "30px" }}
                            name="q62d.s"
                            type="checkbox"
                            id="q62d.s"
                            className="form-check-input"
                            value="true"
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
                            disabled={changeDisabledCommentE(props)}
                            type="text"
                            maxLength={65}
                            value={
                              props.physicallyStrenousWorkProps
                                .physicallyStrenuousWork.q62e_Comm
                            }
                            onChange={(e) => {
                              props.setQ62E_Comm(e.target.value);
                            }}
                          />
                          <p>
                            Count:{" "}
                            {
                              props.physicallyStrenousWorkProps
                                .physicallyStrenuousWork.q62e_Comm.length
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

const changeCheckBoxA = (props) => {
  if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62a === "0") {
    return props.setQ62A("1");
  }

  if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62a === "1") {
    props.setQ62A_Comm("");
    return props.setQ62A("0");
  }
};

const changeCheckBoxB = (props) => {
  if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62b === "0") {
    return props.setQ62B("1");
  }

  if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62b === "1") {
    props.setQ62B_Comm("");
    return props.setQ62B("0");
  }
};

const changeCheckBoxC = (props) => {
  if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62c === "0") {
    return props.setQ62C("1");
  }

  if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62c === "1") {
    props.setQ62C_Comm("");
    return props.setQ62C("0");
  }
};

const changeCheckBoxD = (props) => {
  if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62d === "0") {
    return props.setQ62D("1");
  }

  if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62d === "1") {
    props.setQ62D_Comm("");
    return props.setQ62D("0");
  }
};

const changeCheckBoxE = (props) => {
  if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62e === "0") {
    return props.setQ62E("1");
  }

  if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62e === "1") {
    props.setQ62E_Comm("");
    return props.setQ62E("0");
  }
};

const changeDisabledCommentA = (props) => {
  if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62a === "0") {
    return true;
  }

  if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62a === "1") {
    return false;
  }
};

const changeDisabledCommentB = (props) => {
  if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62b === "0") {
    return true;
  }

  if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62b === "1") {
    return false;
  }
};

const changeDisabledCommentC = (props) => {
  if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62c === "0") {
    return true;
  }

  if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62c === "1") {
    return false;
  }
};

const changeDisabledCommentD = (props) => {
  if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62d === "0") {
    return true;
  }

  if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62d === "1") {
    return false;
  }
};

const changeDisabledCommentE = (props) => {
  if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62e === "0") {
    return true;
  }

  if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q62e === "1") {
    return false;
  }
};

const resetValues = (props) => {
  props.setQ61("0");
  props.setQ62A("0");
  props.setQ62A_Comm("");
  props.setQ62B("0");
  props.setQ62B_Comm("");
  props.setQ62C("0");
  props.setQ62C_Comm("");
  props.setQ62D("0");
  props.setQ62D_Comm("");
  props.setQ62E("0");
  props.setQ62E_Comm("");
};

export default connect(mapStateToProps, {
  setQ61,
  setQ61_Comm,
  setQ62A,
  setQ62A_Comm,
  setQ62B,
  setQ62B_Comm,
  setQ62C,
  setQ62C_Comm,
  setQ62D,
  setQ62D_Comm,
  setQ62E,
  setQ62E_Comm,
})(PhysicallyStrenousWork);
