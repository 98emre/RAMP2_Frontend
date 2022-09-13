import React from 'react'
import { connect } from "react-redux";
import Table from '../../../Table/Table';
import { list3 } from '../TableData';
import { colNames3 } from '../TableData'

const mapStateToProps = (state) => ({
    liftingWorkProps: state.liftingWorkState,
});

const LiftingWorkSuggestions = (props) => {
    const calculateColorOne = () => {
        var colorOne = "";
        if (props.liftingWorkProps.liftingWork.q30 === 1) {
            if (
                props.liftingWorkProps.liftingWork.q31a != "" &&
                props.liftingWorkProps.liftingWork.q32a != "" &&
                props.liftingWorkProps.liftingWork.q33a != "" &&
                props.liftingWorkProps.liftingWork.q34a != "" &&
                props.liftingWorkProps.liftingWork.q35a != "" &&
                props.liftingWorkProps.liftingWork.q36a != "" &&
                props.liftingWorkProps.liftingWork.q37a != ""
            ) {
                var pointOne = 0;
                pointOne =
                    +props.liftingWorkProps.liftingWork.q31a *
                    props.liftingWorkProps.liftingWork.q32a *
                    props.liftingWorkProps.liftingWork.q33a *
                    props.liftingWorkProps.liftingWork.q34a *
                    props.liftingWorkProps.liftingWork.q35a *
                    props.liftingWorkProps.liftingWork.q36a *
                    props.liftingWorkProps.liftingWork.q37a;

                if (pointOne > 5) {
                    colorOne = "red";
                } else if (pointOne < 5 && pointOne > 3) {
                    colorOne = "yellow";
                } else if (pointOne < 3) {
                    colorOne = "green";
                }
            }
        }
        return colorOne
    };

    const calculateColorTwo = () => {
        var colorTwo = "";
        if (props.liftingWorkProps.liftingWork.q30 === 1) {
            if (
                props.liftingWorkProps.liftingWork.q31b != "" &&
                props.liftingWorkProps.liftingWork.q32b != "" &&
                props.liftingWorkProps.liftingWork.q33b != "" &&
                props.liftingWorkProps.liftingWork.q34b != "" &&
                props.liftingWorkProps.liftingWork.q35b != "" &&
                props.liftingWorkProps.liftingWork.q36b != "" &&
                props.liftingWorkProps.liftingWork.q37b != ""
            ) {
                var pointTwo = 0;
                pointTwo =
                    +props.liftingWorkProps.liftingWork.q31b *
                    props.liftingWorkProps.liftingWork.q32b *
                    props.liftingWorkProps.liftingWork.q33b *
                    props.liftingWorkProps.liftingWork.q34b *
                    props.liftingWorkProps.liftingWork.q35b *
                    props.liftingWorkProps.liftingWork.q36b *
                    props.liftingWorkProps.liftingWork.q37b;

                if (pointTwo > 5) {
                    colorTwo = "red";
                } else if (pointTwo < 5 && pointTwo > 3) {
                    colorTwo = "yellow";
                } else if (pointTwo < 3) {
                    colorTwo = "green";
                }
            }
        }
        return colorTwo;
    };

    const handleShow = () => {
        var color1 = calculateColorOne();
        var color2 = calculateColorTwo();
        if(color1 == "red" || color2 == "red" || color1 == "yellow" || color2 == "yellow"){
            return true;
        } else {
            return false;
        }
    };

    const bool3 = handleShow();
    return (
        <div>
            {bool3 ? (<Table list={list3} colNames={colNames3} />) : ''}
        </div>
    )
}

export default connect(mapStateToProps)(LiftingWorkSuggestions);