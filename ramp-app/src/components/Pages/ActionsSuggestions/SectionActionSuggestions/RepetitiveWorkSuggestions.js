import React from 'react'
import { connect } from "react-redux";
import Table from '../../../Table/Table';
import { list21, list22, list23, list24, list25 } from '../TableData';
import { colNames21, colNames22, colNames23, colNames24, colNames25 } from '../TableData';

const mapStateToProps = (state) => ({
  repetitiveWorkProps: state.repetitiveWorkState,
});

const RepetitiveWorkSuggestions = (props) => {
  const bool21a = handleShow(props, "21a");
  const bool21b = handleShow(props, "21b");
  const bool22a = handleShow(props, "22a");
  const bool22b = handleShow(props, "22b");
  const bool23a = handleShow(props, "23a");
  const bool23b = handleShow(props, "23b");
  const bool24 = handleShow(props, "24");
  const bool25 = handleShow(props, "25");

  return (
    <div>
      {bool21a || bool21b ? (<Table list={list21} colNames={colNames21} />) : ''}
      {bool22a || bool22b ? (<Table list={list22} colNames={colNames22} />) : ''}
      {bool23a || bool23b ? (<Table list={list23} colNames={colNames23} />) : ''}
      {bool24 ? (<Table list={list24} colNames={colNames24} />) : ''}
      {bool25 ? (<Table list={list25} colNames={colNames25} />) : ''}
    </div>
  )
}

const handleShow = (props, number) => {
  if (number == "25") {
    if (props.repetitiveWorkProps.repetitiveWork.q25 == 0 || props.repetitiveWorkProps.repetitiveWork.q25 == "none") {
      return false
    }
    else {
      return true
    }
  }
  if (number == "24") {
    if (props.repetitiveWorkProps.repetitiveWork.q24 == 0 || props.repetitiveWorkProps.repetitiveWork.q24 == "none") {
      return false
    }
    else {
      return true
    }
  }
  if (number == "23a") {
    if (props.repetitiveWorkProps.repetitiveWork.q23a <= 1 || props.repetitiveWorkProps.repetitiveWork.q23a == "none") {
      return false
    }
    else {
      return true
    }
  }
  if (number == "23b") {
    if (props.repetitiveWorkProps.repetitiveWork.q23b <= 1 || props.repetitiveWorkProps.repetitiveWork.q23b == "none") {
      return false
    }
    else {
      return true
    }
  }
  if (number == "22a") {
    if (props.repetitiveWorkProps.repetitiveWork.q22a == 0 || props.repetitiveWorkProps.repetitiveWork.q22a == "none") {
      return false
    }
    else {
      return true
    }
  }
  if (number == "22b") {
    if (props.repetitiveWorkProps.repetitiveWork.q22b == 0 || props.repetitiveWorkProps.repetitiveWork.q22b == "none") {
      return false
    }
    else {
      return true
    }
  }
  if (number == "21a") {
    if (props.repetitiveWorkProps.repetitiveWork.q21a == 0 || props.repetitiveWorkProps.repetitiveWork.q21a == "none") {
      return false
    }
    else {
      return true
    }
  }
  if (number == "21b") {
    if (props.repetitiveWorkProps.repetitiveWork.q21b == 0 || props.repetitiveWorkProps.repetitiveWork.q21b == "none") {
      return false
    }
    else {
      return true
    }
  }
};

export default connect(mapStateToProps)(RepetitiveWorkSuggestions);