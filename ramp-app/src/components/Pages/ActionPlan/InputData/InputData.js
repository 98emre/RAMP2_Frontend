import { connect } from "react-redux";
import InputDataValues from "./InputDataValues";

const mapStateToProps = (state) => ({
  inputDataProps: state.inputDataState,
});

const InputData = (props) => {
  return (
    <div className="accordion" id="accordionFlushExample">
      <br />
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Input data
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <InputDataValues />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(InputData);
