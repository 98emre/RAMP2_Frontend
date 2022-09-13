import React from 'react'
import { connect } from "react-redux";
import Table from '../../../Table/Table';
import { list51, list51ab, list51c, list51d, list51e, list51f, list52, list52ab, list52c, list52d, list52e, list52f, list52g, list52h, list53, list53a, list53b, list53c, list53d } from '../TableData';
import { colNames51, colNames51ab, colNames51c, colNames51d, colNames51e, colNames51f, colNames52, colNames52ab, colNames52c, colNames52d, colNames52e, colNames52f, colNames52g, colNames52h, colNames53, colNames53a, colNames53b, colNames53c, colNames53d } from '../TableData';

const mapStateToProps = (state) => ({
  influencingFactorsProps: state.influencingFactorsState,
});

const RepetitiveWorkSuggestions = (props) => {
  const bool51a = handleShow(props, "51a");
  const bool51b = handleShow(props, "51b");
  const bool51c = handleShow(props, "51c");
  const bool51d = handleShow(props, "51d");
  const bool51e = handleShow(props, "51e");
  const bool51f = handleShow(props, "51f");

  const bool52a = handleShow(props, "52a");
  const bool52b = handleShow(props, "52b");
  const bool52c = handleShow(props, "52c");
  const bool52d = handleShow(props, "52d");
  const bool52e = handleShow(props, "52e");
  const bool52f = handleShow(props, "52f");
  const bool52g = handleShow(props, "52g");
  const bool52h = handleShow(props, "52h");

  const bool53a = handleShow(props, "53a");
  const bool53b = handleShow(props, "53b");
  const bool53c = handleShow(props, "53c");
  const bool53d = handleShow(props, "53d");

  return (
    <div>
      {bool51a || bool51b || bool51c || bool51d || bool51e || bool51f ? (<Table list={list51} colNames={colNames51} />) : ''}
      {bool51a || bool51b ? (<Table list={list51ab} colNames={colNames51ab} />) : ''}
      {bool51c ? (<Table list={list51c} colNames={colNames51c} />) : ''}
      {bool51d ? (<Table list={list51d} colNames={colNames51d} />) : ''}
      {bool51e ? (<Table list={list51e} colNames={colNames51e} />) : ''}
      {bool51f ? (<Table list={list51f} colNames={colNames51f} />) : ''}

      {bool52a || bool52b || bool52c || bool52d || bool52e || bool52f || bool52g || bool52h ? (<Table list={list52} colNames={colNames52} />) : ''}
      {bool52a || bool52b ? (<Table list={list52ab} colNames={colNames52ab} />) : ''}
      {bool52c ? (<Table list={list52c} colNames={colNames52c} />) : ''}
      {bool52d ? (<Table list={list52d} colNames={colNames52d} />) : ''}
      {bool52e ? (<Table list={list52e} colNames={colNames52e} />) : ''}
      {bool52f ? (<Table list={list52f} colNames={colNames52f} />) : ''}
      {bool52g ? (<Table list={list52g} colNames={colNames52g} />) : ''}
      {bool52h ? (<Table list={list52h} colNames={colNames52h} />) : ''}

      {bool53a || bool53b || bool53c || bool53d ? (<Table list={list53} colNames={colNames53} />) : ''}
      {bool53a ? (<Table list={list53a} colNames={colNames53a} />) : ''}
      {bool53b ? (<Table list={list53b} colNames={colNames53b} />) : ''}
      {bool53c ? (<Table list={list53c} colNames={colNames53c} />) : ''}
      {bool53d ? (<Table list={list53d} colNames={colNames53d} />) : ''}
    </div>
  )
}

