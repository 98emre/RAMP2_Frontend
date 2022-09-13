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

const initialState = {
  inputData: {
    date: "",
    workTask: "",
    assessmentOf: "",
    station: "",
    department: "",
    site: "",
    country: "",
    assessmentOrderBy: "",
    assessmentOrderByPosition: "",
    assessmentCompletedBy: "",
    assessmentCompletedByPosition: "",
    companyRepresentatitve: "",
    companyRepresentatitvePosition: "",
    safetyWork: "",
    safetyWorkPosition: "",
    other: "",
    otherPosition: "",
    otherInformation: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUTDATA:
      state.inputData = action.payload;
      return {
        ...state,
      };
    case SET_ID:
      state.inputData.id = action.payload;
      return {
        ...state,
      };
    case SET_DATE:
      state.inputData.date = action.payload;
      return {
        ...state,
      };
    case SET_WORK:
      state.inputData.workTask = action.payload;
      return {
        ...state,
      };
    case SET_ASSESMENTOF:
      state.inputData.assessmentOf = action.payload;
      return {
        ...state,
      };
    case SET_WORKSTATION:
      state.inputData.station = action.payload;
      return {
        ...state,
      };
    case SET_DEPARTMENT:
      state.inputData.department = action.payload;
      return {
        ...state,
      };
    case SET_SITE:
      state.inputData.site = action.payload;
      return {
        ...state,
      };
    case SET_COUNTRY:
      state.inputData.country = action.payload;
      return {
        ...state,
      };
    case SET_ASSESMENTORDEREDBY:
      state.inputData.assessmentOrderBy = action.payload;
      return {
        ...state,
      };
    case SET_POSITIONONE:
      state.inputData.assessmentOrderByPosition = action.payload;
      return {
        ...state,
      };
    case SET_ASSESMENTCOMPLETEDBY:
      state.inputData.assessmentCompletedBy = action.payload;
      return {
        ...state,
      };
    case SET_POSITIONTWO:
      state.inputData.assessmentCompletedByPosition = action.payload;
      return {
        ...state,
      };
    case SET_COMPANYREPRESENTATIVE:
      state.inputData.companyRepresentatitve = action.payload;
      return {
        ...state,
      };
    case SET_POSITIONTHREE:
      state.inputData.companyRepresentatitvePosition = action.payload;
      return {
        ...state,
      };
    case SET_SAFETYPERSONNEL:
      state.inputData.safetyWork = action.payload;
      return {
        ...state,
      };
    case SET_POSITIONFOUR:
      state.inputData.safetyWorkPosition = action.payload;
      return {
        ...state,
      };
    case SET_OTHER:
      state.inputData.other = action.payload;
      return {
        ...state,
      };
    case SET_POSITIONFIVE:
      state.inputData.otherPosition = action.payload;
      return {
        ...state,
      };
    case SET_OTHERINFORMATION:
      state.inputData.otherInformation = action.payload;
      return {
        ...state,
      };
    default:
      return state;
  }
};
