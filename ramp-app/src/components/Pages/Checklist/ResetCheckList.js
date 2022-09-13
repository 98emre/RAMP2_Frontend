export const resetInputData = (props) => {
  const inputData = {
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
  };

  return props.setInputData(inputData);
};

export const resetPosture = (props) => {
  const NONE = "none";

  const posture = {
    q11: NONE,
    q11_Comm: "",
    q12: NONE,
    q12_Comm: "",
    q13: NONE,
    q13_Comm: "",
    q14: NONE,
    q14_Comm: "",
    q15a: NONE,
    q15b: NONE,
    q15_Comm: "",
    q16a: NONE,
    q16b: NONE,
    q16_Comm: "",
    q17a: NONE,
    q17b: NONE,
    q17_Comm: "",
    q18: NONE,
    q18_Comm: "",
  };

  return props.setPosture(posture);
};

export const resetRepetitiveWork = (props) => {
  const NONE = "none";

  const repetitiveWork = {
    q21a: NONE,
    q21b: NONE,
    q21_Comm: "",
    q22a: NONE,
    q22b: NONE,
    q22_Comm: "",
    q23a: NONE,
    q23b: NONE,
    q23_Comm: "",
    q24: NONE,
    q24_Comm: "",
    q25: NONE,
    q25_Comm: "",
  };

  return props.setRepetitiveWork(repetitiveWork);
};

export const resetLiftingWork = (props) => {
  const NONE = "none";

  const liftingWork = {
    q30: NONE,
    q31a: "",
    q31b: "",
    q31_averageComm: "",
    q31_worstComm: "",
    q32a: "",
    q32b: "",
    q33a: "",
    q33b: "",
    q34a: "",
    q34b: "",
    q35a: "",
    q35b: "",
    q36a: "",
    q36b: "",
    q37a: "",
    q37b: "",
  };

  return props.setLiftingWork(liftingWork);
};

export const resetPushingAndPulling = (props) => {
  const NONE = "none";

  const pushingAndPulling = {
    q40: NONE,
    q41a: "",
    q41b: "",
    q41c: "",
    q41d: "",
    q41_averageComm: "",
    q41_worstComm: "",
    q42a: "",
    q42b: "",
    q42c: "",
    q42d: "",
    q43a: "",
    q43b: "",
    q43c: "",
    q43d: "",
    q44a: "",
    q44b: "",
    q44c: "",
    q44d: "",
    q45a: "",
    q45b: "",
    q45c: "",
    q45d: "",
    q46a: "",
    q46b: "",
    q46c: "",
    q46d: "",
    q47a: "",
    q47b: "",
    q47c: "",
    q47d: "",
    q48a: "",
    q48b: "",
    q48c: "",
    q48d: "",
    q49a: "",
    q49b: "",
    q49c: "",
    q49d: "",
  };

  return props.setPushingAndPulling(pushingAndPulling);
};

export const resetInfluecningFactors = (props) => {
  const NONE = "none";

  const influencingFactors = {
    q51a: NONE,
    q51a_Comm: "",
    q51b: NONE,
    q51b_Comm: "",
    q51c: NONE,
    q51c_Comm: "",
    q51d: NONE,
    q51d_Comm: "",
    q51e: NONE,
    q51e_Comm: "",
    q51f: NONE,
    q51f_Comm: "",
    q52a: NONE,
    q52a_Comm: "",
    q52b: NONE,
    q52b_Comm: "",
    q52c: NONE,
    q52c_Comm: "",
    q52d: NONE,
    q52d_Comm: "",
    q52e: NONE,
    q52e_Comm: "",
    q52f: NONE,
    q52f_Comm: "",
    q52g: NONE,
    q52g_Comm: "",
    q52h: NONE,
    q52h_Comm: "",
    q53a: NONE,
    q53a_Comm: "",
    q53b: NONE,
    q53b_Comm: "",
    q53c: NONE,
    q53c_Comm: "",
    q53d: NONE,
    q53d_Comm: "",
  };

  return props.setInfluencingFactor(influencingFactors);
};

export const resetPhysicallyStrenuousWork = (props) => {
  const NONE = "none";

  const physicallyStrenuousWork = {
    q61: NONE,
    q61_Comm: "",
    q62a: 0,
    q62a_Comm: "",
    q62b: 0,
    q62b_Comm: "",
    q62c: 0,
    q62c_Comm: "",
    q62d: 0,
    q62d_Comm: "",
    q62e: 0,
    q62e_Comm: "",
  };

  return props.setPhysicallyStrenuousWork(physicallyStrenuousWork);
};

export const resetPhysicalDiscomfort = (props) => {
  const NONE = "none";

  const physicalDiscomfort = {
    q71: NONE,
    q71_Comm: "",
    q72a: "",
    q72a_Comm: "",
    q72b: "",
    q72b_Comm: "",
    q72c: "",
    q72c_Comm: "",
    q72d: "",
    q72d_Comm: "",
    q72e: "",
    q72e_Comm: "",
  };

  return props.setPhysicalDiscomfort(physicalDiscomfort);
};

export const resetOtherComment = (props) => {
  const otherComment = {
    text: "",
  };

  return props.setOtherComment(otherComment);
};

export default (
  resetInputData,
  resetPosture,
  resetRepetitiveWork,
  resetLiftingWork,
  resetPushingAndPulling,
  resetInfluecningFactors,
  resetPhysicallyStrenuousWork,
  resetPhysicalDiscomfort,
  resetOtherComment
);
