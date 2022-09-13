import React from 'react'
import { connect } from "react-redux";
import Table from '../../../Table/Table';
import { list4 } from '../TableData';
import { colNames4 } from '../TableData'

const mapStateToProps = (state) => ({
    pushingAndPullingProps: state.pushingAndPullingState,
});

const PushingAndPullingWorkSuggestions = (props) => {
    var colorOne = "";
    var colorTwo = "";
    const calculateColorOne = () => {
        if (props.pushingAndPullingProps.pushingAndPulling.q40 === 1) {
            if (
                props.pushingAndPullingProps.pushingAndPulling.q41a != "" &&
                props.pushingAndPullingProps.pushingAndPulling.q42a != "" &&
                props.pushingAndPullingProps.pushingAndPulling.q43a != "" &&
                props.pushingAndPullingProps.pushingAndPulling.q44a != "" &&
                props.pushingAndPullingProps.pushingAndPulling.q45a != "" &&
                props.pushingAndPullingProps.pushingAndPulling.q46a != "" &&
                props.pushingAndPullingProps.pushingAndPulling.q47a != "" &&
                props.pushingAndPullingProps.pushingAndPulling.q48a != "" &&
                props.pushingAndPullingProps.pushingAndPulling.q49a != ""
            ) {
                var pointOne = 0;
                var pointTwo = 0;
                pointOne =
                    +props.pushingAndPullingProps.pushingAndPulling.q41a *
                    props.pushingAndPullingProps.pushingAndPulling.q42a *
                    props.pushingAndPullingProps.pushingAndPulling.q43a *
                    props.pushingAndPullingProps.pushingAndPulling.q44a *
                    props.pushingAndPullingProps.pushingAndPulling.q45a *
                    props.pushingAndPullingProps.pushingAndPulling.q46a *
                    props.pushingAndPullingProps.pushingAndPulling.q47a *
                    props.pushingAndPullingProps.pushingAndPulling.q48a *
                    props.pushingAndPullingProps.pushingAndPulling.q49a;

                if (
                    props.pushingAndPullingProps.pushingAndPulling.q41b != "" &&
                    props.pushingAndPullingProps.pushingAndPulling.q42b != "" &&
                    props.pushingAndPullingProps.pushingAndPulling.q43b != "" &&
                    props.pushingAndPullingProps.pushingAndPulling.q44b != "" &&
                    props.pushingAndPullingProps.pushingAndPulling.q45b != "" &&
                    props.pushingAndPullingProps.pushingAndPulling.q46b != "" &&
                    props.pushingAndPullingProps.pushingAndPulling.q47b != "" &&
                    props.pushingAndPullingProps.pushingAndPulling.q48b != "" &&
                    props.pushingAndPullingProps.pushingAndPulling.q49b != ""
                ) {
                    pointTwo =
                        +props.pushingAndPullingProps.pushingAndPulling.q41b *
                        props.pushingAndPullingProps.pushingAndPulling.q42b *
                        props.pushingAndPullingProps.pushingAndPulling.q43b *
                        props.pushingAndPullingProps.pushingAndPulling.q44b *
                        props.pushingAndPullingProps.pushingAndPulling.q45b *
                        props.pushingAndPullingProps.pushingAndPulling.q46b *
                        props.pushingAndPullingProps.pushingAndPulling.q47b *
                        props.pushingAndPullingProps.pushingAndPulling.q48b *
                        props.pushingAndPullingProps.pushingAndPulling.q49b;
                }

                if (pointOne > pointTwo) {
                    if (pointOne > 5) {
                        colorOne = "red";
                    } else if (pointOne < 5 && pointOne > 3) {
                        colorOne = "yellow";
                    } else if (pointOne < 3 && pointOne > 0) {
                        colorOne = "green";
                    }
                } else {
                    if (pointTwo > 5) {
                        colorOne = "red";
                    } else if (pointTwo < 5 && pointTwo > 3) {
                        colorOne = "yellow";
                    } else if (pointTwo < 3 && pointTwo > 0) {
                        colorOne = "green";
                    }
                }
            }
        }
        return colorOne;
    };

    const calculateColorTwo = () => {
        if (props.pushingAndPullingProps.pushingAndPulling.q40 === 1) {
            if (
                props.pushingAndPullingProps.pushingAndPulling.q41c != "" &&
                props.pushingAndPullingProps.pushingAndPulling.q42c != "" &&
                props.pushingAndPullingProps.pushingAndPulling.q43c != "" &&
                props.pushingAndPullingProps.pushingAndPulling.q44c != "" &&
                props.pushingAndPullingProps.pushingAndPulling.q45c != "" &&
                props.pushingAndPullingProps.pushingAndPulling.q46c != "" &&
                props.pushingAndPullingProps.pushingAndPulling.q47c != "" &&
                props.pushingAndPullingProps.pushingAndPulling.q48c != "" &&
                props.pushingAndPullingProps.pushingAndPulling.q49c != ""
            ) {
                var pointThree = 0;
                var pointFour = 0;

                pointThree =
                    +props.pushingAndPullingProps.pushingAndPulling.q41c *
                    props.pushingAndPullingProps.pushingAndPulling.q42c *
                    props.pushingAndPullingProps.pushingAndPulling.q43c *
                    props.pushingAndPullingProps.pushingAndPulling.q44c *
                    props.pushingAndPullingProps.pushingAndPulling.q45c *
                    props.pushingAndPullingProps.pushingAndPulling.q46c *
                    props.pushingAndPullingProps.pushingAndPulling.q47c *
                    props.pushingAndPullingProps.pushingAndPulling.q48c *
                    props.pushingAndPullingProps.pushingAndPulling.q49c;

                if (
                    props.pushingAndPullingProps.pushingAndPulling.q41d != "" &&
                    props.pushingAndPullingProps.pushingAndPulling.q42d != "" &&
                    props.pushingAndPullingProps.pushingAndPulling.q43d != "" &&
                    props.pushingAndPullingProps.pushingAndPulling.q44d != "" &&
                    props.pushingAndPullingProps.pushingAndPulling.q45d != "" &&
                    props.pushingAndPullingProps.pushingAndPulling.q46d != "" &&
                    props.pushingAndPullingProps.pushingAndPulling.q47d != "" &&
                    props.pushingAndPullingProps.pushingAndPulling.q48d != "" &&
                    props.pushingAndPullingProps.pushingAndPulling.q49d != ""
                ) {
                    pointFour =
                        +props.pushingAndPullingProps.pushingAndPulling.q41d *
                        props.pushingAndPullingProps.pushingAndPulling.q42d *
                        props.pushingAndPullingProps.pushingAndPulling.q43d *
                        props.pushingAndPullingProps.pushingAndPulling.q44d *
                        props.pushingAndPullingProps.pushingAndPulling.q45d *
                        props.pushingAndPullingProps.pushingAndPulling.q46d *
                        props.pushingAndPullingProps.pushingAndPulling.q47d *
                        props.pushingAndPullingProps.pushingAndPulling.q48d *
                        props.pushingAndPullingProps.pushingAndPulling.q49d;
                }

                if (pointThree > pointFour) {
                    if (pointThree > 5) {
                        colorTwo = "red";
                    } else if (pointThree < 5 && pointThree > 3) {
                        colorTwo = "yellow";
                    } else if (pointThree < 3 && pointThree > 0) {
                        colorTwo = "green";
                    }

                } else {
                    if (pointFour > 5) {
                        colorTwo = "red";
                    } else if (pointFour < 5 && pointFour > 3) {
                        colorTwo = "yellow";
                    } else if (pointFour < 3 && pointFour > 0) {
                        colorTwo = "green";
                    }
                }
            } else {
                colorTwo = colorOne;
            }
        }
        return colorTwo;
    };

    const handleShow = () => {
        var color1 = calculateColorOne();
        var color2 = calculateColorTwo();
        if (color1 == "red" || color2 == "red" || color1 == "yellow" || color2 == "yellow") {
            return true;
        } else {
            return false;
        }
    };

    const bool4 = handleShow();

    return (
        <div>
            {bool4 ? (<Table list={list4} colNames={colNames4} />) : ''}
        </div>
    )
}

export default connect(mapStateToProps)(PushingAndPullingWorkSuggestions);