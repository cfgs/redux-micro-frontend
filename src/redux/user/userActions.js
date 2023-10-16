import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_NEW
} from "./userTypes";

const api = "./api.json";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  };
};

export const fetchusers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get(api)
      .then((response) => {
        const users = response.data;
        //const errorMsg = "Newwwwwwwwwwwwwwww";
        dispatch(fetchUsersSuccess(users));
        //dispatch(fetchNew(errorMsg));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};

export const fetchNew = (error) => {
  return {
    type: FETCH_USERS_NEW,
    payload: error
  };
};
