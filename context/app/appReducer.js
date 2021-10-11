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
     SET_DOWNLOADS
} from '../../types';


const appReducer =  ( state, action) => {
    switch(action.type) {
        case SHOW_ALERTS:
            return {
                ...state,
                fileMessage: action.payload
            }
        case REMOVE_ALERTS:
            return {
                ...state,
                fileMessage: null
            }
        case UPLOAD_FILE:
            return {
                ...state,
                loading: true
            }
        case UPLOAD_FILE_SUCCESS:
            return {
                ...state,
                fileName: action.payload.fileName,
                original_name: action.payload.original_name,
                loading: false
            }
        case UPLOAD_FILE_ERROR: 
            return {
                ...state,
                fileMessage: action.payload,
                loading: false
            }
        case NEW_LINK_SUCCESS:
            return {
                ...state,
                url: action.payload
            }
        case RESET_STATE:
            return {
                ...state,
                fileMessage:null,
                fileName: '',
                original_name: '',
                loading: null,
                downloads: 10,
                password: '',
                folder:null,
                author: null,
                url:''
            }
        case SET_PASSWORD: 
            return {
                ...state,
                password: action.payload
            }
        case SET_FOLDER: 
            return {
                ...state,
                folder: action.payload
            }
        case SET_DOWNLOADS:
            return {
                ...state,
                downloads: action.payload
            }
        default: 
           return state
    }
}

export default appReducer;