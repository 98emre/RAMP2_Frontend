import SectionsInputData from "./SectionsInputData/SectionsInputData";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';
import Sectionwholepage from "../../Section/Sectionwholepage";

const InputData = () => {
  return (
    <div>
      <SectionsInputData {...homeObjOne}/>
      <br />
    </div>

  )
}

export default InputData
