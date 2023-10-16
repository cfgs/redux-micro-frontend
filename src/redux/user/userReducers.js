import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_NEW
} from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: ""
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ""
      };

    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      };

    case FETCH_USERS_NEW:
      return {
        loading: false,
        users: [],
        error: "New error"
      };

    default:
      return state;
  }
};

export default reducer;
