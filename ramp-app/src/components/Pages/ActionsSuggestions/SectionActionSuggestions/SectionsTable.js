import React from 'react';
import { Button } from '../../../Button/Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../actionsugestions.css';

import PostureSuggestions from './PostureSuggestions';
import RepetitiveWorkSuggestions from './RepetitiveWorkSuggestions';
import InfluencingFactorsSuggestions from './InfluencingFactorsSuggestions';
import PhysicallyStrenousWorkSuggestions from './PhysicallyStrenousWorkSuggestions';
import PerceivedPhysicalDiscomfortSuggestions from './PerceivedPhysicalDiscomfortSuggestions';
import LiftingWorkSuggestions from './LiftingWorkSuggestions';
import PushingAndPullingWorkSuggestions from './PushingAndPullingWorkSuggestions';
import ScrollButton from "../../../ScrollButton/ScrollButton"
function SectionsTable({
    lightBg,
}) {
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'} >
                <div className='container'>
                    <div className='row'>
                        <div className="col-11">
                            <div id="postureS">
                                <h2 className='text-primary'>1. Postures</h2>
                                <PostureSuggestions />
                            </div>
                            <div id="repetitiveworkS">
                                <h2 className='text-primary'>2. Work movements and repetitive work</h2>
                                <RepetitiveWorkSuggestions />
                            </div>
                            <div id="liftingworkS">
                                <h2 className='text-primary'>3. Lifting work</h2>
                                <LiftingWorkSuggestions />
                            </div>
                            <div id="pushingAndPullingworkS">
                                <h2 className='text-primary'>4. Pushing and pulling work</h2>
                                <PushingAndPullingWorkSuggestions />
                            </div>
                            <div id="influencingfactorsS">
                                <h2 className='text-primary'>5. Influencing factors</h2>
                                <InfluencingFactorsSuggestions />
                            </div>
                            <div id="reportsonstrenuosworkS">
                                <h2 className='text-primary'>6. Reports on physically strenuous work</h2>
                                <PhysicallyStrenousWorkSuggestions />
                            </div>
                            <div id="perceivedphysicaldiscomfortsS">
                                <h2 className='text-primary'>7. Perceived physical discomfort</h2>
                                <PerceivedPhysicalDiscomfortSuggestions />
                            </div>
                        </div>
                        <div className='col-1'>
                            <div
                                className="list-group scrollexample"
                                data-spy="scroll"
                                data-offset="0"
                            >
                                <a
                                    href="#postureS"
                                    className="list-group-item list-group-item-action"
                                >
                                    1.Posture
                                </a>
                                <a
                                    href="#repetitiveworkS"
                                    className="list-group-item list-group-item-action"
                                >
                                    2.Repetitive work
                                </a>
                                <a
                                    href="#liftingworkS"
                                    className="list-group-item list-group-item-action"
                                >
                                    3.Lifting work
                                </a>
                                <a
                                    href="#pushingAndPullingworkS"
                                    className="list-group-item list-group-item-action"
                                >
                                    4.Pushing and pulling work
                                </a>
                                <a
                                    href="#influencingfactorsS"
                                    className="list-group-item list-group-item-action"
                                >
                                    5.Influencing factors
                                </a>
                                <a
                                    href="#reportsonstrenuosworkS"
                                    className="list-group-item list-group-item-action"
                                >
                                    6.Reports on strenuos work
                                </a>
                                <a
                                    href="#perceivedphysicaldiscomfortsS"
                                    className="list-group-item list-group-item-action"
                                >
                                    7.Perceived physical discomforts
                                </a>
                                <ScrollButton />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
export default SectionsTable;