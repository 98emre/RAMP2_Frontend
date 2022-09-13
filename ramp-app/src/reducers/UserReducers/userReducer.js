import {
  SET_USERNAME,
  SET_PASSWORD,
  SET_USER,
  GET_CREDENTIALS,
} from "../../actionTypes/userTypes/userTypes";

const initialState = {
  user: {
    id: null,
    username: "",
    password: "",
  },
  token: "",
  roles: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      state.user.username = action.payload;
      return { ...state };

    case SET_PASSWORD:
      state.user.password = action.payload;
      return { ...state };

    case SET_USER:
      return { ...state };

    case GET_CREDENTIALS:
      state.token = action.payload.token;
      state.roles = action.payload.roles;
      state.user.id = action.payload.id;
      return { ...state };

    default:
      return state;
  }
};
