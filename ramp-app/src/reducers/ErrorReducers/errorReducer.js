import {
    SET_CHECKLIST_BY_ID_ERROR,
    SET_CHECKLIST_SAVE_ERROR,
} from "../../actionTypes/riskAreaTypes/checklistTypes";

import {
    SET_CHECKLIST_BY_ID_ERROR_AP,
    SET_CHECKLIST_SAVE_ERROR_AP,
} from "../../actionTypes/actionPlanTypes/actionPlanTypes";

import {
    SET_LOGIN_ERROR,
    SET_SIGNUP_ERROR,
} from "../../actionTypes/userTypes/userTypes";

SET_LOGIN_ERROR
SET_SIGNUP_ERROR

const initialState = {
    error_name: false,
    error_save: undefined,
    error_name_ap: false,
    error_save_ap: undefined,
    error_login: undefined,
    error_signup: undefined,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CHECKLIST_BY_ID_ERROR:
            state.error_name = action.payload;
            return {
                ...state,
            };

        case SET_CHECKLIST_SAVE_ERROR:
            state.error_save = action.payload;
            return {
                ...state,
            };

        case SET_CHECKLIST_BY_ID_ERROR_AP:
            console.log(action.payload)
            state.error_name_ap = action.payload;
            return {
                ...state,
            };

        case SET_CHECKLIST_SAVE_ERROR_AP:
            state.error_save_ap = action.payload;
            return {
                ...state,
            };

        case SET_LOGIN_ERROR:
            state.error_login = action.payload;
            return {
                ...state,
            };

        case SET_SIGNUP_ERROR:
            state.error_signup = action.payload;
            return {
                ...state,
            };

        default:
            return state;
    }
};