import React, { useReducer, useState } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import Router from 'next/router'

import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  REMOVE_ALERTS,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SESSION_ERROR,
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
    errorSession: null
  };

  // definir reducer
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [oautUser, setOauthUser] = useState();
  const [errorState, setErrorState] = useState();

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
      const response = await axiosClient.get("/api/auth").then((res) => {
        if (res.data.user) {
          dispatch({
            type: USER_AUTHENTICATE,
            payload: res.data.user,
          });
        }
      //  return res;
      }).catch((err) => {
      setErrorState(err.response.data);
      throw err;
     
      //return err
     
      });
    } catch (error) {
 
       /* dispatch({
          type: LOGIN_ERROR,
          payload: {
           // message: error.response?.data.message 
            message: error?.response.data.message,
          },
        });*/
        dispatch({
          type: SESSION_ERROR,
          payload: error?.response.data
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
          withCredentials: false
            }).then((res) => {
          setOauthUser(res.data);
          if (res.data) {
            
              dispatch({
                type: USER_OAUTH,
                payload: res.data,
              });
              window.close();
              Router.reload(window.location.pathname);
              window.opener.location.reload();
            }
  
        });
      }
      

    } catch (error) {
     dispatch({
        type: LOGIN_ERROR,
        payload: {
          message: error.response
        },
      });
 
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
        errorSession: state.errorSession,
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
