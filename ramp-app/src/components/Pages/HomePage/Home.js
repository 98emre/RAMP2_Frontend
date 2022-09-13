import react from 'react';
import Sections from "../../Section/Sections";
import Sectionwholepage from "../../Section/Sectionwholepage";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';
import HeaderSection from "./HeaderSection"


const Home = () =>{
    return(
        <div>
            <HeaderSection {...homeObjOne}/>
            <Sectionwholepage {...homeObjTwo}></Sectionwholepage>
            <Sections {...homeObjThree}/>
            <Sections {...homeObjFour}/>
        </div>
    )
}

export default Home;