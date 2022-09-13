import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap';
import { useState } from 'react';
import SectionsActionSuggestions from '../ActionsSuggestions/SectionActionSuggestions/SectionActionSuggestions';


function SectionInputData({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  descriptionOne,
  descriptionOneHeader,
  buttonLabel,
  imgOne,
  altOne,
  imageOneText,
  imgStart,

}){
    const [data, setData] = useState('');
  
    const parentToChild = () => {
      setData("This is data from Parent Component to the Child Component.");
    }
    return(
        <>
        <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'} >
        <div className='container'>
            <form className='text-dark'>
                <div class="row">
                    <div className='col '>
                        <label for="validationServer01">Date</label>
                        <div className='input-group'>
                        <input type="text" className="form-control is-valid" id="validationServer01" placeholder="First name" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        </div>
          
                    </div>
                    <div className="col order-12">
                        <label for="validationServer02">Work/work task</label>
                        <input type="text" className="form-control is-valid" id="validationServer02" placeholder="Last name" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col order-1">
                        <label for="validationServerUsername">Assessment of</label>
                        <div className="input-group">
                            <input type="text" className="form-control is-invalid" id="validationServerUsername" placeholder="Select an option" aria-describedby="inputGroupPrepend3" required/>
                            <div className="invalid-feedback">
                                Selecct an assessment
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit" onClick={() => parentToChild()}>Submit form</button>
                </form>
            </div>
        </div>
     
        </>
    )
}
export default SectionInputData;