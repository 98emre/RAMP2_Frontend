import axios from "axios";

import { GET_ALL_CHECKLIST, } from "../../actionTypes/findAllTypes/findAllCheckListTypes";

export const GetAllCheckList = (token, id) => async (dispatch) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    try {
        const response = await axios.get(`http://localhost:8081/api/checklist/user/${id}`, config);

        console.log(response.data),
            dispatch({
                type: GET_ALL_CHECKLIST,
                payload: response.data,
            });

        return;
    } catch (error) {
        if (error.response != undefined) {
            console.log(error.response);
        }
    }
};