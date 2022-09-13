import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import "./Checklist.css";

import InputData from "./InputData/InputData";
import Posture from "./RiskAreas/Posture";
import RepetitiveWork from "./RiskAreas/RepetitiveWork";
import LiftingWork from "./RiskAreas/LiftingWork";
import PushingAndPullingWork from "./RiskAreas/PushingAndPullingWork";
import InfluencingFactors from "./RiskAreas/InfluencingFactors";
import PhysicallyStrenousWork from "./RiskAreas/PhysicallyStrenousWork";
import PerceivedPhysicalDiscomfort from "./RiskAreas/PerceivedPhysicalDiscomfort";
import OtherComment from "./RiskAreas/OtherComment";
import SectionsChecklist from "./SectionChecklist/SectionsChecklist";
import ScrollButton from "../../ScrollButton/ScrollButton";
import SaveModal from "./SaveModal";

const Checklist = (props) => {
  $("body").scrollspy({ target: "#navbar-example" });
  return (
    <div>
      <SectionsChecklist />
      <div className="container">
        <div className="row">
          <div className="col-11 ">
            <div id="input">
              {" "}
              <InputData />
            </div>
            <div id="posture">
              <Posture />
            </div>
            <div id="repetitivework">
              <RepetitiveWork />
            </div>
            <div id="liftingwork" className="section scrollspy">
              <LiftingWork />
            </div>
            <div id="pushingAndPullingwork" className="section scrollspy">
              <PushingAndPullingWork />
            </div>
            <div id="influencingfactors" className="section scrollspy">
              <InfluencingFactors />
            </div>
            <div id="reportsonstrenuoswork" className="section scrollspy">
              <PhysicallyStrenousWork />
            </div>
            <div
              id="perceivedphysicaldiscomforts"
              className="section scrollspy"
            >
              <PerceivedPhysicalDiscomfort />
            </div>
            <div id="othercomment" className="section scrollspy">
              <OtherComment />
            </div>
          </div>

          <div className="col-1">
            <div
              className="list-group scrollexample"
              data-spy="scroll"
              data-offset="0"
            >
              <a
                href="#input"
                className="list-group-item list-group-item-action"
                style={{ borderBottom: "1px solid #1954A6" }}
              >
                Input data
              </a>
              <a
                href="#posture"
                className="list-group-item list-group-item-action"
              >
                1.Posture
              </a>
              <a
                href="#repetitivework"
                className="list-group-item list-group-item-action"
              >
                2.Repetitive work
              </a>
              <a
                href="#liftingwork"
                className="list-group-item list-group-item-action"
              >
                3.Lifting work
              </a>
              <a
                href="#pushingAndPullingwork"
                className="list-group-item list-group-item-action"
              >
                4.Pushing and pulling work
              </a>
              <a
                href="#influencingfactors"
                className="list-group-item list-group-item-action"
              >
                5.Influencing factors
              </a>
              <a
                href="#reportsonstrenuoswork"
                className="list-group-item list-group-item-action"
              >
                6. Physically Strenous Work
              </a>
              <a
                href="#perceivedphysicaldiscomforts"
                className="list-group-item list-group-item-action"
                style={{ borderBottom: "1px solid #1954A6" }}
              >
                7. Physical Discomforts
              </a>

              <a
                href="#othercomment"
                className="list-group-item list-group-item-action"
              >
                Other Comment
              </a>
              <ScrollButton />
            </div>
          </div>
        </div>
        <button id="btn_fixed" type="button" className="button btnSave btn-primary" data-bs-dismiss="modal" data-bs-toggle='modal' data-bs-target="#ModalSave" >
          Save
        </button>
        <SaveModal />
      </div>
    </div>
  );
};
export default Checklist
