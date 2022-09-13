import React from 'react'

const ErrorForm = (props) => {
    console.log("tt ", props.inputData.assessmentOrderBy.trim().length === 0)
    return (
        <div className="container">
            <div className="alert alert-danger alert-dismissible" style={{ "width": "400px", "marginTop": "25px" }}>
                <h3><strong>Invalid</strong></h3>
                {handlerIdName(props)}
                {InputData(props)}
                {handlePosture(props)}
                {handleRepetitiveWork(props)}
                {handleLiftingWork(props)}
                {handlePushingAndPullingWorkk(props)}
                {handleInfluencingFactors(props)}
                {handlePhysicallyStrenousWork(props)}
                {handlePhysicalDiscomfort(props)}
                <button style={{ "fontWeight": "bold" }} className="btn btn-outline-danger btn-lg" data-dismiss="alert" type='submit' onClick={props.status}>Close</button>
            </div>
        </div>
    )
}

const handlerIdName = (props) => {
    if (props.idName.trim().length === 0) {
        return <p>- Assessment name can't be empty</p>
    }
}

const InputData = (props) => {

    if (

        props.inputData.assessmentOrderByPosition.trim().length === 0 ||
        props.inputData.assessmentOrderBy.trim().length === 0 ||
        props.inputData.assessmentOf.trim().length === 0 ||
        props.inputData.department.trim().length === 0 ||
        props.inputData.workTask.trim().length === 0 ||
        props.inputData.station.trim().length === 0 ||
        props.inputData.country.trim().length === 0 ||
        props.inputData.date.trim().length === 0 ||
        props.inputData.site.trim().length === 0 
    ) {
        return <p>- Input Data is Missing Values From The First Nine Fields</p>
    }

    return;
}

const handlePosture = (props) => {
    if (props.posture.q11 === "none" || props.posture.q12 === "none" || props.posture.q13 === "none" || props.posture.q14 === "none" ||
        props.posture.q15a === "none" || props.posture.q15b === "none" || props.posture.q16a === "none" || props.posture.q16b === "none" ||
        props.posture.q17a === "none" || props.posture.q17b === "none" || props.posture.q18 === "none") {
        return <p>- 1. Posture Missing Some Values</p>
    }
    return;
}

const handleRepetitiveWork = (props) => {
    if (props.repetitiveWork.q21a === "none" || props.repetitiveWork.q21b === "none" ||
        props.repetitiveWork.q22a === "none" || props.repetitiveWork.q22b === "none" ||
        props.repetitiveWork.q23a === "none" || props.repetitiveWork.q23b === "none" ||
        props.repetitiveWork.q24 === "none" || props.repetitiveWork.q25 === "none") {
        return <p>- 2. Repetitive Work Missing Some Values</p>
    }
    return;
}

const handleLiftingWork = (props) => {
    console.log(props.liftingWork);

    if (props.liftingWork.q30 === "none") {
        return <p>- 3. Lifting Work Missing Some Values</p>
    }

    if (props.liftingWork.q30 === 1) {
        if (props.liftingWork.q31a === 0 || props.liftingWork.q31b === 0 ||
            props.liftingWork.q32a === 0 || props.liftingWork.q32b === 0 ||
            props.liftingWork.q33a === 0 || props.liftingWork.q33b === 0 ||
            props.liftingWork.q34a === 0 || props.liftingWork.q34b === 0 ||
            props.liftingWork.q35a === 0 || props.liftingWork.q35b === 0 ||
            props.liftingWork.q36a === 0 || props.liftingWork.q36b === 0 ||
            props.liftingWork.q37a === 0 || props.liftingWork.q37b === 0
        ) {
            return <p>- 3. Lifting Work Missing Some Values</p>
        }
    }

    return;
}

