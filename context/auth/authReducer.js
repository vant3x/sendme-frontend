import { USER_AUTHENTICATE } from "../../types";
import { USER_OAUTH } from "../../types";
import { SIGNUP_SUCCESS } from "../../types";
import { SIGNUP_ERROR } from "../../types";
import { REMOVE_ALERTS } from "../../types";
import { LOGIN_SUCCESS } from "../../types";
import { LOGIN_ERROR } from "../../types";
import { SESSION_ERROR } from "../../types";
import { LOGOUT } from "../../types";

const authReducer = (state, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case SIGNUP_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        message: action.payload,
      };
    case SESSION_ERROR: 
      return {
        ...state, 
        errorSession: action.payload
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
        auth: true,
      };
    case USER_AUTHENTICATE:      
      return {
        ...state,
        user: action.payload,
        auth: true,
      };
    case USER_OAUTH:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        user: action.payload,
        auth: true,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: null,
        auth: false,
      };
    case REMOVE_ALERTS:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};

export default authReducer;