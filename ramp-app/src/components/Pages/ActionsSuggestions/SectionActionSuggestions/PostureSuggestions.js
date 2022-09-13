import React from 'react'
import { connect } from "react-redux";
import Table from '../../../Table/Table';
import { list11, list12, list13, list14, list15, list16, list17, list18 } from '../TableData';
import { colNames11, colNames12, colNames13, colNames14, colNames15, colNames16, colNames17, colNames18 } from '../TableData'

const mapStateToProps = (state) => ({
  postureProps: state.postureState,
});

const PostureSuggestions = (props) => {
  const bool11 = handleShow(props, "11");
  const bool12 = handleShow(props, "12");
  const bool13 = handleShow(props, "13");
  const bool14 = handleShow(props, "14");
  const bool15a = handleShow(props, "15a");
  const bool15b = handleShow(props, "15b");
  const bool16a = handleShow(props, "16a");
  const bool16b = handleShow(props, "16b");
  const bool17a = handleShow(props, "17a");
  const bool17b = handleShow(props, "17b");
  const bool18 = handleShow(props, "18");

  return (
    <div>
      {bool11 ? (<Table list={list11} colNames={colNames11} />) : ''}
      {bool12 ? (<Table list={list12} colNames={colNames12} />) : ''}
      {bool13 ? (<Table list={list13} colNames={colNames13} />) : ''}
      {bool14 ? (<Table list={list14} colNames={colNames14} />) : ''}
      {bool15a || bool15b ? (<Table list={list15} colNames={colNames15} />) : ''}
      {bool16a || bool16b ? (<Table list={list16} colNames={colNames16} />) : ''}
      {bool17a || bool17b ? (<Table list={list17} colNames={colNames17} />) : ''}
      {bool18 ? (<Table list={list18} colNames={colNames18} />) : ''}
    </div>
  )
}

const handleShow = (props, number) => {
  if (number == "18") {
    if (props.postureProps.posture.q18 <= 0.5 || props.postureProps.posture.q18 == "none") {
      return false
    }
    else {
      return true
    }
  }
  if (number == "17a") {
    if (props.postureProps.posture.q17a <= 1 || props.postureProps.posture.q17a == "none") {
      return false
    }
    else {
      return true
    }
  }
  if (number == "17b") {
    if (props.postureProps.posture.q17b <= 1 || props.postureProps.posture.q17b == "none") {
      return false
    }
    else {
      return true
    }
  }
  if (number == "16a") {
    if (props.postureProps.posture.q16a <= 1 || props.postureProps.posture.q16a == "none") {
      return false
    }
    else {
      return true
    }
  }
  if (number == "16b") {
    if (props.postureProps.posture.q16b <= 1 || props.postureProps.posture.q16b == "none") {
      return false
    }
    else {
      return true
    }
  }
  if (number == "15a") {
    if (props.postureProps.posture.q15a <= 1 || props.postureProps.posture.q15a == "none") {
      return false
    }
    else {
      return true
    }
  }
  if (number == "15b") {
    if (props.postureProps.posture.q15b <= 1 || props.postureProps.posture.q15b == "none") {
      return false
    }
    else {
      return true
    }
  }
  if (number == "14") {
    if (props.postureProps.posture.q14 <= 1 || props.postureProps.posture.q14 == "none") {
      return false
    }
    else {
      return true
    }
  }
  if (number == "13") {
    if (props.postureProps.posture.q13 <= 1 || props.postureProps.posture.q13 == "none") {
      return false;
    }
    else {
      return true
    }
  }
  if (number == "12") {
    if (props.postureProps.posture.q12 == 0 || props.postureProps.posture.q12 == "none") {
      return false;
    }
    else {
      return true;
    }
  }
  if (number == "11") {
    if (props.postureProps.posture.q11 <= 1 || props.postureProps.posture.q11 == "none") {
      return false;
    }
    else {
      return true;
    }
  }
};

export default connect(mapStateToProps)(PostureSuggestions);