const handlePushingAndPullingWorkk = (props) => {
    if (props.pushingAndPullingWork.q40 === "none") {
        return <p>- 4. Pushing And Pulling Work Missing Some Values</p>
    }

    if (props.pushingAndPullingWork.q40 === 1) {
        if (
            props.pushingAndPullingWork.q41a === 0 || props.pushingAndPullingWork.q41b === 0 ||
            props.pushingAndPullingWork.q41b === 0 || props.pushingAndPullingWork.q41d === 0 ||
            props.pushingAndPullingWork.q42a === 0 || props.pushingAndPullingWork.q42b === 0 ||
            props.pushingAndPullingWork.q42b === 0 || props.pushingAndPullingWork.q42d === 0 ||
            props.pushingAndPullingWork.q43a === 0 || props.pushingAndPullingWork.q43b === 0 ||
            props.pushingAndPullingWork.q43b === 0 || props.pushingAndPullingWork.q43d === 0 ||
            props.pushingAndPullingWork.q44a === 0 || props.pushingAndPullingWork.q44b === 0 ||
            props.pushingAndPullingWork.q44b === 0 || props.pushingAndPullingWork.q44d === 0 ||
            props.pushingAndPullingWork.q45a === 0 || props.pushingAndPullingWork.q45b === 0 ||
            props.pushingAndPullingWork.q45b === 0 || props.pushingAndPullingWork.q45d === 0 ||
            props.pushingAndPullingWork.q46a === 0 || props.pushingAndPullingWork.q46b === 0 ||
            props.pushingAndPullingWork.q46b === 0 || props.pushingAndPullingWork.q46d === 0 ||
            props.pushingAndPullingWork.q47a === 0 || props.pushingAndPullingWork.q47b === 0 ||
            props.pushingAndPullingWork.q47b === 0 || props.pushingAndPullingWork.q47d === 0 ||
            props.pushingAndPullingWork.q48a === 0 || props.pushingAndPullingWork.q48b === 0 ||
            props.pushingAndPullingWork.q48b === 0 || props.pushingAndPullingWork.q48d === 0 ||
            props.pushingAndPullingWork.q49a === 0 || props.pushingAndPullingWork.q49b === 0 ||
            props.pushingAndPullingWork.q49b === 0 || props.pushingAndPullingWork.q49d === 0
        ) {
            return <p>- 4. Pushing And Pulling Work Missing Some Values</p>
        }
    }
    return;
}

const handleInfluencingFactors = (props) => {
    if (
        props.influencingFactors.q51a === "none" || props.influencingFactors.q51b === "none" ||
        props.influencingFactors.q51c === "none" || props.influencingFactors.q51d === "none" ||
        props.influencingFactors.q51e === "none" || props.influencingFactors.q51f === "none" ||
        props.influencingFactors.q52a === "none" || props.influencingFactors.q52b === "none" ||
        props.influencingFactors.q52c === "none" || props.influencingFactors.q52d === "none" ||
        props.influencingFactors.q52e === "none" || props.influencingFactors.q52f === "none" ||
        props.influencingFactors.q52h === "none" || props.influencingFactors.q52h === "none" ||
        props.influencingFactors.q53a === "none" || props.influencingFactors.q53b === "none" ||
        props.influencingFactors.q53c === "none" || props.influencingFactors.q53d === "none") {
        return <p>- 5. Influencing Factors Missing Some Values</p>
    }

    return;
}

const handlePhysicallyStrenousWork = (props) => {
    if (props.physicallyStrenuousWork.q61 === "none") {
        return <p>- 6. Physically Strenous Work Missing Values</p>
    }
    return;
}


const handlePhysicalDiscomfort = (props) => {
    if (props.physicalDiscomfort.q71 === "none") {
        return <p>- 7. Physical Discomfort Missing Values</p>
    }
    return;
}

export default ErrorForm;


/*<div class="alert alert-success alert-dismissible" style={{ "width": "500px" }}>
    <h3><strong>Success</strong></h3>
    <p>The Values Have Submit</p>
    <button style={{ "fontWeight": "bold" }} class="btn btn-outline-success btn-lg" data-dismiss="alert" type='submit' onClick={props.status}>Close</button>
</div> */