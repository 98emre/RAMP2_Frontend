import { connect } from "react-redux";
import InputForm from "../../InputData/InputForm";
import "./InputData.css";

const mapStateToProps = (state) => ({
  inputDataProps: state.inputDataState,
  checklistProps: state.checklistState,
});

const InputData = (props) => {
  return (
    <div>
      <div className="accordion" id="accordionFlushExample">
        <br />

        <div className="accordion-item">
          <h1 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne "
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Input data
            </button>
          </h1>
          <fieldset disabled={props.checklistProps.completion}>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-white">
                <InputForm />
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <br />
    </div>
  );
};

export default connect(mapStateToProps, {})(InputData);
