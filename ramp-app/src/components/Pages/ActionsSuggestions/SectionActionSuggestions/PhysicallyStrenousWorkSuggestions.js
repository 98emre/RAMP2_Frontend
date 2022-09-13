import React from 'react'
import { connect } from "react-redux";
import Table from '../../../Table/Table';
import { list6 } from '../TableData';
import { colNames6 } from '../TableData'

const mapStateToProps = (state) => ({
  physicallyStrenousWorkProps: state.physicallyStrenuousWorkState,
});

const PhysicallyStrenousWorkSuggestions = (props) => {
  const bool61 = handleShow(props, "61");

  return (
    <div>
      {bool61 ? (<Table list={list6} colNames={colNames6} />) : ''}
    </div>
  )
}

const handleShow = (props, number) => {
  if (number == "61") {
    if (props.physicallyStrenousWorkProps.physicallyStrenuousWork.q61 == 0 || props.physicallyStrenousWorkProps.physicallyStrenuousWork.q61 == "none") {
      return false
    }
    else {
      return true
    }
  }
};

export default connect(mapStateToProps)(PhysicallyStrenousWorkSuggestions);