import React, { useReducer } from 'react';
import appContext  from './appContext';
import appReducer from './appReducer';

import {
    SHOW_ALERTS,
     REMOVE_ALERTS,
     UPLOAD_FILE,
     UPLOAD_FILE_SUCCESS,
     UPLOAD_FILE_ERROR,
     NEW_LINK_SUCCESS,
     NEW_LINK_ERROR,
     RESET_STATE,
     SET_PASSWORD,
     SET_FOLDER,
     SET_DOWNLOADS,
     SET_FOLDER_MODAL
} from '../../types';
import axiosClient from '../../config/axios';

const AppState = ({children}) => {

    const initialState = {
        fileMessage:null,
        fileName: '',
        original_name: '',
        loading: null,
        downloads: 10,
        password: '',
        folder:null,
        author: null,
        url:'',
        folderModal: false
    }

    // crear dispatch y state
    const [state, dispatch] = useReducer(appReducer, initialState);

    // muestra alerta
    const showAlert = msg => {
        dispatch({
            type: SHOW_ALERTS,
            payload: msg
        });

        setTimeout(() => {
            dispatch({
                type: REMOVE_ALERTS
            })
        }, 5000);
    }

    //subir los archivos al servidor
    const uploadFile =  async (formData, fileName) => {

        dispatch({
            type: UPLOAD_FILE,
        })

        try {
            const response = await axiosClient.post('/api/files', formData);
            dispatch({
                type: UPLOAD_FILE_SUCCESS,
                payload: {
                    fileName:response.data.file,
                    original_name: fileName,
                }
            })
        } catch (error) {
            dispatch({
                type: UPLOAD_FILE_ERROR,
                payload: error.response.data.message
            })
        }
    }

    const newLink = async () => {
       const data = {
           fileName: state.fileName,
           original_name: state.original_name,
           download_limit: state.downloads,
           password: state.password,
           folder: state.folder,
           author: state.author
       }

       try {
         const response = await axiosClient.post('/api/links', data);
         dispatch({
             type: NEW_LINK_SUCCESS,
             payload: response.data.message
         })
       } catch (error) {

       }
    }

    const resetState = () => {
       dispatch({
           type: RESET_STATE
       })
    }

    //  Agregue el password
    const setPassword = password => {
        dispatch({
            type: SET_PASSWORD,
            payload: password
        })
    }


    //  Agregue el folder
    const setFolder = folder => {
        dispatch({
            type: SET_FOLDER,
            payload: folder
        })
    }

    // ocultar o motrar modal folder
    const setFolderModal = folderModal => {
        dispatch({
            type: SET_FOLDER_MODAL,
            payload: folderModal
        })
    }


    // agregar un numero de descargas
    const setDownloads = downloads => {
        dispatch({
            type: SET_DOWNLOADS,
            payload: downloads
        })
    }


    return (
        <appContext.Provider
            value={{
                fileMessage: state.fileMessage,
                fileName: state.fileName,
                original_name: state.original_name,
                loading: state.loading,
                downloads: state.downloads,
                password: state.password,
                folder: state.folder,
                author: state.author,
                url: state.url,
                folderModal: state.folderModal,
                showAlert,
                uploadFile,
                newLink,
                resetState,
                setPassword,
                setFolder,
                setFolderModal,
                setDownloads
            }}
        >
            {children}
        </appContext.Provider>
    );  
}

export default AppState;