import React, { useReducer, useState } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  REMOVE_ALERTS,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  USER_AUTHENTICATE,
  USER_OAUTH,
  LOGOUT,
} from "../../types";

import axiosClient from "./../../config/axios";
import authToken from "./../../config/authToken";

const AuthState = ({ children }) => {
  const initialState = {
    token: typeof window !== "undefined" ? localStorage.getItem("token") : "",
    auth: null,
    user: null,
    message: null,
  };

  // definir reducer
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [oautUser, setOauthUser] = useState();

  // registrar nuevos usuarios
  const signup = async (values) => {
    try {
      const response = await axiosClient.post("/api/users", values);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response.data.message,
      });
    } catch (error) {
      dispatch({
        type: SIGNUP_ERROR,
        payload: error.response.data.message,
      });
    }
    // limpia la alerta
    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERTS,
      });
    }, 4000);
  };

  // autenticar usuarios
  const login = async (values) => {
    try {
      const response = await axiosClient.post("/api/auth", values);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.message,
      });
    }
    // limpia la alerta
    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERTS,
      });
    }, 4000);
  };

  // Retorne el usuario autenticado en base al JWT
  const userAuthtenticate = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      authToken(token);
    }

    try {
      const response = await axiosClient.get("/api/auth");
      if (response.data.user) {
        dispatch({
          type: USER_AUTHENTICATE,
          payload: response.data.user,
        });
      }
    } catch (error) {
        console.log(error);
      dispatch({
        type: LOGIN_ERROR,
        payload: {
          message: error.response?.data.message
        },
      });
    }
  };

  // redes sociales auth
  const userOauth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      authToken(token);
    }
    try {
      if (!token) {
        await axiosClient.get("/api/auth/social-user", {
          withCredentials: true
            }).then((res) => {
          console.log(res);
          setOauthUser(res.data);
          console.log(res.data)
          if (res.data) {
              dispatch({
                type: USER_OAUTH,
                payload: res.data,
              });
            }
  
            console.log(res);
        });
      }


    } catch (error) {
     /* dispatch({
        type: LOGIN_ERROR,
        payload: {
          message: error.response
        },
      });*/
      console.log(error);
    }
  };

  // cerrar la sesion
  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        auth: state.auth,
        user: state.user,
        message: state.message,
        signup,
        login,
        userAuthtenticate,
        userOauth,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
