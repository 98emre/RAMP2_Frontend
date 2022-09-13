import React from "react";
import {homeObjOne, homeObjThree, homeObjTwo} from "./Data";
import SectionActionSuggestions from './SectionActionSuggestions/SectionActionSuggestions';
import SectionActionSuggestionWholePage from "./SectionActionSuggestions/SectionActionSuggestionWholePage"
import SectionsTable from './SectionActionSuggestions/SectionsTable'

const ActionsSuggestions = () => {
    return (
        <div>
            <SectionActionSuggestions {...homeObjOne} />
            <SectionActionSuggestionWholePage {...homeObjTwo}/>
            <SectionsTable {...homeObjThree}/>
        </div>
    )
}

export default ActionsSuggestions;

