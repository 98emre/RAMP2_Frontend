import React from 'react';
import {homeObjOne,homeObjTwo,homeObjThree} from "./Data";
import SectionsActionPlanInput from "./SectionsActionPlan/SectionsActionPlanInput"
import SectionsActionPlanTable from "./SectionsActionPlan/SectionsActionPlanTable"


const ActionPlan = () =>{
    return(
        <div>
            <SectionsActionPlanInput {...homeObjOne}/>
            <SectionsActionPlanTable {...homeObjTwo}/>

        </div>
    )
}

export default ActionPlan;
