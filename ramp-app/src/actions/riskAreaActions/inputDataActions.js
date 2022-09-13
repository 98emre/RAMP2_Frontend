import {
  SET_INPUTDATA,
  SET_ID,
  SET_DATE,
  SET_WORK,
  SET_ASSESMENTOF,
  SET_WORKSTATION,
  SET_DEPARTMENT,
  SET_SITE,
  SET_COUNTRY,
  SET_ASSESMENTORDEREDBY,
  SET_POSITIONONE,
  SET_ASSESMENTCOMPLETEDBY,
  SET_POSITIONTWO,
  SET_COMPANYREPRESENTATIVE,
  SET_POSITIONTHREE,
  SET_SAFETYPERSONNEL,
  SET_POSITIONFOUR,
  SET_OTHER,
  SET_POSITIONFIVE,
  SET_OTHERINFORMATION,
} from "../../actionTypes/riskAreaTypes/inputDataTypes";

export const setInputData = (InputData) => {
  return (dispatch) => {
    dispatch({
      type: SET_INPUTDATA,
      payload: InputData,
    });
  };
};

export const setID = (ID) => {
  return (dispatch) => {
    dispatch({
      type: SET_ID,
      payload: ID,
    });
  };
};

export const setDate = (Date) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE,
      payload: Date,
    });
  };
};

export const setWork = (Work) => {
  return (dispatch) => {
    dispatch({
      type: SET_WORK,
      payload: Work,
    });
  };
};

export const setAssesmentOf = (AssesmentOf) => {
  return (dispatch) => {
    dispatch({
      type: SET_ASSESMENTOF,
      payload: AssesmentOf,
    });
  };
};

export const setWorkstation = (WorkStation) => {
  return (dispatch) => {
    dispatch({
      type: SET_WORKSTATION,
      payload: WorkStation,
    });
  };
};

export const setDepartment = (Department) => {
  return (dispatch) => {
    dispatch({
      type: SET_DEPARTMENT,
      payload: Department,
    });
  };
};

export const setSite = (Site) => {
  return (dispatch) => {
    dispatch({
      type: SET_SITE,
      payload: Site,
    });
  };
};

export const setCountry = (Country) => {
  return (dispatch) => {
    dispatch({
      type: SET_COUNTRY,
      payload: Country,
    });
  };
};

export const setAssesmentOrderedBy = (AssesmentOrderedBy) => {
  return (dispatch) => {
    dispatch({
      type: SET_ASSESMENTORDEREDBY,
      payload: AssesmentOrderedBy,
    });
  };
};

export const setPositionOne = (PositionOne) => {
  return (dispatch) => {
    dispatch({
      type: SET_POSITIONONE,
      payload: PositionOne,
    });
  };
};

export const setAssesmentCompletedBy = (AssesmentCompletedBy) => {
  return (dispatch) => {
    dispatch({
      type: SET_ASSESMENTCOMPLETEDBY,
      payload: AssesmentCompletedBy,
    });
  };
};

export const setPositionTwo = (PositionTwo) => {
  return (dispatch) => {
    dispatch({
      type: SET_POSITIONTWO,
      payload: PositionTwo,
    });
  };
};

export const setCompanyRepresentative = (CompanyRepresentative) => {
  return (dispatch) => {
    dispatch({
      type: SET_COMPANYREPRESENTATIVE,
      payload: CompanyRepresentative,
    });
  };
};

export const setPositionThree = (PositionThree) => {
  return (dispatch) => {
    dispatch({
      type: SET_POSITIONTHREE,
      payload: PositionThree,
    });
  };
};

export const setSafetyPersonnel = (SafetyPersonnel) => {
  return (dispatch) => {
    dispatch({
      type: SET_SAFETYPERSONNEL,
      payload: SafetyPersonnel,
    });
  };
};

export const setPositionFour = (PositionFour) => {
  return (dispatch) => {
    dispatch({
      type: SET_POSITIONFOUR,
      payload: PositionFour,
    });
  };
};

export const setOther = (Other) => {
  return (dispatch) => {
    dispatch({
      type: SET_OTHER,
      payload: Other,
    });
  };
};

export const setPositionFive = (PositionFive) => {
  return (dispatch) => {
    dispatch({
      type: SET_POSITIONFIVE,
      payload: PositionFive,
    });
  };
};

export const setOtherInformation = (OtherInformation) => {
  return (dispatch) => {
    dispatch({
      type: SET_OTHERINFORMATION,
      payload: OtherInformation,
    });
  };
};
