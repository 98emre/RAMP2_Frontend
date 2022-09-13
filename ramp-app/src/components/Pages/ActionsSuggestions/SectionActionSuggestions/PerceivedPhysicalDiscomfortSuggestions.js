import React from 'react'
import { connect } from "react-redux";
import Table from '../../../Table/Table';
import { list7 } from '../TableData';
import { colNames7 } from '../TableData'

const mapStateToProps = (state) => ({
  physicalDiscomfortProps: state.physicalDiscomfortState,
})

const PerceivedPhysicalDiscomfortSuggestions = (props) => {
  const bool71 = handleShow(props, "71");

  return (
    <div>
      {bool71 ? (<Table list={list7} colNames={colNames7} />) : ''}
    </div>
  )
}

const handleShow = (props, number) => {
  if (number == "71") {
    if (props.physicalDiscomfortProps.physicalDiscomfort.q71 == 0 || props.physicalDiscomfortProps.physicalDiscomfort.q71 == "none") {
      return false
    }
    else {
      return true
    }
  }
};

export default connect(mapStateToProps)(PerceivedPhysicalDiscomfortSuggestions);