const handleShow = (props, number) => {
  if (number == "51a") {
    if (props.influencingFactorsProps.influencingFactors.q51a == 0 || props.influencingFactorsProps.influencingFactors.q51a == "none") {
      return false
    }
    else {
      return true
    }
  }
  else if (number == "51b") {
    if (props.influencingFactorsProps.influencingFactors.q51b == 0 || props.influencingFactorsProps.influencingFactors.q51b == "none") {
      return false
    }
    else {
      return true
    }
  }
  else if (number == "51c") {
    if (props.influencingFactorsProps.influencingFactors.q51c == 0 || props.influencingFactorsProps.influencingFactors.q51c == "none") {
      return false
    }
    else {
      return true
    }
  }
  else if (number == "51d") {
    if (props.influencingFactorsProps.influencingFactors.q51d == 0 || props.influencingFactorsProps.influencingFactors.q51d == "none") {
      return false
    }
    else {
      return true
    }
  }
  else if (number == "51e") {
    if (props.influencingFactorsProps.influencingFactors.q51e == 0 || props.influencingFactorsProps.influencingFactors.q51e == "none") {
      return false
    }
    else {
      return true
    }
  }
  else if (number == "51f") {
    if (props.influencingFactorsProps.influencingFactors.q51f == 0 || props.influencingFactorsProps.influencingFactors.q51f == "none") {
      return false
    }
    else {
      return true
    }
  }
  else if (number == "52a") {
    if (props.influencingFactorsProps.influencingFactors.q52a == 0 || props.influencingFactorsProps.influencingFactors.q52a == "none") {
      return false
    }
    else {
      return true
    }
  }
  else if (number == "52b") {
    if (props.influencingFactorsProps.influencingFactors.q52b == 0 || props.influencingFactorsProps.influencingFactors.q52b == "none") {
      return false
    }
    else {
      return true
    }
  }
  else if (number == "52c") {
    if (props.influencingFactorsProps.influencingFactors.q52c == 0 || props.influencingFactorsProps.influencingFactors.q52c == "none") {
      return false
    }
    else {
      return true
    }
  }
  else if (number == "52d") {
    if (props.influencingFactorsProps.influencingFactors.q52d == 0 || props.influencingFactorsProps.influencingFactors.q52d == "none") {
      return false
    }
    else {
      return true
    }
  }
  else if (number == "52e") {
    if (props.influencingFactorsProps.influencingFactors.q52e == 0 || props.influencingFactorsProps.influencingFactors.q52e == "none") {
      return false
    }
    else {
      return true
    }
  }
  else if (number == "52f") {
    if (props.influencingFactorsProps.influencingFactors.q52f == 0 || props.influencingFactorsProps.influencingFactors.q52f == "none") {
      return false
    }
    else {
      return true
    }
  }
  else if (number == "52g") {
    if (props.influencingFactorsProps.influencingFactors.q52g == 0 || props.influencingFactorsProps.influencingFactors.q52g == "none") {
      return false
    }
    else {
      return true
    }
  }
  else if (number == "52h") {
    if (props.influencingFactorsProps.influencingFactors.q52h == 0 || props.influencingFactorsProps.influencingFactors.q52h == "none") {
      return false
    }
    else {
      return true
    }
  }
  else if (number == "53a") {
    if (props.influencingFactorsProps.influencingFactors.q53a == 0 || props.influencingFactorsProps.influencingFactors.q53a == "none") {
      return false
    }
    else {
      return true
    }
  }
  else if (number == "53b") {
    if (props.influencingFactorsProps.influencingFactors.q53b == 0 || props.influencingFactorsProps.influencingFactors.q53b == "none") {
      return false
    }
    else {
      return true
    }
  }
  else if (number == "53c") {
    if (props.influencingFactorsProps.influencingFactors.q53c == 0 || props.influencingFactorsProps.influencingFactors.q53c == "none") {
      return false
    }
    else {
      return true
    }
  }
  else if (number == "53d") {
    if (props.influencingFactorsProps.influencingFactors.q53d == 0 || props.influencingFactorsProps.influencingFactors.q53d == "none") {
      return false
    }
    else {
      return true
    }
  }
};

export default connect(mapStateToProps)(RepetitiveWorkSuggestions);