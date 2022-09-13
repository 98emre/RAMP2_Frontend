import React from "react";
import SectionsTable from './SectionsActionModel/SectionsTable';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';
import Sections from "../../Section/Sections";
import Sectionwholepage from "../../Section/Sectionwholepage"
import HeaderSection from "../HomePage/HeaderSection"

const ActionModel = () =>{
    return(
        <div>
          <HeaderSection {...homeObjOne}></HeaderSection>
          <Sectionwholepage {...homeObjFour}></Sectionwholepage>
          <Sectionwholepage {...homeObjTwo}></Sectionwholepage>
          <SectionsTable {...homeObjThree}></SectionsTable>
      
        </div>
    )
}

export default ActionModel;

