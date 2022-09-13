import React, { useState } from "react";
import InputData from "./InputData";
import Posture from "./RiskAreas/Posture";
import RepetitiveWork from "./RiskAreas/RepetitiveWork";
import LiftingWork from "./RiskAreas/LiftingWork";
import PushingAndPullingWork from "./RiskAreas/PushingAndPullingWork";
import InfluencingFactors from "./RiskAreas/InfluencingFactors";
import PhysicallyStrenousWork from "./RiskAreas/PhysicallyStrenousWork";
import PerceivedPhysicalDiscomfort from "./RiskAreas/PerceivedPhysicalDiscomfort";
import OtherComment from "./RiskAreas/OtherComment";
import Summary from "./Summary";
import { homeObjOne } from "./Data";
import HeaderSection from "./HeaderSection";
import ScrollButton from "../../ScrollButton/ScrollButton";
import "./Result.css";

const Result = () => {
  const [amountRed, setRed] = useState(0);
  const [amountYellow, setYellow] = useState(0);
  const [amountGreen, setGreen] = useState(0);
  const [amountTotal, setTotal] = useState(0);
  const [amountRed2, setRed2] = useState(0);
  const [amountYellow2, setYellow2] = useState(0);
  const [amountGreen2, setGreen2] = useState(0);
  const [amountTotal2, setTotal2] = useState(0);
  const [amountRed3, setRed3] = useState(0);
  const [amountYellow3, setYellow3] = useState(0);
  const [amountGreen3, setGreen3] = useState(0);
  const [amountTotal3, setTotal3] = useState(0);
  const [amountRed4, setRed4] = useState(0);
  const [amountYellow4, setYellow4] = useState(0);
  const [amountGreen4, setGreen4] = useState(0);
  const [amountTotal4, setTotal4] = useState(0);
  const [amountRed5, setRed5] = useState(0);
  const [amountYellow5, setYellow5] = useState(0);
  const [amountGreen5, setGreen5] = useState(0);
  const [amountTotal5, setTotal5] = useState(0);
  const [amountRed6, setRed6] = useState(0);
  const [amountYellow6, setYellow6] = useState(0);
  const [amountGreen6, setGreen6] = useState(0);
  const [amountTotal6, setTotal6] = useState(0);
  const [amountRed7, setRed7] = useState(0);
  const [amountYellow7, setYellow7] = useState(0);
  const [amountGreen7, setGreen7] = useState(0);
  const [amountTotal7, setTotal7] = useState(0);
  return (
    <div>
      <HeaderSection {...homeObjOne} />
      <div className="container">
        <div className="row">
          <div className="col-11">
            <div id="input">
              {" "}
              <InputData />
            </div>
            <div id="posture">
              <Posture setRed={setRed} setYellow={setYellow} setGreen={setGreen} setTotal={setTotal} />
            </div>
            <div id="repetitivework">
              <RepetitiveWork setRed={setRed2} setYellow={setYellow2} setGreen={setGreen2} setTotal={setTotal2} />
            </div>
            <div id="liftingwork" className="section scrollspy">
              <LiftingWork setRed={setRed3} setYellow={setYellow3} setGreen={setGreen3} setTotal={setTotal3} />
            </div>
            <div id="pushingAndPullingwork" className="section scrollspy">
              <PushingAndPullingWork setRed={setRed4} setYellow={setYellow4} setGreen={setGreen4} setTotal={setTotal4} />
            </div>
            <div id="influencingfactors" className="section scrollspy">
              <InfluencingFactors setRed={setRed5} setYellow={setYellow5} setGreen={setGreen5} setTotal={setTotal5} />
            </div>
            <div id="reportsonstrenuoswork" className="section scrollspy">
              <PhysicallyStrenousWork setRed={setRed6} setYellow={setYellow6} setGreen={setGreen6} setTotal={setTotal6} />
            </div>
            <div id="perceivedphysicaldiscomforts" className="section scrollspy">
              <PerceivedPhysicalDiscomfort setRed={setRed7} setYellow={setYellow7} setGreen={setGreen7} setTotal={setTotal7} />
            </div>
            <div id="othercomment" className="section scrollspy">
              <OtherComment />
            </div>
            <div id=" resultssummary" className="section scrollspy">
              <Summary aRed={amountRed} aYellow={amountYellow} aGreen={amountGreen} aTotal={amountTotal}
                aRed2={amountRed2} aYellow2={amountYellow2} aGreen2={amountGreen2} aTotal2={amountTotal2}
                aRed3={amountRed3} aYellow3={amountYellow3} aGreen3={amountGreen3} aTotal3={amountTotal3}
                aRed4={amountRed4} aYellow4={amountYellow4} aGreen4={amountGreen4} aTotal4={amountTotal4}
                aRed5={amountRed5} aYellow5={amountYellow5} aGreen5={amountGreen5} aTotal5={amountTotal5}
                aRed6={amountRed6} aYellow6={amountYellow6} aGreen6={amountGreen6} aTotal6={amountTotal6}
                aRed7={amountRed7} aYellow7={amountYellow7} aGreen7={amountGreen7} aTotal7={amountTotal7} />
            </div>
          </div>
          <div className="col-1">
            <div className="list-group scrollexample" data-spy="scroll" data-offset='0'>
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
              <a
                href="#resultssummary"
                className="list-group-item list-group-item-action"
                style={{ background: "#0d6efd" }}
              >
                Results Summary
              </a>
              <ScrollButton />
              <br/>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </div>
  );
};

export default Result;
