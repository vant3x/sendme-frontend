import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';

import { 
    SIGNUP_SUCCESS, 
    SIGNUP_ERROR, 
    REMOVE_ALERTS,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    USER_AUTHENTICATE,
    LOGOUT
} from '../../types';    

import axiosClient from './../../config/axios';
import authToken from './../../config/authToken';

const AuthState = ({children}) => {

    const initialState = {
        token:  typeof window !== 'undefined' ? localStorage.getItem('token') : '',
        auth: null,
        user: null,
        message: null
    }

    // definir reducer
    const [ state, dispatch ] = useReducer(authReducer, initialState);

    // registrar nuevos usuarios
    const signup = async values => {
       try {
            const response = await axiosClient.post('/api/users', values);
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: response.data.message
            });

       } catch (error) {
        
           dispatch({
            type: SIGNUP_ERROR,
            payload: error.response.data.message
        })
           
       }
        // limpia la alerta 
        setTimeout(()=> {
            dispatch({
                type: REMOVE_ALERTS
            });
        }, 4000);
    }

    // autenticar usuarios
    const login = async values => {
        try {
            const response = await axiosClient.post('/api/auth', values);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR ,
                payload: error.response.data.message
            })
        }
         // limpia la alerta 
         setTimeout(()=> {
            dispatch({
                type: REMOVE_ALERTS
            });
        }, 4000);
    }

    // Retorne el usuario autenticado en base al JWT
    const userAuthtenticate = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            authToken(token);
        }

        try {
            const response = await axiosClient.get('/api/auth');
            if (response.data.user) {
                dispatch({
                    type: USER_AUTHENTICATE,
                    payload: response.data.user
                })
            }
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR ,
                payload: error.response.data.message
            })
        }
    }

    // cerrar la sesion
    const logout = () => {
        dispatch({
            type: LOGOUT
        })
    }

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
                logout
             }}
        >
            {children}
        </authContext.Provider>
    );
} 

export default AuthState;